import { Component } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from "./experience/experience.component";
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pps-portfolio';
}


// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { HeroComponent } from './hero/hero.component';
// import { SkillsComponent } from './skills/skills.component';
// import { ExperienceComponent } from './experience/experience.component';
// import { ProjectsComponent } from './projects/projects.component';
// import { ContactComponent } from './contact/contact.component';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [
//     CommonModule,
//     HeroComponent,
//     SkillsComponent,
//     ExperienceComponent,
//     ProjectsComponent,
//     ContactComponent
//   ],
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent { }
