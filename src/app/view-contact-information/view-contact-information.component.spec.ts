import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContactInformationComponent } from './view-contact-information.component';

describe('ViewContactInformationComponent', () => {
  let component: ViewContactInformationComponent;
  let fixture: ComponentFixture<ViewContactInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewContactInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewContactInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
