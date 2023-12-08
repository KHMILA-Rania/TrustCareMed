// chat.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private messagesSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  messages$: Observable<string[]> = this.messagesSubject.asObservable();

  sendMessage(message: string): void {
    const currentMessages = this.messagesSubject.value;
    this.messagesSubject.next([...currentMessages, message]);
  }
}
