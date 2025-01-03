import { Component, OnInit } from '@angular/core';
//import { Component, Input } from '@angular/core';
//import { ApiService } from '../service/api.service';
//import { ActivatedRoute, RouterLink } from '@angular/router';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UpperCasePipe } from '@angular/common';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-pokemon-detail',
  imports: [RouterLink],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css',
})
export class PokemonDetailComponent implements OnInit {
  //@Input('id') name!: string;
  data: any = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('id');
    if (name) {
      this.apiService.getdatalist().subscribe((data: any) => {
        this.data = data;
        console.log(this.data);
      });
    }
  }
}
