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
    {label:'supervisor_account', path: '/example1'},
    {label:'dashboard', path: '/dashboard'},
    {label:'memory', path: '/example2'},
    {label:'help_outline', path: '/exmaple1'}
  ]
}
