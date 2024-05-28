import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template-binding/template-binding.component';
import { TemplateVariablesComponent } from './components/template-variables/template-variables.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    NewComponentComponent,
    TemplateBindingComponent,
    TemplateVariablesComponent
  ],
  template:
  `
    <h1>Aprendendo angular</h1>
    <app-new-component />

    <app-template-binding />
    <app-template-variables />

  `,
})
export class AppComponent {
  title = 'learning-angular';
}
