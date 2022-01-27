import { Component, OnInit } from '@angular/core';
import { FirebaseserviceService } from '../firebaseservice.service'
import { Medication } from '../medication'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addmedicationview',
  templateUrl: './addmedicationview.component.html',
  styleUrls: ['./addmedicationview.component.css']
})
export class AddmedicationviewComponent implements OnInit {

  constructor(private firebaseService: FirebaseserviceService) { }

  medToAdd: Medication = {
    giver: 'Vicki',
    animal: 'Rumour',
    date: new Date()
  };

  done(){
    // Need to update date just before post
    this.medToAdd.date = new Date();
    
    if (this.medToAdd.giver == '') {
      this.medToAdd.giver = 'Vicki';
    }
    if (this.medToAdd.animal == '') {
      this.medToAdd.animal = 'Rumour';
    }
    this.firebaseService.addMeds(this.medToAdd);
  }

  ngOnInit(): void {
  }

}
