import { Notification } from './interface/Notification';


class PushNotification implements Notification {
    send(message: string): void {
        console.log(`Sending push notification: ${message}`);
    }
}

export {PushNotification}