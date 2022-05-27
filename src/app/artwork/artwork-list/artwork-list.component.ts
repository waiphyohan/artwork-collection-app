import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject  } from 'rxjs';
import { catchError, finalize, map, filter, withLatestFrom, flatMap  } from 'rxjs/operators';

import { ArtworkService } from 'src/app/core/services/artwork/artwork.service';
import { IArtWork } from 'src/app/core/interfaces/iart-work';

@Component({
  selector: 'app-artwork-list',
  templateUrl: './artwork-list.component.html',
  styleUrls: ['./artwork-list.component.css']
})
export class ArtworkListComponent implements OnInit {

  loading = false;
  artworks$?: Observable<IArtWork>;
  filterAndSortArtWorks$?: Observable<IArtWork>;

  count: number = 1;
  page: number = 1;
  perPage: number = 12;

  prevPage() {
    this.page--;
    this.getArtWorks();
  }

  nextPage() {
    this.page++;
    this.getArtWorks();
  }

  goToPage(n: number) {
    this.page = n;
    this.getArtWorks();
  }

  constructor(
    private artWorkService: ArtworkService
  ) { }

  ngOnInit(): void {
    this.getArtWorks();
  }

  getArtWorks() {
    this.artworks$ = this.artWorkService.getArtWork(this.page);
    // this.filterAndSortArtWorks$ = this.artworks$;

    // this.artworks$.pipe(map(data => {
    //   console.log(data.pagination)
    //   this.count = data.pagination.total_pages;
    //   this.page = data.pagination.current_page;
    //   this.perPage = data.pagination.limit;
    // })).subscribe();

    // this.artworks$.subscribe(data => {
    //   this.count = data.pagination.total_pages;
    //   this.page = data.pagination.current_page;
    //   this.perPage = data.pagination.limit;
    // })
  }

}
