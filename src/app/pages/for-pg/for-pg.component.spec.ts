import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForPgComponent } from './for-pg.component';

describe('ForPgComponent', () => {
  let component: ForPgComponent;
  let fixture: ComponentFixture<ForPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForPgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
