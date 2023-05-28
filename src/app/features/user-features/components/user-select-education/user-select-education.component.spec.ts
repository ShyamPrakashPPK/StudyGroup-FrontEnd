import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSelectEducationComponent } from './user-select-education.component';

describe('UserSelectEducationComponent', () => {
  let component: UserSelectEducationComponent;
  let fixture: ComponentFixture<UserSelectEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSelectEducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSelectEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
