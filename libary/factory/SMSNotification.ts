import { Notification } from './interface/Notification';

class SMSNotification implements Notification {
    send(message: string): void {
        console.log(`Sending SMS notification: ${message}`);
    }
}

export {SMSNotification}