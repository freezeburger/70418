import { Component, inject, OnInit } from '@angular/core';
import { MessageService } from './core/services/message.service';
import { NotificationService } from './core/services/notification.service';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  messageService = inject(MessageService);
  notificationService = inject(NotificationService);
  userService = inject(UserService);

  userName = '';

  ngOnInit(): void {
    this.userService.read();
  }


}
