import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileJobsComponent } from './profile-jobs.component';

describe('ProfileJobsComponent', () => {
  let component: ProfileJobsComponent;
  let fixture: ComponentFixture<ProfileJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
