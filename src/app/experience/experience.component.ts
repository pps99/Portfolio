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
        'Designed and maintained enterprise-grade automated test frameworks for web applications using Selenium and Robot Framework.',
        'Automated end-to-end mobile application testing with Appium, significantly reducing manual QA effort and regression cycle time.',
        'Integrated automated test suites into CI/CD pipelines, improving release reliability and deployment confidence.',
        'Collaborated cross-functionally with frontend and backend engineers to expand test coverage and elevate software quality standards.'
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
        'Developed and maintained production-grade web applications using modern frontend and backend technologies, ensuring high performance and reliability.',
        'Designed and implemented RESTful backend APIs and responsive frontend features, delivering seamless end-user experiences.',
        'Debugged and resolved critical issues related to performance bottlenecks, data consistency, and application stability.',
        'Established Git-based workflows and code review practices that improved team collaboration and code maintainability.',
        'Authored technical documentation covering system architecture, data flows, and developer onboarding guides.'
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
