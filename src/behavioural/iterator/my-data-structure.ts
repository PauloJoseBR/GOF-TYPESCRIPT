export class MyDataStructure {
  private _items: string[] = [];

  addItem(items: string[]): void {
    items.forEach((item) => this.items.push(item));
  }

  get items(): string[] {
    return this.items;
  }

  size(): number {
    return this._items.length;
  }
}
