import { Component, computed, effect, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signals-pg',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signals-pg.component.html',
  styleUrl: './signals-pg.component.scss',
})
export class SignalsPgComponent {
  form = new FormGroup({
    counterInput: new FormControl<number>(0, {
      validators: [],
      nonNullable: true,
    }),
  });

  counter = signal(0);
  computedCounter = computed(() => this.counter() * 2);

  effectLines: string[] = [];

  constructor() {
    effect(() => {
      this.form.controls.counterInput.setValue(this.counter());
      this.logEffectLine(`counter is now ${this.counter()}`);
    });
  }

  increment() {
    this.counter.update((c) => c + 1);
  }

  setCounter(value?: number) {
    if (!value) {
      return;
    }
    this.counter.set(value);
  }

  logEffectLine(line: string) {
    this.effectLines.push(line);
  }
}
