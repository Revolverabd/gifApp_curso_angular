import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  constructor(private gifsService: GifsService) { }

  search(termino: string) {
    this.gifsService.searchGif(termino)
  }

  get history() {
    return this.gifsService.getHistory()
  }

}
