window.DB_SUBJECTS = window.DB_SUBJECTS || [];
window.DB_SUBJECTS.push(
    {
      id: "filosofia",
      name: "Filosofia",
      emoji: "🏺",
      contents: [
        {
          id: "aristoteles",
          title: "Aristóteles",
          sections: [
            {
              heading: "1. Aristóteles",
              body: `Livros:
Metafísica
Política
Ética a Nicômaco

Foi aluno de Platão na Academia.
Porém, criou sua própria escola, chamada Liceu.
Desenvolve o método peripatético.

Aristóteles é um dos mais influentes pensadores da história da filosofia.
Apresenta um pensamento muito vasto, que abrange, por exemplo:
Metafísica
Política
F�sica
Estética
Ética

"Os homens têm, por natureza, o desejo de conhecer."
→ As sensações são fundamentais nesse processo (ex.: visão).

A ideia
A ideia (conceito da coisa): aquilo que está contido na própria coisa, sendo anterior a ela.`,
            },
            {
              heading: "2. Oposição em relação ao dualismo de Platão — Hilemorfismo",
              body: `O ser consiste em:
Matéria (hylé) → aquilo que constitui o ser.
Forma (eidos) → como se organiza a matéria.`,
              visual: `
<div class="flex flex-col items-center gap-2 max-w-[240px] mx-auto text-center">
  <div class="w-full rounded-t-xl bg-cream border border-sand px-4 py-3">
    <p class="text-[10px] uppercase tracking-wide text-bark/60">Matéria (hylé)</p>
    <p class="text-sm text-bark font-medium">Aquilo que constitui o ser</p>
  </div>
  <span class="text-ochre text-lg leading-none">＋</span>
  <div class="w-full rounded-b-xl bg-espresso text-cream px-4 py-3">
    <p class="text-[10px] uppercase tracking-wide opacity-70">Forma (eidos)</p>
    <p class="text-sm font-medium">Como se organiza a matéria</p>
  </div>
</div>`,
            },
            {
              heading: "3. Consequências aristotélicas",
              body: `O ser se manifesta de diferentes modos.

Essência e acidente

Essência:
Característica essencial do ser.
Necessário.
Identifica o ser.

Acidente:
Característica circunstancial (ocasional) do ser.
Não é necessário.

Ato
→ Aquilo que o ser está no momento.

Potência
→ Possibilidades de realização do ser.

Exemplo:
Semente → ato: semente | potência: árvore
Árvore → ato: árvore | potência: fruto`,
              visual: `
<div class="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm">
  <div class="rounded-lg bg-cream border border-sand px-3 py-2 text-bark font-medium text-center">Semente<br/><span class="text-[10px] text-bark/60">ato: semente · potência: árvore</span></div>
  <span class="text-ochre">→</span>
  <div class="rounded-lg bg-cream border border-sand px-3 py-2 text-bark font-medium text-center">Árvore<br/><span class="text-[10px] text-bark/60">ato: árvore · potência: fruto</span></div>
  <span class="text-ochre">→</span>
  <div class="rounded-lg bg-espresso text-cream px-3 py-2 font-medium text-center">Fruto</div>
</div>`,
            },
            {
              heading: "4. As quatro causas",
              body: `A ciência é o conhecimento das causas.
→ Teoria das 4 causas.

Causa formal → O que é X?
Causa material → Do que é feito X?
Causa eficiente → Quem fez X?
Causa final → Para que X?`,
              visual: `
<div class="grid grid-cols-2 gap-2.5">
  <div class="rounded-xl bg-cream border border-sand p-3 text-center">
    <p class="font-display text-sm text-espresso mb-1">Causa Formal</p>
    <p class="text-xs text-bark/70">O que é X?</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand p-3 text-center">
    <p class="font-display text-sm text-espresso mb-1">Causa Material</p>
    <p class="text-xs text-bark/70">Do que é feito X?</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand p-3 text-center">
    <p class="font-display text-sm text-espresso mb-1">Causa Eficiente</p>
    <p class="text-xs text-bark/70">Quem fez X?</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand p-3 text-center">
    <p class="font-display text-sm text-espresso mb-1">Causa Final</p>
    <p class="text-xs text-bark/70">Para que X?</p>
  </div>
</div>`,
            },
          ],
          quiz: [
            { q: "Qual escola Aristóteles frequentou como aluno?", options: ["A Academia de Platão", "O Liceu", "O Museu de Alexandria", "A Escola de Atenas"], correct: 0 },
            { q: "Qual escola Aristóteles fundou?", options: ["O Liceu", "A Academia", "O Jardim", "O Pórtico"], correct: 0 },
            { q: "Qual método Aristóteles desenvolveu?", options: ["O método peripatético", "O método socrático apenas", "O método dialético platônico", "O método cartesiano"], correct: 0 },
            { q: "Segundo Aristóteles, os homens têm por natureza o desejo de:", options: ["Conhecer", "Governar", "Guerrear", "Acumular riquezas"], correct: 0 },
            { q: "Para Aristóteles, o que é fundamental no processo de conhecimento, segundo o exemplo dado (visão)?", options: ["As sensações", "A intuição divina", "A memória apenas", "O sonho"], correct: 0 },
            { q: "O que é o Hilemorfismo de Aristóteles?", options: ["A teoria de que o ser é composto por matéria (hylé) e forma (eidos)", "A teoria de que existem dois mundos separados", "A negação da existência da matéria", "A ideia de que só a forma existe"], correct: 0 },
            { q: "Na filosofia aristotélica, o que é a 'essência' de um ser?", options: ["A característica necessária que identifica o ser", "Uma característica ocasional e dispensável", "Algo que muda a cada momento", "O mesmo que acidente"], correct: 0 },
            { q: "O que é o 'acidente', em oposição à essência?", options: ["Uma característica circunstancial e não necessária do ser", "A característica que define o ser", "A matéria do ser", "A forma do ser"], correct: 0 },
            { q: "Na relação ato/potência, o que representa o 'ato'?", options: ["Aquilo que o ser é no momento", "As possibilidades futuras do ser", "A matéria bruta", "A causa final"], correct: 0 },
            { q: "No exemplo da semente e da árvore, a árvore representa a potência de quê?", options: ["Do fruto", "Da própria semente", "Da terra", "Da raiz"], correct: 0 },
            { q: "Segundo a Teoria das quatro causas, a causa material responde a qual pergunta?", options: ["Do que é feito X?", "Quem fez X?", "Para que X?", "O que é X?"], correct: 0 },
          ],
        },
      ],
    },
);
