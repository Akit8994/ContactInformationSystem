import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInformationMainComponent } from './contact-information-main.component';

describe('ContactInformationMainComponent', () => {
  let component: ContactInformationMainComponent;
  let fixture: ComponentFixture<ContactInformationMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactInformationMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactInformationMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
