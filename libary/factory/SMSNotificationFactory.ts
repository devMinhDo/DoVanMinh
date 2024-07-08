import { NotificationFactory } from './NotificationFactory';
import { Notification } from './interface/Notification';
import { SMSNotification } from './SMSNotification';

class SMSNotificationFactory extends NotificationFactory {
    createNotification(): Notification {
        return new SMSNotification();
    }
}

export { SMSNotificationFactory}