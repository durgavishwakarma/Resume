import { Component ,Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  
  @Input() Info:any
  @Input() address:any
  @Input() titleData:any
  @Input() mobileNumber:any
  @Input() linkedin:any
  @Input() github:any




}
