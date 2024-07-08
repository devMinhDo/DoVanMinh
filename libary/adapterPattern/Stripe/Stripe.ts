class Stripe {
    makePayment(amount: number): void {
        console.log(`Paying ${amount} using Stripe`);
    }
}

export { Stripe }