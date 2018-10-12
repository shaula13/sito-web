import {ActivatedRoute, Router} from '@angular/router';
import {ProjectConstants} from './project-constants';

export class BaseComponent extends ProjectConstants {
  baseRouter: Router;

  constructor(route: ActivatedRoute, router: Router) {
    super();
    this.baseRouter = router;
  }

}
