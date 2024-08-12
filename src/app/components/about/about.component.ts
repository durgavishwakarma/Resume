import { Component, Input } from '@angular/core';
// import * as data from '../../../assets/data.json'

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  // aboutData :object;
  @Input() Data :any
  @Input() titleData :any

constructor(){
// this.aboutData= data;
}
ngOnInit(){
  
  console.log('ddfd',this.Data);

}
}
