import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import {Product} from '../model/Product'
import {MessageService} from './message.service'

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  @Injectable()
  export class ProductService {
  
    private productUrl = 'https://www.cereal20.hasura-app.io/products?storeId=';  // URL to web api
    
    constructor(
      private http: HttpClient,
      private messageService: MessageService) {
        
       }

       /** GET product by store id. Will 404 if id not found */
          getProduct(id: number): Observable<Product[]> {
            const url = `${this.productUrl}+${id}`;
            return this.http.get<Product[]>(url)
            .pipe(
                tap(_ => this.log(`fetched product id=${id}`)),
                catchError(this.handleError(`getProduct id=${id}`,[])));
          };
  

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