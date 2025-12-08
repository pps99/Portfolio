import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface SkillGroup {
  title: string;
  items: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skillGroups: SkillGroup[] = [
    {
      title: 'Languages & Core',
      items: ['Ruby', 'Node.js', 'HTML', 'CSS', 'C#', 'JavaScript', 'TypeScript']
    },
    {
      title: 'Frameworks & Libraries',
      items: ['Angular', 'Ruby on Rails', 'Express.js', 'React', 'Nuxt.js', 'Robot Framework']
    },
    {
      title: 'Testing & Automation',
      items: ['Selenium', 'Appium', 'Postman', 'CI/CD integration', 'Automated test suites']
    },
    {
      title: 'Databases & Tools',
      items: ['MySQL', 'MongoDB', 'Snowflake', 'Redis', 'Git', 'Sourcetree']
    },
    {
      title: 'Soft Skills',
      items: [
        'Excellent communication',
        'Strong problem-solving',
        'Works well under pressure',
        'Adaptable to new tech',
        'Effective time management'
      ]
    }
  ];
}
