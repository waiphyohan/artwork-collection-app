import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, finalize, map  } from 'rxjs/operators';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";

import { ArtworkService } from 'src/app/core/services/artwork/artwork.service';
import { IData } from 'src/app/core/interfaces/iart-work';
import { IDropdownOption } from 'src/app/core/interfaces/idropdown-option';

@Component({
  selector: 'app-artwork-list',
  templateUrl: './artwork-list.component.html',
  styleUrls: ['./artwork-list.component.css']
})
export class ArtworkListComponent implements OnInit {

  loading = false;
  errorMsg?: string;
  artworks$?: Observable<IData[]>;
  iiifUrl: string = '';
  filterAndSortArtWorks$?:  Observable<IData[]>;

  count: number = 1;
  page: number = 1;
  perPage: number = 12;

  sortOptions: IDropdownOption[] = [
    {key: '', value: 'Recommendation'}, 
    {key: 'title', value: 'Name'}, 
    {key: 'artist_title', value: 'Artist'}, 
    {key: 'date_start', value: 'Date'}
  ]

  artForm: FormGroup = new FormGroup({
    filterControl: new FormControl(),
    sortControl: new FormControl()
  });
  
  
  constructor(
    private formBuilder: FormBuilder,
    private artWorkService: ArtworkService
  ) { }

  ngOnInit(): void {

    this.artForm = this.formBuilder.group({
      filterControl: ['Name', [Validators.required]],
      sortControl: ['Recommendation']
    });

    this.getArtWorks();
  }  

  getArtWorks() {
    this.loading = true;

    console.log('getArtWorks')

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
                      );

    this.filterAndSortArtWorks$ = this.artworks$.pipe(
      map(data => {    
        const option = this.getSortOptionKey()  
        return this.sortArr(data, option.key);
      })
    );    
  }   

  sortArr(data: any, sortKey?: string): IData[] {
    if (!sortKey) {
      return data;
    }

    if (sortKey === 'date_start') {      
      return [...data].sort((a, b) => {
        return a[sortKey] - b[sortKey]
      });
    } else {
      // put `null` values at the end of the array
      return [...data].sort((a, b) => {

        if (!a[sortKey] ) {
          return +1;
        }

        if (!b[sortKey]) {
          return -1;
        }

        return a[sortKey].localeCompare(b[sortKey])

      })
    }
  }

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

  getSortOptionKey() {
    return this.sortOptions.filter(option => option.value == this.artForm.value.sortControl)[0];
  }

  onChangeSortOptions() {
    const option = this.getSortOptionKey()  
    
    this.filterAndSortArtWorks$ = this.artworks$?.pipe(
      map(data => {        
        return this.sortArr(data, option.key);
      })
    );
  }

}
