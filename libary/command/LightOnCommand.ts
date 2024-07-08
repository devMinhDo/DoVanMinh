import { Command } from './interface/Command.interface';
import { Light } from './Light';

class LightOnCommand implements Command {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute(): void {
        this.light.on();
    }
}


export { LightOnCommand }