interface PaymentProcessor {
    processPayment(amount: number): void;
}

export {
    PaymentProcessor
}