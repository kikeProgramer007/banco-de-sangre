import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // Inicializar AdminLTE después de que la vista se cargue
    if (typeof $ !== 'undefined') {
      $('.dropdown-toggle').dropdown();
    }
  }
}
