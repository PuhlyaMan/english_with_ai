import { CounterStore } from "@/src/stores/CounterStore";

export class RootStore {
  readonly counterStore: CounterStore;

  constructor() {
    this.counterStore = new CounterStore();
  }
}
