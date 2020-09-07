import { Component, OnInit } from '@angular/core';

import { Post } from "./post.model";
import { PostsService } from './posts.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = false
  error = null

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.onFetchPosts()
    this.postsService.error.subscribe(
      (errorMessage) => {
        this.error = errorMessage
      }
    )
    // this.loadedPosts = this.postsService.fetchPosts()
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postsService.createAndSavePost(postData)
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true
    this.postsService.fetchPosts().subscribe(
      posts => {
        this.loadedPosts = posts
        this.isFetching = false
      }, error => {
        this.error = error.message
        this.isFetching = false
      }
    )
  }

  onClearPosts() {
    // Send Http request
    this.postsService.deletePosts().subscribe(
      () => this.loadedPosts = []
    )
  }

  dismissError() {
    this.error = null
  }

}
