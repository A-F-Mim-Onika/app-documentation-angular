import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  codeUpdate1 = `App changes from V1.0 to V1.1`;

  constructor() { }

  ngOnInit(): void {
  }

}
