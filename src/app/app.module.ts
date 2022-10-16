import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SliderComponent } from './component/slider/slider.component';
import { ProdutsComponent } from './component/produts/produts.component';
import { ProductItemComponent } from './component/product-item/product-item.component';
import { GallaryComponent } from './component/gallary/gallary.component';
import { TodoComponent } from './component/todo/todo.component';
import { FormsModule} from '@angular/forms';
import { AddListComponent } from './component/add-list/add-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    ProdutsComponent,
    ProductItemComponent,
    GallaryComponent,
    TodoComponent,
    AddListComponent
  ],
  imports: [ BrowserModule , FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
