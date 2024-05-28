import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template-binding/template-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    NewComponentComponent,
    TemplateBindingComponent
  ],
  template:
  `
    <h1>Aprendendo angular</h1>
    <app-new-component />

    <app-template-binding />

  `,
})
export class AppComponent {
  title = 'learning-angular';
}
