import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _history: string[] = []

  constructor() { }

  getHistory() {
    return [...this._history]
  }

  searchGif(query: string) {
    this._history.unshift(query)
    console.log(this._history)
  }

}
