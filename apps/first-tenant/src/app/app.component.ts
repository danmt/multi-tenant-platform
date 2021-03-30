import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';

@Component({
  selector: 't1-root',
  template: `<router-outlet></router-outlet>`,
  styles: [],
})
export class AppComponent implements OnInit {
  constructor(private angularFireFunctions: AngularFireFunctions) {}

  ngOnInit() {
    this.angularFireFunctions.httpsCallable('ping')({}).subscribe();
  }
}
