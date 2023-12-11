import { Component } from '@angular/core';
import { LargeComponent } from './large/large.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-defer-pg',
  standalone: true,
  imports: [LargeComponent, LoadingSpinnerComponent],
  templateUrl: './defer-pg.component.html',
  styleUrl: './defer-pg.component.scss',
})
export class DeferPgComponent {}
