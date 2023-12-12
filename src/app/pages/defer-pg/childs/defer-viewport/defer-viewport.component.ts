import { Component } from '@angular/core';
import { LargeComponent } from '../../large/large.component';
import { LoadingSpinnerComponent } from '../../loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-defer-viewport',
  standalone: true,
  imports: [LargeComponent, LoadingSpinnerComponent],
  templateUrl: './defer-viewport.component.html',
  styleUrl: './defer-viewport.component.scss',
})
export class DeferViewportComponent {}
