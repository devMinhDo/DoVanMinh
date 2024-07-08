import { PaymentProcessor } from '../interface/PaymentProcessor';
import { PayPal } from './PayPal';

class PayPalAdapter implements PaymentProcessor {
    private paypal: PayPal;

    constructor(paypal: PayPal) {
        this.paypal = paypal;
    }

    processPayment(amount: number): void {
        this.paypal.sendPayment(amount);
    }
}

export { PayPalAdapter }