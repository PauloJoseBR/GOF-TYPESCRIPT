import { Radio } from './device/radio';
import { Tv } from './device/tv';
import { RemoteControl } from './remote-control/remote-control';
import { RemoteControlWithVolume } from './remote-control/remote-control-with-volume';

function clientcode(
  abstraction: RemoteControl | RemoteControlWithVolume,
): void {
  abstraction.togglePower();

  if (!('volumeUp' in abstraction)) return;

  abstraction.volumeUp(); // 20
  abstraction.volumeUp(); // 30
  abstraction.volumeDown(); // 30
}

const radio = new Radio();
const radioRemoteControlWithVolume = new RemoteControlWithVolume(radio);
clientcode(radioRemoteControlWithVolume);

const tv = new Tv();
const radioRemoteControl = new RemoteControl(tv);
clientcode(radioRemoteControl);
