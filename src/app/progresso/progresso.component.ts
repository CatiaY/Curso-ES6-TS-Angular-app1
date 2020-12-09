import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})

export class ProgressoComponent implements OnInit {

  // @Input() = Decorator para que um determinado atributo do componente filho
  // receba um parâmetro externo de entrada do componente pai no momento da instância do componente.
  // Importar no cabeçalho o módulo do core do @angular
  // No html do painel, ao instanciar o componente progresso, utilizar:
  // <app-progresso [progresso] = "progresso"></app-progresso>
  //  [variável do componente progresso (filho)] = "variável do componente painel ("pai")
  @Input() public progresso:number = 0  // Pode usar apelido: @Input('apelido') public progresso:number = 25 
  

  constructor() { }

  ngOnInit(): void {    
  }

}
