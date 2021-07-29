import { Component, OnInit } from '@angular/core';
import { Contact } from '../Model/Contact';

@Component({
  selector: 'app-contact-information-main',
  templateUrl: './contact-information-main.component.html',
  styleUrls: ['./contact-information-main.component.scss']
})
export class ContactInformationMainComponent implements OnInit {
  mode: 'init' | 'create' | 'view' = 'init';
  allContactInfo: Contact[] = [];

  constructor() { }

  ngOnInit() {
  }

  addContactInfo() {
    this.mode = 'create';
  }

  viewContactInfo() {
    this.mode = 'view';
  }
}
