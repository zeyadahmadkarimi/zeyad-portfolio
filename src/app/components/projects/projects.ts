import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects implements AfterViewInit, OnDestroy {

  @ViewChild('projectsSection')
  projectsSection!: ElementRef<HTMLElement>;

  /* =====================================================
     CARD IMAGE SLIDER
  ===================================================== */

  currentImageIndexes: number[] = [0, 0, 0];

  private cardSliderInterval?: ReturnType<typeof setInterval>;


  /* =====================================================
     PROJECT ENTRANCE ANIMATION
  ===================================================== */

  projectsVisible = false;


  /* =====================================================
     POPUP
  ===================================================== */

  isPopupOpen = false;

  selectedProjectIndex = 0;

  popupImageIndex = 0;

  private popupSliderInterval?: ReturnType<typeof setInterval>;


  /* =====================================================
     PROJECT DATA
  ===================================================== */

  projects = [
    {
      name: 'ShopNow — E-Commerce Website',

      description:
        'A responsive e-commerce platform with product discovery, search, filtering, sorting, category browsing, cart & quantity management, wishlist, coupons, dynamic pricing, order management, warehouse features and more.',

      technologies: [
        'HTML5',
        'CSS3',
        'JavaScript'
      ],

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

      technologies: [
        'Angular',
        'TypeScript',
        'HTML5',
        'CSS3'
      ],

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

      technologies: [
        'Angular',
        'TypeScript',
        'HTML5',
        'CSS3'
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


  /* =====================================================
     INITIALIZE
  ===================================================== */

  ngAfterViewInit(): void {

    this.startCardSlider();

    setTimeout(() => {
      this.checkProjectsVisibility();
    }, 100);

  }


  /* =====================================================
     SCROLL TRIGGER
  ===================================================== */

  @HostListener('window:scroll')
  onWindowScroll(): void {

    this.checkProjectsVisibility();

  }


  /* =====================================================
     RESIZE TRIGGER
  ===================================================== */

  @HostListener('window:resize')
  onWindowResize(): void {

    this.checkProjectsVisibility();

  }


  /* =====================================================
     CHECK PROJECTS POSITION
  ===================================================== */

  private checkProjectsVisibility(): void {

    if (this.projectsVisible) {
      return;
    }

    const section =
      this.projectsSection?.nativeElement;

    if (!section) {
      return;
    }

    const rect =
      section.getBoundingClientRect();

    const triggerPoint =
      window.innerHeight * 0.85;

    if (
      rect.top <= triggerPoint &&
      rect.bottom >= 0
    ) {

      this.projectsVisible = true;

    }

  }


  /* =====================================================
     CARD IMAGE SLIDER
  ===================================================== */

  private startCardSlider(): void {

    this.cardSliderInterval =
      setInterval(() => {

        this.projects.forEach(
          (project, index) => {

            this.currentImageIndexes[index] =
              (
                this.currentImageIndexes[index] + 1
              ) %
              project.images.length;

          }
        );

      }, 2000);

  }


  /* =====================================================
     OPEN POPUP
  ===================================================== */

  openPopup(index: number): void {

    this.stopPopupSlider();

    this.selectedProjectIndex = index;

    this.popupImageIndex = 0;

    this.isPopupOpen = true;

    document.body.style.overflow = 'hidden';

    this.startPopupSlider();

  }


  /* =====================================================
     POPUP IMAGE SLIDER
  ===================================================== */

  private startPopupSlider(): void {

    const project =
      this.projects[
        this.selectedProjectIndex
      ];

    this.popupSliderInterval =
      setInterval(() => {

        this.popupImageIndex =
          (
            this.popupImageIndex + 1
          ) %
          project.images.length;

      }, 2000);

  }


  /* =====================================================
     CLOSE POPUP
  ===================================================== */

  closePopup(): void {

    this.isPopupOpen = false;

    this.stopPopupSlider();

    this.popupImageIndex = 0;

    document.body.style.overflow = '';

  }


  /* =====================================================
     STOP POPUP SLIDER
  ===================================================== */

  private stopPopupSlider(): void {

    if (this.popupSliderInterval) {

      clearInterval(
        this.popupSliderInterval
      );

      this.popupSliderInterval = undefined;

    }

  }


  /* =====================================================
     DESTROY
  ===================================================== */

  ngOnDestroy(): void {

    if (this.cardSliderInterval) {

      clearInterval(
        this.cardSliderInterval
      );

    }

    this.stopPopupSlider();

    document.body.style.overflow = '';

  }

}