import { LightPowerCommand } from './command/light-power-command';
import { SmartHouseApp } from './command/smart-house-app';
import { SmartHouseLight } from './command/smart-house-light';

// Receiver
const bedroomLight = new SmartHouseLight('Luz Quarto');

// Command
const lightPowerCommand = new LightPowerCommand(bedroomLight);
lightPowerCommand.execute();
lightPowerCommand.undo();

//Controle - Invoker
const smartHouseApp = new SmartHouseApp();
smartHouseApp.addCommand('btn1', lightPowerCommand);
