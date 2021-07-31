import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ContactInformationMainComponent } from './Component/contact-information-main/contact-information-main.component';
import { ContactInformationCreateComponent } from './Component/contact-information-create/contact-information-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule,
  MatTableModule, MatDialogModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ContactInformationMainComponent,
        ContactInformationCreateComponent
      ],
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
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ContactInformationSystem'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Contact Information System');
  });
});
