import { Inject, Injectable, InjectionToken } from '@angular/core';

export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
  providedIn: 'root',
  factory: () => localStorage,
});

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(@Inject(BROWSER_STORAGE) public storage: Storage) {}

  setItem(key: string, value: object) {
    this.storage.setItem(key, JSON.stringify(value));
  }

  getItem<T>(key: string): T | null {
    const value = this.storage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return null;
  }
}
