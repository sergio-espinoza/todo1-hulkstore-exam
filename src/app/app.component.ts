import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'hulStore';

  constructor(
    private afAuthvc: AngularFireAuth
  ) {  }

  ngOnInit(): void {
    this.afAuthvc.signInWithEmailAndPassword('48479567.sjep@gmail.com', '123456789').then(
      console.log
    );
  }
}
