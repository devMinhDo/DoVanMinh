import { Observer } from './interface';

class ForecastDisplay implements Observer {
    private pressure: number = 0;

    update(temperature: number, humidity: number, pressure: number): void {
        this.pressure = pressure;
        this.display();
    }

    display(): void {
        console.log(`Forecast: Pressure is ${this.pressure} hPa`);
    }
}

export { ForecastDisplay }