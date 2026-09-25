window.DB_SUBJECTS = window.DB_SUBJECTS || [];
window.DB_SUBJECTS.push(
    {
      id: "quimica-a",
      name: "Química-A",
      emoji: "🧪",
      contents: [
        {
          id: "estequiometria",
          title: "Estequiometria",
          sections: [
            {
              heading: "1. Ordem para resolver uma questão",
              body: `Na aula, a sequência apresentada foi:

① Equação balanceada
Primeiro, deixe a equação balanceada.

② Proporção em mol
Depois, observe os números que aparecem na equação e monte a proporção em mol.

③ Conversão de unidades
Se o exercício fornecer uma quantidade em outra unidade, faça a conversão necessária.

④ Dúvida do exercício
Por fim, utilize a proporção para descobrir o valor que o exercício está pedindo.`,
              visual: `
<div class="flex flex-col items-center gap-1.5 max-w-xs mx-auto">
  <div class="w-full rounded-xl bg-cream border border-sand px-4 py-3 flex items-center gap-3">
    <span class="w-7 h-7 rounded-full bg-espresso text-cream flex items-center justify-center text-xs font-bold shrink-0">1</span>
    <span class="text-sm text-bark font-medium">Equação balanceada</span>
  </div>
  <span class="text-ochre text-lg leading-none">↓</span>
  <div class="w-full rounded-xl bg-cream border border-sand px-4 py-3 flex items-center gap-3">
    <span class="w-7 h-7 rounded-full bg-espresso text-cream flex items-center justify-center text-xs font-bold shrink-0">2</span>
    <span class="text-sm text-bark font-medium">Proporção em mol</span>
  </div>
  <span class="text-ochre text-lg leading-none">↓</span>
  <div class="w-full rounded-xl bg-cream border border-sand px-4 py-3 flex items-center gap-3">
    <span class="w-7 h-7 rounded-full bg-espresso text-cream flex items-center justify-center text-xs font-bold shrink-0">3</span>
    <span class="text-sm text-bark font-medium">Conversão de unidades</span>
  </div>
  <span class="text-ochre text-lg leading-none">↓</span>
  <div class="w-full rounded-xl bg-cream border border-sand px-4 py-3 flex items-center gap-3">
    <span class="w-7 h-7 rounded-full bg-espresso text-cream flex items-center justify-center text-xs font-bold shrink-0">4</span>
    <span class="text-sm text-bark font-medium">Dúvida do exercício</span>
  </div>
</div>`,
            },
            {
              heading: "2. Exemplo da aula",
              body: `Equação:
C₂H₆O + 3O₂ → 2CO₂ + 3H₂O

A equação mostra a proporção:`,
              visual: `
<div class="overflow-x-auto">
  <table class="w-full text-sm border-collapse">
    <thead>
      <tr class="border-b-2 border-espresso/70">
        <th class="text-left py-2 pr-4 font-display text-bark">Substância</th>
        <th class="text-left py-2 font-display text-bark">Quantidade</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-sand/60"><td class="py-2 pr-4 text-bark/80">C₂H₆O</td><td class="py-2 text-bark/80">1 mol</td></tr>
      <tr class="border-b border-sand/60"><td class="py-2 pr-4 text-bark/80">O₂</td><td class="py-2 text-bark/80">3 mols</td></tr>
      <tr class="border-b border-sand/60"><td class="py-2 pr-4 text-bark/80">CO₂</td><td class="py-2 text-bark/80">2 mols</td></tr>
      <tr><td class="py-2 pr-4 text-bark/80">H₂O</td><td class="py-2 text-bark/80">3 mols</td></tr>
    </tbody>
  </table>
</div>`,
            },
            {
              heading: "",
              body: `Portanto:
1 mol de C₂H₆O → 2 mols de CO₂
Essa é a proporção que será utilizada no exemplo.`,
            },
            {
              heading: "3. Conversão de mol para massa",
              body: `No exemplo, precisamos saber a massa correspondente a 1 mol de C₂H₆O e a 2 mols de CO₂.

C₂H₆O
12 · 2 + 1 · 6 + 16
= 46 g/mol

Portanto:
1 mol de C₂H₆O = 46 g

CO₂
12 + 16 · 2
= 44 g/mol

Como a equação apresenta 2 mols de CO₂:
2 · 44 g = 88 g

Então temos:
46 g de C₂H₆O → 88 g de CO₂`,
            },
            {
              heading: "4. Aplicando no exercício",
              body: `O exemplo fornece:
46 g de C₂H₆O → 2 · 44 g de CO₂

E pergunta quanto de CO₂ será produzido a partir de:
2,3 × 10³ g de C₂H₆O

Montando a proporção:
46 g → 2 · 44 g
2,3 × 10³ g → ?

Agora fazemos a multiplicação cruzada:
? = (2,3 · 10³ · 2 · 44) / 46

Resultado:
? = 4,4 · 10³ g`,
            },
            {
              heading: "🧠 O OURO DA ESTEQUIOMETRIA",
              body: `Quando aparecer uma questão desse tipo, pense sempre na sequência:

EQUAÇÃO BALANCEADA
↓
PROPORÇÃO EM MOL
↓
CONVERSÃO DE UNIDADES
↓
PROPORÇÃO PARA ENCONTRAR O ?

No exemplo:
C₂H₆O + 3O₂ → 2CO₂ + 3H₂O
1 mol C₂H₆O → 2 mol CO₂
46 g C₂H₆O → 88 g CO₂
2,3 × 10³ g C₂H₆O → 4,4 × 10³ g CO₂`,
            },
            {
              heading: "🔎 Como analisar uma questão",
              body: `Antes de fazer qualquer conta, procure:

1. Qual é a equação?
→ Balanceie.

2. Qual é a proporção em mol?
→ Olhe os números da equação.

3. Qual unidade o exercício forneceu?
→ Veja se precisa converter.

4. O que ele está perguntando?
→ Esse será o ? da proporção.

Assim você não sai fazendo conta aleatoriamente: segue a ordem da aula.`,
            },
          ],
          quiz: [
            {
              q: "Qual é o primeiro passo para resolver uma questão de estequiometria, segundo a aula?",
              options: ["Deixar a equação balanceada", "Converter unidades", "Montar a proporção em mol", "Responder a dúvida do exercício"],
              correct: 0,
            },
            {
              q: "Depois de balancear a equação, o que se deve fazer?",
              options: ["Montar a proporção em mol observando os números da equação", "Converter a temperatura", "Calcular a densidade", "Somar as massas atômicas"],
              correct: 0,
            },
            {
              q: "A conversão de unidades deve ser feita quando:",
              options: ["O exercício fornecer uma quantidade em outra unidade", "A equação não estiver balanceada", "O produto for um gás", "Sempre, independentemente do exercício"],
              correct: 0,
            },
            {
              q: "Na equação C₂H₆O + 3O₂ → 2CO₂ + 3H₂O, qual é a proporção em mol entre C₂H₆O e CO₂?",
              options: ["1 mol de C₂H₆O para 2 mols de CO₂", "1 mol de C₂H₆O para 3 mols de CO₂", "2 mols de C₂H₆O para 1 mol de CO₂", "3 mols de C₂H₆O para 2 mols de CO₂"],
              correct: 0,
            },
            {
              q: "Qual é a massa molar do C₂H₆O calculada no exemplo?",
              options: ["46 g/mol", "44 g/mol", "88 g/mol", "12 g/mol"],
              correct: 0,
            },
            {
              q: "Qual é a massa molar do CO₂ calculada no exemplo?",
              options: ["44 g/mol", "46 g/mol", "88 g/mol", "28 g/mol"],
              correct: 0,
            },
            {
              q: "Como a equação apresenta 2 mols de CO₂, qual é a massa total correspondente?",
              options: ["88 g", "44 g", "46 g", "92 g"],
              correct: 0,
            },
            {
              q: "Para descobrir o valor de '?' a partir de 2,3 × 10³ g de C₂H₆O, qual operação é usada?",
              options: ["Multiplicação cruzada", "Soma direta", "Divisão pela massa molar apenas", "Regra de três inversa"],
              correct: 0,
            },
            {
              q: "Qual é o resultado final de CO₂ produzido a partir de 2,3 × 10³ g de C₂H₆O, segundo o exemplo?",
              options: ["4,4 × 10³ g", "8,8 × 10³ g", "2,3 × 10³ g", "4,6 × 10² g"],
              correct: 0,
            },
            {
              q: "Segundo o 'ouro da estequiometria', qual é a sequência correta para resolver a questão?",
              options: [
                "Equação balanceada → Proporção em mol → Conversão de unidades → Proporção para encontrar o ?",
                "Conversão de unidades → Equação balanceada → Proporção em mol → Resposta",
                "Proporção em mol → Equação balanceada → Resposta → Conversão",
                "Resposta → Proporção → Conversão → Equação",
              ],
              correct: 0,
            },
          ],
        },
      ],
    },
);
