import { Component, OnInit } from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];

  constructor(private contactService: ContactService) {
    this.contacts = [];
    this.contacts.push(new Contact('First', 'Contact'));
    this.contacts.push(new Contact('Second', 'Contact'));
    console.log(this.contacts);
  }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

}