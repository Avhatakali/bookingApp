import { Component, OnInit } from '@angular/core';
import arr from '../array.component'



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // memory allocation
  fname=arr[0]
  lname=arr[1]
  phone=arr[2]
  phone2=arr[3]
  email=arr[4]
  gender=arr[5]
  checkinDay=arr[6]
  checkinTime=arr[7]
  checkoutDate=arr[8]
  checkoutTime=arr[9]
  Room=arr[10]
  adults=arr[11]
  children=arr[12]
}
