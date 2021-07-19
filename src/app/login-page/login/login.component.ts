import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required ]);
  public click: boolean = true;
  public searchUser: string='';
  public searchPassword: string='';

  constructor() {}
 
 

  ngOnInit(): void {}
}
