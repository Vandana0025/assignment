import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'airtel-theme';

  navLinks = [
    {label:'supervisor_account', path: '/profile'},
    {label:'dashboard', path: '/dashboard'},
    {label:'memory', path: '/setting'},
    {label:'help_outline', path: 'help'}
  ]
}
