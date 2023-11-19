import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatPatientComponent } from './chat-patient.component';

describe('ChatPatientComponent', () => {
  let component: ChatPatientComponent;
  let fixture: ComponentFixture<ChatPatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatPatientComponent]
    });
    fixture = TestBed.createComponent(ChatPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
