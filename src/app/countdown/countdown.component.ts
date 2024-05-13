import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CountdownFormComponent } from './features/countdown-form/countdown-form.component';
import { CountdownFormValue } from '../models';
import { CountdownService } from './countdown.service';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [CountdownFormComponent],
  providers: [CountdownService],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountdownComponent {
  private readonly countdownService = inject(CountdownService);

  persist(formValue: CountdownFormValue) {
    this.countdownService.persist(formValue);
  }
}
