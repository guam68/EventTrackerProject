import { Injectable } from '@angular/core';
import { HttpClient } from '@Angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Catch } from '../models/catch';

@Injectable({
  providedIn: 'root'
})
export class CatchService {
  url = 'http://localhost:8085/api/catches/';

  constructor(private http: HttpClient) { }

  index() {
    return this.http.get<Catch[]>(this.url)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('Failed to get list of catches');
        })
      );
  }

  getCatchById(id: number) {
    return this.http.get<Catch>(this.url + id)
      .pipe(
        catchError((err: any) => {
          console.error(err);
          return throwError('Catch get by id failed');
        })
      );
  }

  createCatch(cat: Catch) {
    return this.http.post<Catch>(this.url, cat )
      .pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError('Catch creation failed');
      })
    );
  }

  updateCatch(cat: Catch) {
    return this.http.put<Catch>(this.url + cat .id,  cat )
        .pipe(
          catchError((err: any) => {
          console.error(err);
          return throwError('Catch update failed');
      })
    );
  }

  deleteCatch(id: number) {
    return this.http.delete(this.url + id)
      .pipe(
        catchError((err: any) => {
          console.error(err);
          return throwError('Catch delete failed');
        })
      );
  }

}
