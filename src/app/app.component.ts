import { Component, input, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as data  from'../assets/data.json';
import { ContactComponent } from './components/contact/contact.component';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { EducationComponent } from './components/education/education.component';
import { ListComponent } from './components/list/list.component';
import { ProjectsComponent } from './components/projects/projects.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProjectsComponent,ContactComponent,CommonModule,EducationComponent,ListComponent,HeaderComponent,AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  appData: any;
  // aboutData: string;
  constructor(){
    this.appData= data;
    // this.aboutData = this.appData.About;
  }
  ngOnInit() {
console.log('dd',this.appData)

  }

}

