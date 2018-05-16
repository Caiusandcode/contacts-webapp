import {OnInit} from '@angular/core';

export class Contact {
  id: number;
  firstName: string;
  lastName: string;
  streetaddress: string;
  city: string;
  phonenumber: string;
  postalCode: string;
  emailaddress: string;


  constructor(id?: number, firstName?: string, lastName?: string, streetadress?: string, city?: string,
              phonenumber?: string, postalcode?: string, emailaddress?: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.streetaddress = streetadress;
    this.city = city;
    this.phonenumber = phonenumber;
    this.postalCode = postalcode;
    this.emailaddress = emailaddress;
  }
}
