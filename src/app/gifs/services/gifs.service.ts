import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearshGIFResponse, Gif } from '../interfaces/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'ciyvYVl0dgjLWM4rSN1f9GvwAZQ4Xakq'
  private url: string = 'https://api.giphy.com/v1/gifs'
  private _history: string[] = []
  public results: Gif[] = []

  constructor(private http: HttpClient) {
    this._history = JSON.parse(localStorage.getItem('history')!) || []
    this.results = JSON.parse(localStorage.getItem('results')!) || []
  }

  getHistory() {
    return [...this._history]
  }

  searchGif(query: string = '') {

    query = query.trim().toLowerCase()
    if (!this._history.includes(query)) {
      this._history.unshift(query)
      this._history = this._history.splice(0, 10)

      localStorage.setItem('history', JSON.stringify(this._history))
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query)

    this.http.get<SearshGIFResponse>(`${this.url}/search`, { params })
      .subscribe((resp: any) => {
        console.log(resp.data)
        this.results = resp.data
        localStorage.setItem('results', JSON.stringify(this.results))
      })
  }

}
