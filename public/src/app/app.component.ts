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
  title = 'Rate my Dogs';
  dogs = [];
  constructor (private _httpService: HttpService){  }


}
