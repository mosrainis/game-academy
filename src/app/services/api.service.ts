import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { step1login, step2login } from "../models/user-login.model";
import { environment } from "../../environments/environment";
import { Observable } from 'rxjs';
import { category, homePage } from '../models/content.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  //-----------------------------  ngOnInit services  ------------------------------------
  // These services will be called when their components are built

  userStatus() {
    this.http.get(`${environment.baseUrl}/user_active_subs`)
  }

  getCat(): Observable<category> {
    return this.http.get<category>(`${environment.baseUrl}/category/18/0`)
  }

  getProfile(){
    return this.http.get(`${environment.baseUrl}/profile`)
  }

  getHomeItems(): Observable<homePage> {
    return this.http.get<homePage>(`${environment.baseUrl}/store/18`)
  }

  getParentItems(parentId: number) {
    return this.http.get(`${environment.baseUrl}/homeitem/18/${parentId}`)
  }

  getSearchRes(searchString: string) {
    return this.http.post(`${environment.baseUrl}/search/18`, searchString)
  }

  getPremiumItems() {
    return this.http.get(`${environment.baseUrl}/available_subs/18`)
  }

  getBookmarks() {
    return this.http.get(`${environment.baseUrl}/get_bookmarks_products`)
  }

  getCollectionItems(productId: number) {
    return this.http.get(`${environment.baseUrl}/product/${productId}`)
  }

  getComments(productId: number) {
    return this.http.get(`${environment.baseUrl}/comment/${productId}`)
  }

  getProductInfo(productId: number) {
    return this.http.get(`${environment.baseUrl}/product/${productId}`)
  }

  getRelated(productId: number) {
    return this.http.get(`${environment.baseUrl}/related_products/${productId}`)
  }

  // ------------------------------------------------------------------------------------

  //User Login with mobile (STEP 1) :
  mobileLoginS1(userData: step1login) {
    return this.http.post(`${environment.baseUrl}/mobile_login_step1/18`, userData)
  }

  //User Login with mobile (STEP 2) :
  mobileLoginS2(userData:step2login) {
    return this.http.post(`${environment.baseUrl}/mobile_login_step2/18`, userData)
  }
}
