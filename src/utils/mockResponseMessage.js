export const mockData = [
  {
    body: "Porque não se pode dividir por zero?",
    type: "text",
    emitter: "user",
  },
  {
    body:
      "Dividir por zero é uma operação indefinida na matemática, e há várias razões que explicam por que isso não é possível:\n\n" +
      "### Conceitualmente\n\n" +
      "1. *Multiplicação Inversa:* Divisão é o processo inverso da multiplicação. Se dizemos que ( a div b = c ), isso significa que ( c \times b = a ). Se ( b = 0 ), então ( c \times 0 ) deve ser igual a ( a ). No entanto, qualquer número multiplicado por zero é zero, e não pode igualar a ( a ) exceto quando ( a = 0 ).\n\n" +
      "2. **Indeterminação:** Quando você tenta dividir um número qualquer por zero, não há maneira de determinar um único número que satisfaz o resultado. Por exemplo, para ( 1 div 0 ), não existe nenhum número que você possa multiplicar por zero para chegar a 1. Isso leva a uma situação indeterminada.\n\n" +
      "### Limites e Comportamento\n\n" +
      "1. **Comportamento dos Limites:** Do ponto de vista dos limites, quando um número se aproxima de divisão por zero, ele tende a um comportamento indefinido (ou infinito) em termos de cálculo. Por exemplo, à medida que ( b ) se aproxima de 0, ( \frac{1}{b} ) se torna extremamente grande ou extremamente pequeno, dependendo da direção do limite (positivo ou negativo).\n\n" +
      "2. **Infinitos Rivais:** Se considerarmos ( 1 div 0 ) como algum tipo de infinito, isso leva a inconsistências. Se ( x = \frac{1}{0} = infty ), então ( x \times 0 = 1 ) e múltiplos de zero não podem ser diferentes de zero, criando mais paradoxos.\n\n" +
      "### Conclusão\n\n" +
      "A divisão por zero resulta em indefinição e contradições para a matemática como a conhecemos. Consequentemente, para manter a consistência e evitar paradoxos, é estabelecido que a divisão por zero não é permitida no conjunto dos números reais e, de modo geral, na aritmética padrão.",
    type: "text",
    emitter: "assistant",
  },
  {
    body: "Como posso utilizar regex em JavaScript para remover todos os caracteres especiais de uma string?",
    type: "text",
    emitter: "user",
  },
  {
    body:
      "Para remover todos os caracteres especiais de uma string em JavaScript utilizando expressões regulares (regex), você pode empregar a função `replace()` em conjunto com um regex que identifica qualquer caractere que não seja uma letra ou número.\n\n" +
      "A expressão comum para isso é `/[^a-zA-Z0-9]/g`, onde:\n\n" +
      "- `[^a-zA-Z0-9]` indica qualquer caractere que não seja uma letra maiúscula, minúscula ou um dígito.\n" +
      "- `g` é a flag global, que faz com que a pesquisa ocorra em toda a string, não parando após a primeira correspondência.\n\n" +
      "Aqui está um exemplo de como fazer isso:\n\n" +
      "```javascript\n" +
      "// String de exemplo\n" +
      'let myString = "Hello, World! @2023";\n\n' +
      "// Usando regex para remover os caracteres especiais\n" +
      "let cleanedString = myString.replace(/[^a-zA-Z0-9]/g, '');\n\n" +
      'console.log(cleanedString); // Saída: "HelloWorld2023"\n' +
      "```\n\n" +
      "### Explicação:\n\n" +
      "- `myString.replace(/[^a-zA-Z0-9]/g, '')`: Aqui, `replace()` substitui cada correspondência do regex por uma string vazia `''`, efetivamente removendo-a.\n" +
      "- O regex `[^a-zA-Z0-9]` procura por qualquer caractere que não seja alfanumérico e o remove.\n\n" +
      "Esta abordagem removerá todos os caracteres especiais e deixará apenas letras e números na sua string. Se precisar de mais exemplos ou ajustes específicos, sinta-se à vontade para perguntar!",
    type: "text",
    emitter: "assistant",
  },
  {
    body: "Me explique como funcionam as funções logarítmicas?",
    type: "text",
    emitter: "user",
  },
  {
    body:
      "Funções logarítmicas são uma classe de funções matemáticas que se relacionam com a operação de logaritmo. Para entender como essas funções funcionam, vamos primeiro definir o conceito de logaritmo:\n\n" +
      "1. **Definição de Logaritmo:**\n" +
      "   O logaritmo de um número ( y ) na base ( b ) é o expoente ( x ) ao qual a base ( b ) deve ser elevada para produzir o número ( y ). Isto é, se ( b^x = y ), então o logaritmo de ( y ) na base ( b ) é ( x ), notado como ( log_b(y) = x ).\n\n" +
      "2. **Propriedades dos Logaritmos:**\n" +
      "   - **Produto:** ( log_b(M \times N) = log_b(M) + log_b(N) )\n" +
      "   - **Quociente:** ( log_b(\frac{M}{N}) = log_b(M) - log_b(N) )\n" +
      "   - **Potência:** ( log_b(M^p) = p \times log_b(M) )\n" +
      "   - **Mudança de Base:** ( log_b(a) = \frac{log_k(a)}{log_k(b)} ) para qualquer base ( k ).\n\n" +
      "3. **Função Logarítmica:**\n" +
      "   A função logarítmica básica é ( f(x) = log_b(x) ), onde ( b ) é a base do logaritmo. Algumas características importantes dessas funções são:\n" +
      "   - O logaritmo na base ( b ) só é definido para ( x > 0 ).\n" +
      "   - A função ( log_b(x) ) é crescente se ( b > 1 ) e decrescente se ( 0 < b < 1 ).\n" +
      "   - O gráfico de ( log_b(x) ) possui um ponto de interseção com o eixo ( x ) em ( x = 1 ).\n\n" +
      "4. **Aplicações:**\n" +
      "   Funções logarítmicas são úteis em áreas como escalas de magnitude, pH em química, complexidade computacional e matemática financeira.",
    type: "text",
    emitter: "assistant",
  },
];

export const mockDataHistory = [
  {
    body: "Porque não se pode dividir por zero?",
    type: "text",
    emitter: "user",
  },
  {
    body: "Porque não se pode dividir por zero?",
    type: "text",
    emitter: "assistant",
  },
  {
    body: "Como posso utilizar regex em JavaScript para remover todos os caracteres especiais de uma string?",
    type: "text",
    emitter: "user",
  },
  {
    body: "Porque não se pode dividir por zero?",
    type: "text",
    emitter: "assistant",
  },
  {
    body: "Me explique como funcionam as funções logarítmicas?",
    type: "text",
    emitter: "user",
  },
  {
    body: "Porque não se pode dividir por zero?",
    type: "text",
    emitter: "assistant",
  },
];
