import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class Skills implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  constructor(private readonly elementRef: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const section =
      this.elementRef.nativeElement.querySelector<HTMLElement>('.skills');

    if (!section) {
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        section.classList.toggle('skills-visible', entry.isIntersecting);
      },
      { threshold: 0.12 }
    );

    this.observer.observe(section);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
