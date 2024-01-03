import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSignIpComponent } from './user-sign-ip.component';

describe('UserSignIpComponent', () => {
  let component: UserSignIpComponent;
  let fixture: ComponentFixture<UserSignIpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserSignIpComponent]
    });
    fixture = TestBed.createComponent(UserSignIpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
