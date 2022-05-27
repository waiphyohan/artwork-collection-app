import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { IArtWork } from '../../interfaces/iart-work';

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getArtWork(page: number): Observable<any> {
    const params = new HttpParams().set('page', page);
    return this.httpClient.get(environment.url, {params})
  }
}
