import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab4',
  templateUrl: './lab4.component.html',
  styleUrls: ['./lab4.component.css']
})
export class Lab4Component implements OnInit {
  numbs = [1,2,3,4,5,6,7,8,9,10];
  isOdd = true;
  evenNum:string = 'Even-';
  oddNum:string = 'Odd-';

  constructor() { }
  
  ngOnInit(): void {
  }

}
