import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor } from "@angular/common/http";
import { LocalStorageService } from "./local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(
    private storage: LocalStorageService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log("data is on the way")
    const token = this.storage.getToken()
    const modifiedRequest = req.clone({
      // headers: req.headers.append('Authorization', `Token ${token}`)
    })

    return next.handle(modifiedRequest)
  }
}
