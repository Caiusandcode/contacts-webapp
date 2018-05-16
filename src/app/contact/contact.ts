import {OnInit} from '@angular/core';

export class Contact {
  firstName: string;
  lastName: string;

  constructor( id?: number, firstName?: string, lastName?: string) {
    this.id = id,
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
