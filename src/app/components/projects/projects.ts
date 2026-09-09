import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

  projects = [
    {
      name: 'Project One',
      description: 'A web project built to practice frontend development.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: '#',
      demo: '#'
    },
    {
      name: 'Project Two',
      description: 'An Angular project built while learning component-based development.',
      technologies: ['Angular', 'TypeScript'],
      github: '#',
      demo: '#'
    }
  ];

}