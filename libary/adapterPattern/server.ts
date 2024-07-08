import { PayPal } from './payPal/PayPal'
import { PayPalAdapter } from './payPal/PayPalAdapter';
import { Stripe } from './Stripe/Stripe';
import { StripeAdapter } from './Stripe/StripeAdapter';
import { Square } from './Square/Square';
import { SquareAdapter } from './Square/SquareAdapter';

class paymentProcessor {
    private instantPaymentAdapter: PayPalAdapter | StripeAdapter | SquareAdapter;
    private instant: PayPal | Stripe | Square;

    constructor(instant: PayPal | Stripe | Square) {
        this.instant = instant;
    }
    payment( amount: number) {
        if (this.instant instanceof PayPal) {
            this.instantPaymentAdapter = new PayPalAdapter(this.instant);
        } else if (this.instant instanceof Stripe) {
            this.instantPaymentAdapter = new StripeAdapter(this.instant);
        } else if (this.instant instanceof Square) {
            this.instantPaymentAdapter = new SquareAdapter(this.instant);
        }
        this.instantPaymentAdapter.processPayment(amount);
    }
}

export { paymentProcessor, PayPal, Stripe, Square }