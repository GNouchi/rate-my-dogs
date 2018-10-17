import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {
  @Input() dog:any
  rating:any
  err:object 

  constructor(private httpService: HttpService, private main: AppComponent) {
    this.resetRating();    
   }
  ngOnInit() {  }
  setDog=(dog)=> this.main.setDog(dog);
  resetRating=()=> this.rating={rating:1, comment:""}

  deleteDog=()=> this.httpService.deleteDog(this.dog._id)
    .subscribe(()=> this.main.getDogs())

  createRating=()=> this.httpService.createRating( this.dog['_id'], this.rating )
    .subscribe(data=>{
        if(data['errors']){console.log(data); this.err = data;}
        else{ 
          this.resetRating() 
          this.main.setDog(this.dog._id);
        }
    })


}
