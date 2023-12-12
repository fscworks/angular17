import { Component, effect, signal } from '@angular/core';
import { LargeComponent } from '../../large/large.component';
import { LoadingSpinnerComponent } from '../../loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-defer-timer',
  standalone: true,
  imports: [LargeComponent, LoadingSpinnerComponent],
  templateUrl: './defer-timer.component.html',
  styleUrl: './defer-timer.component.scss',
})
export class DeferTimerComponent {
  $timer = signal(0);

  intervalTimer;
  constructor() {
    this.intervalTimer = setInterval(() => {
      this.$timer.update((v) => v + 1);
    }, 1000);

    effect(() => {
      if (this.$timer() === 10) clearInterval(this.intervalTimer);
    });
  }
}
