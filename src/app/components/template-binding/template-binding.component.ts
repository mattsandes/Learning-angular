import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.css'
})
export class TemplateBindingComponent {

  public name = "Mateus"; //isso é um estado do angular;
  public age = 32;
  
  public isTextDecoration = this.age > 1 ? 'underline' : 'none'

  //essa propriedade vai ser usada para desabilitar um botão na
  //pagina html
  public isDisabled = false;

  //fazendo o binding com uma imagem
  //public srcValue = "https://www.istockphoto.com/br/foto/cidade-inteligente-com-linha-de-velocidade-brilhante-trilha-leve-ao-redor-da-cidade-gm1445614323-483963437?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_image_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Flink%2F&utm_term=link";

  //usando construtores
  // constructor() {
  //   setTimeout(() => {
  //     this.name = "Doutor Alex";
  //   }, 1000)
  // }

  public sum() {
    return this.age++;
  }

  public sub() {
    return this.age--;
  }

  //criando a logica para um evento feito no formulario;
  public onKeyDown(event : Event) {
    console.log(event);
  }

  //criando outro metodo
  //esse metodo retorna o as cordenadas x e y de onde o mouse
  //esta andando na tela
  public onMouseEvent(event: MouseEvent) {
    return console.log({
      clientX: event.clientX,
      clienty: event.clientY,
    });
  }
}
