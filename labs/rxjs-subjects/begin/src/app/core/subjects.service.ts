import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  
  //Define Subject and Observable properties here
  public observable$: Observable<string>;
  
  private subject$: Subject<string>;

  constructor() {
    this.init();
  }

  init() {
    // Create Subject and Observable Here 
    this.subject$ = new BehaviorSubject<string>(null);
    this.observable$ = this.subject$.asObservable();

    // Create interval here
    setInterval(() => {
      const date = new Date();
      const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

      this.subject$.next(time);
    }, 3000);
  }

}
