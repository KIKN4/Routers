import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Users } from './users';

@Injectable({
  providedIn: 'root',
})
export class UsersServiceService {
  private Users: User[] = Users;

  getAllUsers() {
    return this.Users;
  }

  getUserByAge(age: number) {
    return this.Users.find((user) => user.age === age);
  }

  getUserById(id: number) {
    return this.Users.find((user) => user.id === id);
  }
}
