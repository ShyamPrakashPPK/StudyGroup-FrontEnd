import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSoloRoomComponent } from './user-solo-room.component';

describe('UserSoloRoomComponent', () => {
  let component: UserSoloRoomComponent;
  let fixture: ComponentFixture<UserSoloRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSoloRoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSoloRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
