import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Contact, FormFieldData, Option } from '../../Model/Contact';

@Component({
  selector: 'create-contact',
  templateUrl: './create-contact-information.component.html',
  styleUrls: ['./create-contact-information.component.scss']
})
export class CreateContactInformationComponent implements OnInit {

  data: FormFieldData[];
  contactInfo: FormGroup;
  statusOption: Option[];
  dataSaved: boolean = false;
  error: boolean = false;
  @Output() savedContactInfo = new EventEmitter<string>();
  @Input() updateContactData: Contact;
  @Input() allPhoneNumber: string[];

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
    this.statusOption = [{ key: 'Inactive', value: 'Inactive' }, { key: 'Active', value: 'Active' }];
    this.data = [
      { id: 'firstName', labelName: 'First Name', fieldType: 'text', maxLength: 30 },
      { id: 'lastName', labelName: 'Last Name', fieldType: 'text', maxLength: 30 },
      { id: 'contactStatus', labelName: 'Status', fieldType: 'drop_down', maxLength: 10, options: this.statusOption },
      { id: 'emailAddress', labelName: 'Email Address', fieldType: 'email', maxLength: 50 },
      { id: 'phoneNumber', labelName: 'Phone Number', fieldType: 'text', maxLength: 10 }
    ];
    if (this.updateContactData) {
      this.contactInfo.setValue(this.updateContactData);
    }
  }

  onSubmit() {
    if (this.validateDuplicate()) return;
    this.savedContactInfo.emit(this.contactInfo.getRawValue());
    this.contactInfo.reset();
    this.dataSaved = true;
  }

  clearForm() {
    this.dataSaved = false;
    this.contactInfo.reset();
  }

  validateDuplicate(): boolean {
    const phoneNumber = this.contactInfo.get('phoneNumber').value;
    return this.allPhoneNumber.includes(phoneNumber);
  }

}
