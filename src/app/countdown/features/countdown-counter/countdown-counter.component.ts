import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { CountdownService } from '../../countdown.service';
import { interval } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TimeFormatterPipe } from './time-formatter.pipe';

const REFRESH_INTERVAL_IN_MS = 1_000;

@Component({
  selector: 'app-countdown-counter',
  standalone: true,
  imports: [TimeFormatterPipe],
  templateUrl: './countdown-counter.component.html',
  styleUrl: './countdown-counter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountdownCounterComponent implements OnInit {
  private readonly countdownService = inject(CountdownService);
  private readonly changeDetectorRef = inject(ChangeDetectorRef);
  readonly endDate = this.countdownService.endDate;

  constructor() {
    this.changeDetectorRef.detach();
    interval(REFRESH_INTERVAL_IN_MS).pipe(takeUntilDestroyed()).subscribe(() => 
      this.changeDetectorRef.detectChanges()
    );
  }

  ngOnInit(): void {
    this.changeDetectorRef.detectChanges();
  }

  getTimeLeftInMs(): number {
    return this.endDate().getTime() - new Date().getTime();
  }
}
