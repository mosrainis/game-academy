import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/main-components/home/home.component';
import { ParentCatComponent } from './components/main-components/parent-cat/parent-cat.component';
import { SearchComponent } from './components/main-components/search/search.component';
import { PremiumComponent } from './components/main-components/premium/premium.component';
import { ProfileComponent } from './components/main-components/profile/profile.component';
import { IntroComponent } from './components/main-components/intro/intro.component';
import { SingleProductComponent } from './components/main-components/single-product/single-product.component'
import { CollectionComponent } from './components/main-components/collection/collection.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'parent_cat/:ParentId',
    component: ParentCatComponent
  },
  {
    path: 'search/:string',
    component: SearchComponent
  },
  {
    path: 'premium',
    redirectTo: "premium/"
  },
  {
    path: 'premium/:productId',
    component: PremiumComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'intro',
    component: IntroComponent
  },
  {
    path: 'product/:productId',
    component: SingleProductComponent
  },
  {
    path: 'feat_product/:collectionId',
    component: CollectionComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
