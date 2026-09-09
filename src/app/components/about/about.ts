import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About implements AfterViewInit {

  @ViewChild('codeEditor')
  codeEditor!: ElementRef;

  ngAfterViewInit(): void {

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            this.codeEditor.nativeElement.classList.add('show-code');

            observer.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.25
      }
    );

    observer.observe(this.codeEditor.nativeElement);
  }
}