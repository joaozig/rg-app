import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';

import { OrderByPipe } from '../pipes/order-by';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { HighlightPage } from '../pages/highlight/highlight';
import { FranchisePage } from '../pages/franchise/franchise';
import { RestaurantPage } from '../pages/restaurant/restaurant';
import { PlacesPage } from '../pages/places/places';
import { CollectionsPage } from '../pages/collections/collections';
import { CollectionPage } from '../pages/collection/collection';
import { PlacePage } from '../pages/place/place';
import { LocalGalleryPage } from '../pages/local-gallery/local-gallery';
import { LocalSlidePage } from '../pages/local-slide/local-slide';
import { SearchPage } from '../pages/search/search';
import { CategoriesPage } from '../pages/categories/categories';
import { CategoryPage } from '../pages/category/category';

@NgModule({
  declarations: [
    MyApp,
    OrderByPipe,
    TabsPage,
    HomePage,
    HighlightPage,
    FranchisePage,
    RestaurantPage,
    PlacePage,
    PlacesPage,
    CollectionsPage,
    CollectionPage,
    LocalGalleryPage,
    LocalSlidePage,
    SearchPage,
    CategoriesPage,
    CategoryPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    HighlightPage,
    FranchisePage,
    RestaurantPage,
    PlacePage,
    PlacesPage,
    CollectionsPage,
    CollectionPage,
    LocalGalleryPage,
    LocalSlidePage,
    SearchPage,
    CategoriesPage,
    CategoryPage,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
