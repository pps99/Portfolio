import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  name: string;
  description: string;
  tech: string[];
  highlight: string;
  link?: string;
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
      name: 'Expense Tracker',
      description:
        'Feature-rich expense tracking application with interactive data visualizations, real-time updates, and local storage persistence. Allows users to manage their finances with category-based analysis, monthly trends, and comprehensive dashboard analytics.',
      tech: ['Angular 18', 'TypeScript', 'Chart.js', 'RxJS', 'Local Storage API'],
      highlight:
        'Implemented standalone component architecture, reactive state management with RxJS, and integrated Chart.js for dynamic data visualizations with doughnut and bar charts.',
      link: 'https://expense-tracker-dun-eta-15.vercel.app/'
    },
    {
      name: 'Online Cake Ordering Platform',
      description:
        'Full-stack platform for ordering cakes online with user and admin dashboards, real-time updates, and balance management.',
      tech: ['Nuxt.js', 'Ruby on Rails', 'MySQL', 'WebSocket'],
      highlight:
        'Designed and implemented authentication, profile management, and admin flows.',
      link: 'https://github.com/pps99/uni_project/tree/master'
    },
    {
      name: 'Cake Shop Website (Angular)',
      description:
        'A responsive cake shop web application built with Angular that allows users to browse products and place orders.',
      tech: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      highlight:
        'Focus on clean UI, reusable components, and a simple ordering experience.',
      link: 'https://github.com/pps99/Cake_Shop_Web_With-Angular'
    },
    {
      name: 'OldPhone Text Converter',
      description:
        'Converts old mobile keypad input into text using multi-press logic, supporting backspace, send, and pauses between characters.',
      tech: ['C#', '.NET', 'Console App'],
      highlight:
        'Implements full keypad mapping, multi-press interpretation, backspace, and send functionality.',
      link: 'https://github.com/pps99/OldPhone'
    },
    {
      name: 'Automation Frameworks',
      description:
        'Reusable automation suites for web and mobile apps using Selenium, Robot Framework, and Appium.',
      tech: ['Selenium', 'Robot Framework', 'Appium', 'CI/CD'],
      highlight:
        'Improved regression testing speed and stability across multiple projects.',
    }
  ];
}
