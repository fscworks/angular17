import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferHoverComponent } from './defer-hover.component';

describe('DeferHoverComponent', () => {
  let component: DeferHoverComponent;
  let fixture: ComponentFixture<DeferHoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferHoverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeferHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
