window.DB_SUBJECTS = window.DB_SUBJECTS || [];
window.DB_SUBJECTS.push(
    {
      id: "analise-linguistica",
      name: "Análise Linguística",
      emoji: "🗣️",
      contents: [
{
          id: "figuras-de-linguagem",
          title: "Figuras de Linguagem",
          sections: [
            {
              heading: "O que são figuras de linguagem?",
              body: `São recursos usados para dar mais expressividade, emoção, intensidade ou beleza ao texto. Também aparecem muito em poemas, músicas, propagandas e provas.`,
            },
            {
              heading: "1. Eufemismo",
              body: `Definição: Ameniza uma ideia desagradável, triste ou muito impactante.
Como identificar: A frase evita dizer algo de forma direta.

Exemplos:
"O avô partiu para o reino dos céus." (morreu)
"O garoto faltou com a verdade." (mentiu)
"A mulher foi desligada do cargo." (foi demitida)

Ouro da prova: Sempre suaviza uma notícia ruim.`,
            },
            {
              heading: "2. Quiasmo",
              body: `Definição: Repetição em cruz, invertendo a ordem dos termos.
Estrutura: A-B / B-A.

Exemplos:
"Refiro uma cachorra amiga a uma amiga cachorra."
"O espelho reflete sem falar; meu marido fala sem refletir."

Ouro da prova: A ordem dos elementos aparece invertida.`,
            },
            {
              heading: "3. Pleonasmo",
              body: `Definição: Repetição de uma mesma ideia.

Tipos de pleonasmo:
Pleonasmo semântico: repetição do significado. Ex: "Escrever minha autobiografia."
Pleonasmo estilístico: repetição para dar ênfase. Ex: "Subir para cima." / "Fraca e sem força."
Pleonasmo sintático: repetição de uma função sintática. Ex: "Eu mesmo fiz isso."

Ouro da prova: Pergunte se a ideia foi repetida.`,
            },
            {
              heading: "4. Paradoxo",
              body: `Definição: Une ideias contraditórias no mesmo elemento.

Características:
Contradição aparente.
Muito comum em poemas.

Exemplo: "Amor é fogo que arde sem se ver."

Ouro da prova: Parece impossível, mas produz sentido.`,
            },
            {
              heading: "5. Antítese",
              body: `Definição: Aproxima palavras ou ideias opostas.

Exemplos:
Amor e ódio.
Vida e morte.
Trabalho e ócio.

Ouro da prova: Apenas oposição entre ideias.

Antítese × Paradoxo
Antítese: oposição simples.
Paradoxo: oposição contraditória.`,
              visual: `
<div class="grid grid-cols-2 gap-3 max-w-sm mx-auto text-center text-xs">
  <div class="rounded-xl bg-cream border border-sand px-3 py-4">
    <p class="font-semibold text-bark mb-1">Antítese</p>
    <p class="text-bark/70">Oposição simples</p>
    <p class="text-bark/50 mt-1">"amor e ódio"</p>
  </div>
  <div class="rounded-xl bg-espresso text-cream px-3 py-4">
    <p class="font-semibold mb-1">Paradoxo</p>
    <p class="opacity-80">Oposição contraditória, mas com sentido</p>
    <p class="opacity-60 mt-1">"fogo que arde sem se ver"</p>
  </div>
</div>`,
            },
            {
              heading: "6. Ironia",
              body: `Definição: Dizer o contrário do que realmente pensa.

Exemplo: "Nossa, você é muito rápido..." (quando está demorando).

Ouro da prova: O contexto revela o verdadeiro sentido.`,
            },
            {
              heading: "7. Preterição",
              body: `Definição: Diz que não vai falar, mas fala.

Exemplo: "Não quero me gabar, mas fui o melhor da turma."

Ouro da prova: Muito usada em discursos.`,
            },
            {
              heading: "8. Metáfora",
              body: `Definição: Comparação implícita.

Exemplos:
Ela é um anjo.
Meu pai é uma rocha.
Você iluminou minha vida.

Ouro da prova: Não usa "como".`,
            },
            {
              heading: "9. Comparação (Símile)",
              body: `Definição: Comparação explícita.

Palavras-chave: como, tal qual, igual a, assim como.

Exemplos:
Forte como um leão.
Branca como a neve.

Metáfora × Comparação
Metáfora: sem conectivo.
Comparação: com conectivo comparativo.`,
              visual: `
<div class="grid grid-cols-2 gap-3 max-w-sm mx-auto text-center text-xs">
  <div class="rounded-xl bg-cream border border-sand px-3 py-4">
    <p class="font-semibold text-bark mb-1">Metáfora</p>
    <p class="text-bark/70">Sem conectivo</p>
    <p class="text-bark/50 mt-1">"ela é um anjo"</p>
  </div>
  <div class="rounded-xl bg-espresso text-cream px-3 py-4">
    <p class="font-semibold mb-1">Comparação</p>
    <p class="opacity-80">Com conectivo (como, tal qual...)</p>
    <p class="opacity-60 mt-1">"forte como um leão"</p>
  </div>
</div>`,
            },
            {
              heading: "10. Personificação (Prosopopeia)",
              body: `Definição: Dá características humanas para seres não humanos.

Exemplos:
O vento cantava.
As árvores dançavam.
A cidade acordou.

Ouro da prova: Objeto ou natureza faz ação humana.`,
            },
            {
              heading: "11. Hipérbole",
              body: `Definição: Exagero intencional.

Exemplos:
Morri de rir.
Chorei um rio.
Esperei uma eternidade.

Ouro da prova: Exagero evidente.`,
            },
            {
              heading: "12. Metonímia",
              body: `Definição: Troca um termo por outro relacionado.

Relações comuns:
Autor pela obra.
Marca pelo produto.
Recipiente pelo conteúdo.
Lugar pelo produto.

Exemplos:
Li Machado de Assis.
Comprei um Bombril.
Tomei um copo.

Ouro da prova: Existe relação entre os termos.`,
            },
            {
              heading: "13. Catacrese",
              body: `Definição: Usa um nome por falta de outro específico.

Exemplos:
Braço da cadeira.
Pé da mesa.
Dente do alho.
Asa da xícara.

Ouro da prova: Nome emprestado.`,
            },
            {
              heading: "14. Onomatopeia",
              body: `Definição: Imita sons.

Exemplos:
Tic-tac.
Bum.
Au-au.
Miau.`,
            },
            {
              heading: "15. Aliteração",
              body: `Definição: Repetição de sons consonantais.

Exemplo: "O rato roeu a roupa do rei de Roma."

Ouro da prova: Repetição de consoantes.`,
            },
            {
              heading: "16. Assonância",
              body: `Definição: Repetição de sons vocálicos.

Exemplo: "A arara amarela."

Ouro da prova: Repetição de vogais.`,
            },
            {
              heading: "17. Anáfora",
              body: `Definição: Repetição da mesma palavra no início de frases ou versos.

Exemplo: "Se você lutar, se você acreditar, se você persistir."`,
            },
            {
              heading: "18. Elipse",
              body: `Definição: Omissão de um termo entendido pelo contexto.

Exemplo: "Na sala, apenas dois alunos." (O verbo "havia" está oculto.)`,
            },
            {
              heading: "19. Zeugma",
              body: `Definição: Omissão de um termo já citado anteriormente.

Exemplo: "Eu gosto de pizza; ela, de hambúrguer."`,
            },
            {
              heading: "20. Gradação",
              body: `Definição: Sequência crescente ou decrescente.

Exemplos:
Sussurrou, falou, gritou.
Andou, correu, voou.`,
            },
            {
              heading: "21. Apóstrofe",
              body: `Definição: Chamamento direto.

Exemplos:
Ó Deus!
Brasil, escuta teu povo.`,
            },
            {
              heading: "22. Sinestesia",
              body: `Definição: Mistura sensações de sentidos diferentes.

Exemplos:
Doce sorriso.
Voz quente.
Perfume suave.
Cor gritante.`,
            },
            {
              heading: "🏆 Resumão das figuras (Ouro da prova)",
              body: `Referência rápida para revisar antes da prova.`,
              visual: `
<div class="overflow-x-auto">
  <table class="w-full text-sm border-collapse">
    <thead><tr class="border-b-2 border-espresso/70"><th class="text-left py-2 pr-3 font-display text-bark">Figura</th><th class="text-left py-2 font-display text-bark">Identifique assim</th></tr></thead>
    <tbody>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">Eufemismo</td><td class="py-1.5 text-bark/80">Ameniza algo ruim</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">Quiasmo</td><td class="py-1.5 text-bark/80">Ordem invertida (A-B/B-A)</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">Pleonasmo</td><td class="py-1.5 text-bark/80">Ideia repetida</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">Paradoxo</td><td class="py-1.5 text-bark/80">Contradição com sentido</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">Antítese</td><td class="py-1.5 text-bark/80">Oposição de ideias</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">Ironia</td><td class="py-1.5 text-bark/80">Diz o contrário</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">Preterição</td><td class="py-1.5 text-bark/80">Diz que não vai falar, mas fala</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">Metáfora</td><td class="py-1.5 text-bark/80">Comparação implícita</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">Comparação</td><td class="py-1.5 text-bark/80">Comparação com "como"</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">Personificação</td><td class="py-1.5 text-bark/80">Ser não humano age como humano</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">Hipérbole</td><td class="py-1.5 text-bark/80">Exagero</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">Metonímia</td><td class="py-1.5 text-bark/80">Troca por relação</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">Catacrese</td><td class="py-1.5 text-bark/80">Nome emprestado</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">Onomatopeia</td><td class="py-1.5 text-bark/80">Imitação de som</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">Aliteração</td><td class="py-1.5 text-bark/80">Repetição de consoantes</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">Assonância</td><td class="py-1.5 text-bark/80">Repetição de vogais</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">Anáfora</td><td class="py-1.5 text-bark/80">Repetição no início</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">Elipse</td><td class="py-1.5 text-bark/80">Palavra omitida pelo contexto</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">Zeugma</td><td class="py-1.5 text-bark/80">Palavra omitida já citada</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">Gradação</td><td class="py-1.5 text-bark/80">Sequência de intensidade</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">Apóstrofe</td><td class="py-1.5 text-bark/80">Chamamento</td></tr>
      <tr><td class="py-1.5 pr-3 text-bark/80">Sinestesia</td><td class="py-1.5 text-bark/80">Mistura dos sentidos</td></tr>
    </tbody>
  </table>
</div>`,
            },
          ],
          quiz: [
            { q: "Qual figura está na frase \"O avô partiu para o reino dos céus\"?", options: ["Eufemismo (ameniza uma notícia ruim)", "Hipérbole (exagero)", "Metáfora (comparação implícita)", "Ironia (diz o contrário)"], correct: 0 },
            { q: "Qual figura está na frase \"A mulher foi desligada do cargo\"?", options: ["Eufemismo (suaviza a demissão)", "Antítese (oposição)", "Personificação", "Metonímia"], correct: 0 },
            { q: "Qual figura está na frase \"Refiro uma cachorra amiga a uma amiga cachorra\"?", options: ["Quiasmo (ordem invertida A-B/B-A)", "Pleonasmo", "Paradoxo", "Gradação"], correct: 0 },
            { q: "Qual figura está na frase \"Ele ama o que faz e faz o que ama\"?", options: ["Quiasmo (ordem invertida)", "Anáfora", "Antítese", "Elipse"], correct: 0 },
            { q: "Qual figura está na frase \"Subiu a escada para cima rapidamente\"?", options: ["Pleonasmo (ideia repetida)", "Zeugma", "Hipérbole", "Catacrese"], correct: 0 },
            { q: "Qual figura está na frase \"Eu mesmo entreguei o presente a ela\"?", options: ["Pleonasmo sintático (repetição da função)", "Elipse", "Quiasmo", "Sinestesia"], correct: 0 },
            { q: "Qual figura está na frase \"Ele desceu para baixo apressadamente\"?", options: ["Pleonasmo (ideia repetida)", "Antítese", "Onomatopeia", "Apóstrofe"], correct: 0 },
            { q: "Qual figura está na frase \"É preciso morrer para realmente viver\"?", options: ["Paradoxo (contradição com sentido)", "Antítese (oposição simples)", "Ironia", "Metáfora"], correct: 0 },
            { q: "Qual figura está na frase \"O silêncio gritava dentro daquela sala vazia\"?", options: ["Paradoxo", "Personificação apenas", "Comparação", "Aliteração"], correct: 0 },
            { q: "Qual figura está na frase \"Ele vive entre o amor e o ódio por aquela cidade\"?", options: ["Antítese (oposição simples)", "Paradoxo (oposição contraditória)", "Metonímia", "Preterição"], correct: 0 },
            { q: "Qual figura está na frase \"Foi um dia de luz e trevas ao mesmo tempo\"?", options: ["Antítese", "Eufemismo", "Zeugma", "Gradação"], correct: 0 },
            { q: "Qual figura está na frase \"Que demonstração de talento, ele errou todos os passos da coreografia\"?", options: ["Ironia (diz o contrário)", "Hipérbole", "Metáfora", "Preterição"], correct: 0 },
            { q: "Qual figura está na frase \"Nossa, que rapidez, esperei duas horas na fila\"?", options: ["Ironia", "Eufemismo", "Antítese", "Onomatopeia"], correct: 0 },
            { q: "Qual figura está na frase \"Não vou nem comentar sobre o seu atraso de hoje, mas isso já virou hábito\"?", options: ["Preterição (diz que não vai falar, mas fala)", "Ironia", "Elipse", "Zeugma"], correct: 0 },
            { q: "Qual figura está na frase \"Meu coração é um furacão\"?", options: ["Metáfora (compara sem usar 'como')", "Comparação (usa conectivo)", "Hipérbole", "Personificação"], correct: 0 },
            { q: "Qual figura está na frase \"Ela é a luz da minha vida\"?", options: ["Metáfora", "Comparação", "Antítese", "Sinestesia"], correct: 0 },
            { q: "Qual figura está na frase \"Ele correu como um leão atrás da presa\"?", options: ["Comparação (usa o conectivo 'como')", "Metáfora (sem conectivo)", "Hipérbole", "Metonímia"], correct: 0 },
            { q: "Qual figura está na frase \"A pele dela é macia tal qual a seda\"?", options: ["Comparação (conectivo 'tal qual')", "Metáfora", "Paradoxo", "Catacrese"], correct: 0 },
            { q: "Qual figura está na frase \"O vento beijou meu rosto\"?", options: ["Personificação (ação humana a algo não humano)", "Metáfora", "Hipérbole", "Onomatopeia"], correct: 0 },
            { q: "Qual figura está na frase \"A lua observava a cidade em silêncio\"?", options: ["Personificação", "Comparação", "Zeugma", "Aliteração"], correct: 0 },
            { q: "Qual figura está na frase \"Chorei um rio de lágrimas\"?", options: ["Hipérbole (exagero para dar ênfase)", "Metáfora", "Metonímia", "Antítese"], correct: 0 },
            { q: "Qual figura está na frase \"Já te disse isso um milhão de vezes\"?", options: ["Hipérbole", "Eufemismo", "Elipse", "Gradação"], correct: 0 },
            { q: "Qual figura está na frase \"Passei a tarde lendo Machado de Assis\"?", options: ["Metonímia (autor pela obra)", "Metáfora", "Catacrese", "Sinestesia"], correct: 0 },
            { q: "Qual figura está na frase \"Ela bebeu o copo inteiro de uma vez\"?", options: ["Metonímia (recipiente pelo conteúdo)", "Hipérbole", "Personificação", "Anáfora"], correct: 0 },
            { q: "Qual figura está na frase \"Toda a plateia aplaudiu o pincel do artista\"?", options: ["Metonímia (instrumento pela obra/talento)", "Metáfora", "Catacrese", "Ironia"], correct: 0 },
            { q: "Qual figura está na frase \"Bati o dedo no pé da mesa\"?", options: ["Catacrese (nome emprestado por falta de outro)", "Metáfora", "Metonímia", "Pleonasmo"], correct: 0 },
            { q: "Qual figura está na frase \"O relógio fazia tic-tac o tempo todo\"?", options: ["Onomatopeia (imita som)", "Aliteração", "Assonância", "Hipérbole"], correct: 0 },
            { q: "Qual figura está na frase \"De repente, ouvimos um bum vindo do quintal\"?", options: ["Onomatopeia", "Metáfora", "Antítese", "Elipse"], correct: 0 },
            { q: "Qual figura está na frase \"O rato roeu a roupa do rei de Roma\"?", options: ["Aliteração (repetição de consoantes)", "Assonância (repetição de vogais)", "Onomatopeia", "Anáfora"], correct: 0 },
            { q: "Qual figura está na frase \"Vozes veladas, veludosas vozes\"?", options: ["Aliteração", "Assonância", "Gradação", "Zeugma"], correct: 0 },
            { q: "Qual figura está na frase \"A arara amarela almoçava alegremente\"?", options: ["Assonância (repetição de vogais)", "Aliteração (repetição de consoantes)", "Onomatopeia", "Catacrese"], correct: 0 },
            { q: "Qual figura está na frase \"Se você lutar, se você acreditar, se você persistir, vai conseguir\"?", options: ["Anáfora (repetição no início)", "Gradação", "Quiasmo", "Elipse"], correct: 0 },
            { q: "Qual figura está na frase \"Amar é sofrer, amar é entregar-se, amar é viver intensamente\"?", options: ["Anáfora", "Antítese", "Sinestesia", "Preterição"], correct: 0 },
            { q: "Qual figura está na frase \"Na sala, apenas dois alunos\"?", options: ["Elipse (verbo 'havia' está oculto)", "Zeugma", "Pleonasmo", "Catacrese"], correct: 0 },
            { q: "Qual figura está na frase \"Eu gosto de pizza; ela, de hambúrguer\"?", options: ["Zeugma (omissão de termo já citado)", "Elipse", "Quiasmo", "Antítese"], correct: 0 },
            { q: "Qual figura está na frase \"Sussurrou, falou, gritou até ficar rouco\"?", options: ["Gradação (sequência crescente)", "Anáfora", "Hipérbole", "Metonímia"], correct: 0 },
            { q: "Qual figura está na frase \"Andou, correu, voou pelas ruas da cidade\"?", options: ["Gradação", "Personificação", "Aliteração", "Elipse"], correct: 0 },
            { q: "Qual figura está na frase \"Ó Brasil, escuta o clamor do teu povo!\"?", options: ["Apóstrofe (chamamento direto)", "Personificação", "Antítese", "Onomatopeia"], correct: 0 },
            { q: "Qual figura está na frase \"Sua voz quente me acalmava\"?", options: ["Sinestesia (mistura de sentidos)", "Metáfora", "Hipérbole", "Catacrese"], correct: 0 },
            { q: "Qual figura está na frase \"O perfume doce daquela flor invadiu o quarto\"?", options: ["Sinestesia", "Comparação", "Zeugma", "Quiasmo"], correct: 0 },
          ],
        }
,
{
          id: "variacao-linguistica",
          title: "Variação Linguística",
          sections: [
            {
              heading: "O que é variação linguística?",
              body: `É a mudança na maneira de falar e escrever uma língua conforme região, idade, grupo social, situação de comunicação e época.

Ouro da prova: A língua muda, mas continua sendo português.`,
            },
            {
              heading: "1. Variação Lexical",
              body: `Definição: Mudança da palavra inteira para nomear a mesma realidade.

Exemplos:
mandioca → aipim → macaxeira.
pipa → papagaio → pandorga.
sorvete → geladinho (em algumas regiões).

Ouro da prova: Troca a palavra.`,
            },
            {
              heading: "2. Variação Gramatical Fonológica",
              body: `Definição: A palavra permanece a mesma, mas muda a pronúncia.

Exemplos:
mininu → menino.
cadernu → caderno.
canta → cantar.

Ouro da prova: Mudança no som.`,
            },
            {
              heading: "3. Variação Gramatical Morfológica",
              body: `Definição: Mudança na forma ou flexão das palavras.

Exemplos:
nós foi → nós fomos.
tu fala → tu falas.
a gente foi → nós fomos.
liquinzinho → licozinho.

Ouro da prova: Mudança na forma da palavra ou expressão.`,
            },
            {
              heading: "4. Variação Gramatical Sintática",
              body: `Definição: Mudança na organização da frase.

Exemplos:
Eu vi ele. → Eu o vi.
Me diga. → Diga-me.
Vou nos médicos. → Vou aos médicos.
Fui na praia. → Fui à praia.

Ouro da prova: Estrutura da frase muda.`,
            },
            {
              heading: "Tipos Gerais de Variação Linguística",
              body: `Variação Regional (Diatópica): muda conforme o lugar. Ex: mandioca / aipim / macaxeira; "trem" (MG) com significado de "coisa".

Variação Social (Diastrática): muda conforme grupo social, escolaridade, profissão ou idade. Ex: gírias, linguagem técnica, linguagem popular.

Variação Histórica (Diacrônica): mudança da língua ao longo do tempo. Ex: Vossa Mercê → Você; Pharmacia → Farmácia.

Variação Situacional (Diafásica): muda conforme a situação de comunicação. Ex: conversa entre amigos, entrevista de emprego, prova escolar.`,
              visual: `
<div class="grid grid-cols-2 gap-2.5">
  <div class="rounded-xl bg-cream border border-sand p-3 text-center">
    <p class="font-display text-sm text-espresso mb-1">Regional</p>
    <p class="text-[11px] text-bark/70">Muda conforme o lugar</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand p-3 text-center">
    <p class="font-display text-sm text-espresso mb-1">Social</p>
    <p class="text-[11px] text-bark/70">Muda conforme o grupo social</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand p-3 text-center">
    <p class="font-display text-sm text-espresso mb-1">Histórica</p>
    <p class="text-[11px] text-bark/70">Muda ao longo do tempo</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand p-3 text-center">
    <p class="font-display text-sm text-espresso mb-1">Situacional</p>
    <p class="text-[11px] text-bark/70">Muda conforme o contexto</p>
  </div>
</div>`,
            },
            {
              heading: "Norma-Padrão × Linguagem Coloquial",
              body: `Norma-padrão: é a forma considerada adequada em contextos formais. Ex: "Eu o encontrei." / "Fui à praia."

Linguagem coloquial: é usada no cotidiano. Ex: "Vi ele." / "Fui na praia."

Ouro da prova: Coloquial não significa "errado"; depende da situação.`,
              visual: `
<div class="grid grid-cols-2 gap-3 max-w-sm mx-auto text-center text-xs">
  <div class="rounded-xl bg-espresso text-cream px-3 py-4">
    <p class="font-semibold mb-1">Norma-padrão</p>
    <p class="opacity-80">Contextos formais</p>
    <p class="opacity-60 mt-1">"Fui à praia."</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand px-3 py-4">
    <p class="font-semibold text-bark mb-1">Coloquial</p>
    <p class="text-bark/70">Cotidiano</p>
    <p class="text-bark/50 mt-1">"Fui na praia."</p>
  </div>
</div>`,
            },
            {
              heading: "🏆 Resumão das variações",
              body: `Referência rápida para revisar antes da prova.`,
              visual: `
<div class="overflow-x-auto">
  <table class="w-full text-sm border-collapse">
    <thead><tr class="border-b-2 border-espresso/70"><th class="text-left py-2 pr-3 font-display text-bark">Tipo</th><th class="text-left py-2 font-display text-bark">O que muda?</th></tr></thead>
    <tbody>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">Lexical</td><td class="py-1.5 text-bark/80">Palavra inteira</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">Fonológica</td><td class="py-1.5 text-bark/80">Som da palavra</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">Morfológica</td><td class="py-1.5 text-bark/80">Forma/flexão da palavra</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">Sintática</td><td class="py-1.5 text-bark/80">Estrutura da frase</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">Regional</td><td class="py-1.5 text-bark/80">Lugar onde se fala</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">Social</td><td class="py-1.5 text-bark/80">Grupo social</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">Histórica</td><td class="py-1.5 text-bark/80">Tempo</td></tr>
      <tr><td class="py-1.5 pr-3 text-bark/80">Situacional</td><td class="py-1.5 text-bark/80">Contexto de comunicação</td></tr>
    </tbody>
  </table>
</div>`,
            },
          ],
          quiz: [
            { q: "O que é variação linguística?", options: ["A mudança na forma de falar/escrever conforme região, idade, grupo social, situação e época", "Um erro gramatical", "Uma única forma fixa da língua", "A ausência de regras na língua"], correct: 0 },
            { q: "Variação Lexical é a mudança:", options: ["Da palavra inteira usada para nomear a mesma realidade", "Apenas do som da palavra", "Apenas da ordem da frase", "Apenas da forma verbal"], correct: 0 },
            { q: "Variação Gramatical Fonológica muda:", options: ["O som da palavra, mantendo a palavra", "O significado da palavra", "A palavra inteira", "A ordem da frase"], correct: 0 },
            { q: "Variação Gramatical Morfológica muda:", options: ["A forma ou flexão das palavras", "Apenas a pronúncia", "Apenas o vocabulário", "Apenas a pontuação"], correct: 0 },
            { q: "Variação Gramatical Sintática muda:", options: ["A organização da frase", "Apenas o som", "Apenas o vocabulário", "Apenas a flexão verbal"], correct: 0 },
            { q: "Variação Regional (Diatópica) muda conforme:", options: ["O lugar onde se fala", "A idade do falante", "A época histórica", "A situação de comunicação"], correct: 0 },
            { q: "Variação Social (Diastrática) muda conforme:", options: ["O grupo social, escolaridade, profissão ou idade", "O lugar geográfico", "A época histórica", "Apenas o clima da região"], correct: 0 },
            { q: "Variação Histórica (Diacrônica) representa:", options: ["A mudança da língua ao longo do tempo", "A mudança conforme o grupo social", "A mudança conforme o lugar", "A mudança conforme a situação"], correct: 0 },
            { q: "Variação Situacional (Diafásica) muda conforme:", options: ["A situação de comunicação", "A época histórica", "O lugar geográfico", "O grupo social"], correct: 0 },
            { q: "O que é a norma-padrão?", options: ["A forma considerada adequada em contextos formais", "Uma forma errada da língua", "Uma gíria regional", "Uma variação apenas oral"], correct: 0 },
            { q: "O que é a linguagem coloquial?", options: ["A forma usada no cotidiano", "A única forma correta da língua", "Uma variação exclusivamente escrita", "Uma língua estrangeira"], correct: 0 },
            { q: "Segundo o 'ouro da prova', a linguagem coloquial:", options: ["Não significa 'errado', depende da situação", "É sempre incorreta", "Só existe na escrita", "É proibida em provas"], correct: 0 },
            { q: "'mandioca', 'aipim' e 'macaxeira' são exemplos de qual tipo de variação?", options: ["Lexical (e também regional)", "Fonológica", "Sintática", "Histórica"], correct: 0 },
            { q: "'Vossa Mercê' evoluindo para 'Você' é um exemplo de variação:", options: ["Histórica (Diacrônica)", "Regional", "Social", "Situacional"], correct: 0 },
            { q: "Falar de um jeito em uma entrevista de emprego e de outro jeito com amigos é um exemplo de variação:", options: ["Situacional (Diafásica)", "Lexical", "Fonológica", "Histórica"], correct: 0 },
            { q: "Em 'mininu' no lugar de 'menino', qual tipo de variação está presente?", options: ["Variação Fonológica", "Variação Lexical", "Variação Sintática", "Variação Histórica"], correct: 0 },
            { q: "Em 'nós foi' no lugar de 'nós fomos', qual tipo de variação está presente?", options: ["Variação Morfológica", "Variação Fonológica", "Variação Lexical", "Variação Histórica"], correct: 0 },
            { q: "Em 'Eu vi ele' no lugar de 'Eu o vi', qual tipo de variação está presente?", options: ["Variação Sintática", "Variação Fonológica", "Variação Lexical", "Variação Morfológica"], correct: 0 },
            { q: "Em 'pipa', 'papagaio' e 'pandorga' para o mesmo objeto, qual tipo de variação está presente?", options: ["Variação Lexical", "Variação Fonológica", "Variação Sintática", "Variação Morfológica"], correct: 0 },
            { q: "Em 'tu fala' no lugar de 'tu falas', qual tipo de variação está presente?", options: ["Variação Morfológica", "Variação Lexical", "Variação Sintática", "Variação Fonológica"], correct: 0 },
            { q: "Em 'cadernu' no lugar de 'caderno', qual tipo de variação está presente?", options: ["Variação Fonológica", "Variação Morfológica", "Variação Sintática", "Variação Lexical"], correct: 0 },
            { q: "Em 'Fui na praia' no lugar de 'Fui à praia', qual tipo de variação está presente?", options: ["Variação Sintática", "Variação Fonológica", "Variação Lexical", "Variação Morfológica"], correct: 0 },
            { q: "O uso de gírias entre um grupo de amigos jovens exemplifica qual tipo de variação?", options: ["Variação Social (Diastrática)", "Variação Regional", "Variação Histórica", "Variação Situacional"], correct: 0 },
            { q: "O termo 'trem' usado em Minas Gerais com o sentido de 'coisa' exemplifica qual tipo de variação?", options: ["Variação Regional (Diatópica)", "Variação Histórica", "Variação Situacional", "Variação Morfológica"], correct: 0 },
            { q: "'Pharmacia' escrito no passado e 'Farmácia' hoje exemplifica qual tipo de variação?", options: ["Variação Histórica (Diacrônica)", "Variação Regional", "Variação Social", "Variação Situacional"], correct: 0 },
          ],
        }
,
{
          id: "sentido-signo-intertextualidade",
          title: "Sentido das Palavras, Signo Linguístico e Intertextualidade",
          sections: [
            {
              heading: "1. Sentido Literal e Sentido Figurado",
              body: `Sentido Literal (Denotação)
Definição: Palavra usada no seu significado real, objetivo e de dicionário.
Características: Não há interpretação. Muito usado em textos científicos, notícias e instruções.
Exemplos: "O cachorro está no quintal." / "A porta está aberta." / "A água está fria."
Ouro da prova: Significado exato.

Sentido Figurado (Conotação)
Definição: Palavra usada com significado diferente do literal, dependendo do contexto.
Características: Linguagem subjetiva. Muito usada em poemas, músicas, propagandas e figuras de linguagem.
Exemplos: "Meu coração está em pedaços." / "Ela tem um coração de ouro." / "Estou explodindo de felicidade."
Ouro da prova: Precisa interpretar o contexto.

Macete da prova: Pergunte se a palavra está sendo usada exatamente como existe ou com outro sentido.`,
              visual: `
<div class="overflow-x-auto">
  <table class="w-full text-sm border-collapse max-w-sm mx-auto">
    <thead><tr class="border-b-2 border-espresso/70"><th class="text-left py-2 pr-3 font-display text-bark">Denotação (Literal)</th><th class="text-left py-2 font-display text-bark">Conotação (Figurado)</th></tr></thead>
    <tbody>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">Significado real</td><td class="py-1.5 text-bark/80">Significado simbólico</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">Objetivo</td><td class="py-1.5 text-bark/80">Subjetivo</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">Informativo</td><td class="py-1.5 text-bark/80">Expressivo</td></tr>
      <tr><td class="py-1.5 pr-3 text-bark/80">"A pedra é pesada."</td><td class="py-1.5 text-bark/80">"Ele é uma pedra."</td></tr>
    </tbody>
  </table>
</div>`,
            },
            {
              heading: "2. Signo Linguístico",
              body: `O que é signo linguístico?
É a unidade básica da linguagem formada por significante e significado.

Significante
Definição: Parte material da palavra. É: som, escrita, forma da palavra.
Exemplo: Palavra CASA. Significante = C-A-S-A (som e escrita).

Significado
Definição: Ideia ou conceito que a palavra representa.
Exemplo: CASA = construção onde pessoas moram.

Exemplo completo
Palavra: Flor.
Significante: F-L-O-R (som e escrita).
Significado: Planta que produz flores.

Ouro da prova: Nunca confundir escrita da palavra com o conceito da palavra.`,
              visual: `
<div class="flex flex-col items-center gap-2 max-w-[220px] mx-auto text-center">
  <div class="w-full rounded-t-xl bg-espresso text-cream px-4 py-3">
    <p class="text-[10px] uppercase tracking-wide opacity-70">Significante</p>
    <p class="font-display text-lg">C · A · S · A</p>
    <p class="text-[10px] opacity-70">som e escrita</p>
  </div>
  <span class="text-ochre text-lg leading-none">＋</span>
  <div class="w-full rounded-b-xl bg-cream border border-sand px-4 py-3">
    <p class="text-[10px] uppercase tracking-wide text-bark/60">Significado</p>
    <p class="text-sm text-bark font-medium">construção onde pessoas moram</p>
  </div>
</div>`,
            },
            {
              heading: "3. Intertextualidade",
              body: `O que é intertextualidade?
É a relação entre um texto e outro texto já existente. Pode acontecer em músicas, filmes, propagandas, memes, livros e poemas.
Ouro da prova: Um texto conversa com outro.

Citação
Definição: Reprodução direta de parte de outro texto.
Características: Pode aparecer entre aspas. Mantém as palavras originais.
Exemplo: "No meio do caminho tinha uma pedra." — trecho reproduzido de Carlos Drummond de Andrade.
Ouro da prova: Copia literalmente.

Alusão
Definição: Referência indireta a outro texto, personagem ou acontecimento.
Características: Não copia. Apenas lembra outro texto.
Exemplos: "Ele encontrou seu calcanhar de Aquiles." / "Essa história parece Romeu e Julieta."
Ouro da prova: Apenas faz referência.

Polêmica
Definição: Um texto dialoga com outro para discutir, questionar ou gerar debate.
Características: Pode criticar ideias. Pode defender posição diferente.
Exemplo: Um artigo responde criticando outro artigo sobre redes sociais.
Ouro da prova: Existe debate entre textos.

Contraposição
Definição: Um texto apresenta ideia contrária à de outro texto.
Características: Discordância. Contestação. Mudança de ponto de vista.
Exemplo: Um poema idealiza a cidade; outro mostra seus problemas.
Ouro da prova: Um texto se opõe ao outro.`,
              visual: `
<div class="overflow-x-auto">
  <table class="w-full text-sm border-collapse max-w-sm mx-auto">
    <thead><tr class="border-b-2 border-espresso/70"><th class="text-left py-2 pr-3 font-display text-bark">Tipo</th><th class="text-left py-2 font-display text-bark">Como identificar?</th></tr></thead>
    <tbody>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">Citação</td><td class="py-1.5 text-bark/80">Trecho copiado literalmente</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">Alusão</td><td class="py-1.5 text-bark/80">Referência indireta</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">Polêmica</td><td class="py-1.5 text-bark/80">Debate ou questionamento</td></tr>
      <tr><td class="py-1.5 pr-3 text-bark/80">Contraposição</td><td class="py-1.5 text-bark/80">Contradiz ou se opõe</td></tr>
    </tbody>
  </table>
</div>`,
            },
            {
              heading: "🧠 Ouro da prova — Conteúdo 3",
              body: `Sentido Literal × Figurado
Literal (Denotação): significado real.
Figurado (Conotação): significado simbólico.

Significante × Significado
Significante: forma da palavra (som e escrita).
Significado: conceito da palavra.

Citação × Alusão
Citação: reproduz exatamente outro texto.
Alusão: apenas faz referência.

Polêmica × Contraposição
Polêmica: diálogo para discutir ou criticar ideias.
Contraposição: apresenta uma ideia oposta à de outro texto.`,
            },
          ],
          quiz: [
            { q: "O que é sentido literal (denotação)?", options: ["A palavra usada no seu significado real, objetivo e de dicionário", "A palavra usada com significado simbólico", "Uma figura de linguagem", "Um erro de interpretação"], correct: 0 },
            { q: "O que é sentido figurado (conotação)?", options: ["A palavra usada com significado diferente do literal, dependendo do contexto", "A palavra usada apenas no dicionário", "A ausência de significado", "Um erro gramatical"], correct: 0 },
            { q: "Onde o sentido literal é mais usado, segundo o conteúdo?", options: ["Em textos científicos, notícias e instruções", "Em poemas e músicas", "Apenas em propagandas", "Apenas em piadas"], correct: 0 },
            { q: "Onde o sentido figurado é mais usado?", options: ["Em poemas, músicas, propagandas e figuras de linguagem", "Apenas em notícias", "Apenas em bulas de remédio", "Apenas em manuais técnicos"], correct: 0 },
            { q: "O que é o signo linguístico?", options: ["A unidade básica da linguagem, formada por significante e significado", "Apenas o som da palavra", "Apenas o conceito da palavra", "Uma figura de linguagem"], correct: 0 },
            { q: "O que é o significante?", options: ["A parte material da palavra (som e escrita)", "O conceito ou ideia da palavra", "Um sinônimo da palavra", "Uma variação linguística"], correct: 0 },
            { q: "O que é o significado?", options: ["A ideia ou conceito que a palavra representa", "A forma escrita da palavra apenas", "O som da palavra apenas", "Uma figura de linguagem"], correct: 0 },
            { q: "O que é intertextualidade?", options: ["A relação entre um texto e outro texto já existente", "A ausência de relação entre textos", "Um erro de interpretação", "Um tipo de figura de linguagem"], correct: 0 },
            { q: "O que caracteriza a Citação como tipo de intertextualidade?", options: ["Reprodução direta de parte de outro texto, mantendo as palavras originais", "Apenas uma referência indireta", "Um debate entre textos", "Uma ideia contrária a outro texto"], correct: 0 },
            { q: "O que caracteriza a Alusão?", options: ["Referência indireta a outro texto, sem copiar", "A cópia literal de um texto", "Um debate entre autores", "Uma contradição entre textos"], correct: 0 },
            { q: "O que caracteriza a Polêmica como tipo de intertextualidade?", options: ["Um texto dialoga com outro para discutir, questionar ou gerar debate", "A cópia literal de outro texto", "Uma referência indireta apenas", "A ausência de relação entre textos"], correct: 0 },
            { q: "O que caracteriza a Contraposição?", options: ["Um texto apresenta ideia contrária à de outro texto", "A cópia literal de outro texto", "Uma referência indireta apenas", "Um elogio a outro texto"], correct: 0 },
            { q: "Qual é a principal diferença entre Citação e Alusão?", options: ["A citação copia o trecho; a alusão apenas faz referência", "Ambas copiam o texto original", "Ambas são apenas implícitas", "Não existe diferença entre elas"], correct: 0 },
            { q: "Qual é a principal diferença entre Polêmica e Contraposição?", options: ["A polêmica é um debate; a contraposição apresenta uma ideia oposta", "São exatamente a mesma coisa", "A contraposição sempre concorda com o outro texto", "A polêmica nunca envolve discordância"], correct: 0 },
            { q: "Segundo o 'macete da prova', para diferenciar denotação de conotação deve-se perguntar:", options: ["Se a palavra está sendo usada exatamente como existe ou com outro sentido", "Se a frase é longa ou curta", "Se o texto é antigo ou moderno", "Se a palavra é masculina ou feminina"], correct: 0 },
            { q: "Na frase 'A água está fria', o sentido da palavra 'fria' é:", options: ["Literal (denotação)", "Figurado (conotação)", "Ambíguo", "Impossível de definir"], correct: 0 },
            { q: "Na frase 'Ela tem um coração de ouro', o sentido da expressão é:", options: ["Figurado (conotação)", "Literal (denotação)", "Não possui sentido", "Apenas informativo"], correct: 0 },
            { q: "Na frase 'A porta está aberta', o sentido da palavra 'aberta' é:", options: ["Literal (denotação)", "Figurado (conotação)", "Simbólico", "Poético"], correct: 0 },
            { q: "Na frase 'Meu coração está em pedaços', o sentido é:", options: ["Figurado (conotação)", "Literal (denotação)", "Científico", "Informativo"], correct: 0 },
            { q: "Na palavra 'CASA', o som e a escrita C-A-S-A representam:", options: ["O significante", "O significado", "A conotação", "A denotação"], correct: 0 },
            { q: "Na palavra 'CASA', a ideia de 'construção onde pessoas moram' representa:", options: ["O significado", "O significante", "A denotação apenas", "Uma figura de linguagem"], correct: 0 },
            { q: "Quando um poema reproduz entre aspas um verso exato de Carlos Drummond de Andrade, isso é um exemplo de:", options: ["Citação", "Alusão", "Polêmica", "Contraposição"], correct: 0 },
            { q: "Quando um texto diz 'ele encontrou seu calcanhar de Aquiles', sem citar diretamente a fonte, isso é um exemplo de:", options: ["Alusão", "Citação", "Polêmica", "Contraposição"], correct: 0 },
            { q: "Quando um artigo responde criticando diretamente outro artigo sobre o mesmo tema, isso é um exemplo de:", options: ["Polêmica", "Citação", "Alusão", "Contraposição"], correct: 0 },
            { q: "Quando um poema idealiza a cidade e outro poema mostra seus problemas, isso é um exemplo de:", options: ["Contraposição", "Citação", "Alusão", "Polêmica"], correct: 0 },
          ],
        }
,
{
          id: "variacao-de-modalidade",
          title: "Variação de Modalidade",
          sections: [
            {
              heading: "Conceito Principal",
              body: `As diferenças essenciais entre a modalidade oral e a escrita estão diretamente relacionadas a três aspectos fundamentais: Interação, Produção e Planejamento.`,
            },
            {
              heading: "1. Interação",
              body: `Oralidade: Ocorre no formato "face a face" (contato direto).
Escrita: Ocorre com os interlocutores em formato "afastado".`,
            },
            {
              heading: "2. Produção",
              body: `Oralidade: Acontece "ao mesmo tempo" em que a interação ocorre.
Escrita: É "anterior à interação" (o texto é produzido antes de chegar ao leitor).`,
            },
            {
              heading: "3. Planejamento",
              body: `Oralidade: É "planejado na hora" (simultâneo e espontâneo).
Escrita: É "anterior à produção" (exige organização e pensamento prévio).`,
              visual: `
<div class="overflow-x-auto">
  <table class="w-full text-sm border-collapse">
    <thead><tr class="border-b-2 border-espresso/70"><th class="text-left py-2 pr-3 font-display text-bark">Aspecto</th><th class="text-left py-2 pr-3 font-display text-bark">Oralidade</th><th class="text-left py-2 font-display text-bark">Escrita</th></tr></thead>
    <tbody>
      <tr class="border-b border-sand/60"><td class="py-2 pr-3 text-bark/80">Interação</td><td class="py-2 pr-3 text-bark/80">Face a face</td><td class="py-2 text-bark/80">Afastada</td></tr>
      <tr class="border-b border-sand/60"><td class="py-2 pr-3 text-bark/80">Produção</td><td class="py-2 pr-3 text-bark/80">Ao mesmo tempo da interação</td><td class="py-2 text-bark/80">Anterior à interação</td></tr>
      <tr><td class="py-2 pr-3 text-bark/80">Planejamento</td><td class="py-2 pr-3 text-bark/80">Planejado na hora</td><td class="py-2 text-bark/80">Anterior à produção</td></tr>
    </tbody>
  </table>
</div>`,
            },
            {
              heading: "Gatilho Mental (Anotação Visual)",
              body: `Lembre-se do desenho do "Tucano" feito no meio da página! Use-o como uma âncora visual: quando a questão da prova falar sobre modalidades, lembre do tucano para puxar esses três passos (Interação, Produção e Planejamento) na memória.`,
              visual: `
<div class="flex items-center gap-3 max-w-xs mx-auto rounded-xl bg-beige/50 border border-sand px-4 py-3">
  <span class="text-3xl">🦜</span>
  <div class="text-xs text-bark">
    <p class="font-semibold mb-0.5">Âncora visual: o Tucano</p>
    <p class="text-bark/70">Interação → Produção → Planejamento</p>
  </div>
</div>`,
            },
          ],
          quiz: [
            { q: "Quantos aspectos fundamentais diferenciam a modalidade oral da escrita, segundo o conteúdo?", options: ["Três", "Dois", "Quatro", "Cinco"], correct: 0 },
            { q: "Quais são os três aspectos fundamentais?", options: ["Interação, Produção e Planejamento", "Fonética, Sintaxe e Semântica", "Leitura, Escrita e Fala", "Gramática, Vocabulário e Pronúncia"], correct: 0 },
            { q: "Na Interação, como ocorre a oralidade?", options: ["No formato 'face a face' (contato direto)", "Com os interlocutores afastados", "De forma anterior à interação", "De forma planejada com antecedência"], correct: 0 },
            { q: "Na Interação, como ocorre a escrita?", options: ["Com os interlocutores em formato 'afastado'", "No formato 'face a face'", "Sempre ao mesmo tempo da leitura", "Sempre de forma espontânea"], correct: 0 },
            { q: "Na Produção, quando a oralidade acontece?", options: ["Ao mesmo tempo em que a interação ocorre", "Antes da interação ocorrer", "Muito tempo depois da interação", "Nunca em tempo real"], correct: 0 },
            { q: "Na Produção, quando a escrita acontece?", options: ["Antes da interação (o texto é produzido antes de chegar ao leitor)", "Ao mesmo tempo da leitura", "Depois que o leitor já respondeu", "Simultaneamente à fala"], correct: 0 },
            { q: "Como é o Planejamento na oralidade?", options: ["Planejado na hora (simultâneo e espontâneo)", "Sempre organizado com antecedência", "Nunca existe planejamento", "Só ocorre por escrito"], correct: 0 },
            { q: "Como é o Planejamento na escrita?", options: ["Anterior à produção (exige organização e pensamento prévio)", "Feito no exato momento da fala", "Sempre espontâneo", "Inexistente"], correct: 0 },
            { q: "Qual gatilho mental o conteúdo sugere para lembrar dos três aspectos?", options: ["A imagem de um Tucano desenhado no meio da página", "Um mapa mental de cores", "Uma música específica", "Uma linha do tempo"], correct: 0 },
            { q: "O gatilho visual do Tucano serve para lembrar de quais três passos?", options: ["Interação, Produção e Planejamento", "Leitura, Escrita e Fala", "Denotação, Conotação e Intertextualidade", "Regional, Social e Histórica"], correct: 0 },
            { q: "Em relação ao momento de produção, a principal diferença entre fala e escrita é:", options: ["A fala ocorre ao mesmo tempo da interação; a escrita é produzida antes", "Ambas ocorrem sempre ao mesmo tempo", "A escrita é sempre espontânea", "A fala é sempre planejada com antecedência"], correct: 0 },
            { q: "Em relação à interação, a principal diferença entre fala e escrita é:", options: ["A fala é face a face; a escrita mantém os interlocutores afastados", "Ambas exigem contato direto", "A escrita é sempre face a face", "Não há diferença de interação entre elas"], correct: 0 },
            { q: "Em relação ao planejamento, a principal diferença entre fala e escrita é:", options: ["A fala é planejada na hora; a escrita exige organização prévia", "Ambas são sempre espontâneas", "A fala sempre exige planejamento prévio", "A escrita nunca é planejada"], correct: 0 },
            { q: "Por que a escrita é considerada 'anterior à interação'?", options: ["Porque o texto é produzido antes de chegar ao leitor", "Porque o texto é produzido durante a leitura", "Porque não existe planejamento na escrita", "Porque a escrita ocorre sempre em tempo real"], correct: 0 },
            { q: "Por que a oralidade é considerada espontânea no planejamento?", options: ["Porque é planejada na hora, simultaneamente à fala", "Porque é sempre organizada com antecedência", "Porque nunca envolve interação direta", "Porque é sempre revisada antes de ser dita"], correct: 0 },
            { q: "Uma conversa espontânea entre amigos em um café é um exemplo de:", options: ["Modalidade oral, com interação face a face", "Modalidade escrita, com interlocutores afastados", "Nenhuma das duas modalidades", "Uma variação histórica"], correct: 0 },
            { q: "Uma carta escrita e enviada pelo correio, lida dias depois, exemplifica:", options: ["Modalidade escrita, com produção anterior à interação", "Modalidade oral, simultânea à interação", "Uma variação regional", "Uma figura de linguagem"], correct: 0 },
            { q: "Um discurso improvisado, sem roteiro prévio, exemplifica qual característica da oralidade?", options: ["Planejamento feito na hora, de forma espontânea", "Planejamento anterior à produção", "Produção anterior à interação", "Interação totalmente afastada"], correct: 0 },
            { q: "Um livro escrito ao longo de meses antes de ser publicado exemplifica qual característica da escrita?", options: ["Planejamento anterior à produção", "Planejamento feito na hora", "Interação face a face", "Produção simultânea à leitura"], correct: 0 },
            { q: "Uma ligação telefônica entre duas pessoas conversando ao mesmo tempo exemplifica:", options: ["Produção oral, ao mesmo tempo em que a interação ocorre", "Produção escrita, anterior à interação", "Uma variação lexical", "Uma figura de linguagem"], correct: 0 },
            { q: "Um e-mail redigido, revisado e só depois enviado ao destinatário exemplifica:", options: ["Produção escrita, anterior à interação", "Produção oral, simultânea à interação", "Uma variação fonológica", "Uma metáfora"], correct: 0 },
            { q: "Duas pessoas discutindo pessoalmente, se vendo e se ouvindo diretamente, exemplificam qual aspecto da oralidade?", options: ["Interação face a face", "Interação afastada", "Planejamento prévio", "Produção anterior à interação"], correct: 0 },
            { q: "Um bilhete deixado sobre a mesa para ser lido depois que a pessoa já foi embora exemplifica qual aspecto da escrita?", options: ["Interação afastada (os interlocutores não estão juntos no momento)", "Interação face a face", "Planejamento feito na hora", "Produção simultânea"], correct: 0 },
            { q: "Uma apresentação de improviso teatral, criada no momento, é um exemplo de:", options: ["Planejamento oral, feito na hora", "Planejamento escrito, anterior à produção", "Produção escrita", "Interação afastada"], correct: 0 },
            { q: "Um roteiro de filme, escrito e revisado antes das gravações, exemplifica:", options: ["Planejamento anterior à produção, típico da escrita", "Planejamento feito na hora, típico da oralidade", "Interação face a face", "Produção simultânea à interação"], correct: 0 },
          ],
        }
,
      ],
    },
);
