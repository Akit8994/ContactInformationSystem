import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatTableModule } from '@angular/material';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { ContactInformationMainComponent } from './Component/contact-information-main/contact-information-main.component';
import { CreateContactInformationComponent } from './Component/create-contact-information/create-contact-information.component';
import { ContactInformationViewComponent } from './Component/contact-information-view/contact-information-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactInformationMainComponent,
    CreateContactInformationComponent,
    ContactInformationViewComponent
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
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
