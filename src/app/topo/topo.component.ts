import { Component } from '@angular/core'

// Função para decorar a classe TopoComponent, 
// indicando ao Angular que a classe é um componente
// Essa função permite encaminhar metadados para a classe
@Component({
    // Indica o rótulo da instância desse componente dentro do template de outro componente
    selector: 'app-topo',   // Declaração padrão. No template: <app-topo></app-topo>
    // Declaração alternativa do seletor:
    // selector: '[app-topo]',  // No template, pode ser passado como atributo/propriedade do elemento div: <div app-topo></div>
    // selector: '.app-topo',  // No template, pode ser passado como classe do elemento div: <div class="app-topo"></div>
    // Obs.: Se utilizar o seletor como classe, o nome deve ser diferente das classes do .css
    
    // Template/view externo
    templateUrl: './topo.component.html',  

    /*
    // Template/view inline (interno)
    // Pode usar aspas simples ou duplas, mas as instruções não podem quebrar linha
    // Ou usar back ticks ("crases"), em que é possível quebrar linha
    template: `<p>
                 Esse é o componente topo
                </p>`
                */

    // Estilos também podem ser definidos externamente ou inline
    // No html, utilizar: <class="exemplo">
    // Também pode usar "crase" para permitir quebra de linhas
    // styles: ['.exemplo {color: blue}']
    
    // Estilo em arquivo externo
    styleUrls: ['./topo.component.css']
})

export class TopoComponent {
    public titulo: string = 'Aprendendo cores em inglês'
}