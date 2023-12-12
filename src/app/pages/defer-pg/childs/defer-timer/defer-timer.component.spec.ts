import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferTimerComponent } from './defer-timer.component';

describe('DeferTimerComponent', () => {
  let component: DeferTimerComponent;
  let fixture: ComponentFixture<DeferTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferTimerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeferTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
