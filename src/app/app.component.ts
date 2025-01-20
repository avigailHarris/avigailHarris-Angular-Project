import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'my-app';

  pulseObservable: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  changeToEnglish() {
    this.pulseObservable.next(true); 
  }

  changeToHebrew() {
    this.pulseObservable.next(false); 
  }

  timeCalculation() {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    if (currentHour > 5 && currentHour < 12)
      return "Good morning :)";
    if (currentHour > 11 && currentHour < 18)
      return "Good afternoon :)";
    else
      return "Good evening :)";
  }
}
