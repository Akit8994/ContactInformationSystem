import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact, ColumnData } from '../../Model/Contact';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'contact-information-view',
  templateUrl: './contact-information-view.component.html',
  styleUrls: ['./contact-information-view.component.scss']
})
export class ContactInformationViewComponent implements OnInit {

  @Input() allContactInfo: Contact[];
  @Output() selectedRowData = new EventEmitter<Contact>();
  dataSource: MatTableDataSource<any>;
  displayedColumns = [];
  columnNames: ColumnData[] = [
    { id: 'firstName', value: 'First Name' },
    { id: 'lastName', value: 'Last Name' },
    { id: 'emailAddress', value: 'Email' },
    { id: 'phoneNumber', value: 'Phone No.' },
    { id: 'contactStatus', value: 'Status' }
  ];

  constructor() { }

  ngOnInit() {
    console.log(this.allContactInfo);
    this.displayedColumns = this.columnNames.map(x => x.id);
    this.dataSource = new MatTableDataSource(this.allContactInfo);
  }

  selectedRow(selectedRow: Contact) {
    this.selectedRowData.emit(selectedRow);
  }

  showTable(): boolean {
    return this.dataSource.data.length > 0;
  }
}