import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferPgComponent } from './defer-pg.component';

describe('DeferPgComponent', () => {
  let component: DeferPgComponent;
  let fixture: ComponentFixture<DeferPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferPgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeferPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
