import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-build-and-release',
  templateUrl: './app-build-and-release.component.html',
  styleUrls: ['./app-build-and-release.component.css']
})
export class AppBuildAndReleaseComponent implements OnInit {

  codeAppBuild1 = `flutter build apk`;
  codeAppBuild2 = `flutter build apk --target-platform android-arm,android-arm64,android-x64 --split-per-abi`;
  codeAppBuild3 = `<project>/build/app/outputs/flutter-apk/`;

  constructor() { }

  ngOnInit(): void {
  }

}
