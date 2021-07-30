import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInformationViewComponent } from './contact-information-view.component';

describe('ContactInformationViewComponent', () => {
  let component: ContactInformationViewComponent;
  let fixture: ComponentFixture<ContactInformationViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactInformationViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactInformationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
