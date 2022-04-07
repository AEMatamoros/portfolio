import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Layout
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';

//Pages
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CaruselComponent } from './components/pages/carusel/carusel.component';
import { PortfolioComponent } from './components/pages/portfolio/portfolio.component';
import { SkillsComponent } from './components/pages/skills/skills.component';
import { LoaderComponent } from './components/layouts/loader/loader.component';
import { CardComponent } from './components/shareds/card/card.component';
import { ContactModalComponent } from './components/shareds/contact-modal/contact-modal.component';
import { ProyectsComponent } from './components/pages/proyects/proyects.component';
import { Router, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    CaruselComponent,
    PortfolioComponent,
    SkillsComponent,
    LoaderComponent,
    CardComponent,
    ContactModalComponent,
    ProyectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



