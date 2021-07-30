import { Component, OnInit } from '@angular/core';
import { Contact } from '../../Model/Contact';


@Component({
  selector: 'app-contact-information-main',
  templateUrl: './contact-information-main.component.html',
  styleUrls: ['./contact-information-main.component.scss']
})
export class ContactInformationMainComponent implements OnInit {
  mode: 'init' | 'create' | 'view' = 'init';
  allContactInfo: Contact[] = [];
  updateContactData: Contact;
  allPhoneNumber: string[];
/*   allContactInfo: Contact[] =
    [{
      firstName: 'test',
      lastName: 'test',
      emailAddress: 'test@test.com',
      phoneNumber: '1231231233',
      contactStatus: 'Active'
    },
    {
      firstName: 'test1',
      lastName: 'test',
      emailAddress: 'test@mail.com',
      phoneNumber: '1234567890',
      contactStatus: 'Active'
    },
    {
      firstName: 'test2',
      lastName: 'test',
      emailAddress: 'gello@awd.com',
      phoneNumber: '0987654321',
      contactStatus: 'Inactive',
    }]; */

  constructor() { }

  ngOnInit() {
    this.allPhoneNumber = this.allContactInfo.map(contact => contact.phoneNumber);
  }

  addContactInfo() {
    this.updateContactData = null;
    this.mode = 'create';
  }

  viewContactInfo() {
    this.mode = 'view';
  }

  createUpdateContact(contactInfo: Contact) {
    const contactIndex = this.allContactInfo.findIndex(contactInfo => contactInfo.phoneNumber);
    if (contactIndex !== -1) {
      this.allContactInfo[contactIndex] = contactInfo;
      console.info('Contact Updated!!!');
    } else {
      this.allContactInfo.push(contactInfo);
      console.info('Contact Created!!!');
    }
    this.allPhoneNumber = this.allContactInfo.map(contact => contact.phoneNumber);
  }

  updateContact(contactInfo: Contact) {
    this.updateContactData = contactInfo;
    this.mode = 'create';
  }
}
