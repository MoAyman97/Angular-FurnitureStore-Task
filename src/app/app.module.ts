import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { FormsModule } from '@angular/forms';
import { PrdCardDirective } from './Directives/prd-card.directive';
import { CreditcardPipe } from './Pipes/creditcard.pipe';
import { ProductParentComponent } from './components/product-parent/product-parent.component';
import { AboutComponent } from './components/about/about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RoutesGroupComponent } from './components/routes-group/routes-group.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    FooterComponent,
    ProductsComponent,
    SidemenuComponent,
    PrdCardDirective,
    CreditcardPipe,
    ProductParentComponent,
    AboutComponent,
    ContactUsComponent,
    NotFoundComponent,
    RoutesGroupComponent,
    ProductDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
