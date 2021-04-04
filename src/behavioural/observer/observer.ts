interface Observable {
  subscribe(...observer: Observer[]): void;
  unsubscribe(observe: Observer): void;
  notify(): void;
}

interface Observer {
  update(...args: unknown[]): void;
}
