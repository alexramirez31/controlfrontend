import { Component } from '@angular/core';
import { AccessRoutingModule } from '../../auth/access/access-routing.module';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-cliente-formulario',
  standalone: true,
  imports: [
    AccessRoutingModule,
    ButtonModule
  ],
  templateUrl: './cliente-formulario.component.html',
  styleUrl: './cliente-formulario.component.scss'
})
export class ClienteFormularioComponent {

}
