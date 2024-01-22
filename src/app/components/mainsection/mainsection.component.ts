import { Component } from '@angular/core';
import { HomeservicesComponent } from '../homeservices/homeservices.component';
import { OurservicesComponent } from '../ourservices/ourservices.component';
import { HowweworkComponent } from '../howwework/howwework.component';
import { BlogsComponent } from '../blogs/blogs.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-mainsection',
  standalone: true,
  imports: [HomeservicesComponent, OurservicesComponent, HowweworkComponent, BlogsComponent, AboutComponent, ContactComponent],
  templateUrl: './mainsection.component.html',
  styleUrl: './mainsection.component.scss'
})
export class MainsectionComponent {

}
