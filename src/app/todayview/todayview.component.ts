import { Component, OnInit } from '@angular/core';
import { FirebaseserviceService } from '../firebaseservice.service'
import { Medication } from '../medication'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todayview',
  templateUrl: './todayview.component.html',
  styleUrls: ['./todayview.component.css']
})
export class TodayviewComponent implements OnInit {
  hadMeds: boolean = false;
  loadedMeds: boolean = false;
  orderedMeds: Medication[];
  constructor(private firebaseService: FirebaseserviceService) { }

  ngOnInit(): void {
    this.firebaseService.getMeds().subscribe((res: Medication[]) => {
      var sortedMeds: Medication[] = res.sort((n1, n2) => { // Sorts Medication array via Medications date
        if (n1.date > n2.date) {
          return -1;
        }
        if (n1.date < n2.date) {
          return 1;
        }
        return 0;
      })

      this.loadedMeds = true;

      try {
        if (res[0].date.toDate().getDate() === new Date().getDate()) {
          this.hadMeds = true;
        }
      } catch {
        console.log('Nothing in Firestore!');
      }
    })
  }
}
