import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogAddEditBookComponent } from './dialog-add-edit-book/dialog-add-edit-book.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BtnHoverDirective } from 'src/app/btn-hover.directive';
import { DialogAddSubscriberComponent } from './dialog-add-subscriber/dialog-add-subscriber.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { MouseDirective } from 'src/app/mouse.directive';

@NgModule({
  declarations: [
     DialogAddEditBookComponent, BtnHoverDirective, DialogAddSubscriberComponent, FeedbackComponent, MouseDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  entryComponents: [
    DialogAddEditBookComponent
  ],
  exports: [
    BtnHoverDirective, 
    MouseDirective
  ]
})
export class SharedModule { }
