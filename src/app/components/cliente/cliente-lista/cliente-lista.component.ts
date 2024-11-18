import { Component } from '@angular/core';
import { AccessRoutingModule } from '../../auth/access/access-routing.module';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-cliente-lista',
  standalone: true,
  imports: [
    AccessRoutingModule,
    ButtonModule
  ],
  templateUrl: './cliente-lista.component.html',
  styleUrl: './cliente-lista.component.scss'
})
export class ClienteListaComponent {

}
