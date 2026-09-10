import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

  // Centralized project data keeps the template reusable and easy to maintain.
  projects = [
    {
      number: '01',
      name: 'ShopNow',
      type: 'E-Commerce Website',
      description:
        'A full-featured e-commerce platform with product discovery, search, filtering, cart, wishlist, coupons, checkout, order tracking and warehouse management.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],

      // Repository link is kept inactive until public GitHub access is available.
      github: '#',
      demo: 'https://shopnow-new-git-main-zeyadakarimi-2973s-projects.vercel.app/'
    },

    {
      number: '02',
      name: 'Task Management System',
      type: 'Angular Training Project',
      description:
        'An Angular-based task management system featuring complete CRUD operations, reactive forms, custom validation, routing, date handling and centralized task state management.',
      technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3'],
      github: '#',
      demo: 'https://task-management-system-roan-five.vercel.app/'
    },

    {
      number: '03',
      name: 'Developer Portfolio',
      type: 'Personal Portfolio',
      description:
        'A responsive developer portfolio built with Angular and TypeScript to showcase technical skills, education, projects and professional information.',
      technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3'],
      github: '#',
      demo: 'https://zeyad-portfolio-sand.vercel.app/'
    }
  ];

}