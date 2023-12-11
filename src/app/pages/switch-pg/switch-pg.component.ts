import { Component } from '@angular/core';

const colorsEnum = {
  red: 'red',
  green: 'green',
  blue: 'blue',
};
@Component({
  selector: 'app-switch-pg',
  standalone: true,
  imports: [],
  templateUrl: './switch-pg.component.html',
  styleUrl: './switch-pg.component.scss',
})
export class SwitchPgComponent {
  color = colorsEnum.red;
  protected readonly colorsEnum = colorsEnum;
}
