import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './Components/button/button.component';
import { CardComponent } from './Components/card/card.component';
import { Card1Component } from './Components/card1/card1.component';
import { HeaderCardComponent } from './Components/header-card/header-card.component';
import { InfoCardComponent } from './Components/info-card/info-card.component';
import { ProfileCardComponent } from './Components/profile-card/profile-card.component';
import { FeatureCardComponent } from './Components/feature-card/feature-card.component';
import { AlertCardComponent } from './Components/alert-card/alert-card.component';
import { StatsCardComponent } from './Components/stats-card/stats-card.component';
import { TestimonialCardComponent } from './Components/testimonial-card/testimonial-card.component';
import { BannerCardComponent } from './Components/banner-card/banner-card.component';
import { FooterCardComponent } from './Components/footer-card/footer-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ButtonComponent,
    CardComponent,
    Card1Component,
    HeaderCardComponent,
    InfoCardComponent,
    ProfileCardComponent,
    FeatureCardComponent,
    AlertCardComponent,
    StatsCardComponent,
    TestimonialCardComponent,
    BannerCardComponent,
    FooterCardComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'angular-demo';

  constructor() {
    console.log("Hello Pari");
  }
}