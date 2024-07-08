import { Notification } from './interface/Notification';

class EmailNotification implements Notification {
    send(message: string): void {
        console.log(`Sending email notification: ${message}`);
    }
}

export {EmailNotification}