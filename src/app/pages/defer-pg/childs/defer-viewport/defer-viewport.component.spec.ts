import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferViewportComponent } from './defer-viewport.component';

describe('DeferViewportComponent', () => {
  let component: DeferViewportComponent;
  let fixture: ComponentFixture<DeferViewportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferViewportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeferViewportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
