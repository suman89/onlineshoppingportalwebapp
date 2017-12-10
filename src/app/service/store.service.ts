import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import {Store} from '../model/store'
import {MessageService} from './message.service'

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  @Injectable()
  export class StoreService {
  
    private storesUrl = 'https://www.cereal20.hasura-app.io/stores';  // URL to web api
    
    constructor(
      private http: HttpClient,
      private messageService: MessageService) {
        
       }
  
    /** GET stores from the server */
    getStores (): Observable<Store[]> {
      
      return this.http.get<Store[]>(this.storesUrl)
        .pipe(
          tap(stores => this.log(`fetched stores`)),
          catchError(this.handleError('getStores', []))
        );
    }

    getStoreByStoreType(storeType : string ) : Observable<Store[]> {
      var modifiedUrl ;
      if(storeType != "all"){
        modifiedUrl =this.storesUrl + "?storeType="+ storeType
      }
      else {
        modifiedUrl = this.storesUrl;
      }
      return this.http.get<Store[]>(modifiedUrl)
      .pipe(
        tap(stores => this.log(`fetched stores`)),
        catchError(this.handleError('getStores', []))
      );
    } 
  
  
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
  
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
  
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
  
    /** Log a HeroService message with the MessageService */
    private log(message: string) {
      this.messageService.add('HeroService: ' + message);
    }
  }