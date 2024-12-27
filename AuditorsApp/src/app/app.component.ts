import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
@Component({
  selector: 'app-root',
  imports: [ HttpClientModule,HeaderComponent,RouterOutlet], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AuditorsApp';
}
