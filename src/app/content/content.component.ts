import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import * as _ from 'underscore';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {


  contents: string = "";

  constructor() { }

  ngOnInit(): void {

    const contents = document.querySelectorAll('section');
    const contentList = document.querySelectorAll('aside ul li');
    let current: string | null;

    console.log(contents); 
    console.log(contentList); 

    window.addEventListener('scroll', ()=>{

      contents.forEach(section=>{
        var sectionTop = section.offsetTop;
        sectionTop = sectionTop - 100;

        if(scrollY > sectionTop){
          current = section.getAttribute('id');
          console.log(current); 
      }

      
      })

      
      contentList.forEach(li => {
        li.classList.remove('active');
        if(current != null){
          if(li.classList.contains(current)){
            li.classList.add('active')
            
          }
  

        }
 
      })



      

    } )






    $(document).ready(function () {
      $(".project-list").click(function () {
        $('.topnav-list').animate({ left: '0vw' }, "slow");

      });
    });

    $(document).ready(function () {
      $(".table").click(function () {
        // $(".table").toggleClass("table-after");
        $("aside").slideToggle();
        $(".table").toggleClass("table-after");


      });
    });


  }





}
function querySelectorAll(arg0: string): string {
  throw new Error('Function not implemented.');
}

