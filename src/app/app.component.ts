import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  // Prevent users to enter space as a first character on input field
  @HostListener('window:keydown', ['$event'])
  spaceEvent(event: any) {
    if ((event.which === 32 || event.which === 13) &&  event.target.selectionStart === 0) {
      return false;
    }
  }

  constructor() {}

  ngOnInit() {}
}
