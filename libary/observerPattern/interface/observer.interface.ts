interface Observer {
    update(temperature: number, humidity: number, pressure: number): void;
}

export { Observer }