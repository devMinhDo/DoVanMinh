import { NotificationFactory } from './NotificationFactory';
import { Notification } from './interface/Notification';
import { EmailNotification } from './EmailNotification';

class EmailNotificationFactory extends NotificationFactory {
    createNotification(): Notification {
        return new EmailNotification();
    }
}

export { EmailNotificationFactory }