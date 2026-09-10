import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects implements OnInit, OnDestroy {
  currentImageIndexes: number[] = [0, 0, 0];
  private imageSliderInterval?: ReturnType<typeof setInterval>;

  projects = [
    {
      name: 'ShopNow — E-Commerce Website',
      description:
        'A responsive e-commerce platform with product discovery, search, filtering, sorting, category browsing, cart & quantity management, wishlist, coupons, dynamic pricing, order management, warehouse features and more.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      images: [
        '/projects/shopNow/home.png',
        '/projects/shopNow/orderSection.png',
        '/projects/shopNow/cart-step1.png',
        '/projects/shopNow/cart-step2.png',
        '/projects/shopNow/cart-step3.png',
        '/projects/shopNow/footer.png'
      ],
      github: '#',
      demo:
        'https://shopnow-new-git-main-zeyadakarimi-2973s-projects.vercel.app/'
    },
    {
      name: 'Task Management System — Training Project',
      description:
        'An Angular-based task management system with complete CRUD functionality, task status and due-date management, reactive forms, custom validation, routing, and centralized task state management.',
      technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3'],
      images: [
        '/projects/taskManagementSystem/homePage.png',
        '/projects/taskManagementSystem/createTask.png',
        '/projects/taskManagementSystem/editTask.png',
        '/projects/taskManagementSystem/viewTask.png',
        '/projects/taskManagementSystem/deleteTask.png',
        '/projects/taskManagementSystem/taskAddedPopup.png',
        '/projects/taskManagementSystem/validation-checker.png'
      ],
      github: '#',
      demo: '#'
    },
    {
      name: 'Developer Portfolio Website',
      description:
        'A personal developer portfolio built using Angular and TypeScript to showcase technical skills, education, projects and professional information with a clean and responsive design.',
      technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3'],
      images: [
        '/projects/portfolio/portfolio-home.png',
        '/projects/portfolio/about.png',
        '/projects/portfolio/education.png',
        '/projects/portfolio/skills.png',
        '/projects/portfolio/PROJECTS.png',
        '/projects/portfolio/CONTACT.png'
      ],
      github: '#',
      demo: 'https://zeyad-portfolio-sand.vercel.app/'
    }
  ];

  ngOnInit(): void {
    this.imageSliderInterval = setInterval(() => {
      this.projects.forEach((project, index) => {
        this.currentImageIndexes[index] =
          (this.currentImageIndexes[index] + 1) %
          project.images.length;
      });
    }, 3000);
  }

  ngOnDestroy(): void {
    if (this.imageSliderInterval) {
      clearInterval(this.imageSliderInterval);
    }
  }
}