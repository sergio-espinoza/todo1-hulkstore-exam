import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators as vl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public signInForm = new FormGroup({
    username: new FormControl('', [vl.required, vl.minLength(8), vl.maxLength(11)]),
    password: new FormControl('', [vl.required, vl.minLength(6), vl.maxLength(30)]),
  })

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public signIn(): void {
    this.router.navigate(['/intranet'])
  }

}
