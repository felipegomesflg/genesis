export class Fornecedores {
    constructor(){
      this.id = null;
      this.ativo = true;
      this.imagem = '';
      this.usuarioid = null;
      this.nome = '';
      this.cpf_cnpj = '';
      this.cep = '';
      this.endereço = '';
      this.numero = null;
      this.complemento = '';
      this.cidade = '';
      this.estado = '';
      this.pais = '';
      this.contatoid = null;
    }
    public id : number;
    public ativo : boolean;
    public imagem : string;
    public usuarioid : number;
    public nome : string;
    public cpf_cnpj : string;
    public cep : string;
    public endereço : string;
    public numero : number;
    public complemento : string;
    public cidade : string;
    public estado : string;
    public pais : string;
    public contatoid : number;
  }
  