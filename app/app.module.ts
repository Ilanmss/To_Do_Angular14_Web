import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/to-do.component';
import { DoingComponent } from './doing/doing.component';
import { DoneComponent } from './done/done.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    DoingComponent,
    DoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  exports:[
    ToDoComponent,
    DoingComponent,
    DoneComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
