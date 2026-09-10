import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects implements OnInit, OnDestroy {

  // Stores the currently visible image index for each project.
  currentImageIndexes: number[] = [];

  private carouselInterval?: ReturnType<typeof setInterval>;

  projects = [
    {
      number: '01',

      images: [
        '/projects/shopnow-1.png',
        '/projects/shopnow-2.png',
        '/projects/shopnow-3.png'
      ],

      name: 'ShopNow — E-Commerce Website',

      description:
        'A responsive e-commerce platform with product discovery, search, filtering, sorting, category browsing, cart & quantity management, wishlist, coupons, dynamic pricing, order management, warehouse features and more.',

      technologies: [
        'HTML5',
        'CSS3',
        'JavaScript'
      ],

      features: [
        'Product search, filtering & categories',
        'Cart, wishlist, Save for Later & coupons',
        'Order/account & warehouse management',
        'Responsive design (desktop & mobile)',
        'Deployed on Vercel'
      ],

      github: '#',

      demo:
        'https://shopnow-new-git-main-zeyadakarimi-2973s-projects.vercel.app/'
    },

    {
      number: '02',

      images: [
        '/projects/task-management-1.png',
        '/projects/task-management-2.png',
        '/projects/task-management-3.png'
      ],

      name: 'Task Management System — Training Project',

      description:
        'An Angular-based task management system with complete CRUD functionality, task status and due-date management, reactive forms, custom validation, routing, and centralized task state management.',

      technologies: [
        'Angular',
        'TypeScript',
        'HTML5',
        'CSS3'
      ],

      features: [
        'Create, view, edit and delete tasks',
        'Task status, due date & date-picker',
        'Reactive Forms with custom validation',
        'Angular routing & query parameters',
        'ViewChild & AfterViewInit implementation',
        'Responsive interface'
      ],

      github: '#',

      demo:
        'https://task-management-system-roan-five.vercel.app/'
    },

    {
      number: '03',

      images: [
        '/projects/portfolio-1.png',
        '/projects/portfolio-2.png',
        '/projects/portfolio-3.png'
      ],

      name: 'Developer Portfolio Website',

      description:
        'A personal developer portfolio built using Angular and TypeScript to showcase technical skills, education, projects and professional information with a clean and responsive design.',

      technologies: [
        'Angular',
        'TypeScript',
        'HTML5',
        'CSS3'
      ],

      features: [
        'Showcases skills, projects & professional information',
        'Clean and modern UI/UX',
        'Responsive design for desktop and mobile',
        'Angular component-based architecture',
        'Deployed on Vercel'
      ],

      github: '#',

      demo:
        'https://zeyad-portfolio-sand.vercel.app/'
    }
  ];

  ngOnInit(): void {

    // Start every project from its first preview image.
    this.currentImageIndexes = this.projects.map(() => 0);

    // Automatically switch project previews every 3 seconds.
    this.carouselInterval = setInterval(() => {

      this.currentImageIndexes = this.currentImageIndexes.map(
        (currentIndex, projectIndex) => {

          const totalImages =
            this.projects[projectIndex].images.length;

          return (currentIndex + 1) % totalImages;
        }
      );

    }, 3000);
  }

  ngOnDestroy(): void {

    // Clear the interval when the component is destroyed.
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
  }
}