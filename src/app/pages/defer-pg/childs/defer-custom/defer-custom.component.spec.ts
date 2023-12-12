import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferCustomComponent } from './defer-custom.component';

describe('DeferCustomComponent', () => {
  let component: DeferCustomComponent;
  let fixture: ComponentFixture<DeferCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferCustomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeferCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
