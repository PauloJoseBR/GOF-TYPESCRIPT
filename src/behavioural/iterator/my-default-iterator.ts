import { MyIteratorProtocol } from './my-iterator-protocol';

export class MyDefaultIterator implements MyIteratorProtocol<string> {
  reset(): void {}
  next(): IteratorResult<string> {
    return { value: '', done: true };
  }
}
