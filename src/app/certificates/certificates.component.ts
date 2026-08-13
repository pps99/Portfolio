import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Certificate {
  title: string;
  track: string;
  topics: string[];
  year: string;
  description: string;
}

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css'
})
export class CertificatesComponent {
  certificates: Certificate[] = [
    {
      title: 'AI Coder: Complete Claude Code & Coding Agents Course',
      track: 'AI-Assisted Development',
      topics: ['Claude Code', 'Coding Agents', 'AI Workflows', 'Prompt Engineering'],
      year: '2026',
      description: 'Practical course covering AI-assisted software development using Claude Code and autonomous coding agents — applied directly to real-world development workflows.'
    },
    {
      title: 'AI Engineer Core Track',
      track: 'Artificial Intelligence & Machine Learning',
      topics: ['LLM Engineering', 'Retrieval-Augmented Generation (RAG)', 'QLoRA Fine-tuning', 'AI Agents'],
      year: '2026',
      description: 'Comprehensive certification covering modern AI engineering practices — from building and fine-tuning large language models to designing autonomous AI agents and production-ready RAG pipelines.'
    },
    {
      title: 'AWS AI & ML Scholars - 2026 Challenge Completion',
      track: 'Cloud AI & Machine Learning',
      topics: ['AWS AI', 'Machine Learning', 'Cloud Fundamentals', 'AI Applications'],
      year: '2026',
      description: 'Challenge completion focused on AI and machine learning concepts in AWS-oriented cloud environments.'
    }
  ];
}
