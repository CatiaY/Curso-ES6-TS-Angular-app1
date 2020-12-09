// EventEmitter serve para ativar um evento do componente pai a partir de uma chamada do componente filho
import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { Frase } from '../shared/frase.model'
import { FRASES } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})

export class PainelComponent implements OnInit, OnDestroy {

  public instrucao: string = 'Traduza a cor'
  public frases:Frase[] = FRASES
  
  public resposta: string = ''
  public textArea: any

  public rodada: number = 0
  public rodadaFrase: Frase

  public progresso: number = 0

  public tentativas: number = 3

  // Objeto para emitir um evento
  // @Output() serve para enviar o evento ao componente pai
  // EventEmitter<string> significa que será emitido um evento com um parâmero do tipo string
  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() { 
    this.atualizaRodada()    
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void{
    //console.log('Componente painel foi destruído')
  }

  // Função que será disparada quando o usuário digitar no componente textArea
  // Toda função é implicitamente public
  atualizaResposta(resposta: Event): void {
    this.textArea = (<HTMLInputElement>resposta.target)
    this.resposta = (<HTMLInputElement>resposta.target).value
    //console.log(this.resposta)
  }

  // Função disparada ao apertar o botão Verificar
  public verificarResposta(): void {
    
    //console.log('Verificar resposta: ', this.resposta)

    // Trocar pergunta da rodada somente se o usuário acertar a tradução
    if(this.rodadaFrase.frasePtBr == this.resposta.toUpperCase()){ 
      //alert('A tradução está correta.')     
     
      // Atualiza a barra de progresso, dividindo 100% pela quantidade de frases
      this.progresso += Math.round(100/this.frases.length)

      // Atualiza o índice da pergunta da rodada
      this.rodada++    

      // Verifica se ganhou o jogo
      if(this.rodada === (this.frases.length)){
        //alert('Você concluiu as traduções com sucesso!')
        // Envia a emissão de um evento para o componente pai (app.component)
        this.encerrarJogo.emit('vitoria')
      }
      else{ // ...se não ganhou...
        // Troca a pergunta da rodada
        this.atualizaRodada()
        
        // Seleciona a área de texto
        this.textArea.focus()
      }      
    }
    else{
      //alert('A tradução está errada.')

      // Diminuir a variável tentativas
      this.tentativas--

      // Testar se o usuário perdeu o jogo
      if(this.tentativas === 0){  // Strict Equals Operator ( === ): ambos valores precisam ser do mesmo tipo, ou retornará false, diferente do Equals Operator ( == ), que retornaria true
        //alert('Você perdeu todas as tentativas')
        // Envia a emissão de um evento para o componente pai (app.component)
        this.encerrarJogo.emit('derrota')
      }
    }
  }

  public atualizaRodada(): void {

    // Define a frase da rodada
    this.rodadaFrase = this.frases[this.rodada]
    //console.log (this.rodadaFrase) 

    // Limpa a resposta do usuário usando o 2way binding, ou seja, atualiza
    // o campo do textArea com o Property Binding [value] = "resposta"
    this.resposta = ''
  }
}