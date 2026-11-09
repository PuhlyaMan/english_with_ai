import { makeAutoObservable } from "mobx";

export class CounterStore {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment(): void {
    this.count += 1;
  }
}
