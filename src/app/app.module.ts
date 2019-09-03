import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/main-components/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { ParentCatComponent } from './components/main-components/parent-cat/parent-cat.component';
import { CatItemsComponent } from './components/main-components/cat-items/cat-items.component';
import { HeaderComponent } from './components/main-components/header/header.component';
import { FooterComponent } from './components/main-components/footer/footer.component';
import { SearchComponent } from './components/main-components/search/search.component';
import { PremiumComponent } from './components/main-components/premium/premium.component';
import { ProfileComponent } from './components/main-components/profile/profile.component';
import { IntroComponent } from './components/main-components/intro/intro.component';
import { SingleProductComponent } from './components/main-components/single-product/single-product.component';
import { CollectionComponent } from './components/main-components/collection/collection.component';
import { SearchBoxComponent } from './components/child-components/search-box/search-box.component';
import { LoginBoxComponent } from './components/child-components/login-box/login-box.component';
import { HomeBannerComponent } from './components/child-components/home-banner/home-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ParentCatComponent,
    CatItemsComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    PremiumComponent,
    ProfileComponent,
    IntroComponent,
    SingleProductComponent,
    CollectionComponent,
    SearchBoxComponent,
    LoginBoxComponent,
    HomeBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
