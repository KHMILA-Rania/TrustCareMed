import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatdoctorComponent } from './chatdoctor.component';

describe('ChatdoctorComponent', () => {
  let component: ChatdoctorComponent;
  let fixture: ComponentFixture<ChatdoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatdoctorComponent]
    });
    fixture = TestBed.createComponent(ChatdoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
