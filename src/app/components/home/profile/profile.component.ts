import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

 name: string ;
 designation: string; 
 phoneNumber: string;
 email: string;
 aboutMe:string;

  constructor() { }

  ngOnInit() {
    this.name= 'Vivek Singh';
    this.designation= 'Software Engineer and Graphic Designer';
    this.phoneNumber= '+91-8475893792'
    this.email= 'viveksinghreborn@gmail.com';
    this.aboutMe='I am a passionate and highly enthusiastic Software Engineer, Graphic and Web designer. Have a strong desire for knowledge and challenges. Thinking outside the box';
  }

}
