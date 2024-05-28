import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { NewComponentComponent } from '../new-component/new-component.component';

@Component({
  selector: 'app-template-variables',
  standalone: true,
  imports: [
    CommonModule,
    NewComponentComponent
  ],
  templateUrl: './template-variables.component.html',
  styleUrl: './template-variables.component.css'
})
export class TemplateVariablesComponent implements AfterViewInit{

  //pegando dados do template variable (ou seja, o #h2 que esta no html)
  @ViewChild('name') public nameInput!: ElementRef;
  @ViewChild('h2') public h2!: ElementRef;
  @ViewChild('NewComponent') public childComponent!: NewComponentComponent;

  //resgatando os valores da pagina
  ngAfterViewInit(): void {
    console.log(this.nameInput.nativeElement.value);
    console.log(this.h2.nativeElement.value);
    console.log(this.childComponent.name);
  }
}
