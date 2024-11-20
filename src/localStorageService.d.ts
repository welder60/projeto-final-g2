// src/services/localStorageService.d.ts
export declare function saveToLocalStorage<T>(key: string, value: T): void;
export declare function getFromLocalStorage<T>(key: string): T | null;
export declare function removeFromLocalStorage(key: string): void;
