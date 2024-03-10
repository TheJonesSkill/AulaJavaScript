// Definindo a classe Funcionario
class Funcionario {
  constructor(nome, idade, cargo) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
  }

  // Método para o funcionário se apresentar
  seApresentar() {
    console.log(`Olá, meu nome é ${this.nome} e eu sou um ${this.cargo}.`);
  }

  // Método para simular o trabalho do funcionário
  trabalhar() {
    console.log(`${this.nome} está trabalhando.`);
  }

  // Método para simular o cafézinho.
  passarCafe() {
    console.log(`${this.nome} está Passando um cafézinho.`);
  }
}

// Definindo a classe Gerente
class Gerente extends Funcionario {
  constructor(nome, idade, departamento) {
    super(nome, idade, 'Gerente');
    this.departamento = departamento;
  }

  // Método para gerenciar o departamento
  gerenciar() {
    console.log(`${this.nome} está gerenciando o departamento de ${this.departamento}.`);
  }
}

// Definindo a classe Desenvolvedor
class Desenvolvedor extends Funcionario {
  constructor(nome, idade, linguagem) {
    super(nome, idade, 'Desenvolvedor');
    this.linguagem = linguagem;
  }

  // Método para simular a programação do desenvolvedor
  programar() {
    console.log(`${this.nome} está programando em ${this.linguagem}.`);
  }
}

// Criando uma instância do Estagiario do café, sem o qual nenhum dos dois abaixo trabalham.
const funcionario = new Funcionario('Gabriel', 21, 'Estagiário');
funcionario.seApresentar();
funcionario.passarCafe();

// Criando uma instância de Gerente e chamando os métodos
const gerente = new Gerente('Fulano', 40, 'TI');
gerente.seApresentar();
gerente.trabalhar();
gerente.gerenciar();

// Criando uma instância de Desenvolvedor e chamando os métodos
const desenvolvedor = new Desenvolvedor('Ciclano', 28, 'JavaScript');
desenvolvedor.seApresentar();
desenvolvedor.trabalhar();
desenvolvedor.programar();
