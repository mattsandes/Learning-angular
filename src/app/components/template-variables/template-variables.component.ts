import { AfterViewInit, Component, ElementRef, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-template-variables',
  standalone: true,
  imports: [],
  templateUrl: './template-variables.component.html',
  styleUrl: './template-variables.component.css'
})
export class TemplateVariablesComponent implements AfterViewInit{

  //pegando dados do template variable (ou seja, o #h2 que esta no html)
  @ViewChild('name') public nameInput!: ElementRef;

  //resgatando os valores da pagina
  ngAfterViewInit(): void {
    console.log(this.nameInput.nativeElement.value);
  }
}
