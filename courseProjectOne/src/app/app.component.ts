import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'courseProjectOne';

  showContent: string = 'recipe'
  onClickEvent(feature: string) {
    this.showContent = feature
  }
}
