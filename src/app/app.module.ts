import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule,
  MatTableModule, MatDialogModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { ContactInformationMainComponent } from './Component/contact-information-main/contact-information-main.component';
import { ContactInformationServiceService } from './Service/contact-information-service.service';
import { ContactInformationCreateComponent } from './Component/contact-information-create/contact-information-create.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactInformationMainComponent,
    ContactInformationCreateComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [ContactInformationServiceService],
  entryComponents: [ContactInformationCreateComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
