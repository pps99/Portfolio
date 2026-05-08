import { Component, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatbotService, ChatMessage } from '../services/chatbot.service';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent implements AfterViewChecked {
  @ViewChild('messageList') messageList!: ElementRef;

  isOpen = false;
  userInput = '';
  isLoading = false;
  messages: ChatMessage[] = [
    {
      role: 'assistant',
      content: "Hi! I'm Pyae Phyo Shan's digital twin. Ask me anything about my experience, skills, or projects!"
    }
  ];

  constructor(private chatbotService: ChatbotService) {}

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  toggleChat(): void {
    this.isOpen = !this.isOpen;
  }

  sendMessage(): void {
    const text = this.userInput.trim();
    if (!text || this.isLoading) return;

    this.messages.push({ role: 'user', content: text });
    this.userInput = '';
    this.isLoading = true;

    this.chatbotService.sendMessage(this.messages).subscribe({
      next: (res) => {
        const reply = res.choices?.[0]?.message?.content ?? 'Sorry, I could not get a response.';
        this.messages.push({ role: 'assistant', content: reply });
        this.isLoading = false;
      },
      error: () => {
        this.messages.push({ role: 'assistant', content: 'Something went wrong. Please try again.' });
        this.isLoading = false;
      }
    });
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  private scrollToBottom(): void {
    try {
      this.messageList.nativeElement.scrollTop = this.messageList.nativeElement.scrollHeight;
    } catch {}
  }
}
