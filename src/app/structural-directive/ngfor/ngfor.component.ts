import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  dssv: any = [
    {ten:"Nguyen" , tuoi: 15},
    {ten:"Teo" , tuoi: 20},
    {ten:"Anh" , tuoi: 25},
    {ten:"Hoa" , tuoi: 30},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
