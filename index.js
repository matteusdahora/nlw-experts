const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "var x = 5;",
        "let x = 5;",
        "const x = 5;",
      ],
      correta: 2
    },
    {
      pergunta: "O que é um closure em JavaScript?",
      respostas: [
        "Uma função que não tem parâmetros.",
        "Um bloco de código dentro de um loop.",
        "Uma função que tem acesso ao escopo externo onde foi criada.",
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é utilizado para adicionar um elemento no final de um array em JavaScript?",
      respostas: [
        "push()",
        "add()",
        "append()",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um modelo de objetos para manipulação de dados.",
        "Um método para declarar funções.",
        "Uma interface de programação para interação com elementos HTML.",
      ],
      correta: 2
    },
    {
      pergunta: "Como se verifica se uma variável é do tipo string em JavaScript?",
      respostas: [
        "isString()",
        "typeof x === 'string'",
        "x instanceof String",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
      respostas: [
        "Nenhuma, ambos comparam valores de forma estrita.",
        "==' compara apenas valores, enquanto '===' compara valores e tipos.",
        "'===' compara apenas valores, enquanto '==' compara valores e tipos.",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o JSON em JavaScript?",
      respostas: [
        "Uma função para transformar texto em número.",
        "Um formato de dados que representa objetos como strings.",
        "Um método para criar loops em arrays.",
      ],
      correta: 1
    },
    {
      pergunta: "Como se realiza uma requisição assíncrona em JavaScript?",
      respostas: [
        "Usando a função syncRequest()",
        "Utilizando a palavra-chave async/await",
        "Apenas com callbacks",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o conceito de hoisting em JavaScript?",
      respostas: [
        "A elevação de um elemento HTML na árvore DOM.",
        "O içamento de declarações de variáveis e funções durante a fase de compilação.",
        "Um método para reorganizar a ordem de execução de um código.",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a finalidade do método 'map()' em arrays JavaScript?",
      respostas: [
        "Mapear chaves de objetos.",
        "Iterar sobre os elementos do array e aplicar uma função a cada um deles.",
        "Adicionar novos elementos ao final do array.",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
  
      corretas.delete(item)
      if(estaCorreta) {
      corretas.add(item)
        }
  
     mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
    }
  
    quizItem.querySelector('dl').appendChild(dt)
  
  }
    quizItem.querySelector('dl dt').remove()
  quiz.appendChild(quizItem)
    
  }
  