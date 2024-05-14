import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CountdownFormComponent } from './features/countdown-form/countdown-form.component';
import { CountdownFormValue } from '../models';
import { CountdownService } from './countdown.service';
import { CountdownCounterComponent } from './features/countdown-counter/countdown-counter.component';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [CountdownFormComponent, CountdownCounterComponent],
  providers: [CountdownService],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountdownComponent {
  private readonly countdownService = inject(CountdownService);
  readonly mode = this.countdownService.mode;

  startCounter({ start, duration }: CountdownFormValue) {
    this.countdownService.start(start, duration);
  }
}
