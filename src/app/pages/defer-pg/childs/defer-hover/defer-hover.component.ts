import { Component } from '@angular/core';
import { LargeComponent } from '../../large/large.component';
import { LoadingSpinnerComponent } from '../../loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-defer-hover',
  standalone: true,
  imports: [LargeComponent, LoadingSpinnerComponent],
  templateUrl: './defer-hover.component.html',
  styleUrl: './defer-hover.component.scss',
})
export class DeferHoverComponent {}
