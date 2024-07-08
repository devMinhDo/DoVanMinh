import { Notification } from './interface/Notification';


abstract class NotificationFactory {
    abstract createNotification(): Notification;

    sendNotification(message: string): void {
        const notification = this.createNotification();
        notification.send(message);
    }
}

export {NotificationFactory}