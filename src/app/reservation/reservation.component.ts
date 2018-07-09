import { Component, OnInit } from '@angular/core';
//import {book}  from '../reservation/book';
import arr from '../array.component'

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {


  constructor() { }



  ngOnInit() {
  }

///method//;
 Book (fname,lname,phone,phone2,email,gender,checkinDay,checkinTime,checkoutDate,checkoutTime,Room,adults,children) {

  arr.push(fname);
  arr.push(lname);
  arr.push(phone);
  arr.push(phone2);
  arr.push(email);
  arr.push(gender);
  arr.push(checkinDay);
  arr.push(checkinTime);
  arr.push(checkoutDate);
  arr.push(checkoutTime);
  arr.push(Room);
  arr.push(adults);
  arr.push(children);
  
  console.log(arr); //save to array n display on console

   //alert("...THANKS FOR BOOKING @ OUR HOTEL..."); //dispay on alert
  }
}
