import { Component, OnInit } from '@angular/core';
import { Address } from '../../models/address';
import { Post } from '../../models/post';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string = 'Anand Musaddi';
  age:number = 31;
  email:string = 'anandm508@gmail.com';
  address:Address = {
    addressLine1 : 'Flat 3C',
    addressLine2 : 'Bangalaxmi Abasan',
    state : 'WB',
    country : 'IND'
  };
  hobbies:string[] = ['watching movies', 'playing football', 'driving'];
  posts:Post[];

  constructor(private dataService:DataService) { 

    
  }

  ngOnInit() {
    this.dataService.getPosts().subscribe(posts=>{
      this.posts = posts;
    });
  }

  onClick(){
    this.hobbies.push("Criket");
  }

  onSubmit(){

  }

}

