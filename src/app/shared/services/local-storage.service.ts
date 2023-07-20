import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  constructor() {}

  public get(key: string): any {
    try {
      const variable = localStorage.getItem(key);

      if (typeof variable !== "string") return null;

      return JSON.parse(variable);
    } catch (error) {
      console.error("Error getting data from localStorage", error);
      return null;
    }
  }

  public set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error("Error saving to localStorage", error);
    }
  }
}
