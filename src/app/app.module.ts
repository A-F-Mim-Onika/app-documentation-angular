import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from "@angular/router";
// import { NgxYoutubePlayerModule } from 'ngx-youtube-player';



import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TopnavComponent } from './topnav/topnav.component';
import { ContentComponent } from './content/content.component';
import { RequirmentsComponent } from './requirments/requirments.component';
import { IntroComponent } from './intro/intro.component';
import { AndroidStudioComponent } from './android-studio/android-studio.component';
import { FlutterSdkComponent } from './flutter-sdk/flutter-sdk.component';
import { MandatorySetupComponent } from './mandatory-setup/mandatory-setup.component';
import { OptionalSetupComponent } from './optional-setup/optional-setup.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { UpdateComponent } from './update/update.component';
import { AppBuildAndReleaseComponent } from './app-build-and-release/app-build-and-release.component';
import { FeatureListComponent } from './feature-list/feature-list.component';

const router: Routes = [
  {
    path: "requerment",
    component: RequirmentsComponent

  },
  {
    path: "intro",
    component: IntroComponent
  },
  {
    path: "flutter-sdk",
    component: FlutterSdkComponent
  },
  {
    path: "andriod-studio",
    component: AndroidStudioComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SidenavComponent,
    TopnavComponent,
    ContentComponent,
    RequirmentsComponent,
    IntroComponent,
    AndroidStudioComponent,
    FlutterSdkComponent,
    MandatorySetupComponent,
    OptionalSetupComponent,
    DisclaimerComponent,
    UpdateComponent,
    AppBuildAndReleaseComponent,
    FeatureListComponent
  ],
  imports: [
    RouterModule.forRoot(router),
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
