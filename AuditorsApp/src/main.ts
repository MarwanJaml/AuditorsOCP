
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { provideRouter } from '@angular/router';
import { ManagerComponent } from './app/manager/manager.component';
import { ManagerFormComponent } from './app/manager-form/manager-form.component';
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', redirectTo: 'app-manager', pathMatch: 'full' }, 
      { path: 'app-manager', component: ManagerComponent },
      { path: 'app-manager-form', component: ManagerFormComponent },
    ]),
    provideHttpClient(),
    provideAnimations(), // required animations providers
    provideToastr(), // Toastr providers
  ],
}).catch(err => console.error(err));

