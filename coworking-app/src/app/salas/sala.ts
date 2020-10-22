//model sala de exemplo entidade
export class Sala {
    id: number;
    nome: string;
    limitePessoas: number;
    foto: String;

    constructor(id: number, nome: string, limitePessoas: number, foto: String) {
        this.id = id;
        this.nome = nome;
        this.limitePessoas = limitePessoas;
        this.foto = foto;
    }

    
}