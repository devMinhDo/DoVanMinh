import { Command } from "./interface/Command.interface";

class RemoteControl {
    private onCommand: Command;
    private offCommand: Command;

    setOnCommand(onCommand: Command): void {
        this.onCommand = onCommand;
    }

    setOffCommand(offCommand: Command): void {
        this.offCommand = offCommand;
    }

    pressOn(): void {
        this.onCommand.execute();
    }

    pressOff(): void {
        this.offCommand.execute();
    }
}

export { RemoteControl }