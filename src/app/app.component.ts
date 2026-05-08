import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ChatbotComponent } from './chatbot/chatbot.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ChatbotComponent],
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
