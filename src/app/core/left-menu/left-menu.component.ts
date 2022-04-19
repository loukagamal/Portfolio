import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  socialIcon=[
{icon:"assets/img/facebook.svg",liink:"https://www.facebook.com/profile.php?id=100002376861507"},
{icon:"assets/img/instagram.svg",liink:"https://www.instagram.com/loukagamal/"},
{icon:"assets/img/twitter.svg",liink:"https://twitter.com/LoukaGamal2"},
{icon:"assets/img/linkeding.svg",liink:"https://www.linkedin.com/in/louka-gamal/"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
