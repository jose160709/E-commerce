import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { CartModule } from './cart/cart.module';
import { LayoutsModule } from './layouts/layouts.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { ComponentsModule } from './components/components.module';



@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CartModule,
    DashboardModule,
    LayoutsModule,
   
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
