import { Component, OnInit } from '@angular/core';
import { Contact } from '../../Model/Contact';
import { ColDef, GridApi, ColumnApi } from 'ag-grid-community';
import { ContactInformationServiceService } from 'src/app/Service/contact-information-service.service';
/* import { NotifierService } from 'angular-notifier'; */

@Component({
  selector: 'app-contact-information-main',
  templateUrl: './contact-information-main.component.html',
  styleUrls: ['./contact-information-main.component.scss']
})
export class ContactInformationMainComponent implements OnInit {
  mode: 'init' | 'create' | 'view' = 'view';

  // row data and column definitions
  private contactInfos: Contact[];
  private columnDefs: ColDef[];

  // gridApi and columnApi
  private api: GridApi;
  private columnApi: ColumnApi;
  private contactsTobeEdited: any;
  status: any;


  constructor(private contactService: ContactInformationServiceService) {
    this.columnDefs = this.createColumnDefs();
  }

  ngOnInit() {
    this.contactService.getContactDetails().subscribe(
      data => {
        this.contactInfos = data
      },
      error => {
        console.log(error);
      }
    )
  }

  // one grid initialisation, grap the APIs and auto resize the columns to fit the available space
  onGridReady(params): void {
    this.api = params.api;
    this.columnApi = params.columnApi;
    this.api.sizeColumnsToFit();
  }

  private createColumnDefs() {
    return [
      { headerName: 'First Name', field: 'firstName', suppressSorting: false, editable: true },
      { headerName: 'Last Name', field: 'lastName', editable: true },
      { headerName: 'Email', field: 'emailAddress', editable: true },
      { headerName: 'Mobile', field: 'phoneNumber', editable: false },
      { headerName: 'Status', field: 'contactStatus', editable: true }
    ]
  }

  editContact() {
    if (this.api.getSelectedRows().length == 0) {
      alert('Please select a row for editing');
      return;
    }
    var row = this.api.getSelectedRows();

    const savedDetails = this.contactInfos.find(contact => contact.phoneNumber === row[0].phoneNumber);
    if (savedDetails && isSameValue(row[0], savedDetails)) {
      alert('No data Edited');
      return;
    }
    this.contactService.updateContactDetails(row[0], this.contactInfos)
      .subscribe(data => {
        alert('Contact updated successfully!!')
        console.log(data);
      },
        error => {
          alert('Contact updated failed!!')
        });
  }

  changeMode(string) {
    this.mode = string;
  }

  savedContact(data: Contact) {
    const index = this.contactInfos.findIndex(contact => contact.phoneNumber === data.phoneNumber);
    if (index !== -1) {
      alert('Failed : Phone number already exists');
      return;
    } else {
      this.contactService.addContactDetails(data, this.contactInfos).subscribe((data: Contact[]) => {
        this.contactInfos = data;
        this.api.refreshCells();
        alert('Contact created successfully!!')
      }, error => {
        alert('Contact created failed!!')
      });
    }
  }

  deleteContact() {
    var selectedRows = this.api.getSelectedRows();
    if (selectedRows.length === 0) {
      alert('Please select a row for deleting');
      return;
    }
    this.contactService.deleteContactDetails(selectedRows[0], this.contactInfos).subscribe((data: Contact[]) => {
      this.contactInfos = data;
      this.api.refreshCells();
      alert('Contact deleted successfully!!')
    }, error => {
      alert('Contact delete failed!!')
    });
  }
}

function isSameValue(c1: Contact, c2: Contact) {
  if (c1.firstName !== c2.firstName) return false
  if (c1.lastName !== c2.lastName) return false
  if (c1.emailAddress !== c2.emailAddress) return false
  if (c1.contactStatus !== c2.contactStatus) return false
  return true;
}