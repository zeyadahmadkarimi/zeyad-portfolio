import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects implements OnInit, OnDestroy {

  // Project data and preview images used by the project cards.
  projects = [
    {
      number: '01',
      name: 'ShopNow — E-Commerce Website',
      type: 'E-Commerce Website',
      description:
        'A responsive e-commerce platform with product discovery, search, filtering, sorting, category browsing, cart & quantity management, wishlist, coupons, dynamic pricing, order management, warehouse features and more.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      features: [
        'Product search, filtering and categories',
        'Cart, wishlist, Save for Later & coupons',
        'Order/account & warehouse management',
        'Responsive design (desktop & mobile)',
        'Deployed on Vercel'
      ],
      images: [
        '/projects/shopNow/home.png',
        '/projects/shopNow/cart-step1.png',
        '/projects/shopNow/cart-step2.png',
        '/projects/shopNow/cart-step3.png',
        '/projects/shopNow/orderSection.png',
        '/projects/shopNow/footer.png'
      ],
      github: '#',
      demo: 'https://shopnow-new-git-main-zeyadakarimi-2973s-projects.vercel.app/'
    },

    {
      number: '02',
      name: 'Task Management System — Training Project',
      type: 'Angular Training Project',
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
      images: [
        '/projects/taskManagementSystem/homePage.png',
        '/projects/taskManagementSystem/createTask.png',
        '/projects/taskManagementSystem/editTask.png',
        '/projects/taskManagementSystem/viewTask.png',
        '/projects/taskManagementSystem/validation-checker.png',
        '/projects/taskManagementSystem/taskAddedPopup.png',
        '/projects/taskManagementSystem/deleteTask.png'
      ],
      github: '#',
      demo: '#'
    },

    {
      number: '03',
      name: 'Developer Portfolio Website',
      type: 'Personal Portfolio',
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
      images: [
        '/projects/portfolio/portfolio-home.png',
        '/projects/portfolio/about.png',
        '/projects/portfolio/education.png',
        '/projects/portfolio/skills.png',
        '/projects/portfolio/PROJECTS.png',
        '/projects/portfolio/CONTACT.png'
      ],
      github: '#',
      demo: '#'
    }
  ];

  // Stores the currently visible image for each project.
  activeImageIndexes: number[] = [0, 0, 0];

  private imageInterval?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    // Rotate project previews automatically every three seconds.
    this.imageInterval = setInterval(() => {
      this.projects.forEach((project, index) => {
        this.activeImageIndexes[index] =
          (this.activeImageIndexes[index] + 1) % project.images.length;
      });
    }, 3000);
  }

  ngOnDestroy(): void {
    // Clear the timer when the component is removed from the view.
    if (this.imageInterval) {
      clearInterval(this.imageInterval);
    }
  }

  getActiveImage(projectIndex: number): string {
    return this.projects[projectIndex].images[
      this.activeImageIndexes[projectIndex]
    ];
  }
}