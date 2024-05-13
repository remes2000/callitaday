import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TimePickerComponent } from '../../../ui/time-picker/time-picker.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CountdownFormValue, Time } from '../../../models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-countdown-form',
  standalone: true,
  imports: [MatButtonModule, TimePickerComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './countdown-form.component.html',
  styleUrl: './countdown-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountdownFormComponent {
  @Output('submit') onSubmit = new EventEmitter<CountdownFormValue>();
  readonly form = new FormGroup({
    start: new FormControl<Time>(null),
    duration: new FormControl<Time>(null),
  });

  submit() {
    if (this.form.valid) {
      this.onSubmit.emit(this.form.getRawValue());
    }
  }
}
