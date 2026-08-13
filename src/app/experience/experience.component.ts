import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ExperienceItem {
  role: string;
  company: string;
  company_site_link: string;
  location: string;
  period: string;
  type: string;
  points: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences: ExperienceItem[] = [
    {
      role: 'Software Automation Engineer',
      company: 'RED LAMP',
      company_site_link: 'https://www.redlamp.tech/#/',
      location: 'Bangkok, Thailand',
      period: 'Dec 2024 – Apr 2026',
      type: 'Full-time',
      points: [
        'Developed and maintained automated testing frameworks for web and mobile applications using Selenium, Robot Framework, and Appium.',
        'Designed reusable automation components that reduced manual testing effort and improved regression testing efficiency.',
        'Validated REST APIs and backend workflows using Postman and automated test suites.',
        'Collaborated with software engineers to identify defects, improve software quality, and support production releases.',
        'Participated in requirement analysis, test planning, and CI/CD testing activities throughout the software development lifecycle.'
      ]
    },
    {
      role: 'Web Developer',
      company: 'MetaTeam Myanmar Co. Ltd',
      company_site_link: 'https://metateammyanmar.com/',
      location: 'Yangon, Myanmar',
      period: 'Apr 2022 – Apr 2024',
      type: 'Full-time',
      points: [
        'Developed and maintained enterprise web applications using Angular, Ruby on Rails, Node.js, JavaScript, and SQL.',
        'Designed and implemented RESTful APIs, authentication modules, and business workflows for client systems.',
        'Built frontend interfaces and backend services while improving system performance, security, and maintainability.',
        'Optimized database queries and resolved performance bottlenecks to improve application responsiveness.',
        'Collaborated with cross-functional teams using Git workflows, code reviews, and Agile practices.',
        'Participated in requirement discussions, technical design, implementation, testing, and deployment activities.'
      ]
    },
    {
      role: 'Full-Stack Developer — University Capstone',
      company: 'MetaTeam Myanmar Co. Ltd',
      company_site_link: 'https://metateammyanmar.com/',
      location: 'Yangon, Myanmar',
      period: 'May 2023 – Sep 2023',
      type: 'Capstone Project',
      points: [
        'Designed and built a full-stack online cake ordering platform using Nuxt.js (frontend) and Ruby on Rails (backend).',
        'Implemented JWT-based authentication, role-based access control, and balance recharge functionality.',
        'Engineered an admin dashboard for order management, inventory control, balance approvals, and real-time sales analytics.',
        'Integrated WebSocket-based real-time notifications, significantly improving admin response times.'
      ]
    },
    {
      role: 'Junior Developer Trainee',
      company: 'BIB Training Center',
      company_site_link: 'https://school.bib-mm.com/',
      location: 'Yangon, Myanmar',
      period: 'Dec 2021 – Apr 2022',
      type: 'OJT Program',
      points: [
        'Completed intensive hands-on training in HTML5, CSS3, jQuery, and Ruby on Rails, building production-ready CRUD applications.',
        'Delivered a full-stack group capstone project applying MVC architecture, responsive design principles, and Git-based collaboration.'
      ]
    }
  ];
}
