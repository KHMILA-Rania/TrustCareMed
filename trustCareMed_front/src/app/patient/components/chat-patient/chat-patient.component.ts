// chat-patient.component.ts
import { Component } from '@angular/core';
import { ChatService } from 'src/app/chat.service';

@Component({
  selector: 'app-chat-patient',
  templateUrl: './chat-patient.component.html',
  styleUrls: ['./chat-patient.component.css']
})
export class ChatPatientComponent {
  message: string = '';
  public chatService: ChatService; // Changez 'private' à 'public'

  constructor(chatService: ChatService) {
    this.chatService = chatService;
  }

  sendMessage(): void {
    if (this.message.trim() !== '') {
      this.chatService.sendMessage(`Patient: ${this.message}`);
      this.message = '';
    }
  }
}
