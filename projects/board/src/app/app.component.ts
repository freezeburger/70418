import { Component, inject } from '@angular/core';
import { MessageService } from './core/services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  messageService = inject(MessageService)
}
