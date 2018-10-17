import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({providedIn: 'root'})

export class HttpService {

  constructor(private _http:HttpClient) { }

  // api service 
  getDogs=()=> 
    this._http.get('/dogs');

  getSingleDog=(dogid)=> 
    this._http.get('/dogs/'+dogid);

  createDog=(Dog)=>
    this._http.post('/dogs', Dog);

  deleteDog=(dogid)=>
    this._http.delete('/dogs/'+dogid);

  editDog=( dogid, editabledog )=>
    this._http.put( '/dogs/'+dogid, editabledog );  

  createRating=( dogid, newrating )=>
    this._http.put( '/dogs/ratings/'+dogid, newrating );  

}

// app.get('/dogs', api.index)
// app.get('/dogs/:dogid', api.showDog)
// app.post('/dogs', api.newDog)
// app.delete('/dogs/:dogid', api.removeDog)
// app.put('/dogs/:dogid', api.updateDog)
// app.post('/dogs/ratings/:dogid', api.newRating)