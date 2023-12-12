import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LargeComponent } from '../../large/large.component';
import { LoadingSpinnerComponent } from '../../loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-defer-custom',
  standalone: true,
  imports: [ReactiveFormsModule, LargeComponent, LoadingSpinnerComponent],
  templateUrl: './defer-custom.component.html',
  styleUrl: './defer-custom.component.scss',
})
export class DeferCustomComponent {
  performPrefetch = false;
  performDisplay = false;

  form = new FormGroup({
    triggerInput: new FormControl('', {
      validators: [],
      nonNullable: true,
    }),
  });

  constructor() {
    this.form.get('triggerInput')?.valueChanges.subscribe((value) => {
      this.performPrefetch = value === 'prefetch';
      this.performDisplay = value === 'display';
    });
  }
}
