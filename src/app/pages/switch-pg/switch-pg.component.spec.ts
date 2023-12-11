import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchPgComponent } from './switch-pg.component';

describe('SwitchPgComponent', () => {
  let component: SwitchPgComponent;
  let fixture: ComponentFixture<SwitchPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchPgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwitchPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
