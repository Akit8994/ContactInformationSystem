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
      firstName: 'Ankit',
      lastName: 'Gaurav',
      emailAddress: 'akt.grv@gmail.com',
      phoneNumber: '9988776655',
      contactStatus: 'Active'
    },
    {
      firstName: 'Gaurav',
      lastName: 'Ankit',
      emailAddress: 'grv.akt@mail.com',
      phoneNumber: '1122336655',
      contactStatus: 'Active'
    },
    {
      firstName: 'Kumar',
      lastName: 'Gaurav',
      emailAddress: 'Kumar.Gaurav@outlook.com',
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
