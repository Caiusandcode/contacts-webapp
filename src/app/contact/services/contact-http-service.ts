import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Contact} from '../contact';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactHttpService {

  url: string;

  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:3000/contacts';
  }

  get(): Observable<Contact []> {
    return this.httpClient.get(this.url).pipe(map(response => {
      return response as Contact[];
    }));
  }
}