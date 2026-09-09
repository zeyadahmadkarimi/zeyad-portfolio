import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './components/home/home';
import { Navbar } from './components/navbar/navbar';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { Education } from './components/education/education';
import { Footer } from './components/footer/footer';
@Component({
  imports: [Home, Navbar, About, Skills, Projects, Contact, Education, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('zeyad-portfolio');
}