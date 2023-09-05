import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs'
import { throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  beSubject = new BehaviorSubject([]);
  detailsSubject = new BehaviorSubject({});
  
  @Output() aClickedEvent = new EventEmitter<string>();

// Token Authentication and recieving backend data
  authPAT(token: any) : Observable <any>{
    return this.http.get('https://api.github.com/repositories', {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    }).pipe(
      catchError(this.handleError)
    )
  }
// Getting selected repo details
  getDetails(url: any) {
    return this.http.get(url).pipe(
      catchError(this.handleError)
    )
  }
  branchDetails(link: any) {
    return this.http.get(link).pipe(
      catchError(this.handleError)
    )
  }
  getTagCount(url: any) {
    return this.http.get(url).pipe(
      catchError(this.handleError)
    )
  }
  getLanguage(url: any) {
    return this.http.get(url).pipe(
      catchError(this.handleError)
    )
  }
  getContributors(url: any) {
    return this.http.get(url).pipe(
      catchError(this.handleError)
    )
  }
  // Issue page backend data
  repoIssuesData(link: any) {
    return this.http.get(link).pipe(
      catchError(this.handleError)
    );
  }
  displayCmts(url: any) {
    return this.http.get(url).pipe(
      catchError(this.handleError)
    )
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 401) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }


}
