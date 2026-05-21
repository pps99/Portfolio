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
      items: ['C#', 'JavaScript', 'TypeScript', 'Ruby', 'HTML5', 'CSS3']
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
      items: ['SQL', 'MySQL', 'MongoDB', 'Redis', 'Snowflake']
    },
    {
      title: 'C# / .NET',
      icon: '◇',
      items: ['C#', 'ASP.NET Core', '.NET Framework', 'LINQ', 'Entity Framework Core', 'MVC / Web API', 'REST API Development']
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
  ];
}
