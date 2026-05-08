import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface SkillGroup {
  title: string;
  icon: string;
  items: string[];
  familiar?: boolean;
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
      title: 'Languages',
      icon: '{ }',
      items: ['JavaScript', 'TypeScript', 'Ruby', 'HTML5', 'CSS3']
    },
    {
      title: 'Frontend',
      icon: '⬡',
      items: ['Angular', 'React', 'Nuxt.js', 'Responsive Design', 'REST API Integration']
    },
    {
      title: 'Backend',
      icon: '⚙',
      items: ['Ruby on Rails', 'Node.js (Express)', 'RESTful API Design', 'Authentication & Authorization', 'WebSockets']
    },
    {
      title: 'Databases',
      icon: '◈',
      items: ['MySQL', 'MongoDB', 'Redis', 'Snowflake']
    },
    {
      title: 'Testing & Automation',
      icon: '✓',
      items: ['Selenium', 'Appium', 'Robot Framework', 'Postman', 'CI/CD Integration']
    },
    {
      title: 'AI & Machine Learning',
      icon: '◎',
      items: ['LLM Engineering', 'Retrieval-Augmented Generation (RAG)', 'QLoRA Fine-tuning', 'AI Agents', 'Prompt Engineering']
    },
    {
      title: 'Tools & DevOps',
      icon: '⊞',
      items: ['Git', 'Sourcetree', 'VS Code', 'Cursor', 'Vercel']
    },
    {
      title: 'Familiar With',
      icon: '~',
      items: ['C#', '.NET Framework', 'ASP.NET Core', 'Entity Framework Core'],
      familiar: true
    }
  ];
}
