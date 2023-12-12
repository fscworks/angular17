import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferErrorComponent } from './defer-error.component';

describe('DeferErrorComponent', () => {
  let component: DeferErrorComponent;
  let fixture: ComponentFixture<DeferErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferErrorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeferErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
