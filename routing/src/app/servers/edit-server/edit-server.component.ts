import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  allowedEdit: boolean = false
  changesSaved = false

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // const id: number = +this.route.snapshot.params['id'] // '+' -> string to int
    // this.server = this.serversService.getServer(id);
    this.route.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(+params['id'])
      }
    )
    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.allowedEdit = queryParams['isAllowed'] === '1' ? true : false
      }
    )
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
    this.changesSaved = true
    this.router.navigate(['../'], { relativeTo: this.route })
  }


  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if(!this.allowedEdit) {
      return true
    }

    if((this.server.name !== this.serverName || this.server.status !== this.serverStatus) && !this.changesSaved) {
      return confirm('Do you want to discard the changes?')
    } else {
      return true
    }
  }

}
