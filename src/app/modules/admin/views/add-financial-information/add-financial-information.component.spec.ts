import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFinancialInformationComponent } from './add-financial-information.component';

describe('AddFinancialInformationComponent', () => {
  let component: AddFinancialInformationComponent;
  let fixture: ComponentFixture<AddFinancialInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFinancialInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFinancialInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
