import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormFieldData, Option } from '../Model/Contact'

@Component({
  selector: 'create-contact',
  templateUrl: './create-contact-information.component.html',
  styleUrls: ['./create-contact-information.component.scss']
})
export class CreateContactInformationComponent implements OnInit {

  data: FormFieldData[];
  contactInfo: FormGroup;
  statusOption: Option[];

  constructor(private fb: FormBuilder) {
    this.contactInfo = fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', Validators.required],
      contactStatus: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
  }

  ngOnInit() {
    this.statusOption = [{ key: 'IN', value: 'Inactive' }, { key: 'AC', value: 'Active' }];
    this.data = [
      { id: 'firstName', labelName: 'First Name', fieldType: 'text', maxLength: 30 },
      { id: 'lastName', labelName: 'Last Name', fieldType: 'text', maxLength: 30 },
      { id: 'contactStatus', labelName: 'Status', fieldType: 'drop_down', maxLength: 2, options: this.statusOption },
      { id: 'emailAddress', labelName: 'Email Address', fieldType: 'email', maxLength: 50 },
      { id: 'phoneNumber', labelName: 'Phone Number', fieldType: 'text', maxLength: 10 }
    ];
  }

  onSubmit() {
    console.log(this.contactInfo.value);
    this.contactInfo.reset();
  }

  clearForm() {
    this.contactInfo.reset();
  }

}
