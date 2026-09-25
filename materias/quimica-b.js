window.DB_SUBJECTS = window.DB_SUBJECTS || [];
window.DB_SUBJECTS.push(
    {
      id: "quimica-b",
      name: "Química B",
      emoji: "⚗️",
      contents: [
        {
          id: "acidos",
          title: "Ácidos",
          sections: [
            {
              heading: "1. Funções inorgânicas",
              body: `Função química: substâncias que apresentam características semelhantes, como estrutura química, reatividade, etc.

As 4 funções inorgânicas principais são:
• Ácidos
• Bases
• Sais
• Óxidos`,
            },
            {
              heading: "2. Ácidos e bases",
              body: `Ácidos
• Tem sabor azedo, como suco de limão e vinagre.
• Podem ser perigosos, pois são corrosivos.

Bases
• Tem sabor adstringente, como caju ou banana verdes e leite de magnésia.
• Em contato com a pele, dão uma sensação de pele escorregadia.`,
            },
            {
              heading: "3. Teoria ácido-base de Arrhenius",
              body: `Ácidos
Um ácido, segundo Arrhenius, sofre ionização em água, liberando H⁺.

Forma geral
HₓA → x H⁺ + Aˣ⁻

Exemplos
HCl → H⁺ + Cl⁻
H₂S → 2 H⁺ + S²⁻`,
            },
            {
              heading: "4. Formação do íon hidrônio",
              body: `Quando o H⁺ entra em contato com a água:
HCl + H₂O → H₃O⁺ + Cl⁻

O H⁺ = H₃O⁺
O H₃O⁺ é chamado de íon hidrônio.

Para entender: na água, o H⁺ não fica simplesmente "solto"; ele se associa à molécula de água, formando o H₃O⁺.`,
            },
            {
              heading: "5. Classificação dos ácidos",
              body: `O H⁺ também pode ser chamado de próton.
A classificação pode ser feita pelo número de hidrogênios ionizáveis.

Monoácido (monoprótico)
Possui 1 hidrogênio ionizável.
Exemplos: HCl, HCN

Diácido (diprótico)
Possui 2 hidrogênios ionizáveis.
Exemplos: H₂S, H₂SO₄

Triácido (triprótico)
Possui 3 hidrogênios ionizáveis.
Exemplo: H₃PO₄

🧠 Regra rápida
1 H⁺ → monoácido
2 H⁺ → diácido
3 H⁺ → triácido`,
              visual: `
<div class="grid grid-cols-3 gap-3">
  <div class="text-center rounded-xl bg-cream border border-sand px-2 py-4">
    <div class="flex justify-center gap-1 mb-2">
      <span class="w-6 h-6 rounded-full bg-espresso text-cream text-[10px] flex items-center justify-center font-bold">H⁺</span>
    </div>
    <p class="text-xs text-bark font-semibold">Monoácido</p>
    <p class="text-[11px] text-bark/60">1 H⁺ ionizável</p>
  </div>
  <div class="text-center rounded-xl bg-cream border border-sand px-2 py-4">
    <div class="flex justify-center gap-1 mb-2">
      <span class="w-6 h-6 rounded-full bg-espresso text-cream text-[10px] flex items-center justify-center font-bold">H⁺</span>
      <span class="w-6 h-6 rounded-full bg-espresso text-cream text-[10px] flex items-center justify-center font-bold">H⁺</span>
    </div>
    <p class="text-xs text-bark font-semibold">Diácido</p>
    <p class="text-[11px] text-bark/60">2 H⁺ ionizáveis</p>
  </div>
  <div class="text-center rounded-xl bg-cream border border-sand px-2 py-4">
    <div class="flex justify-center gap-1 mb-2">
      <span class="w-6 h-6 rounded-full bg-espresso text-cream text-[10px] flex items-center justify-center font-bold">H⁺</span>
      <span class="w-6 h-6 rounded-full bg-espresso text-cream text-[10px] flex items-center justify-center font-bold">H⁺</span>
      <span class="w-6 h-6 rounded-full bg-espresso text-cream text-[10px] flex items-center justify-center font-bold">H⁺</span>
    </div>
    <p class="text-xs text-bark font-semibold">Triácido</p>
    <p class="text-[11px] text-bark/60">3 H⁺ ionizáveis</p>
  </div>
</div>`,
            },
            {
              heading: "6. Classificação pela presença de oxigênio",
              body: `Hidrácidos
São ácidos sem oxigênio em sua fórmula química.

Oxiácidos
São ácidos com oxigênio em sua fórmula química.`,
            },
            {
              heading: "7. Fórmulas e nomenclatura",
              body: `Exemplos de oxiácidos
HClO₃ → ácido clórico
HClO₄ → ácido perclórico
H₂SO₄ → ácido sulfúrico
H₂SO₃ → ácido sulfuroso`,
            },
            {
              heading: "8. Nome dos oxiácidos padrão",
              body: `A matéria apresenta a frase para decorar:
"Não Como Bolo Claro Só Pão"

Ela auxilia na associação dos elementos:
• N → ácido nítrico
• C → ácido carbônico
• B → ácido bórico
• Cl → ácido clórico
• S → ácido sulfúrico
• P → ácido fosfórico`,
            },
            {
              heading: "9. Ácidos do grupo 17",
              body: `Para elementos do Grupo 17, aparecem as seguintes nomenclaturas:
HClO₄ → ácido perclórico
HClO₃ → ácido clórico
HClO₂ → ácido cloroso
HClO → ácido hipocloroso

🧠 Sequência para lembrar
perclórico → clórico → cloroso → hipocloroso`,
              visual: `
<div class="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm">
  <div class="rounded-lg bg-cream border border-sand px-3 py-2 text-bark font-medium text-center">HClO₄<br/><span class="text-[10px] text-bark/60">perclórico</span></div>
  <span class="text-ochre">→</span>
  <div class="rounded-lg bg-cream border border-sand px-3 py-2 text-bark font-medium text-center">HClO₃<br/><span class="text-[10px] text-bark/60">clórico</span></div>
  <span class="text-ochre">→</span>
  <div class="rounded-lg bg-cream border border-sand px-3 py-2 text-bark font-medium text-center">HClO₂<br/><span class="text-[10px] text-bark/60">cloroso</span></div>
  <span class="text-ochre">→</span>
  <div class="rounded-lg bg-cream border border-sand px-3 py-2 text-bark font-medium text-center">HClO<br/><span class="text-[10px] text-bark/60">hipocloroso</span></div>
</div>`,
            },
            {
              heading: "10. Ácido etanóico ou ácido acético",
              body: `H₃CCOOH → H₃CCOO⁻ + H⁺
É o componente do vinagre.`,
            },
            {
              heading: "🧠 O OURO — ÁCIDOS",
              body: `Funções inorgânicas: Ácidos • Bases • Sais • Óxidos

Arrhenius: Ácido → libera H⁺ em água.
H⁺: também chamado de próton.
H₃O⁺: íon hidrônio.

Número de H ionizáveis:
1 → monoácido
2 → diácido
3 → triácido

Sem O → hidrácido
Com O → oxiácido

Grupo 17:
HClO₄ → perclórico
HClO₃ → clórico
HClO₂ → cloroso
HClO → hipocloroso

Ácido etanóico/acético → componente do vinagre.`,
            },
          ],
          quiz: [
            { q: "O que caracteriza uma função química?", options: ["Substâncias com características semelhantes, como estrutura e reatividade", "Substâncias com a mesma cor", "Substâncias com o mesmo estado físico", "Substâncias com a mesma massa molar"], correct: 0 },
            { q: "Quais são as 4 funções inorgânicas principais?", options: ["Ácidos, bases, sais e óxidos", "Ácidos, sais, gases e óxidos", "Bases, sais, metais e óxidos", "Ácidos, bases, metais e ligas"], correct: 0 },
            { q: "Qual é o sabor característico dos ácidos?", options: ["Azedo", "Adstringente", "Doce", "Amargo"], correct: 0 },
            { q: "Qual é um exemplo de substância ácida citado no conteúdo?", options: ["Suco de limão", "Leite de magnésia", "Caju verde", "Banana verde"], correct: 0 },
            { q: "Por que os ácidos podem ser perigosos?", options: ["Porque são corrosivos", "Porque são inflamáveis", "Porque são radioativos", "Porque são voláteis"], correct: 0 },
            { q: "Qual é o sabor característico das bases?", options: ["Adstringente", "Azedo", "Doce", "Salgado"], correct: 0 },
            { q: "O que uma base causa em contato com a pele?", options: ["Sensação de pele escorregadia", "Sensação de queimação intensa", "Nenhuma sensação", "Coceira imediata"], correct: 0 },
            { q: "Segundo Arrhenius, o que caracteriza um ácido?", options: ["Sofre ionização em água, liberando H⁺", "Sofre dissociação, liberando OH⁻", "Não se dissolve em água", "Libera elétrons em água"], correct: 0 },
            { q: "Qual é a forma geral de um ácido segundo Arrhenius?", options: ["HₓA → x H⁺ + Aˣ⁻", "HₓA → x OH⁻ + Aˣ⁺", "AHₓ → x A⁻ + Hˣ⁺", "HA → H₂ + A"], correct: 0 },
            { q: "Na ionização do HCl, quais íons são formados?", options: ["H⁺ e Cl⁻", "H⁺ e Cl²⁻", "H₂ e Cl⁻", "OH⁻ e Cl⁺"], correct: 0 },
            { q: "Na ionização do H₂S, quantos H⁺ são liberados?", options: ["2 H⁺", "1 H⁺", "3 H⁺", "4 H⁺"], correct: 0 },
            { q: "O que se forma quando o H⁺ entra em contato com a água?", options: ["O íon hidrônio (H₃O⁺)", "O íon hidróxido (OH⁻)", "Gás hidrogênio (H₂)", "Água pura"], correct: 0 },
            { q: "Como é representado o íon hidrônio?", options: ["H₃O⁺", "H₂O⁺", "HO⁻", "H₃O²⁺"], correct: 0 },
            { q: "Na reação HCl + H₂O → H₃O⁺ + Cl⁻, o que acontece com o H⁺?", options: ["Ele se associa à molécula de água", "Ele permanece solto na solução", "Ele se transforma em H₂", "Ele reage diretamente com o Cl⁻"], correct: 0 },
            { q: "O H⁺ também pode ser chamado de:", options: ["Próton", "Nêutron", "Elétron", "Íon hidróxido"], correct: 0 },
            { q: "Como é feita a classificação dos ácidos quanto à quantidade de H ionizáveis?", options: ["Pelo número de hidrogênios ionizáveis", "Pela massa molar do ácido", "Pelo número de átomos de oxigênio", "Pelo estado físico do ácido"], correct: 0 },
            { q: "Um monoácido possui quantos hidrogênios ionizáveis?", options: ["1", "2", "3", "4"], correct: 0 },
            { q: "O HCl é classificado como:", options: ["Monoácido", "Diácido", "Triácido", "Tetrácido"], correct: 0 },
            { q: "Um diácido possui quantos hidrogênios ionizáveis?", options: ["2", "1", "3", "4"], correct: 0 },
            { q: "O H₂SO₄ é um exemplo de:", options: ["Diácido", "Monoácido", "Triácido", "Hidrácido sem H ionizável"], correct: 0 },
            { q: "Um triácido possui quantos hidrogênios ionizáveis?", options: ["3", "1", "2", "4"], correct: 0 },
            { q: "O H₃PO₄ é um exemplo de:", options: ["Triácido", "Monoácido", "Diácido", "Hidrácido"], correct: 0 },
            { q: "Um ácido sem oxigênio na fórmula química é chamado de:", options: ["Hidrácido", "Oxiácido", "Monoácido", "Diácido"], correct: 0 },
            { q: "Um ácido com oxigênio na fórmula química é chamado de:", options: ["Oxiácido", "Hidrácido", "Triácido", "Base"], correct: 0 },
            { q: "Na frase 'Não Como Bolo Claro Só Pão', a letra 'N' está associada a qual ácido?", options: ["Ácido nítrico", "Ácido carbônico", "Ácido bórico", "Ácido sulfúrico"], correct: 0 },
            { q: "Na mesma frase mnemônica, a letra 'C' corresponde a:", options: ["Ácido carbônico", "Ácido clórico", "Ácido nítrico", "Ácido bórico"], correct: 0 },
            { q: "E a letra 'P', na frase mnemônica, corresponde a:", options: ["Ácido fosfórico", "Ácido perclórico", "Ácido carbônico", "Ácido sulfúrico"], correct: 0 },
            { q: "Para os ácidos do Grupo 17, o HClO₄ é chamado de:", options: ["Ácido perclórico", "Ácido clórico", "Ácido cloroso", "Ácido hipocloroso"], correct: 0 },
            { q: "Ainda no Grupo 17, o HClO é chamado de:", options: ["Ácido hipocloroso", "Ácido perclórico", "Ácido clórico", "Ácido cloroso"], correct: 0 },
            { q: "O ácido etanóico (ácido acético) é o componente principal de:", options: ["Vinagre", "Suco de limão", "Leite de magnésia", "Água sanitária"], correct: 0 },
          ],
        },
        {
          id: "bases",
          title: "Bases",
          sections: [
            {
              heading: "1. Bases ou hidróxidos",
              body: `Bases, em contato com água, dissociam liberando como ânion exclusivamente o íon OH⁻.

Fórmula geral:
M(OH)x → M⁺ˣ + x OH⁻

Exemplos:
NaOH → Na⁺ + OH⁻
Mg(OH)2 → Mg⁺² + 2 OH⁻
Fe(OH)3 → Fe⁺³ + 3 OH⁻`,
              visual: `
<div class="flex items-center justify-center gap-3 flex-wrap">
  <div class="rounded-lg border-2 border-espresso px-5 py-3 text-sm font-semibold text-bark">Base</div>
  <div class="flex flex-col items-center text-[10px] text-bark/60">
    <span>água</span>
    <span class="text-ochre text-lg leading-none">→</span>
  </div>
  <div class="rounded-lg border-2 border-espresso px-5 py-3 text-xs text-bark text-center max-w-[220px]">Dissocia liberando como ânion exclusivamente íon OH⁻</div>
</div>`,
            },
            {
              heading: "2. Fórmulas e nomenclatura — metais de carga fixa",
              body: `As fórmulas seguem as regras das ligações iônicas:
Na⁺ + OH⁻ → NaOH
Ca⁺² + OH⁻ → Ca(OH)2
Fe⁺³ + OH⁻ → Fe(OH)3

Metais que possuem carga fixa:
Metais alcalinos (grupo 1) = +1
Metais alcalinoterrosos (grupo 2) = +2
Prata (Ag) = +1
Zinco (Zn) = +2
Alumínio (Aℓ) = +3

Exemplos de nomenclatura:
NaOH: hidróxido de sódio
Ca(OH)2: hidróxido de cálcio
AgOH: hidróxido de prata
Zn(OH)2: hidróxido de zinco
Aℓ(OH)3: hidróxido de alumínio`,
            },
            {
              heading: "3. Metais de carga variável",
              body: `Metais que possuem carga variável:
Cobre (Cu) = +1, +2
Ferro (Fe) = +2, +3

Nomenclatura com numeral romano:
CuOH: hidróxido de cobre (I)
Cu(OH)2: hidróxido de cobre (II)
Fe(OH)2: hidróxido de ferro (II)
Fe(OH)3: hidróxido de ferro (III)

Nomenclatura antiga (-oso / -ico):
CuOH: hidróxido cuproso
Cu(OH)2: hidróxido cúprico
Fe(OH)2: hidróxido ferroso
Fe(OH)3: hidróxido férrico`,
            },
            {
              heading: "4. Amônia — a base sem metal",
              body: `NH3 (amônia / amoníaco) em água gera uma base:
NH3 + H2O → NH4⁺ + OH⁻

NH4⁺ = íon amônio
NH4OH: hidróxido de amônio

Única base que não é formada por metal. Só existe na água.`,
            },
            {
              heading: "5. Classificação das bases — quantidade de OH⁻",
              body: `Monobases: 1 íon hidróxido.
Exemplos: NaOH, LiOH, CuOH, AgOH

Dibases: 2 íons hidróxidos.
Exemplos: Mg(OH)2, Ca(OH)2, Fe(OH)2, Cu(OH)2

Tribases: 3 íons hidróxidos.
Exemplos: Fe(OH)3, Aℓ(OH)3`,
            },
            {
              heading: "6. Classificação das bases — solubilidade",
              body: `Solúveis: bases de metais do grupo 1 e NH3.

Pouco solúveis (parcialmente solúveis): bases de metais do grupo 2 (exceto Mg(OH)2 e Be(OH)2).

Praticamente insolúveis: bases dos demais metais (incluindo Mg(OH)2 e Be(OH)2).`,
            },
            {
              heading: "7. A escala de pH",
              body: `Escala que vai de 0 a 14.

pH < 7 → ácidos
pH = 7 → neutro
pH > 7 → bases

Água totalmente pura: meio neutro (pH = 7).
Quanto menor o pH, mais ácida é a substância.
Quanto maior o pH, mais básica é a substância.`,
              visual: `
<svg viewBox="0 0 320 70" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="phGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#C2185B"/>
      <stop offset="50%" stop-color="#6A4C93"/>
      <stop offset="100%" stop-color="#1E88E5"/>
    </linearGradient>
  </defs>
  <rect x="10" y="18" width="300" height="16" rx="8" fill="url(#phGrad)"/>
  <line x1="160" y1="12" x2="160" y2="40" stroke="#3E2F20" stroke-width="2"/>
  <text x="149" y="10" font-size="9.5" fill="#5C4630">pH 7</text>
  <text x="8" y="52" font-size="9.5" fill="#5C4630">← aumento da acidez</text>
  <text x="185" y="52" font-size="9.5" fill="#5C4630">aumento da basicidade →</text>
  <text x="8" y="16" font-size="8.5" fill="#5C4630">0</text>
  <text x="300" y="16" font-size="8.5" fill="#5C4630">14</text>
</svg>`,
            },
            {
              heading: "8. Indicadores ácido-base",
              body: `Substâncias que mudam de cor de acordo com o pH, ou seja, de acordo com a acidez da amostra.

Suco de repolho roxo: muda de cor ao longo de toda a escala de pH.

Fenolftaleína:
Meio ácido = incolor.
Meio básico = rosa, violeta, vermelho.`,
              visual: `
<div class="overflow-x-auto mb-4">
  <div class="flex min-w-[420px]">
    <div class="flex-1 text-center"><div class="h-7 rounded-l-md" style="background:#E53935"></div><p class="text-[9.5px] text-bark/60 mt-1">1–3<br/>Vermelho</p></div>
    <div class="flex-1 text-center"><div class="h-7" style="background:#EC407A"></div><p class="text-[9.5px] text-bark/60 mt-1">4–6<br/>Rosa</p></div>
    <div class="flex-1 text-center"><div class="h-7" style="background:#8E24AA"></div><p class="text-[9.5px] text-bark/60 mt-1">7–9<br/>Roxo</p></div>
    <div class="flex-1 text-center"><div class="h-7" style="background:#1E88E5"></div><p class="text-[9.5px] text-bark/60 mt-1">10–11<br/>Azul</p></div>
    <div class="flex-1 text-center"><div class="h-7" style="background:#43A047"></div><p class="text-[9.5px] text-bark/60 mt-1">12–13<br/>Verde</p></div>
    <div class="flex-1 text-center"><div class="h-7 rounded-r-md" style="background:#FDD835"></div><p class="text-[9.5px] text-bark/60 mt-1">14<br/>Amarelo</p></div>
  </div>
  <p class="text-[10.5px] text-bark/50 text-center mt-1">Indicador natural: suco de repolho roxo</p>
</div>
<div class="grid grid-cols-2 gap-3 max-w-xs mx-auto text-center text-xs">
  <div class="rounded-xl bg-cream border border-sand px-3 py-4">
    <div class="w-8 h-10 mx-auto rounded-b-lg border-2 border-sand mb-2"></div>
    <p class="font-semibold text-bark">Meio ácido</p>
    <p class="text-bark/60">Incolor</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand px-3 py-4">
    <div class="w-8 h-10 mx-auto rounded-b-lg border-2 border-sand mb-2" style="background:#EC407A"></div>
    <p class="font-semibold text-bark">Meio básico</p>
    <p class="text-bark/60">Rosa / violeta / vermelho</p>
  </div>
</div>
<p class="text-[10.5px] text-bark/50 text-center mt-2">Fenolftaleína: incolor em ácido, rosa/vermelha em base</p>`,
            },
          ],
          quiz: [
            { q: "Segundo a dissociação das bases, o que é liberado exclusivamente como ânion?", options: ["Íon OH⁻", "Íon H⁺", "Íon O²⁻", "Íon H₃O⁺"], correct: 0 },
            { q: "Qual é a fórmula geral da dissociação de uma base?", options: ["M(OH)x → M⁺ˣ + x OH⁻", "M(OH)x → M⁻ˣ + x H⁺", "MOH → M + OH", "M(OH)x → x M + OH⁻"], correct: 0 },
            { q: "Qual é a carga fixa dos metais alcalinos (grupo 1)?", options: ["+1", "+2", "+3", "-1"], correct: 0 },
            { q: "Como se nomeia o Fe(OH)3, usando numeral romano?", options: ["Hidróxido de ferro (III)", "Hidróxido de ferro (II)", "Hidróxido ferroso", "Hidróxido de ferro (I)"], correct: 0 },
            { q: "Como se nomeia o Fe(OH)3, usando a nomenclatura antiga (-oso/-ico)?", options: ["Hidróxido férrico", "Hidróxido ferroso", "Hidróxido cúprico", "Hidróxido cuproso"], correct: 0 },
            { q: "Qual é a única base que não é formada por um metal?", options: ["Amônia (NH₃), formando NH₄OH em água", "NaOH", "Ca(OH)₂", "Fe(OH)₃"], correct: 0 },
            { q: "Uma base com 2 íons hidróxido é classificada como:", options: ["Dibase", "Monobase", "Tribase", "Ácido"], correct: 0 },
            { q: "Segundo a solubilidade, quais bases são consideradas solúveis?", options: ["Bases de metais do grupo 1 e a amônia (NH₃)", "Todas as bases sem exceção", "Apenas o Mg(OH)₂", "Nenhuma base é solúvel"], correct: 0 },
            { q: "Na escala de pH, o que caracteriza uma substância com pH < 7?", options: ["É considerada ácida", "É considerada básica", "É considerada neutra", "Não possui pH definido"], correct: 0 },
            { q: "Qual é a cor da fenolftaleína em meio básico?", options: ["Rosa, violeta ou vermelho", "Incolor", "Azul", "Amarelo"], correct: 0 },
          ],
        },
      ],
    },
);
