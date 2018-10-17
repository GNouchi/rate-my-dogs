import { Component } from '@angular/core';
import { HttpService } from './http.service';
const FgYellow = "\x1b[33m\x1b[1m",
      makeTable = (arr, header = '.......┬─┬⃰͡ (ᵔᵕᵔ͜ )')=>{ console.log(header); console.table(arr); }


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dogs:any;
  selecteddog:any;

  constructor (private _httpService: HttpService){ this.getDogs(); }

  getDogs=()=> this._httpService.getDogs()
    .subscribe( data => { this.dogs = data; makeTable(this.dogs); })

  setDog=(dogid:string)=> this._httpService.getSingleDog(dogid)
    .subscribe ( data => {
      this.selecteddog = data;
      this.selecteddog.avgrating = (data['ratings'].length > 0)
      ? data['ratings']
        .map( ( {rating}: obj )=> rating )
        .reduce( (total, current) => total + current)/data['ratings'].length
      :null;
    })    

}



  // // api service 
  // getDogs=()=> this._http.get('/dogs');
  // getSingleDog=(dogid)=> this._http.get('/dogs/'+dogid);
  // createDog=(Dog)=> this._http.post('/dogs', Dog);
  // deleteDog=(dogid)=> this._http.delete('/dogs/'+dogid);
  // editDog=( dogid, editabledog )=> this._http.put( '/dogs/'+dogid, editabledog );  
  // createReview=( dogid, newreview )=> this._http.put( '/dogs/ratings/'+dogid, newreview );  