import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>

  constructor(private giftsService: GifsService) { }

  search() {
    const value = this.txtSearch.nativeElement.value
    this.giftsService.searchGif(value)
    this.txtSearch.nativeElement.value = ''
  }

}


