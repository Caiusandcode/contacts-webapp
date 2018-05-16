import {Injectable} from '@angular/core';
import {Contact} from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: Contact[];

  constructor() {
    this.contacts = [];
    this.contacts.push(new Contact('First', 'Contact'));
    this.contacts.push(new Contact('Second', 'Contact'));

  }


  getContacts(): Contact[] {
    return this.contacts;
  }

}
