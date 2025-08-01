import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'portfolio';

  constructor(private router: Router) {}

  goTo(path: string) {
    this.router.navigate([`/${path}`]);
  }
}
