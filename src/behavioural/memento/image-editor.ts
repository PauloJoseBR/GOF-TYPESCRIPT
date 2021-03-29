//Originator

import { ConcreteMemento } from './concrete-memento';
import { Memento } from './memento';

export class ImageEditor {
  constructor(private filePath: string, private fileFormat: string) {}

  convertFormatTo(format: string): void {
    this.fileFormat = format;
    this.filePath = this.filePath.split('.').slice(0, -1).join('');
    this.filePath += '.' + format;
  }

  save(): Readonly<Memento> {
    const date = new Date();
    return new ConcreteMemento(
      date.toISOString(),
      date,
      this.filePath,
      this.fileFormat,
    );
  }
}

const img = new ImageEditor('/media/imagem.png', 'png');
img.convertFormatTo('jpg');
console.log(img);
