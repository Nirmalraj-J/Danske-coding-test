import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, Subject, BehaviorSubject, ReplaySubject } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  public dataServiceUrl = '/assets/data.json'

  public subject = new ReplaySubject(1);

  constructor(private http: HttpClient) {
    this.getRecords().subscribe(data => {
      this.subject.next(data)
    });
  }

  getRecords() {
    return this.http.get(this.dataServiceUrl).pipe(
      tap(_ => console.log('fetched all records'),
        catchError(this.handleError)
      )
    )
  }

  handleError(err: HttpErrorResponse) {
    return 'err while fetching data'
  }

}
