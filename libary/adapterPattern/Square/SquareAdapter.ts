import { PaymentProcessor } from "../interface/PaymentProcessor";
import { Square } from "./Square";

class SquareAdapter implements PaymentProcessor {
    private square: Square;

    constructor(square: Square) {
        this.square = square;
    }

    processPayment(amount: number): void {
        this.square.processTransaction(amount);
    }
}
export { SquareAdapter }