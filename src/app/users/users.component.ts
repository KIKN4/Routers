import { Component, inject } from '@angular/core';
import { User } from '../user.model';
import { UsersServiceService } from '../users-service.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { CommonModule, ɵnormalizeQueryParams } from '@angular/common';

type Sort = 'Age' | 'FirstName' | 'LastName' | 'ExpYears';
type Direction = 'asc' | 'desc';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  sortBy: Sort = 'Age';
  sortByOptions = ['Age', 'FirstName', 'LastName', 'ExpYears'];
  sortDirection: Direction = 'asc';
  sortDirOptions = ['asc', 'desc'];
  users: User[] = this.usersService.getAllUsers();

  constructor(
    private usersService: UsersServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParams
      .pipe(takeUntilDestroyed())
      .subscribe((queryParams) => {
        const unsortedUsers = this.usersService.getAllUsers();
        const sortBy = queryParams['sortBy'];
        const direction = queryParams['Direction'];
        this.users = this.sortUsers(unsortedUsers, sortBy, direction);
      });
  }

  sortUsers(users: User[], sortBy: Sort, direction: Direction) {
    if (sortBy === 'Age') {
      if (direction === 'asc') {
        return users.sort((a, b) => a.age - b.age);
      } else {
        return users.sort((a, b) => b.age - a.age);
      }
    } else if (sortBy === 'FirstName') {
      if (direction === 'asc') {
        return users.sort((a, b) => a.firstName.localeCompare(b.firstName));
      } else {
        return users.sort((a, b) => b.firstName.localeCompare(a.firstName));
      }
    } else if (sortBy === 'LastName') {
      if (direction === 'asc') {
        return users.sort((a, b) => a.lastName.localeCompare(b.lastName));
      } else {
        return users.sort((a, b) => b.lastName.localeCompare(a.lastName));
      }
    } else {
      if (direction === 'asc') {
        return users.sort((a, b) => a.experienceYears - b.experienceYears);
      } else {
        return users.sort((a, b) => b.experienceYears - a.experienceYears);
      }
    }
  }

  changeSort(newSortBy: string, newDirection: string) {
    this.router.navigate(['users'], {
      queryParams: { sortBy: newSortBy, Direction: newDirection },
    });
  }
}
