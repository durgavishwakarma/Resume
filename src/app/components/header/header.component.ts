import { Component,Input } from '@angular/core';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() headerData: any;
  ngOnInit() {
    
console.log('ddd',this.headerData)
  }
}
