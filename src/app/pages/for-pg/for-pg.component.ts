import { Component } from '@angular/core';

// type with id, name, and description
interface Item {
  id: number;
  name: string;
  description: string;
}
@Component({
  selector: 'app-for-pg',
  standalone: true,
  imports: [],
  templateUrl: './for-pg.component.html',
  styleUrl: './for-pg.component.scss',
})
export class ForPgComponent {
  arrayOfItems: Item[] = [
    {
      id: 1,
      name: 'Item 1',
      description: 'This is the first item',
    },
    {
      id: 2,
      name: 'Item 2',
      description: 'This is the second item',
    },
    {
      id: 3,
      name: 'Item 3',
      description: 'This is the third item',
    },
    {
      id: 4,
      name: 'Item 4',
      description: 'This is the fourth item',
    },
    {
      id: 5,
      name: 'Item 5',
      description: 'This is the fifth item',
    },
  ];
}
