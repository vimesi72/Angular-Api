import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  data: any = {};

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    //this.llenarData();
    this.apiService.getdata().subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }

  //llenarData() {}
}
