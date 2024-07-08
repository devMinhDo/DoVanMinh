function sumToNUsingRecursion(n: number): number {
    if (n === 1) {
        return 1;
    } else {
        return n + sumToNUsingRecursion(n - 1);
    }
}
export { sumToNUsingRecursion }