import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandalonePipeComponent } from './standalone-pipe.component';

describe('StandalonePipeComponent', () => {
  let component: StandalonePipeComponent;
  let fixture: ComponentFixture<StandalonePipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandalonePipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StandalonePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
