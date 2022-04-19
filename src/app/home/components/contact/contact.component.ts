import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

contact=[
  
  {img:"../../../../assets/img/location.svg", colme1:"Country:", colme2:"Egypt",  colme3:"City:",  colme4:"Assiut" , colme5:"Streat:"  ,colme6:"num -3" },
  {img:"../../../../assets/img/mail.svg", colme1:"Email:", colme2:"loukagamal49@gmail.com",  colme3:"linkedin:",  colme4:"@louka-gamal" , colme5:"Telegram:"  ,colme6:"@louka-gamal" },
   {img:"../../../../assets/img/mobile.svg", colme1:"Support services:", colme2:"0884400842",  colme3:"Office::",  colme4:"+201021965734" , colme5:"Personal:"  ,colme6:"+201274834164" }

]
  constructor() { }

  ngOnInit(): void {
  }

}
