import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormFieldData, Option } from 'src/app/Model/Contact';

@Component({
  selector: 'contact-information-create',
  templateUrl: './contact-information-create.component.html',
  styleUrls: ['./contact-information-create.component.scss']
})
export class ContactInformationCreateComponent implements OnInit {
  contactInfo: FormGroup;
  statusOption: Option[];
  allPhoneNumbers: string[];
  data = [];
  showError: boolean;

  constructor(
    public dialogRef: MatDialogRef<ContactInformationCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private fb: FormBuilder) {
    this.contactInfo = fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', Validators.required],
      contactStatus: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
  }

  ngOnInit() {
    this.statusOption = [{ key: '', value: '' }, { key: 'Active', value: 'Active' }, { key: 'Inactive', value: 'Inactive' }];
    this.data = [
      { id: 'firstName', labelName: 'First Name', fieldType: 'text', maxLength: 30 },
      { id: 'lastName', labelName: 'Last Name', fieldType: 'text', maxLength: 30 },
      { id: 'contactStatus', labelName: 'Status', fieldType: 'drop_down', maxLength: 10, options: this.statusOption },
      { id: 'emailAddress', labelName: 'Email Address', fieldType: 'email', maxLength: 50 },
      { id: 'phoneNumber', labelName: 'Phone Number', fieldType: 'text', maxLength: 10 }
    ];
    this.allPhoneNumbers = this.dialogData.allPhoneNumbers;
    if (this.dialogData.type === 'update') {
      this.contactInfo.get('phoneNumber').disable();
      this.contactInfo.setValue(this.dialogData.contactDetail);
    }
  }

  cancel() {
    this.dialogRef.close(null);
  }

  onSubmit() {
    if (this.allPhoneNumbers) {
      const phoneNum = this.contactInfo.get('phoneNumber').value;
      if (this.allPhoneNumbers.includes(phoneNum)) {
        this.showError = true;
      } else {
        this.showError = false;
        this.dialogRef.close(this.contactInfo.value);
      }
    } else {
      this.showError = false;
      this.contactInfo.value.phoneNumber = this.dialogData.contactDetail ? this.dialogData.contactDetail.phoneNumber : null;
      this.dialogRef.close(this.contactInfo.value);
    }
  }

 /*  isRequired(d: any): boolean {
    console.log(d);
    return true;
  } */

}
