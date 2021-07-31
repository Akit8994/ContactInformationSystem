import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule,
  MatTableModule, MatDialogModule, MAT_DIALOG_DATA, MatDialogRef
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactInformationCreateComponent } from './contact-information-create.component';

describe('ContactInformationCreateComponent', () => {
  let component: ContactInformationCreateComponent;
  let fixture: ComponentFixture<ContactInformationCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactInformationCreateComponent],
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
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactInformationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
