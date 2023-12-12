import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CapitalisePipe } from './capitalise.pipe';

@Component({
  selector: 'app-standalone-pipe',
  standalone: true,
  imports: [ReactiveFormsModule, CapitalisePipe],
  templateUrl: './standalone-pipe.component.html',
  styleUrl: './standalone-pipe.component.scss',
})
export class StandalonePipeComponent {
  form = new FormGroup({
    customerName: new FormControl('', {
      validators: [],
      nonNullable: true,
    }),
  });
}
