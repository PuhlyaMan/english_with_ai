import { makeAutoObservable } from "mobx";
import { GrammarStore } from "@/features/grammar/stores/GrammarStore";

export class RootStore {
  grammarStore: GrammarStore;

  constructor() {
    this.grammarStore = new GrammarStore();
    makeAutoObservable(this);
  }
}
