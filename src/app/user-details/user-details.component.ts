import { Component, inject } from '@angular/core';
import { User } from '../user.model';
import { UsersServiceService } from '../users-service.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent {
  getUser!: User;

  constructor(
    private usersService: UsersServiceService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      const user = this.usersService.getUserById(+params['id']);
      if (user) {
        this.getUser = user;
      } else {
        this.getUser = {
          firstName: 'მოცემული იუზერი',
          lastName: 'ვერ მოიძებნა',
          age: 4,
          experienceYears: 0,
          id: 4,
        };
      }
    });
  }
}
