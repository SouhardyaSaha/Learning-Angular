import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  error = new Subject<string>()

  constructor(private http: HttpClient) { }


  createAndSavePost(postData: Post) {
    this.http
      .post(
        'https://angular-http-testing-51873.firebaseio.com/posts.json',
        postData,
        {
          observe: 'response' // gets access to the full response with headers status code etc.
        }
      )
      .subscribe(responseData => {
        console.log(responseData.body);
      }, error => {
        this.error.next(error.message)
      });
  }

  fetchPosts() {
    // let searchParams = new HttpParams()
    // searchParams = searchParams.append('orderBy', 'price')
    // searchParams = searchParams.append('sortBy', 'asc')
    return this.http
      .get<{ [key: string]: Post }>(
        'https://angular-http-testing-51873.firebaseio.com/posts.json',
        {
          // headers: new HttpHeaders({
          //   'custom-key': 'new'
          // }),
          // params: new HttpParams().set('print', 'pretty'),
          // params: searchParams

          headers: {
            'customkey': 'From PostsService'
          },
          params: {
            print: 'pretty',
            okay: 'wo'
          },
          observe: 'body', // ex: 'response', 'events', 'body'(default)
          responseType: 'json' // default
        }
      )
      .pipe(
        map(responseData => {
          const posts: Post[] = []
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              const element: Post = responseData[key];
              posts.push({
                ...element,
                id: key
              })
            }
          }

          return posts
        }),
        catchError(err => {
          // maybe some analytical work
          // console.log(err);
          return throwError(err) // throwError gives back an observable which is necessary
        })
      );

    // just returning the obervable...request will only run when subscription is run, this subcription is run from components
    // .subscribe(
    //   (posts) => {
    //     this.allPosts = posts
    //   }
    // )

  }

  deletePosts() {
    return this.http
      .delete(
        'https://angular-http-testing-51873.firebaseio.com/posts.json',
        {
          observe: 'events'
        }
      )
      .pipe(
        tap(event => { // tap is used to just tap into the data
          switch (event.type) {
            case HttpEventType.Sent:
              console.log('data sent to the server');
              break;
            case HttpEventType.Response:
              console.log(event.body);
              break;
            default:
              break;
          }
          console.log(event);

        })
      )
  }
}
