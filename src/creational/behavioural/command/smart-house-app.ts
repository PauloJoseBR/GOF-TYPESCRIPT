import { SmartHouseCommand } from './command';

export class SmartHouseAPp {
  private commands: { [k: string]: SmartHouseCommand } = {};

  addCommand(key: string, command: SmartHouseCommand): void {
    this.commands[key] = command;
  }

  executeCommand(key: string): void {
    this.commands[key].execute();
  }

  undoCommand(key: string): void {
    this.commands[key].execute();
  }

}
