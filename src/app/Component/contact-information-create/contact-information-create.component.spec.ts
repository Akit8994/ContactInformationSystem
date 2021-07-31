import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInformationCreateComponent } from './contact-information-create.component';

describe('ContactInformationCreateComponent', () => {
  let component: ContactInformationCreateComponent;
  let fixture: ComponentFixture<ContactInformationCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactInformationCreateComponent ]
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
