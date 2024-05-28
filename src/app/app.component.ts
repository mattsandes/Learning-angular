import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent } from './components/new-component/new-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    NewComponentComponent
  ],
  template:
  `
    <h1>Aprendendo angular</h1>
    <app-new-component />
  `,
})
export class AppComponent {
  title = 'learning-angular';
}
