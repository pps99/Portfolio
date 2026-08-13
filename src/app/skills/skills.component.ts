import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface SkillGroup {
  title: string;
  icon: string;
  items: string[];
  summary: string;
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
      summary: 'Core languages used across web apps, APIs, AI services, and database work.',
      items: ['C#', 'JavaScript', 'TypeScript', 'Python', 'SQL', 'Ruby']
    },
    {
      title: 'Frontend',
      icon: '⬡',
      summary: 'Production UI development with component architecture and API integration.',
      items: ['Angular', 'React', 'Nuxt.js', 'HTML5', 'CSS3', 'REST API Integration']
    },
    {
      title: 'Backend',
      icon: '⚙',
      summary: 'API-first backend development across .NET, Node, Python, and Rails systems.',
      items: ['ASP.NET Core', '.NET 8', 'Node.js', 'Express.js', 'FastAPI', 'Ruby on Rails', 'REST APIs']
    },
    {
      title: 'Databases',
      icon: '◈',
      summary: 'Relational, document, cache, warehouse, and vector storage for modern apps.',
      items: ['SQL Server', 'MySQL', 'MongoDB', 'Redis', 'Snowflake', 'ChromaDB', 'Vector Databases']
    },
    {
      title: 'Architecture & APIs',
      icon: '◇',
      summary: 'System design patterns for clean, maintainable, deployable services.',
      items: ['Microservices', 'Clean Architecture', 'Authentication', 'Authorization', 'API-driven Development', 'Docker Compose']
    },
    {
      title: 'Testing & Automation',
      icon: '✓',
      summary: 'Automation coverage for web, mobile, backend workflows, and release confidence.',
      items: ['Selenium', 'Appium', 'Robot Framework', 'Postman', 'CI/CD Integration']
    },
    {
      title: 'AI & Machine Learning',
      icon: '◎',
      summary: 'Applied AI engineering with retrieval, agents, embeddings, and LLM workflows.',
      items: ['LLM Engineering', 'Retrieval-Augmented Generation (RAG)', 'LangGraph', 'ChromaDB', 'AI Agents', 'Prompt Engineering']
    },
    {
      title: 'Tools & DevOps',
      icon: '⊞',
      summary: 'Daily development, deployment, debugging, and collaboration tools.',
      items: ['Git', 'Docker', 'Postman', 'CI/CD', 'VS Code', 'Cursor', 'Vercel']
    },
  ];
}
