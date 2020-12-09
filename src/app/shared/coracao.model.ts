export class Coracao{

    // Os parâmetros das urls podem ser omitidos pois possuem um valor default 
    constructor(
        public cheio: boolean,
        public urlCoracaoCheio: string = '/assets/coracao_cheio.png',
        public urlCoracaoVazio: string = '/assets/coracao_vazio.png'
    ){}
    
    public exibeCoracao(): string {
        if(this.cheio){
            return this.urlCoracaoCheio
        }
        else{
            return this.urlCoracaoVazio
        }
    }

}