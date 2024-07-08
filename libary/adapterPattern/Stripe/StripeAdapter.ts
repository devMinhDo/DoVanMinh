import { PaymentProcessor } from '../interface/PaymentProcessor';
import { Stripe } from './Stripe';

class StripeAdapter implements PaymentProcessor {
    private stripe: Stripe;

    constructor(stripe: Stripe) {
        this.stripe = stripe;
    }

    processPayment(amount: number): void {
        this.stripe.makePayment(amount);
    }
}

export { StripeAdapter }