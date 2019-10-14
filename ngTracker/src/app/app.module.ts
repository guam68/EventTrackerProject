import { CatchService } from './services/catch.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatchListComponent } from './components/catch-list/catch-list.component';
import { HttpClientModule } from '@Angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CatchListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CatchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
