export class Produtos {
    constructor(){
        this.id = null;
        this.ativo = true;
        this.imagem = '';
        this.nome = '';
        this.categoriaid = null;
        this.quantidade = '';
        this.preco = null;
        this.preco_custo = null;
        this.estoque_minimo = null;
        this.descricao = '';
    }
    public ativo : boolean;
    public id : number;
    public imagem : string;
    public nome : string;
    public categoriaid : number;
    public quantidade : string;
    public preco : number;
    public preco_custo : number;
    public estoque_minimo : number;
    public descricao : string;

  }
  