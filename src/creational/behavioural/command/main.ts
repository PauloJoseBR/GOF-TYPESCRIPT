import { LightPowerCommand } from './light-power-command';
import { SmartHouseApp } from './smart-house-app';
import { SmartHouseLight } from './smart-house-light';

// Receiver
const bedroomLight = new SmartHouseLight('Luz Quarto');
const bathroomLight = new SmartHouseLight('Luz Banheiro');

// Command
const bedroomLightPowerCommand = new LightPowerCommand(bedroomLight);
const bathroomLightPowerCommand = new LightPowerCommand(bathroomLight);

//Controle - Invoker
const smartHouseApp = new SmartHouseApp();
smartHouseApp.addCommand('btn1', bedroomLightPowerCommand);
smartHouseApp.addCommand('btn2', bathroomLightPowerCommand);

smartHouseApp.executeCommand('btn1');
smartHouseApp.undoCommand('btn1');

smartHouseApp.executeCommand('btn2');
smartHouseApp.undoCommand('btn2');
