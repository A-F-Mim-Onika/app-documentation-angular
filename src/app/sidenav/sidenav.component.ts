import { Component, OnInit } from '@angular/core';
import { faBars } from "@fortawesome/free-solid-svg-icons";

// import * from jquery
import * as $ from 'jquery'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  hamburger = faBars;

  constructor() { }

  ngOnInit(): void {


    $(document).ready(function () {
      $(".topics").click(function () {
        $(this).next('.subtopics').slideToggle();
      });
    });

    // $(document).ready(function () {
    //   $(".table").click(function () {
    //     $("aside").slideToggle();
    //     $(".table").toggleClass("table-after");
    //   });
    // });


    $(document).ready(function () {
      $(".sidenav-icon").click(function () {
        $(this).next('.sidenav').slideToggle();
        if ($(".topnav-list").position().left == 0) {
          $('.topnav-list').slideToggle();
          $('.topnav-list').animate({ left: '-100vw' });
          console.log($(".topnav-list").position().left);

        }

      });
    });




  }

}
