import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactInformationMainComponent } from './contact-information-main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule,
  MatTableModule, MatDialogModule
} from '@angular/material';
import { Contact } from 'src/app/Model/Contact';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const row = {
  firstName: 'Ankit',
  lastName: 'Gaurav',
  emailAddress: 'akt.grv@gmail.com',
  phoneNumber: '9988776655',
  contactStatus: 'Active'
};

const ds: Contact[] = [{
  firstName: 'Ankit',
  lastName: 'Gaurav',
  emailAddress: 'akt.grv@gmail.com',
  phoneNumber: '9988776655',
  contactStatus: 'Active'
},
{
  firstName: 'Ankit',
  lastName: 'Gaurav',
  emailAddress: 'akt.grv@gmail.com',
  phoneNumber: '9988776655',
  contactStatus: 'Active'
}];

describe('ContactInformationMainComponent', () => {
  let component: ContactInformationMainComponent;
  let fixture: ComponentFixture<ContactInformationMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactInformationMainComponent],
      imports: [
        MatCardModule,
        MatTableModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactInformationMainComponent);
    component = fixture.componentInstance;
    component.dataSource = ds;
    component.selectedRowIndex = '';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /* 
   it('should invoke ngOnInit', () => {
    expect(component.selectedRow).toEqual('');
     component.selectedRow(row);
     expect(component.selectedRow).toEqual('9988776655'); 
   });*/

  it('should invoke selectedRow', () => {
    expect(component.selectedRowIndex).toEqual('');
    component.selectedRow(row);
    expect(component.selectedRowIndex).toEqual('9988776655');
  });
});
