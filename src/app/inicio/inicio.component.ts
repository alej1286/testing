import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { DataService } from '../data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  
  datos: Post[];

  constructor (private dataservice: DataService){
    this.dataservice.getData().subscribe(data=>{
      this.datos =data;
    });
  }

  ngOnInit() {
  }

}
