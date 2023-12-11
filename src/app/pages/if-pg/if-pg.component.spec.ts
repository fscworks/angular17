import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfPgComponent } from './if-pg.component';

describe('IfPgComponent', () => {
  let component: IfPgComponent;
  let fixture: ComponentFixture<IfPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfPgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IfPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
