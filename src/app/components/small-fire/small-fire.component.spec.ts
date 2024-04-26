import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallFireComponent } from './small-fire.component';

describe('SmallFireComponent', () => {
  let component: SmallFireComponent;
  let fixture: ComponentFixture<SmallFireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallFireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmallFireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
