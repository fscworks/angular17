import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsPgComponent } from './signals-pg.component';

describe('SignalsPgComponent', () => {
  let component: SignalsPgComponent;
  let fixture: ComponentFixture<SignalsPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsPgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalsPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
