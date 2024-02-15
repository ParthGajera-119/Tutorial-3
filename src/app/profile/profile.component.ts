import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userData: any;

  constructor(private router: Router) { 
    const navigation = this.router.getCurrentNavigation();
    this.userData = navigation?.extras.state?.['data']; // Fix: Access 'data' property using square brackets
  }

  ngOnInit(): void {}
}
