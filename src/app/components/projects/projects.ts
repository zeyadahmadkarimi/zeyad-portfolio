import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

  // Project data is kept centralized to keep the template reusable.
  projects = [
    {
      number: '01',
      image: '/projects/shopnow.png',
      name: 'ShopNow — E-Commerce Website',
      description:
        'A responsive e-commerce platform with product discovery, search, filtering, sorting, category browsing, cart & quantity management, wishlist, coupons, dynamic pricing, order management, warehouse features and more.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      features: [
        'Product discovery, filtering and categories',
        'Cart, wishlist, Save for Later & coupons',
        'Order tracking and refund workflows',
        'Responsive design (desktop & mobile)',
        'Deployed on Vercel'
      ],
      github: '#',
      demo: 'https://shopnow-new-git-main-zeyadakarimi-2973s-projects.vercel.app/'
    },

    {
      number: '02',
      image: '/projects/task-management.png',
      name: 'Task Management System — Training Project',
      description:
        'An Angular-based task management system with complete CRUD functionality, task status and due-date management, reactive forms, custom validation, routing, and centralized task state management.',
      technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3'],
      features: [
        'Create, view, edit and delete tasks',
        'Task status, due date & date-picker',
        'Reactive Forms with custom validation',
        'Angular routing & query parameters',
        'ViewChild & AfterViewInit implementation',
        'Responsive interface'
      ],
      github: '#',
      demo: 'https://task-management-system-roan-five.vercel.app/'
    },

    {
      number: '03',
      image: '/projects/portfolio.png',
      name: 'Developer Portfolio Website',
      description:
        'A personal developer portfolio built using Angular and TypeScript to showcase technical skills, education, projects and professional information with a clean and responsive design.',
      technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3'],
      features: [
        'Showcases skills, projects and professional information',
        'Clean and modern UI/UX',
        'Responsive design for desktop and mobile',
        'Angular component-based architecture',
        'Deployed on Vercel'
      ],
      github: '#',
      demo: 'https://zeyad-portfolio-sand.vercel.app/'
    }
  ];

}