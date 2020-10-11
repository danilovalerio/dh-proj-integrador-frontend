import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "10px 10px";
        document.getElementById("logo").style.width = "150px";
      } else {
        document.getElementById("navbar").style.padding = "20px 10px";
        document.getElementById("logo").style.width = "170px";
      }
    }

    function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }

    const menuBtn = document.querySelector('.menu-btn');
    let menuOpen = false;
    menuBtn.addEventListener('click', () => {
      if(!menuOpen){
          menuBtn.classList.add('open');
          menuOpen = true;
      }else{
          menuBtn.classList.remove('open');
          menuOpen = false;
      }
    });

  }

}
