import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  // Irá controlar a exibição de uma div no html, que conterá o componente painel  
  // Se for false, o jogo acabaou, independente de o usuário ter ganho ou não
  public jogoEmAndamento: boolean = true

  // Indicará se o usuário ganhou ou perdeu o jogo
  public tipoEncerramento: string

  public encerrarJogo (tipo: string): void{
    //console.log(tipo)

    // Faz com que o painel não seja mais exibido no html
    // Ou seja, o painel é destruído
    this.jogoEmAndamento = false;

    // Indica se foi vitória ou derrota
    this.tipoEncerramento = tipo
  }
  
  public reiniciarJogo(): void{
    // Reseta as variáveis
    this.jogoEmAndamento = true
    this.tipoEncerramento = undefined
  }
}
