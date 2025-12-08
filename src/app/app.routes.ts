import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'experience',
        component: ExperienceComponent
    },
    {
        path: 'skills',
        component: SkillsComponent
    },
    {
        path: 'projects',
        component: ProjectsComponent
    },
    {
        path: '',
        component: AboutComponent
    }
];
