import { LightIntensityCommand } from './light-intensity-command';
import { LightPowerCommand } from './light-power-command';
import { SmartHouseApp } from './smart-house-app';
import { SmartHouseLight } from './smart-house-light';

// Receiver
const bedroomLight = new SmartHouseLight('Luz Quarto');
const bathroomLight = new SmartHouseLight('Luz Banheiro');

// Command
const bedroomLightPowerCommand = new LightPowerCommand(bedroomLight);
const bathroomLightPowerCommand = new LightPowerCommand(bathroomLight);
const bedroomIntensityPowerCommand = new LightIntensityCommand(bedroomLight);

//Controle - Invoker
const smartHouseApp = new SmartHouseApp();
smartHouseApp.addCommand('btn1', bedroomLightPowerCommand);
smartHouseApp.addCommand('btn2', bathroomLightPowerCommand);
smartHouseApp.addCommand('btn3', bedroomIntensityPowerCommand);

smartHouseApp.executeCommand('btn1');
smartHouseApp.undoCommand('btn1');

smartHouseApp.executeCommand('btn2');
smartHouseApp.undoCommand('btn2');

for (let i = 0; i < 200; i++) {
  smartHouseApp.executeCommand('btn3');
}
