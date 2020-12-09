export class Frase {

    // Modo implícito de declaração de variáveis públicas e sua inicialização
    // A declaração das variáveis é feita dentro do próprio constutor
    constructor (public fraseEng: string, public frasePtBr: string) {  }

    /* Modo explícito de declaração de variáveis públicas e sua inicialização
    public fraseEng: string
    public frasePtBr: string

    contructor(fraseEng: string, frasePtBr: string) {
        this.fraseEng = fraseEng
        this.frasePtBr = frasePtBr
    }
    */
}