import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-newdog',
  templateUrl: './newdog.component.html',
  styleUrls: ['./newdog.component.css']
})
export class NewdogComponent implements OnInit {
  newdog:any
  errors:object 
  constructor(private httpService:HttpService, private main: AppComponent) { }

  ngOnInit() {
    this.resetform();
  }
  resetform=()=>this.newdog={name:'',url:''}

  createDog=()=>{
    this.errors={};
    this.httpService.createDog(this.newdog)
    .subscribe( data => {
        if(data['errors']){console.log(data); this.errors = data;}
        else{ 
          this.resetform(); 
          this.main.getDogs();
        }})
    }
  

}
