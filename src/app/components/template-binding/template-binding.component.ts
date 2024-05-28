import { Component } from '@angular/core';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.css'
})
export class TemplateBindingComponent {

  public name = "Mateus"; //isso é um estado do angular;
  public age = 32;

  public sum(val1: number, val2: number) {
    return val1 + val2;
  }
}
