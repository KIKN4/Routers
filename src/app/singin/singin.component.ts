import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-singin',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './singin.component.html',
  styleUrl: './singin.component.css',
})
export class SinginComponent {
  container = 'container';
  register = 'register';
  loginBtn = 'login';
  classList = 'container';

  addActive() {
    this.classList = 'container active';
  }

  removeActive() {
    this.classList = 'container';
  }
}
