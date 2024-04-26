import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigFireComponent } from './big-fire.component';

describe('BigFireComponent', () => {
  let component: BigFireComponent;
  let fixture: ComponentFixture<BigFireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigFireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BigFireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
