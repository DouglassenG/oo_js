# 🧬 Programação Orientada a Objetos (POO) em JS

![Status](https://img.shields.io/badge/Status-Finalizado-green)
![JavaScript](https://img.shields.io/badge/Code-JavaScript_(ES6+)-F7DF1E?logo=javascript&logoColor=black)
![Paradigm](https://img.shields.io/badge/Paradigm-OOP-blue)
![Architecture](https://img.shields.io/badge/Focus-Scalability-orange)

> Uma implementação prática dos quatro pilares da Orientação a Objetos, utilizando a sintaxe de Classes moderna do JavaScript para criar estruturas de código modulares e eficientes.

## 🎯 Motivação e Propósito

JavaScript é uma linguagem multiparadigma, mas o domínio da **Orientação a Objetos** é crucial para trabalhar com grandes frameworks (como React, Angular ou NestJS) e arquiteturas de Backend.

O propósito deste repositório é demonstrar a transição de um pensamento procedural para um pensamento orientado a objetos. O projeto resolve o problema de código desorganizado e repetitivo, aplicando **Abstração** e **Herança** para criar sistemas onde as entidades (Classes) conversam entre si de forma lógica, facilitando a manutenção e a escalabilidade.

## 🛠️ Tecnologias Utilizadas

O projeto foca na utilização nativa da linguagem e seus recursos de engenharia:

* **[JavaScript (ES6+)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript):**
    * **Classes:** Sintaxe de "syntactic sugar" sobre os protótipos do JS.
    * **Constructor:** Inicialização de atributos de instância.
    * **Extends/Super:** Implementação de cadeias de herança.
    * **Getters/Setters:** Proteção e acesso controlado a propriedades (Encapsulamento).

## ✨ Funcionalidades e Conceitos

O código explora os seguintes conceitos de engenharia de software:

1.  **Abstração:** Criação de modelos (Classes) que representam entidades genéricas.
2.  **Herança:** Criação de subclasses que herdam características da classe pai, reutilizando lógica (ex: `Carro` estende `Veiculo`).
3.  **Polimorfismo:** Capacidade de métodos com o mesmo nome se comportarem de forma diferente nas subclasses.
4.  **Instanciação:** Criação de múltiplos objetos independentes a partir de um único modelo.

## 📦 Instalação e Execução

Este é um projeto de lógica pura, executado via terminal (Console).

### Pré-requisitos
* **Node.js** instalado (para execução do runtime).
* Ou um navegador web (para rodar via Console do DevTools).

### Passo a Passo

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/DouglassenG/oo_js.git](https://github.com/DouglassenG/oo_js.git)
    ```

2.  **Acesse o diretório:**
    ```bash
    cd oo_js
    ```

3.  **Execução:**
    Para ver a saída dos scripts e os objetos sendo criados:
    ```bash
    node main.js
    # (Ou o nome do arquivo principal do seu projeto, ex: index.js)
    ```

## 💻 Uso e Exemplos

O código demonstra como estruturar classes para evitar repetição.

**Exemplo de Arquitetura (Conceitual):**

```javascript
// 1. Classe Base (Pai)
class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' já está ligado');
            return;
        }
        this.ligado = true;
    }
}

// 2. Herança (Filho)
class SmartPhone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome); // Chama o construtor do Pai
        this.cor = cor;
        this.modelo = modelo;
    }
}

// 3. Instância (Uso)
const s1 = new SmartPhone('iPhone', 'Preto', '14 Pro');
s1.ligar(); // Método herdado
