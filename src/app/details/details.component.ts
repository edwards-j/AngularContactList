import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  currentUser;
  showAddress = false;

  ngOnInit() {
    this.currentUser = this.userService
      .getUsers()
      .find(user => user.id === +this.route.snapshot.params['userId']);
  }

  toggleAddress() {
    const answer = this.showAddress ? false : true;
    this.showAddress = answer;
  }

  goBack() {
    this.router.navigate(['']);
  }
}
