import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject  } from 'rxjs';
import { catchError, finalize, map, filter, withLatestFrom, flatMap  } from 'rxjs/operators';

import { ArtworkService } from 'src/app/core/services/artwork/artwork.service';
import { IArtWork, IData } from 'src/app/core/interfaces/iart-work';

@Component({
  selector: 'app-artwork-list',
  templateUrl: './artwork-list.component.html',
  styleUrls: ['./artwork-list.component.css']
})
export class ArtworkListComponent implements OnInit {

  loading = false;
  errorMsg?: string;
  artworks$?: Observable<IData[]>;
  iiifUrl: string = "";
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
    this.loading = true;

    this.artworks$ = this.artWorkService.getArtWork(this.page)
                      .pipe(   
                        map(response => {

                          this.iiifUrl = response.config.iiif_url

                          this.count = response.pagination.total_pages;
                          this.page = response.pagination.current_page;
                          this.perPage = response.pagination.limit;

                          return response.data;
                        }),
                        catchError(error => {
                          this.errorMsg = error.message;
                          return of([]);
                        }),
                        finalize(()=>this.loading=false)
                      )
  }

}
