import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproavedRequastComponent } from './approaved-requast.component';

describe('ApproavedRequastComponent', () => {
  let component: ApproavedRequastComponent;
  let fixture: ComponentFixture<ApproavedRequastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproavedRequastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproavedRequastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
