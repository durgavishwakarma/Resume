import { Component, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as data  from'../assets/data.json'
import { HeaderComponent } from './components/header/header.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  appData: object;
  constructor(){
    this.appData= data;
  }
  ngOnInit() {
  }

}

