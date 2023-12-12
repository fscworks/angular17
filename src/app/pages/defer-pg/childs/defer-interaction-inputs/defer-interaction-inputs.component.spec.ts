import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferInteractionInputsComponent } from './defer-interaction-inputs.component';

describe('DeferInteractionInputsComponent', () => {
  let component: DeferInteractionInputsComponent;
  let fixture: ComponentFixture<DeferInteractionInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferInteractionInputsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeferInteractionInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
