import { Component } from '@angular/core';
import { LargeComponent } from '../../large/large.component';
import { LoadingSpinnerComponent } from '../../loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-defer-interaction-inputs',
  standalone: true,
  imports: [LargeComponent, LoadingSpinnerComponent],
  templateUrl: './defer-interaction-inputs.component.html',
  styleUrl: './defer-interaction-inputs.component.scss',
})
export class DeferInteractionInputsComponent {}
