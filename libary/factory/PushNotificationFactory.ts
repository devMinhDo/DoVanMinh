import { NotificationFactory } from './NotificationFactory';
import { Notification } from './interface/Notification';
import { PushNotification } from './PushNotification';

class PushNotificationFactory extends NotificationFactory {
    createNotification(): Notification {
        return new PushNotification();
    }
}

export { PushNotificationFactory }