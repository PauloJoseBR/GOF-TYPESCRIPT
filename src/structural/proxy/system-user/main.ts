import { SystemUserProxy } from './system-user-proxy';

const user = new SystemUserProxy('Luiz', 'luizOtavio');

async function clientCode(): Promise<void> {
  const user = new SystemUserProxy('Luiz', 'luizOtávio');
  console.log('Isso vai levar 2 segundos');
  console.log(await user.getAddresses());
  console.log('Isso vai se repetir');

  for (let i = 0; i < 5; i++) {
    console.log(await user.getAddresses());
  }
}

clientCode();
