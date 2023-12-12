import { Component } from '@angular/core';
import { LargeComponent } from '../../large/large.component';
import { LoadingSpinnerComponent } from '../../loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-defer-idle',
  standalone: true,
  imports: [LargeComponent, LoadingSpinnerComponent],
  templateUrl: './defer-idle.component.html',
  styleUrl: './defer-idle.component.scss',
})
export class DeferIdleComponent {}
