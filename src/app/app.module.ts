import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CountryService } from './service/country.service';
import { CustomerService } from './service/customer.service';
import { EventService } from './service/event.service';
import { IconService } from './service/icon.service';
import { NodeService } from './service/node.service';
import { PhotoService } from './service/photo.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [AppComponent, NotfoundComponent],
    imports: [
        AppRoutingModule, 
        AppLayoutModule,
        HttpClientModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        {provide: JWT_OPTIONS, useValue : JWT_OPTIONS},
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService,JwtHelperService,
        
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';

