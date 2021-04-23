import { AggregateService } from './@core/utilities';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Starter-Kit';

  constructor(private a:AggregateService){
    var result = this.a.max([null,5,25,1,30,null,45,null])
    console.log(result);
  }
}
