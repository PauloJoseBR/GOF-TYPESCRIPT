interface Observable {
  subscribe(...observer: Observer[]): void;
  unsubscribe(observe: Observer): void;
  notify(): void;
}

interface Observer {
  update(...args: unknown[]): void;
}

class InputObservable implements Observable {
  private observers: Observer[] = [];

  constructor(public input: HTMLInputElement) {}

  subscribe(...observers: Observer[]): void {
    observers.forEach((observer) => {
      if (!this.observers.includes(observer)) {
        this.observers.push(observer);
      }
    });
  }

  unsubscribe(observe: Observer): void {
    const observerIndex = this.observers.indexOf(observe);

    if (observerIndex !== -1) {
      this.observers.splice(observerIndex, 1);
    }
  }

  notify(): void {
    this.observers.forEach((observer) => observer.update(this));
  }
}

class ParagraphObserver implements Observer {
  constructor(public element: HTMLParagraphElement) {}
  update(observable: Observable): void {
    if (observable instanceof InputObservable) {
      this.element.innerText = observable.input.value;
    }
  }
}

function makeInput(): HTMLInputElement {
  const input = document.createElement('input');
  document.body.appendChild(input);
  return input;
}

function makeParagraph(): HTMLParagraphElement {
  const p = document.createElement('p');
  document.body.appendChild(p);
  p.innerText = 'Text Beginning';
  return p;
}

const input = new InputObservable(makeInput());
const p1 = new ParagraphObserver(makeParagraph());
const p2 = new ParagraphObserver(makeParagraph());
input.subscribe(p1, p2);

input.input.addEventListener('keyup', function () {
  input.notify();
});
