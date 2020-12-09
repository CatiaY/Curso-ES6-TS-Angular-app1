import { Component, Input, OnInit, OnChanges } from '@angular/core';

import {Coracao} from '../shared/coracao.model'

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})

export class TentativasComponent implements OnInit, OnChanges {

  //public coracaoVazio: string = '/assets/coracao_vazio.png'
  //public coracaoCheio: string = '/assets/coracao_cheio.png'

  @Input() public tentativas: number
  
  public coracoes: Coracao[] = [ // ou coracoes: Array<Coracao>
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ]  

  // Obs.: No momento em que o componente é instanciado, 
  // a variável ainda não é decorada no construcor da classe
  // Isso só ocorre na função ngOnInit()
  constructor() { 
    // imprime undefined
    //console.log('Constructor: Tentativas recebidas do painel: ', this.tentativas)        
  }

  // Evento que ocorre na primeira etapa do ciclo do componente, antes mesmo do OnInit
  // Ocorre no momento em que o componente recebe os valores decorados (@Input de dados)
  // Quando os valores de @Input forem alterados, este método também será chamado
  ngOnChanges(): void {
    //console.log('OnChanges: Tentativas recebidas do painel: ', this.tentativas)

    // Compara a quantidade de tentativas com a quantidade de corações do array
    if(this.tentativas !== this.coracoes.length) {
      let indice = this.coracoes.length - this.tentativas
      this.coracoes[indice - 1].cheio = false
    }
  }

  ngOnInit(): void {
    // imprime o valor correto recebido do componente painel
    //console.log('OnInit: Tentativas recebidas do painel: ', this.tentativas)        
  }  
}
