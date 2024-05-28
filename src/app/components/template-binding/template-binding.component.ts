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
}
