import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  name: string;
  description: string;
  tech: string[];
  highlight: string;
  link?: string;
  liveLink?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'Personal Portfolio & AI Digital Twin',
      description:
        'Professionally designed portfolio application showcasing projects, skills, and experience — featuring an AI-powered digital twin chatbot that answers recruiter and visitor questions in real time.',
      tech: ['Angular 18', 'TypeScript', 'OpenRouter AI', 'LLM Integration', 'Vercel'],
      highlight:
        'Integrated a digital twin chatbot backed by a large language model that responds to questions about my background, experience, and skills — a live demonstration of AI engineering applied to a real product.',
      liveLink: 'https://pps99-portfolio.vercel.app/'
    },
    {
      name: 'Expense Tracker',
      description:
        'Feature-rich personal finance application with interactive data visualisations, real-time updates, and local storage persistence — enabling users to track, categorise, and analyse income and expenses.',
      tech: ['Angular 18', 'TypeScript', 'Chart.js', 'RxJS', 'Local Storage API'],
      highlight:
        'Built with standalone component architecture and reactive state management (RxJS), featuring Chart.js-powered doughnut and bar charts for dynamic financial insights.',
      liveLink: 'https://expense-tracker-dun-eta-15.vercel.app/'
    },
    {
      name: 'Online Cake Ordering Platform',
      description:
        'Full-stack e-commerce platform for cake ordering with a user-facing browsing and checkout flow, and a comprehensive admin portal for order management, balance approvals, and sales analytics.',
      tech: ['Nuxt.js', 'Ruby on Rails', 'MySQL', 'WebSocket', 'JWT Auth'],
      highlight:
        'Integrated WebSocket-based real-time notifications for admin alerts, along with role-based access control for both customer and administrator roles.',
      link: 'https://github.com/pps99/uni_project/tree/master'
    },
    {
      name: 'Full-Stack E-commerce Application',
      description:
        'Enterprise-grade e-commerce platform with product management, shopping cart, order processing, and a data-rich admin dashboard with real-time revenue and sales analytics.',
      tech: ['Angular 18', 'TypeScript', 'ASP.NET Core', 'Entity Framework Core', 'SQL Server', 'JWT Auth', 'Chart.js'],
      highlight:
        'Role-based authentication, admin analytics featuring orders/revenue charts and top-selling product rankings, backed by secure RESTful APIs built on ASP.NET Core.',
      link: 'https://github.com/pps99/ecommerce-app/tree/main'
    },
    {
      name: 'OldPhone Text Converter',
      description:
        'C# console application that faithfully converts old mobile T9-era keypad multi-press input sequences into readable text, supporting backspace, send, and character pause logic.',
      tech: ['C#', '.NET', 'Console Application'],
      highlight:
        'Implements complete keypad character mapping, multi-press interpretation, backspace, and send functionality — a clean algorithmic problem solved with precise state management.',
      link: 'https://github.com/pps99/OldPhone'
    },
    {
      name: 'Automation Test Frameworks',
      description:
        'Reusable, maintainable automation suites for web and mobile applications, designed for seamless integration into CI/CD pipelines to improve regression reliability across multiple projects.',
      tech: ['Selenium', 'Robot Framework', 'Appium', 'Python', 'CI/CD'],
      highlight:
        'Reduced regression testing cycle time and improved test stability across multiple production projects by implementing page-object model patterns and data-driven test strategies.'
    }
  ];

  isLive(project: Project): boolean {
    return !!project.liveLink;
  }

  getPrimaryLink(project: Project): string {
    return project.liveLink || project.link || '#';
  }
}
