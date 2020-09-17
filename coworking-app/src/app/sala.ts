//model sala de exemplo entidade
export class Sala {
    id: number;
    nome: string;
    limitePessoas: number;

    constructor(id: number, nome: string, limitePessoas: number) {
        this.id = id;
        this.nome = nome;
        this.limitePessoas = limitePessoas;
    }
}