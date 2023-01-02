import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mandatory-setup',
  templateUrl: './mandatory-setup.component.html',
  styleUrls: ['./mandatory-setup.component.css']
})
export class MandatorySetupComponent implements OnInit {

  codeLogo1 = `<project>/assets/image/`;
  codeLogo2 = `/android/app/src/main/res`;
  codeLogo3 = `<generated icon>/android`;
  codeLogo4 = `/ios/Runner`;

  codeName1 = `<project>/lib/util/app_constrants.dart`;
  codeName2 = `APP_NAME`;
  codeName3 = `<project>/android/app/src/main/AndroidManifest.xml`;
  codeName4 = `<project>/iOS/Runner/info.plist`;
 
  codeUrl1 = `https://your_domain.com/admin`;
  codeUrl2 = `https://your_domain.com`;
  codeUrl3 = `/lib/util/app_constrants.dart`;
  codeUrl4 = `BASE_URL`;

  constructor() { }

  ngOnInit(): void {
  }



}
