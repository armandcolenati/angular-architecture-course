import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private itemsInCart = 0;

  private readonly shoppingCartSubject$ = new Subject<number>();

  shoppingCartChanged$ = this.shoppingCartSubject$.asObservable()

  public addToCart(): void {
    this.itemsInCart++;
    this.shoppingCartSubject$.next(this.itemsInCart);
  }
}
