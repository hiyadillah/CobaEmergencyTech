import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AparComponent } from './apar.component';

describe('AparComponent', () => {
  let component: AparComponent;
  let fixture: ComponentFixture<AparComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AparComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AparComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
