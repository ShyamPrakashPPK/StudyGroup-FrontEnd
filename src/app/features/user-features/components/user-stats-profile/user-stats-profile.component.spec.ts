import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStatsProfileComponent } from './user-stats-profile.component';

describe('UserStatsProfileComponent', () => {
  let component: UserStatsProfileComponent;
  let fixture: ComponentFixture<UserStatsProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserStatsProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserStatsProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
