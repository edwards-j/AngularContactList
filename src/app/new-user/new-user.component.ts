import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-new-user',
    templateUrl: './new-user.component.html',
    styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
    newContact;
    constructor(private userService: UserService, private router: Router) {}

    ngOnInit() {}

    saveNewContact(newUser: NgForm) {
        this.userService.saveNewUser(newUser);
    }

    cancel() {
        this.router.navigate((['']))
    }
}
