import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AccessRoutingModule } from '../auth/access/access-routing.module';

@Component({
  selector: 'app-cliente-dashboard',
  standalone: true,
  imports: [
    ButtonModule,
    AccessRoutingModule
  ],
  templateUrl: './cliente-dashboard.component.html',
  styleUrl: './cliente-dashboard.component.scss'
})
export class ClienteDashboardComponent {
  /**
   *
   */
  constructor(
    public _router: Router
  ) {}
}
