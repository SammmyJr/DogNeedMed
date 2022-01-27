import { Injectable } from '@angular/core';
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc
} from '@angular/fire/firestore';
import { Medication } from './medication';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseserviceService {
  constructor(private firestore: Firestore) { }

  addMeds(med: Medication) {
    const medRef = collection(this.firestore, 'meds'); 
    return addDoc(medRef, med);
  }

  getMeds(): Observable<Medication[]> {
   const medRef = collection(this.firestore, 'meds');
   return collectionData(medRef, { idField: 'id' }) as Observable<Medication[]>;
 }

  /*async getOrderedMeds(): Promise<Medication[]> {
    await this.getMeds().subscribe((res: Medication[]) => {
        var sortedMeds: Medication[] = res.sort((n1, n2) => { // Sorts Medication array via Medications date
          if (n1.date > n2.date) {
            return -1;
          }
          if (n1.date < n2.date) {
            return 1;
          }
          return 0;
        });
        return res;
      })
  }*/
}
