import { Directive, ElementRef, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[pulse]'
})
export class PulseDirective implements OnChanges {
  @Input() pulse: Observable<boolean> | undefined;  // מקבל את ה-Observable

  private subscription: Subscription | undefined;

  @HostBinding('class.ltr') isLtr = false;
  @HostBinding('class.rtl') isRtl = false;

  // הוספת שינוי צבע הרקע
  @HostBinding('style.backgroundColor') backgroundColor: string = ''; 

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['pulse'] && this.pulse) {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }

      this.subscription = this.pulse.subscribe((isRtl: boolean) => {
        if (isRtl) {
          this.isLtr = false;
          this.isRtl = true;
          this.backgroundColor = 'red'; 
        } else {
          this.isLtr = true;
          this.isRtl = false;
          this.backgroundColor = 'green'; 
        }
      });
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
