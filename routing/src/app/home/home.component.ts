import { Component, OnInit } from '@angular/core';
import { Router, Routes, ActivatedRoute } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private currentRoute: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
  }

  loadServer(id: number) {
    this.router.navigate(
      ['/servers', id, 'edit'],
      {
        relativeTo: this.currentRoute,
        queryParams: { isAllowed: 1 },
        fragment: 'loading'
      }
    )
  }

  login() {
    this.authService.login()
  }

  logout() {
    this.authService.logout()
  }

}
