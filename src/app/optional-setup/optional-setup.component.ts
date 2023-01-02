import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-optional-setup',
  templateUrl: './optional-setup.component.html',
  styleUrls: ['./optional-setup.component.css']
})
export class OptionalSetupComponent implements OnInit {

  codeColor1 = `<project>/lib/theme/light_theme.dart`;
  codeColor2 = `<project>/lib/theme/dark_theme.dart`;
    
  codeFont1 = `<project>/assets/font/ folder`;
  codeFont2 = `<project>/pubspec.yaml`;
  codeFont3 = `YOUR_FONT_FAMILY_NAME`;
  codeFont4 = `assets/font/YOUR_FONT_FILE_NAME.ttf`;
  codeFont5 = `YOUR_FONT_WEIGHT`;
  codeFont6 = `<project>/lib/util/styles.dart`;
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
