import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TempleRoutingModule } from './temple-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TestimonialComponent } from './testimonial/testimonial.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TestimonialComponent
  ],
  imports: [
    CommonModule,
    TempleRoutingModule
  ],
  exports: [HeaderComponent,
    FooterComponent,
    HomeComponent,TestimonialComponent]
})
export class TempleModule { }
