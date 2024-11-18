import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthService } from '../service/auth.service';
import { Route, Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {

    valCheck: string[] = ['remember'];

    //password!: string;

    usuario = {
        nombre: 'alex',
        password: '1234'
    }

    constructor(
        public layoutService: LayoutService,
        private authService: AuthService,
        private router: Router
    ) { }

    login(){
        this.authService.singin(this.usuario).subscribe((res:any)=>{
            //console.log(res)
            localStorage.setItem('token',res.token)
            this.router.navigate(['/']);
       
        })
        console.log(this.usuario)
    }


}
