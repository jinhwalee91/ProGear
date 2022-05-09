import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _http : HttpClient; 
  constructor(private _httpRef : HttpClient) { this._http = _httpRef; }

   
  getUserIdByEmail (userEmail: any) {
    return this._http.get("https://localhost:44310/Cart/get-user-ID/" + userEmail);
   }

   getCart (userID: any) {
    return this._http.get("https://localhost:44310/Cart/GetCartById/" + userID);
   }

   modifyQty (OrderId: number, Qty: number) {
    return this._http.put("https://localhost:44310/Cart/set-order-qty/" + OrderId + "/" + Qty, null, {responseType : 'text'});
   }

   removeOrder (OrderId: number) {
    return this._http.delete("https://localhost:44310/Cart/remove-order/" + OrderId, {responseType : 'text'} );
   }

   emptyCart (cartID:number) {
    return this._http.delete("https://localhost:44310/Cart/emptycart/" + cartID, {responseType : 'text'} );
   }

   // this method should get all of a user's old carts, this acts as a user's order history, ie reciepts (paidFor == true)
   // but, the API is not implemented yet... nor is the component... someone should do that
   getOldCarts (userID:number) {
    return this._http.get("https://localhost:44310/Cart/GetOldCarts/" + userID);
   }

}