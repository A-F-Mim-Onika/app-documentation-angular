import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  ngOnInit(): void {

    window.onresize = function () {
      
      if (window.innerWidth > 1200) {
        $(".topnav-list").css("display", "block");
        $("aside").css("display", "block");
        $(".sidenav").css("display", "block");

      }

      else {

        $("aside").css("display", "none");
        $(".table").removeClass("table-after");
        $(".sidenav").css("display", "none");

      }
    };

  }





}


