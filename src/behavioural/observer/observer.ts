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
