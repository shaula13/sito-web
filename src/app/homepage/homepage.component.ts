import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BaseComponent} from '../BaseComponent';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent extends BaseComponent implements OnInit {

  constructor(route: ActivatedRoute, private router: Router) {
    super(route, router);
  }

  async ngOnInit() { }

}
