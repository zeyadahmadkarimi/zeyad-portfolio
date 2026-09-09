import {
  Component,
  HostListener
} from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  isMenuOpen = false;

  isDarkMode =
    document.body.classList.contains('dark-mode');


  /* =====================================================
     TOGGLE MOBILE MENU
  ===================================================== */

  toggleMenu(): void {

    this.isMenuOpen = !this.isMenuOpen;

  }


  /* =====================================================
     CLOSE MOBILE MENU
  ===================================================== */

  closeMenu(): void {

    this.isMenuOpen = false;

  }


  /* =====================================================
     CLOSE MENU WHEN CLICKING OUTSIDE
  ===================================================== */

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {

    const target =
      event.target as HTMLElement;

    const navigation =
      target.closest('.navigation');

    const menuButton =
      target.closest('.menu-toggle');


    /*
      Agar click mobile menu ke andar hua
      ya hamburger button par hua,
      to menu ko yahan se close nahi karna.
    */

    if (navigation || menuButton) {
      return;
    }


    /*
      Baaki page par kahin bhi click hua
      to mobile menu close ho jayega.
    */

    this.isMenuOpen = false;

  }


  /* =====================================================
     DARK MODE
  ===================================================== */

  toggleTheme(): void {

    this.isDarkMode = !this.isDarkMode;

    document.body.classList.toggle(
      'dark-mode',
      this.isDarkMode
    );

  }

}