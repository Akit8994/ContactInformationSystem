import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Contact } from '../../Model/Contact';
import { ContactInformationServiceService } from '../../Service/contact-information-service.service';
import { ContactInformationCreateComponent } from '../../Component/contact-information-create/contact-information-create.component';

@Component({
  selector: 'contact-information-main',
  templateUrl: './contact-information-main.component.html',
  styleUrls: ['./contact-information-main.component.scss']
})
export class ContactInformationMainComponent implements OnInit {
  dataSource: Contact[];
  displayedColumns = ['firstName', 'lastName', 'emailAddress', 'phoneNumber', 'contactStatus'];
  selectedRowIndex: string;
  contactDetail: Contact;
  columnNames = [
    { id: 'firstName', value: 'First Name' },
    { id: 'lastName', value: 'Last Name' },
    { id: 'emailAddress', value: 'Email' },
    { id: 'phoneNumber', value: 'Phone No.' },
    { id: 'contactStatus', value: 'Status' }
  ];

  constructor(
    private contactService: ContactInformationServiceService,
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.contactService.getContactDetails().subscribe(
      data => {
        this.dataSource = [...data];
      },
      error => {
        console.error(error);
      });
  }

  createContact(): void {
    const phoneNumbers = this.dataSource ? this.dataSource.map(c => c.phoneNumber) : null;
    const createData = { type: 'create', allPhoneNumbers: phoneNumbers };
    this.launchDialog(createData);
  }

  updateContact(): void {
    if (!this.contactDetail) {
      alert('Please select a row to Update');
      return;
    }
    const updateData = { type: 'update', contactDetail: this.contactDetail };
    this.launchDialog(updateData);
  }

  deleteContact(): void {
    if (!this.contactDetail) {
      alert('Please select a row to Update');
      return;
    }
    this.contactService.deleteContactDetails(this.contactDetail, this.dataSource).subscribe((data: Contact[]) => {
      this.dataSource = [...data];
      this.selectedRowIndex = '';
      this.cdr.detectChanges();
    },
      error => {
        alert('Contact delete failed!!');
      });
  }

  launchDialog(setData): void {
    const dialogRef = this.dialog.open(ContactInformationCreateComponent, {
      width: '600px',
      data: setData
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (setData.type === 'create') {
          this.contactService.addContactDetails(result, this.dataSource).subscribe((resp: Contact[]) => {
            this.dataSource = [...resp];
          },
            error => {
              alert('Contact created failed!!');
            });
        } else if (setData.type === 'update') {
          this.contactService.updateContactDetails(result, this.dataSource)
            .subscribe(resp => {
              this.dataSource = [...resp];
            },
              error => {
                alert('Contact updated failed!!');
              });
        }
      }
      this.selectedRowIndex = '';
      this.contactDetail = null;
    });
  }

  selectedRow(row) {
    this.contactDetail = row;
    this.selectedRowIndex = row.phoneNumber;
  }
}
