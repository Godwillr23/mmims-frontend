import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private requestCount = 0;
  private loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public loading$: Observable<boolean> = this.loadingSubject.asObservable();

  show(): void {
    this.requestCount++;
    if (this.requestCount === 1) {
      this.loadingSubject.next(true);
    }
  }

  hide(): void {
    if (this.requestCount > 0) {
      this.requestCount--;
    }

    if (this.requestCount === 0) {
      this.loadingSubject.next(false);
    }
  }

  reset(): void {
    this.requestCount = 0;
    this.loadingSubject.next(false);
  }
}
