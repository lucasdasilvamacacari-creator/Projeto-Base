window.DB_SUBJECTS = window.DB_SUBJECTS || [];
window.DB_SUBJECTS.push(
    {
      id: "sociologia",
      name: "Sociologia",
      emoji: "🧑‍🤝‍🧑",
      contents: [
        {
          id: "max-weber",
          title: "Max Weber",
          sections: [
            {
              heading: "1. Max Weber",
              body: `Livros:
A Ética Protestante e o Espírito do Capitalismo
Economia e Sociedade

Weber busca compreender a sociedade a partir das ações do indivíduo.
→ Assim, define o conceito de ação social.

Ação social é toda ação que acontece na sociedade e pode ser sentida (significado) e surtir em relação aos outros.

Tipos ideais de ação social:
1. Ação tradicional → Ocorre em função de costumes (tradições).
2. Ação afetiva → Ocorre em função das emoções (afetos).
3. Ação racional → Ocorre em função de planejamentos (cálculos).

Ação racional:
A) Ação racional com relação a fins → Objetivo
B) Ação racional com relação a valores → Ética`,
              visual: `
<div class="grid grid-cols-3 gap-2.5">
  <div class="rounded-xl bg-cream border border-sand p-3 text-center">
    <p class="font-display text-sm text-espresso mb-1">Tradicional</p>
    <p class="text-[11px] text-bark/70">Costumes</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand p-3 text-center">
    <p class="font-display text-sm text-espresso mb-1">Afetiva</p>
    <p class="text-[11px] text-bark/70">Emoções</p>
  </div>
  <div class="rounded-xl bg-espresso text-cream p-3 text-center">
    <p class="font-display text-sm mb-1">Racional</p>
    <p class="text-[11px] opacity-80">Planejamento</p>
  </div>
</div>
<div class="grid grid-cols-2 gap-2.5 mt-2.5 max-w-xs mx-auto">
  <div class="rounded-lg bg-beige border border-sand px-3 py-2 text-center">
    <p class="text-xs font-semibold text-bark">Com relação a fins</p>
    <p class="text-[10px] text-bark/60">Objetivo</p>
  </div>
  <div class="rounded-lg bg-beige border border-sand px-3 py-2 text-center">
    <p class="text-xs font-semibold text-bark">Com relação a valores</p>
    <p class="text-[10px] text-bark/60">Ética</p>
  </div>
</div>`,
            },
            {
              heading: "2. Sociedade moderna",
              body: `Segundo Weber, a sociedade moderna é marcada por um processo de racionalização.
→ Caracterizada pela burocracia.

Burocracia: estrutura técnico-administrativa, racionalmente desenvolvida, que visa o máximo da eficiência.

Características:
Regras (regimento)
Hierarquia
Cargos e funções
Separação entre vida privada e profissional`,
              visual: `
<div class="grid grid-cols-2 gap-2.5">
  <div class="rounded-xl bg-cream border border-sand p-3 text-center">
    <p class="text-sm font-semibold text-bark">Regras</p>
    <p class="text-[11px] text-bark/60">Regimento</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand p-3 text-center">
    <p class="text-sm font-semibold text-bark">Hierarquia</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand p-3 text-center">
    <p class="text-sm font-semibold text-bark">Cargos e funções</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand p-3 text-center">
    <p class="text-sm font-semibold text-bark">Separação vida privada / profissional</p>
  </div>
</div>`,
            },
          ],
          quiz: [
            { q: "Quais livros de Max Weber são citados no conteúdo?", options: ["A Ética Protestante e o Espírito do Capitalismo, e Economia e Sociedade", "O Capital e A Ideologia Alemã", "Da Divisão do Trabalho Social e As Regras do Método Sociológico", "O Suicídio e As Formas Elementares da Vida Religiosa"], correct: 0 },
            { q: "Weber busca compreender a sociedade a partir de quê?", options: ["Das ações do indivíduo", "Apenas das estruturas econômicas", "Apenas das instituições religiosas", "Apenas do Estado"], correct: 0 },
            { q: "O que é 'ação social', segundo Weber?", options: ["Toda ação que acontece na sociedade, tem um significado e pode se orientar em relação aos outros", "Qualquer ação isolada, sem relação com outras pessoas", "Apenas ações do governo", "Apenas ações econômicas"], correct: 0 },
            { q: "A ação tradicional ocorre em função de quê?", options: ["Costumes (tradições)", "Emoções", "Planejamentos e cálculos", "Leis escritas"], correct: 0 },
            { q: "A ação afetiva ocorre em função de quê?", options: ["Emoções (afetos)", "Costumes", "Cálculos racionais", "Hierarquia burocrática"], correct: 0 },
            { q: "A ação racional ocorre em função de quê?", options: ["Planejamentos (cálculos)", "Emoções", "Apenas tradições", "Acaso"], correct: 0 },
            { q: "A ação racional com relação a fins está associada a quê?", options: ["Um objetivo", "Uma ética", "Um costume", "Uma emoção"], correct: 0 },
            { q: "A ação racional com relação a valores está associada a quê?", options: ["Uma ética", "Um objetivo apenas", "Um costume", "Uma emoção"], correct: 0 },
            { q: "Segundo Weber, a sociedade moderna é marcada por qual processo?", options: ["Racionalização", "Sacralização", "Tradicionalização", "Emocionalização"], correct: 0 },
            { q: "O que é burocracia, segundo o conteúdo?", options: ["Uma estrutura técnico-administrativa, racionalmente desenvolvida, que visa o máximo de eficiência", "Um sistema baseado apenas em tradições", "Uma forma de governo democrático direto", "Um tipo de ação afetiva"], correct: 0 },
            { q: "Quais são as características da burocracia citadas no conteúdo?", options: ["Regras, hierarquia, cargos e funções, e separação entre vida privada e profissional", "Apenas hierarquia e tradição", "Apenas emoção e costume", "Apenas cargos hereditários"], correct: 0 },
          ],
        },
      ],
    },
);
