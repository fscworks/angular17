import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferIdleComponent } from './defer-idle.component';

describe('DeferIdleComponent', () => {
  let component: DeferIdleComponent;
  let fixture: ComponentFixture<DeferIdleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferIdleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeferIdleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
