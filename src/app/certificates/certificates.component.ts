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
      title: 'AI Engineer Core Track',
      track: 'Artificial Intelligence & Machine Learning',
      topics: ['LLM Engineering', 'Retrieval-Augmented Generation (RAG)', 'QLoRA Fine-tuning', 'AI Agents'],
      year: '2025',
      description: 'Comprehensive certification covering modern AI engineering practices — from building and fine-tuning large language models to designing autonomous AI agents and production-ready RAG pipelines.'
    }
  ];
}
