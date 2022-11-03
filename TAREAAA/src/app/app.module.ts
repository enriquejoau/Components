import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { RouterModule, ROUTES} from '@angular/router';
import { PostsService } from './services/posts.service';
import { Componente1Component } from './components/componente1/componente1.component';
import { Componente2Component } from './components/componente2/componente2.component';
import { Componente3Component } from './components/componente3/componente3.component';
import { Componente4Component } from './components/componente4/componente4.component';
import { Componente5Component } from './components/componente5/componente5.component';

@NgModule({
  declarations: [
    
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    Componente1Component,
    Componente2Component,
    Componente3Component,
    Componente4Component,
    Componente5Component
  ],
  imports: [
        BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
