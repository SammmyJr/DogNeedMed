import { Component, OnInit } from '@angular/core';
import { FirebaseserviceService } from '../firebaseservice.service'
import { Medication } from '../medication'
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-historyview',
  templateUrl: './historyview.component.html',
  styleUrls: ['./historyview.component.css']
})
export class HistoryviewComponent implements OnInit {
  meds: Medication[] = [];

  constructor(private firebaseService: FirebaseserviceService) { }

  async ngOnInit(): Promise<void> {
  //this.allMeds = this.firebaseService.getMeds(); Does not work, silly
  this.firebaseService.getMeds().subscribe((res: Medication[]) => {
      var sortedMeds: Medication[] = res.sort((n1, n2) => { // Sorts Medication array via Medications date
        if (n1.date > n2.date) {
          return -1;
        }
        if (n1.date < n2.date) {
          return 1;
        }
        return 0;
      });
      this.meds = res;
    })
  }
}
