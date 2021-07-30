import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateContactInformationComponent } from './create-contact-information.component';

describe('CreateContactInformationComponent', () => {
  let component: CreateContactInformationComponent;
  let fixture: ComponentFixture<CreateContactInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateContactInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateContactInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
