import { Component, OnInit } from '@angular/core';
import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faWhatsapp } from "@fortawesome/free-brands-svg-icons";


import * as $ from 'jquery'


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  facebookIcon =  faFacebookSquare;
  instagramIcon = faInstagramSquare;
  twitterIcon =  faTwitterSquare;
  whatsappIcon = faWhatsapp;

  constructor() { }

  ngOnInit(): void {

  }

}
