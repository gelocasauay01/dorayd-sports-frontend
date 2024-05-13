import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './Login.component.html',
  styleUrl: './Login.component.scss'
})
export class Logincomponent {
  title = 'sports_dashboard_frontend';
}
