// log -> registro

const minhaVar = true;

// console.log(245)
// console.log("eu sou um texto")
// console.log(minhaVar)

//O console.log() é um método do objeto console em JavaScript que é usado para exibir mensagens de depuração e informações para desenvolvedores em um ambiente de desenvolvimento (como o console do navegador ou do Node.js). É um objeto global que está disponível em todos os navegadores modernos e no ambiente Node.js.
//O console.log() aceita um ou mais argumentos, que podem ser de qualquer tipo de dados válido em JavaScript. Ele também pode exibir múltiplos argumentos em uma única linha separada por vírgulas.
//Além disso, console.log() pode aceitar placeholders com formatação de string usando %s para strings, %d para números inteiros, %f para números de ponto flutuante e %o para objetos.

// tratamento de erro!

console.error('deu erro!')

// Embora seja o mais utilizado, .log() é um dos vários métodos que podemos utilizar para exibir informações na chamada “saída padrão” - o terminal - enquanto estamos desenvolvendo uma aplicação. A palavra log significa algo como “registro”, então este método apenas registra no terminal o que passamos entre os parênteses, por exemplo o conteúdo de uma variável ou o resultado de uma operação.
// Entre os outros métodos, existem:
// console.error() para exibir mensagens de erro;
// console.table() para visualizar de forma mais organizada informações tabulares;
// console.time() e console.timeEnd() para temporizar período que uma operação de código leva para ser iniciada e concluída;
// console.trace() para exibir a stacktrace de todos os pontos (ou seja, os arquivos chamados) por onde o código executado passou durante a execução.