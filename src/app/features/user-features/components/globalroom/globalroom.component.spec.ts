import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalroomComponent } from './globalroom.component';

describe('GlobalroomComponent', () => {
  let component: GlobalroomComponent;
  let fixture: ComponentFixture<GlobalroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalroomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
