import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './components/grid/grid.component';
import { DataItemComponent } from './components/data-item/data-item.component';
import { SwiperModule } from 'ngx-swiper-wrapper';  
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ContextMenuComponent } from './components/context-menu/context-menu.component';  

const SWIPER_CONFIG: SwiperConfigInterface = {  
 direction: 'horizontal',  
 slidesPerView: 'auto' 
};  

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    DataItemComponent,
    ContextMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
