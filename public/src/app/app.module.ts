import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DogComponent } from './dog/dog.component';
import { NewdogComponent } from './newdog/newdog.component';
import { StupidcomponentComponent } from './stupidcomponent/stupidcomponent.component';

@NgModule({
  // components go in here
  declarations: [ 
    AppComponent, DogComponent, NewdogComponent, StupidcomponentComponent,
  ],
  // module imports in here
  imports: [
    BrowserModule ,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
