import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user-service.service';

@Component({
    selector: 'app-edit-user',
    templateUrl: './edit-user.component.html',
    styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
    constructor(
        private userService: UserService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    currentUser;

    ngOnInit() {
        this.currentUser = this.userService
            .getUsers()
            .find(user => user.id === +this.route.snapshot.params['userId']);
    }

    saveUserEdits(editedUser) {
        let storedUser = this.userService.Users.find(
            u => u.id === editedUser.id
        );

        storedUser = editedUser;
        this.router.navigate([this.currentUser.id]);
    }

    cancel() {
        this.router.navigate([this.currentUser.id]);
    }
}
