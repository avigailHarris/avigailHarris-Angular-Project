import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'my-app';

  timeCalculation(){
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    if(currentHour>5 && currentHour<12)
      return "Good morning:)"
    if(currentHour>11 && currentHour<18)
      return "Good afternoon:)"
    else
      return "Good evening:)"
  }
}
