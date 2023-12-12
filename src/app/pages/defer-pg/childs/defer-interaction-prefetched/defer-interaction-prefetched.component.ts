import { Component } from '@angular/core';
import { LargeComponent } from '../../large/large.component';
import { LoadingSpinnerComponent } from '../../loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-defer-interaction-prefetched',
  standalone: true,
  imports: [LargeComponent, LoadingSpinnerComponent],
  templateUrl: './defer-interaction-prefetched.component.html',
  styleUrl: './defer-interaction-prefetched.component.scss',
})
export class DeferInteractionPrefetchedComponent {}
