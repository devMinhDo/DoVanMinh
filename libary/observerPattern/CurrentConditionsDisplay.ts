import { Observer } from "./interface";

class CurrentConditionsDisplay implements Observer {
    private temperature: number = 0;
    private humidity: number = 0;

    update(temperature: number, humidity: number, pressure: number): void {
        this.temperature = temperature;
        this.humidity = humidity;
        this.display();
    }

    display(): void {
        console.log(`Current conditions: ${this.temperature}°C and ${this.humidity}% humidity`);
    }
}

export { CurrentConditionsDisplay }