import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ExperienceItem {
  role: string;
  company: string;
  company_site_link: string;
  location: string;
  period: string;
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
      period: 'Dec 2024 – Present',
      points: [
        'Develop and maintain automated test scripts for web apps using Selenium and Robot Framework.',
        'Automate mobile app testing with Appium, reducing manual test effort.',
        'Design and execute test cases integrated into CI/CD pipelines.',
        'Identify and resolve automation challenges to optimise execution time.',
        'Collaborate with developers to increase test coverage and improve software quality.'
      ]
    },
    {
      role: 'Web Developer',
      company: 'MetaTeam Myanmar Co. Ltd',
      company_site_link: 'https://metateammyanmar.com/',
      location: 'Yangon, Myanmar',
      period: 'Apr 2022 – Apr 2024',
      points: [
        'Developed and maintained web applications, focusing on performance and reliability.',
        'Debugged and resolved complex code and data issues impacting system behaviour.',
        'Collaborated closely with teams to identify bugs and improve system stability.',
        'Prepared documentation for system architecture, workflows, and usage guidelines.',
        'Introduced Git-based workflows that improved collaboration and code tracking.'
      ]
    },
    {
      role: 'University Capstone Project',
      company: 'MetaTeam Myanmar Co. Ltd',
      company_site_link: 'https://metateammyanmar.com/',
      location: 'Yangon, Myanmar',
      period: 'May 2023 – Sep 2023',
      points: [
        'Built an online cake ordering platform with Nuxt.js (frontend) and Ruby on Rails (backend).',
        'Implemented authentication, profile management, and balance recharge features.',
        'Designed admin features for orders, balances, items, and sales reporting.',
        'Used WebSocket for real-time updates and notifications.'
      ]
    },
    {
      role: 'OJT Course',
      company: 'BIB Training Center',
      company_site_link: 'https://school.bib-mm.com/',
      location: 'Yangon, Myanmar',
      period: 'Dec 2021 – Apr 2022',
      points: [
        'Completed intensive training in HTML, CSS, jQuery, and Ruby on Rails.',
        'Delivered CRUD assignments and a final group project using Ruby on Rails.'
      ]
    }
  ];
}
