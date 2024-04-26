import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LPGComponent } from './lpg.component';

describe('LPGComponent', () => {
  let component: LPGComponent;
  let fixture: ComponentFixture<LPGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LPGComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LPGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
