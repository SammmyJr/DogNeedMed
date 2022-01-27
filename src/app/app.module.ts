import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { HistoryviewComponent } from './historyview/historyview.component';
import { TodayviewComponent } from './todayview/todayview.component';
import { AddmedicationviewComponent } from './addmedicationview/addmedicationview.component';


@NgModule({
  declarations: [
    AppComponent,
    HistoryviewComponent,
    TodayviewComponent,
    AddmedicationviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
