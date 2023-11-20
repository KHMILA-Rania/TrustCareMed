// chat-doctor.component.ts
import { Component } from '@angular/core';
import { ChatService } from 'src/app/chat.service';

@Component({
  selector: 'app-chat-doctor',
  templateUrl: './chatdoctor.component.html',
  styleUrls: ['./chatdoctor.component.css']
})
export class ChatdoctorComponent {
  message: string = '';
  public chatService: ChatService; // Changez 'private' à 'public'

  constructor(chatService: ChatService) {
    this.chatService = chatService;
  }

  sendMessage(): void {
    if (this.message.trim() !== '') {
      this.chatService.sendMessage(`Doctor: ${this.message}`);
      this.message = '';
    }
  }
}


