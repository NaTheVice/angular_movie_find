import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor( private router: Router) { }


  ngOnInit() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../../assets/js/supersized.3.2.7.min.js";
    $("main").append(s);
    
    var d = document.createElement("script");
    d.type = "text/javascript";
    d.src = "../../assets/js/slider.js";
    $("main").append(d);
  }

}
