import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferInteractionComponent } from './defer-interaction.component';

describe('DeferInteractionComponent', () => {
  let component: DeferInteractionComponent;
  let fixture: ComponentFixture<DeferInteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferInteractionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeferInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
