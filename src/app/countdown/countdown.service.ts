import { Injectable } from "@angular/core";
import { CountdownFormValue } from "../models";

const KEY = 'COUNTDOWN_SETTINGS';

@Injectable()
export class CountdownService {
  private readonly storage = localStorage;

  persist(formValue: CountdownFormValue) {
    this.storage.setItem(KEY, JSON.stringify({ start: '', duration: formValue.duration }));
  }
}