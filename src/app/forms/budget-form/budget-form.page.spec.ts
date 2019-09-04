import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetFormPage } from './budget-form.page';

describe('BudgetFormPage', () => {
  let component: BudgetFormPage;
  let fixture: ComponentFixture<BudgetFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
