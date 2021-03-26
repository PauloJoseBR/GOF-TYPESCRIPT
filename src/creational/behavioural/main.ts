import { LightPowerCommand } from './command/light-power-command';
import { SmartHouseLight } from './command/smart-house-light';

const bedroomLight = new SmartHouseLight('Luz Quarto');
const lightPowerCommand = new LightPowerCommand(bedroomLight);
lightPowerCommand.execute();
lightPowerCommand.undo();
