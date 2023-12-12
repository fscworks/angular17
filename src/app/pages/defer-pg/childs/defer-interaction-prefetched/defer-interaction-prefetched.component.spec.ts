import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferInteractionPrefetchedComponent } from './defer-interaction-prefetched.component';

describe('DeferInteractionPrefetchedComponent', () => {
  let component: DeferInteractionPrefetchedComponent;
  let fixture: ComponentFixture<DeferInteractionPrefetchedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferInteractionPrefetchedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeferInteractionPrefetchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
