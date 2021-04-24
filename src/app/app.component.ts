import { OrderByService } from './@core/utilities/order-by.service';
import { AggregateService } from './@core/utilities';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Starter-Kit';

  constructor(private a:AggregateService, private b:OrderByService){
    //var result = this.a.max([null,5,25,1,30,null,45,null])
    var result = this.b.OrderBy([
      {USER:"bob",  SCORE:2000, TIME:32,    AGE:16, COUNTRY:"US"},
      {USER:"jane", SCORE:4000, TIME:35,    AGE:16, COUNTRY:"DE"},
      {USER:"tim",  SCORE:1000, TIME:30,    AGE:17, COUNTRY:"UK"},
      {USER:"mary", SCORE:1500, TIME:31,    AGE:19, COUNTRY:"PL"},
      {USER:"joe",  SCORE:2500, TIME:33,    AGE:18, COUNTRY:"US"},
      {USER:"sally",    SCORE:2000, TIME:30,    AGE:16, COUNTRY:"CA"},
      {USER:"yuri", SCORE:3000, TIME:34,    AGE:19, COUNTRY:"RU"},
      {USER:"anita",    SCORE:2500, TIME:32,    AGE:17, COUNTRY:"LV"},
      {USER:"mark", SCORE:2000, TIME:30,    AGE:18, COUNTRY:"DE"},
      {USER:"amy",  SCORE:1500, TIME:29,    AGE:19, COUNTRY:"UK"}
    ], {
      SCORE:"asc",TIME:"asc", AGE:"asc"
    })
    console.log(result);
  }
}
