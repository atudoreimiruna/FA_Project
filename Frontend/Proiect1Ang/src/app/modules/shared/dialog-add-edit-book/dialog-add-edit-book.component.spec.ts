import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddEditBookComponent } from './dialog-add-edit-book.component';

describe('DialogAddEditBookComponent', () => {
  let component: DialogAddEditBookComponent;
  let fixture: ComponentFixture<DialogAddEditBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddEditBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddEditBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
