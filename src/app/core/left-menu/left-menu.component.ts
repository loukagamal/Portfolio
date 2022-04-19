import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  socialIcon=[
{icon:"assets/img/facebook.svg",liink:""},
{icon:"assets/img/instagram.svg",liink:""},
{icon:"assets/img/twitter.svg",liink:""},
{icon:"assets/img/linkeding.svg",liink:""},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
