import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Contact } from '../Model/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactInformationServiceService {

  constructor() { }


  getContactDetails(): Observable<any[]> {
    const data = [{
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
    }];
    return of(data);
  }

  addContactDetails(newContact: Contact, allContacts: Contact[]): Observable<Contact[]> {
    allContacts.push(newContact);
    return of(allContacts);
  }

  updateContactDetails(updateContact: Contact, allContacts: Contact[]): Observable<Contact[]> {
    const index = allContacts.findIndex(contact => contact.phoneNumber === updateContact.phoneNumber);
    allContacts[index] = updateContact;
    return of(allContacts);
  }

  deleteContactDetails(deletionContact: Contact, allContacts: Contact[]): Observable<Contact[]> {
    const index = allContacts.findIndex(contact => contact.phoneNumber === deletionContact.phoneNumber);
    if (index !== -1) {
      allContacts.splice(index, 1);
      return of(allContacts);
    } else {
      throw new Error('Unable to delete : Contact doesnt Exists');
    }
  }
}
