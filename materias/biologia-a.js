window.DB_SUBJECTS = window.DB_SUBJECTS || [];
window.DB_SUBJECTS.push(
    {
      id: "biologia-a",
      name: "Biologia A",
      emoji: "🧬",
      contents: [
        {
          id: "fungos",
          title: "Fungos",
          sections: [
            {
              heading: "Classificação dos fungos",
              body: `Leveduriformes
• Unicelular

Filamentosos
• Pluricelulares (formam hifa)

Carnosos
• Pluricelulares (formam hifas)`,
            },
            {
              heading: "Fungos no geral",
              body: `• Eucariontes
• Uni ou pluricelulares
• Heterótrofos
• Relações ecológicas:
   – Decompositores (saprófagos)
   – Parasitas (micose)
   – Mutualistas`,
            },
            {
              heading: "Características",
              body: `• Parede celular rica em quitina
• Armazena glicogênio
• Digestão extracorpórea
• Hifas → unidades vegetativas e reprodutivas dos fungos

Tipos de hifas
Hifa septada → possui divisões/septos.
Hifa asseptada → não possui septos.`,
              visual: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
  <div class="text-center">
    <svg viewBox="0 0 220 70" class="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="20" width="200" height="30" rx="15" fill="none" stroke="#5C4630" stroke-width="2.5"/>
      <line x1="55" y1="20" x2="55" y2="50" stroke="#A8763E" stroke-width="2"/>
      <line x1="100" y1="20" x2="100" y2="50" stroke="#A8763E" stroke-width="2"/>
      <line x1="145" y1="20" x2="145" y2="50" stroke="#A8763E" stroke-width="2"/>
      <line x1="190" y1="20" x2="190" y2="50" stroke="#A8763E" stroke-width="2"/>
    </svg>
    <p class="text-xs text-bark/60 mt-1 font-medium">Hifa septada — possui divisões (septos)</p>
  </div>
  <div class="text-center">
    <svg viewBox="0 0 220 70" class="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="20" width="200" height="30" rx="15" fill="none" stroke="#5C4630" stroke-width="2.5"/>
      <circle cx="55" cy="35" r="4" fill="#A8763E"/>
      <circle cx="100" cy="35" r="4" fill="#A8763E"/>
      <circle cx="145" cy="35" r="4" fill="#A8763E"/>
      <circle cx="190" cy="35" r="4" fill="#A8763E"/>
    </svg>
    <p class="text-xs text-bark/60 mt-1 font-medium">Hifa asseptada — sem septos (núcleos livres)</p>
  </div>
</div>`,
            },
            {
              heading: "Principais grupos",
              body: `• Zigomicetos
• Ascomicetos
• Basidiomicetos
• Deuteromicetos → fungos incompletos, não fazem reprodução sexuada.`,
            },
            {
              heading: "Condições para o desenvolvimento",
              body: `• Água
• Temperatura
• Nutrientes`,
            },
            {
              heading: "Reprodução",
              body: `Assexuada
• Esporulação
• Brotamento

Sexuada
• Fusão de hifas
• Plasmogamia → fusão de citoplasma
• Cariogamia → fusão de núcleos`,
            },
          ],
          quiz: [
            {
              q: "Os fungos leveduriformes são caracterizados por serem:",
              options: ["Unicelulares", "Pluricelulares formando hifas", "Autótrofos", "Possuidores de clorofila"],
              correct: 0,
            },
            {
              q: "Os fungos filamentosos são:",
              options: ["Pluricelulares e formam hifa", "Unicelulares", "Autótrofos", "Desprovidos de parede celular"],
              correct: 0,
            },
            {
              q: "Quanto à nutrição, os fungos são classificados como:",
              options: ["Heterótrofos", "Autótrofos", "Fotossintetizantes", "Quimiolitotróficos"],
              correct: 0,
            },
            {
              q: "A parede celular dos fungos é rica em:",
              options: ["Quitina", "Celulose", "Peptidoglicano", "Queratina"],
              correct: 0,
            },
            {
              q: "Os fungos armazenam energia principalmente na forma de:",
              options: ["Glicogênio", "Amido", "Celulose", "Apenas lipídios"],
              correct: 0,
            },
            {
              q: "Como ocorre a digestão nos fungos?",
              options: ["Digestão extracorpórea", "Digestão intracelular apenas", "Fotossíntese", "Quimiossíntese"],
              correct: 0,
            },
            {
              q: "A hifa septada se diferencia da asseptada por:",
              options: ["Possuir divisões/septos", "Ser exclusiva de leveduras", "Não ter função reprodutiva", "Ser encontrada apenas em zigomicetos"],
              correct: 0,
            },
            {
              q: "Qual grupo de fungos é descrito como incompleto, por não realizar reprodução sexuada?",
              options: ["Deuteromicetos", "Ascomicetos", "Basidiomicetos", "Zigomicetos"],
              correct: 0,
            },
            {
              q: "Quais são as condições necessárias para o desenvolvimento dos fungos?",
              options: ["Água, temperatura e nutrientes", "Luz solar, CO₂ e água", "Apenas luz solar", "Apenas nutrientes"],
              correct: 0,
            },
            {
              q: "Na reprodução sexuada dos fungos, a plasmogamia corresponde a:",
              options: ["Fusão de citoplasma", "Fusão de núcleos", "Formação de esporos", "Brotamento"],
              correct: 0,
            },
          ],
        },
        {
          id: "briofitas",
          title: "Briófitas",
          sections: [
            {
              heading: "Principais grupos",
              body: `• Musgos
• Hepáticas
• Antóceros`,
            },
            {
              heading: "Características",
              body: `• Não possuem xilema ou floema
• Dependentes da água para reprodução
• Suas gametas usam a água para se deslocar.
• Plantas são encontradas em ambientes úmidos e sombreados.`,
            },
            {
              heading: "Fases",
              body: `Fase dominante
Gametófito → clorofilado

Fase reprodutiva
Esporófito → não é clorofilado`,
              visual: `
<svg viewBox="0 0 200 220" class="w-full max-w-[220px] mx-auto" xmlns="http://www.w3.org/2000/svg">
  <path d="M100,210 C80,160 80,120 100,90 C120,120 120,160 100,210 Z" fill="#E4D9C4" stroke="#5C4630" stroke-width="2"/>
  <line x1="100" y1="90" x2="100" y2="40" stroke="#A8763E" stroke-width="3"/>
  <ellipse cx="100" cy="30" rx="12" ry="16" fill="none" stroke="#A8763E" stroke-width="2.5"/>
  <circle cx="80" cy="130" r="5" fill="#5C4630"/>
  <circle cx="120" cy="150" r="5" fill="#3E2F20"/>
  <text x="106" y="26" font-size="9" fill="#A8763E" font-weight="600">Esporófito (2n)</text>
  <text x="106" y="49" font-size="8.5" fill="#A8763E">não clorofilado</text>
  <text x="8" y="128" font-size="8.5" fill="#5C4630">Anterídio ♂</text>
  <text x="128" y="153" font-size="8.5" fill="#3E2F20">Arquegônio ♀</text>
  <text x="45" y="204" font-size="9.5" fill="#5C4630" font-weight="600">Gametófito (n) — clorofilado</text>
</svg>`,
            },
            {
              heading: "Órgãos produtores de gametas",
              body: `Masculino
Anterídio → produz os gametas masculinos.

Feminino
Arquegônio → produz o gameta feminino.`,
            },
          ],
          quiz: [
            {
              q: "Quais são os principais grupos de briófitas?",
              options: ["Musgos, hepáticas e antóceros", "Musgos, samambaias e pteridófitas", "Algas, líquens e musgos", "Gimnospermas e angiospermas"],
              correct: 0,
            },
            {
              q: "As briófitas não possuem quais tecidos condutores?",
              options: ["Xilema e floema", "Apenas floema", "Apenas xilema", "Parede celular"],
              correct: 0,
            },
            {
              q: "Por que as briófitas dependem da água para a reprodução?",
              options: ["Porque seus gametas usam a água para se deslocar", "Porque realizam fotossíntese na água", "Porque não possuem clorofila", "Porque seus esporos flutuam no ar"],
              correct: 0,
            },
            {
              q: "Em quais ambientes as briófitas costumam ser encontradas?",
              options: ["Ambientes úmidos e sombreados", "Desertos áridos", "Águas profundas do oceano", "Ambientes com alta salinidade"],
              correct: 0,
            },
            {
              q: "Nas briófitas, qual é a fase dominante do ciclo de vida?",
              options: ["Gametófito, que é clorofilado", "Esporófito, que é clorofilado", "Gametófito, que não é clorofilado", "Esporófito, que não é clorofilado"],
              correct: 0,
            },
            {
              q: "A fase reprodutiva das briófitas, o esporófito, é caracterizada por:",
              options: ["Não ser clorofilado", "Ser a fase dominante", "Ser clorofilado e dominante", "Realizar fotossíntese intensa"],
              correct: 0,
            },
            {
              q: "Qual órgão produz os gametas masculinos nas briófitas?",
              options: ["Anterídio", "Arquegônio", "Esporófito", "Rizoide"],
              correct: 0,
            },
            {
              q: "Qual órgão produz o gameta feminino nas briófitas?",
              options: ["Arquegônio", "Anterídio", "Esporângio", "Talo"],
              correct: 0,
            },
            {
              q: "As briófitas dependem da água principalmente para:",
              options: ["A reprodução, pelo deslocamento dos gametas", "A fotossíntese", "A germinação de sementes", "O transporte de seiva"],
              correct: 0,
            },
            {
              q: "Um exemplo de grupo pertencente às briófitas é:",
              options: ["Os musgos", "As samambaias", "Os pinheiros", "As gramíneas"],
              correct: 0,
            },
          ],
          extraQuizLabel: "Treino do PDF",
          extraQuizHeading: "Questões da lista do professor",
          extraQuiz: [
            { q: "(UFPR/Puccamp) Nos esquemas comparando um Musgo e uma Angiosperma, as estruturas indicadas pelas setas representam:", options: ["Estruturas formadoras de gametas masculinos", "Locais onde ocorre a fecundação", "Locais onde ocorre a meiose", "Estruturas formadoras de gametas femininos"], correct: 0 },
            { q: "(PUC-RS) Sobre os musgos: (1) Pertencem ao grupo das briófitas. (2) São heterotróficos absortivos. (3) São desprovidos de traqueídeos. (4) Preferem solos secos e frios. (5) São parentes das hepáticas. A sequência correta (V/F) é:", options: ["V - F - V - F - V", "F - F - V - V - V", "F - V - F - V - F", "V - V - F - V - V"], correct: 0 },
            { q: "Um estudante pesquisou musgos em dois livros com classificações diferentes: Livro A (vegetais inferiores p.201 / intermediários sem sementes p.202 / superiores com sementes p.204) e Livro B (criptógamos avasculares p.340 / vasculares p.341 / fanerógamos p.342). Em quais páginas ele encontrará informações sobre musgos?", options: ["202 e 340", "201 e 340", "202 e 341", "204 e 342"], correct: 0 },
            { q: "Uma planta é descrita como: 'pequeno porte, encontrada em locais úmidos e sombreados, cresce no solo ou sobre troncos, possui rizoides e não possui vasos condutores.' A que grupo ela pertence?", options: ["Briófitas", "Pteridófitas", "Gimnospermas", "Angiospermas"], correct: 0 },
            { q: "Por que briófitas e pteridófitas costumam ser cultivadas em ambientes úmidos e sombreados?", options: ["Por particularidades de seus ciclos de vida, que dependem de água para a reprodução", "Porque são plantas avasculares que não realizam fotossíntese", "Porque não sobrevivem à luz solar direta em nenhuma hipótese", "Porque produzem sementes que só germinam na água"], correct: 0 },
            { q: "Um musgo (briófita) e uma samambaia (pteridófita) apresentam em comum:", options: ["Nítida alternância de gerações e ocorrência de meiose espórica", "Presença de tecidos de condução e sementes", "Apenas a presença de flores", "Nenhuma característica em comum"], correct: 0 },
          ],
        },
        {
          id: "ciclo-da-vida",
          title: "Ciclo da vida",
          sections: [
            {
              heading: "Ploidia",
              body: `Ploidia: carga cromossômica.

Mitose
Célula-mãe → 2 células-filhas idênticas à célula-mãe
Relacionada a:
• Crescimento
• Regeneração
• Reprodução (seres haploides)

Meiose
Célula-mãe → 4 células-filhas diferentes entre si
Relacionada à:
• Reprodução (seres diploides)

Para lembrar
R1 = Meiose
E1 = Mitose
2n = diploide
n = haploide`,
            },
            {
              heading: "Ciclo haplobionte haplonte",
              body: `Exemplos: Algas — Adultos haploides (n)

Sequência:
Organismo adulto (n) → Gametas (n) → Zigoto (2n) → Células (n) → Organismo jovem (n) → Adulto (n)

🔑 Ponto principal
O organismo adulto é haploide (n).
A meiose acontece no zigoto.`,
              visual: `
<div class="flex flex-col items-center gap-1 max-w-xs mx-auto text-center">
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-sm text-bark font-medium">Organismo adulto (n)</div>
  <div class="flex items-center gap-1 text-ochre text-xs font-semibold"><span>↓</span><span>E1</span></div>
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-sm text-bark font-medium">Gametas (n)</div>
  <div class="flex items-center gap-1 text-ochre text-xs font-semibold"><span>↓</span><span>Fecundação</span></div>
  <div class="w-full rounded-lg bg-espresso text-cream px-3 py-2 text-sm font-medium">Zigoto (2n)</div>
  <div class="flex items-center gap-1 text-ochre text-xs font-semibold"><span>↓</span><span>R1</span></div>
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-sm text-bark font-medium">Células (n)</div>
  <div class="flex items-center gap-1 text-ochre text-xs font-semibold"><span>↓</span><span>E1</span></div>
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-sm text-bark font-medium">Organismo jovem (n)</div>
  <div class="text-ochre text-xs">↓</div>
  <div class="w-full rounded-lg bg-beige border border-sand px-3 py-2 text-sm text-bark font-semibold">Adulto (n)</div>
</div>`,
            },
            {
              heading: "Ciclo haplobionte diplonte",
              body: `Exemplos: Animais (homem) — Adultos diploides

Sequência:
Organismo adulto (2n) → Gametas (n) → Zigoto (2n) → Organismo jovem (2n) → Adulto (2n)

🔑 Ponto principal
O organismo adulto é diploide (2n).
A meiose ocorre para formar os gametas.`,
              visual: `
<div class="flex flex-col items-center gap-1 max-w-xs mx-auto text-center">
  <div class="w-full rounded-lg bg-beige border border-sand px-3 py-2 text-sm text-bark font-semibold">Organismo adulto (2n)</div>
  <div class="flex items-center gap-1 text-ochre text-xs font-semibold"><span>↓</span><span>R1</span></div>
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-sm text-bark font-medium">Gametas (n)</div>
  <div class="flex items-center gap-1 text-ochre text-xs font-semibold"><span>↓</span><span>Fecundação</span></div>
  <div class="w-full rounded-lg bg-espresso text-cream px-3 py-2 text-sm font-medium">Zigoto (2n)</div>
  <div class="flex items-center gap-1 text-ochre text-xs font-semibold"><span>↓</span><span>E1</span></div>
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-sm text-bark font-medium">Organismo jovem (2n)</div>
  <div class="flex items-center gap-1 text-ochre text-xs font-semibold"><span>↓</span><span>E1</span></div>
  <div class="w-full rounded-lg bg-beige border border-sand px-3 py-2 text-sm text-bark font-semibold">Adulto (2n)</div>
</div>`,
            },
            {
              heading: "Ciclo diplobionte",
              body: `Exemplos: Vegetais

Nesse ciclo aparecem duas fases: Gametófito (n) e Esporófito (2n).

Sequência:
Esporófito adulto (2n) → Esporos (n) → Gametófito jovem (n) → Gametófito adulto (n) → Gametas (n) → Zigoto (2n) → Esporófito jovem (2n) → Esporófito adulto (2n)

🔑 Ponto principal
Existe alternância de gerações: Esporófito (2n) ↔ Gametófito (n)`,
              visual: `
<div class="flex flex-col items-center gap-1 max-w-xs mx-auto text-center">
  <div class="w-full rounded-lg bg-espresso text-cream px-3 py-2 text-sm font-medium">Esporófito adulto (2n)</div>
  <div class="flex items-center gap-1 text-ochre text-xs font-semibold"><span>↓</span><span>R1 · meiose</span></div>
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-sm text-bark font-medium">Esporos (n)</div>
  <div class="flex items-center gap-1 text-ochre text-xs font-semibold"><span>↓</span><span>Germinação</span></div>
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-sm text-bark font-medium">Gametófito jovem (n)</div>
  <div class="flex items-center gap-1 text-ochre text-xs font-semibold"><span>↓</span><span>E1 · mitose</span></div>
  <div class="w-full rounded-lg bg-beige border border-sand px-3 py-2 text-sm text-bark font-semibold">Gametófito adulto (n)</div>
  <div class="flex items-center gap-1 text-ochre text-xs font-semibold"><span>↓</span><span>E1</span></div>
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-sm text-bark font-medium">Gametas (n)</div>
  <div class="flex items-center gap-1 text-ochre text-xs font-semibold"><span>↓</span><span>Fecundação</span></div>
  <div class="w-full rounded-lg bg-espresso text-cream px-3 py-2 text-sm font-medium">Zigoto (2n)</div>
  <div class="flex items-center gap-1 text-ochre text-xs font-semibold"><span>↓</span><span>E1</span></div>
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-sm text-bark font-medium">Esporófito jovem (2n)</div>
  <div class="text-ochre text-xs">↓</div>
  <div class="w-full rounded-lg bg-espresso text-cream px-3 py-2 text-sm font-medium">Esporófito adulto (2n)</div>
</div>`,
            },
            {
              heading: "🧠 O OURO — Ciclos da vida",
              body: `E1 = Mitose
R1 = Meiose
n = Haploide
2n = Diploide`,
              visual: `
<div class="overflow-x-auto">
  <table class="w-full text-sm border-collapse">
    <thead>
      <tr class="border-b-2 border-espresso/70">
        <th class="text-left py-2 pr-3 font-display text-bark">Ciclo</th>
        <th class="text-left py-2 pr-3 font-display text-bark">Adulto</th>
        <th class="text-left py-2 font-display text-bark">Onde ocorre a meiose?</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-sand/60">
        <td class="py-2 pr-3 text-bark/80">Haplobionte haplonte</td>
        <td class="py-2 pr-3 text-bark/80">Haploide (n)</td>
        <td class="py-2 text-bark/80">No zigoto</td>
      </tr>
      <tr class="border-b border-sand/60">
        <td class="py-2 pr-3 text-bark/80">Haplobionte diplonte</td>
        <td class="py-2 pr-3 text-bark/80">Diploide (2n)</td>
        <td class="py-2 text-bark/80">Na formação dos gametas</td>
      </tr>
      <tr>
        <td class="py-2 pr-3 text-bark/80">Diplobionte</td>
        <td class="py-2 pr-3 text-bark/80">Alternância n ↔ 2n</td>
        <td class="py-2 text-bark/80">Na formação dos esporos</td>
      </tr>
    </tbody>
  </table>
</div>`,
            },
          ],
          quiz: [
            {
              q: "O que a ploidia representa?",
              options: ["A carga cromossômica", "O tipo de célula", "A quantidade de mitocôndrias", "O tamanho do núcleo"],
              correct: 0,
            },
            {
              q: "Na mitose, uma célula-mãe origina:",
              options: ["2 células-filhas idênticas à célula-mãe", "4 células-filhas diferentes entre si", "3 células-filhas idênticas", "1 célula-filha diferente"],
              correct: 0,
            },
            {
              q: "Na meiose, uma célula-mãe origina:",
              options: ["4 células-filhas diferentes entre si", "2 células-filhas idênticas", "4 células-filhas idênticas", "1 célula-filha idêntica"],
              correct: 0,
            },
            {
              q: "Segundo a regra para lembrar, o que significa 'R1'?",
              options: ["Meiose", "Mitose", "Reprodução", "Regeneração"],
              correct: 0,
            },
            {
              q: "E o que significa 'E1'?",
              options: ["Mitose", "Meiose", "Esporulação", "Espécie"],
              correct: 0,
            },
            {
              q: "No ciclo haplobionte haplonte (exemplo: algas), o organismo adulto é:",
              options: ["Haploide (n)", "Diploide (2n)", "Alternante entre n e 2n", "Triploide (3n)"],
              correct: 0,
            },
            {
              q: "No ciclo haplobionte haplonte, em que momento ocorre a meiose?",
              options: ["No zigoto", "Na formação dos gametas", "Na formação dos esporos", "Não ocorre meiose nesse ciclo"],
              correct: 0,
            },
            {
              q: "No ciclo haplobionte diplonte (exemplo: animais/homem), o organismo adulto é:",
              options: ["Diploide (2n)", "Haploide (n)", "Alternante entre n e 2n", "Triploide (3n)"],
              correct: 0,
            },
            {
              q: "No ciclo diplobionte (exemplo: vegetais), o que caracteriza esse ciclo?",
              options: ["Alternância de gerações entre esporófito (2n) e gametófito (n)", "O adulto é sempre haploide", "O adulto é sempre diploide sem alternância", "A meiose nunca ocorre"],
              correct: 0,
            },
            {
              q: "No ciclo diplobionte, a meiose ocorre:",
              options: ["Na formação dos esporos", "No zigoto", "Na formação dos gametas", "Não ocorre nesse ciclo"],
              correct: 0,
            },
          ],
        },
        {
          id: "pteridofitas",
          title: "Pteridófitas",
          sections: [
            {
              heading: "1. O que são as Pteridófitas",
              body: `As pteridófitas são plantas vasculares sem sementes. Elas representam um passo importante na evolução vegetal por apresentarem tecidos condutores para o transporte de água e nutrientes.

Exemplos comuns:
• Samambaias
• Xaxins
• Avencas`,
            },
            {
              heading: "2. Estrutura corporal",
              body: `O corpo de uma pteridófita é bem desenvolvido e dividido em partes bem definidas:

Raiz: fixa a planta e absorve água e sais minerais.
Caule: geralmente subterrâneo (do tipo rizoma).
Folha: responsável pela fotossíntese.
Báculo: nome dado à folha jovem enquanto ainda está enrolada.`,
            },
            {
              heading: "3. Vasos condutores (Traqueófitas)",
              body: `As pteridófitas foram as primeiras plantas a possuir vasos condutores de seiva. Isso permitiu que elas atingissem tamanhos maiores que as briófitas.

Os vasos são divididos em:
Xilema: transporta a seiva bruta (água e sais minerais) das raízes para as folhas.
Floema: transporta a seiva elaborada (açúcares produzidos na fotossíntese) das folhas para o restante da planta.

O que elas não possuem:
• Não produzem sementes.
• Não produzem flores.
• Não produzem frutos.`,
              visual: `
<div class="grid grid-cols-2 gap-3 max-w-sm mx-auto text-center text-xs">
  <div class="rounded-xl bg-cream border border-sand px-3 py-4">
    <p class="font-semibold text-bark mb-1">Xilema</p>
    <p class="text-bark/70">Seiva bruta<br/>(água e sais minerais)</p>
    <p class="text-ochre font-medium mt-1">Raiz → Folhas ↑</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand px-3 py-4">
    <p class="font-semibold text-bark mb-1">Floema</p>
    <p class="text-bark/70">Seiva elaborada<br/>(açúcares)</p>
    <p class="text-ochre font-medium mt-1">Folhas → Planta ↓</p>
  </div>
</div>`,
            },
            {
              heading: "4. Esporos e Heterosporia",
              body: `A maioria das pteridófitas produz um único tipo de esporo, mas algumas espécies apresentam heterosporia:

Heterosporos: produção de dois tipos diferentes de esporos (um masculino e um feminino, que darão origem a gametófitos distintos).`,
            },
            {
              heading: "5. As duas fases do ciclo de vida",
              body: `O ciclo das pteridófitas alterna entre duas gerações:

Esporófito (2n)
• É a fase duradoura (a planta grande que enxergamos).
• É diploide (2n).
• Produz esporos.

Gametófito (n)
• É a fase transitória (pequena e de vida curta).
• É haploide (n).
• Também é chamado de prótalo (tem formato de coração).
• Produz gametas.`,
              visual: `
<div class="grid grid-cols-2 gap-3 max-w-sm mx-auto text-center text-xs">
  <div class="rounded-xl bg-espresso text-cream px-3 py-4">
    <p class="font-display text-base mb-1">Esporófito (2n)</p>
    <p class="opacity-80">Fase duradoura</p>
    <p class="opacity-80">Diploide · produz esporos</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand px-3 py-4">
    <p class="font-display text-base text-espresso mb-1">Gametófito (n)</p>
    <p class="text-bark/70">Fase transitória (prótalo)</p>
    <p class="text-bark/70">Haploide · produz gametas</p>
  </div>
</div>`,
            },
            {
              heading: "6. Estruturas reprodutivas",
              body: `Para a reprodução acontecer, o prótalo (gametófito) desenvolve estruturas específicas:

Anterídeo: estrutura masculina que produz os anterozoides (n).
Anterozoide: gameta masculino, móvel e dotado de flagelos.

Arquegônio: estrutura feminina que produz a oosfera (n).
Oosfera: gameta feminino, imóvel.`,
              visual: `
<svg viewBox="0 0 200 180" class="w-full max-w-[200px] mx-auto" xmlns="http://www.w3.org/2000/svg">
  <path d="M100,40 C60,0 10,40 30,90 C45,125 80,150 100,170 C120,150 155,125 170,90 C190,40 140,0 100,40 Z" fill="#E4D9C4" stroke="#5C4630" stroke-width="2"/>
  <circle cx="70" cy="90" r="5" fill="#5C4630"/>
  <text x="8" y="105" font-size="9" fill="#5C4630">Anterídeo ♂</text>
  <circle cx="130" cy="112" r="5" fill="#3E2F20"/>
  <text x="128" y="135" font-size="9" fill="#3E2F20">Arquegônio ♀</text>
  <text x="60" y="25" font-size="10" fill="#5C4630" font-weight="600">Prótalo (n)</text>
</svg>`,
            },
            {
              heading: "7. Dependência da água para reprodução",
              body: `As pteridófitas ainda dependem da água líquida para se reproduzirem.
O anterozoide precisa nadar através de uma gota de água da chuva ou orvalho do anterídeo até o arquegônio para encontrar a oosfera.`,
            },
            {
              heading: "8. O ciclo reprodutivo passo a passo",
              body: `A reprodução ocorre na seguinte sequência lógica:

1. Formação dos esporos: No esporófito adulto (2n), os esporângios realizam Meiose (R!) e liberam esporos (n).
2. Germinação: Os esporos caem no solo úmido e germinam, formando o Prótalo (gametófito n).
3. Produção de gametas: O prótalo desenvolve o Anterídeo (com anterozoides) e o Arquegônio (com a oosfera).
4. Fecundação: Com a água, o anterozoide nada até a oosfera e ocorre a fertilização.
5. Crescimento: A união dos gametas forma o Zigoto (2n).
6. Desenvolvimento: O zigoto sofre Mitoses (E!), originando o Esporófito jovem (2n), que cresce e se torna um Esporófito adulto (2n), recomeçando o ciclo.`,
            },
            {
              heading: "9. Analogia para entender o ciclo de vida",
              body: `Para entender o ciclo sem decorar, pense nas pteridófitas como uma história de duas gerações:

Esporófito = Árvore gigante
É a fábrica principal (2n) que lança pequenas sementes ao vento (esporos n).

Prótalo = Acampamento temporário
O esporo cai na terra e vira uma tenda minúscula (gametófito n).

Água = O barco/ponte
O soldadinho (anterozoide) precisa flutuar na água para chegar até a base (oosfera) do outro lado da tenda.

Novo Esporófito = A nova construção
Quando se encontram, o projeto junta as duas partes (2n) e constrói uma nova árvore gigante no lugar do acampamento.`,
            },
            {
              heading: "10. O processo completo",
              body: `Agora juntando tudo:
Esporófito Adulto (2n) → Meiose no Esporângio → Esporos (n) → Caem no solo e germinam → Prótalo/Gametófito (n) → Desenvolve Anterídeo e Arquegônio → Liberação de Anterozoides (n) e Oosfera (n) → Natação com ajuda da água → Fecundação → Zigoto (2n) → Mitose → Esporófito Jovem (2n) → Esporófito Adulto (2n)

O mais importante para entender:
• O esporófito (2n) é a planta principal e duradoura.
• Os esporos (n) nascem por meiose nos esporângios.
• O esporo vira o prótalo (n), que fabrica os gametas.
• A água possibilita o encontro dos gametas.
• A fecundação gera o zigoto (2n), que vira a nova samambaia.`,
              visual: `
<div class="flex flex-col items-center gap-1 max-w-xs mx-auto text-center">
  <div class="w-full rounded-lg bg-espresso text-cream px-3 py-2 text-sm font-medium">Esporófito adulto (2n)</div>
  <span class="text-ochre text-xs">↓ meiose</span>
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-sm text-bark font-medium">Esporos (n)</div>
  <span class="text-ochre text-xs">↓ germinação</span>
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-sm text-bark font-medium">Prótalo (n)</div>
  <span class="text-ochre text-xs">↓</span>
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-sm text-bark font-medium">Anterídeo + Arquegônio</div>
  <span class="text-ochre text-xs">↓ água</span>
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-sm text-bark font-medium">Fecundação</div>
  <span class="text-ochre text-xs">↓</span>
  <div class="w-full rounded-lg bg-espresso text-cream px-3 py-2 text-sm font-medium">Zigoto (2n)</div>
  <span class="text-ochre text-xs">↓ mitose</span>
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-sm text-bark font-medium">Esporófito jovem (2n)</div>
  <span class="text-ochre text-xs">↓</span>
  <div class="w-full rounded-lg bg-beige border border-sand px-3 py-2 text-sm text-bark font-semibold">Esporófito adulto (2n)</div>
</div>`,
            },
          ],
          quiz: [
            { q: "As pteridófitas são classificadas como:", options: ["Plantas vasculares sem sementes", "Plantas vasculares com sementes", "Plantas avasculares", "Algas pluricelulares"], correct: 0 },
            { q: "Qual exemplo de pteridófita é citado no conteúdo?", options: ["Samambaia", "Musgo", "Pinheiro", "Alga"], correct: 0 },
            { q: "Como é chamada a folha jovem enquanto ainda está enrolada?", options: ["Báculo", "Rizoma", "Prótalo", "Esporângio"], correct: 0 },
            { q: "Qual vaso condutor transporta a seiva bruta?", options: ["Xilema", "Floema", "Rizoma", "Prótalo"], correct: 0 },
            { q: "Qual vaso condutor transporta a seiva elaborada?", options: ["Floema", "Xilema", "Rizoma", "Esporângio"], correct: 0 },
            { q: "O que as pteridófitas NÃO produzem, segundo o conteúdo?", options: ["Sementes, flores e frutos", "Esporos", "Raízes", "Vasos condutores"], correct: 0 },
            { q: "Na fase esporófito (2n), a planta é:", options: ["Diploide e produz esporos", "Haploide e produz gametas", "Diploide e produz gametas", "Haploide e produz esporos"], correct: 0 },
            { q: "O gametófito das pteridófitas também é chamado de:", options: ["Prótalo", "Rizoma", "Esporângio", "Báculo"], correct: 0 },
            { q: "O anterozoide é:", options: ["O gameta masculino, móvel e com flagelos", "O gameta feminino, imóvel", "A célula que forma o esporângio", "O tecido condutor de seiva"], correct: 0 },
            { q: "Por que as pteridófitas ainda dependem da água para se reproduzir?", options: ["Porque o anterozoide precisa nadar até a oosfera", "Porque os esporos só germinam na água", "Porque o xilema só funciona submerso", "Porque não possuem flores"], correct: 0 },
          ],
          extraQuizLabel: "Treino do PDF",
          extraQuizHeading: "Questões da lista do professor",
          extraQuiz: [
            { q: "Dentre os grupos de plantas estudados, é correto afirmar que possuem flor exclusivamente:", options: ["As angiospermas", "As pteridófitas", "As briófitas", "Os fungos"], correct: 0 },
            { q: "Gametas masculinos flagelados, que necessitam de água para encontrar os gametas femininos, são encontrados somente em:", options: ["Algas, briófitas e pteridófitas", "Pteridófitas e angiospermas", "Apenas em angiospermas", "Apenas em gimnospermas"], correct: 0 },
            { q: "Sobre as pteridófitas: são o grupo mais antigo de plantas vasculares; possuem caule chamado rizoma; e sua reprodução envolve a produção de esporos. É correto afirmar que:", options: ["Essas três características estão corretas, mas as pteridófitas não possuem flores", "As pteridófitas possuem flores minúsculas visíveis apenas com lupa", "As pteridófitas não possuem rizoma", "As pteridófitas se reproduzem exclusivamente por sementes"], correct: 0 },
            { q: "Relacionando os grupos às suas características: briófitas não apresentam vasos para condução; angiospermas apresentam flores e frutos; pteridófitas são as primeiras plantas vasculares; gimnospermas são as primeiras a formar sementes. Essa associação está:", options: ["Correta", "Incorreta apenas quanto às pteridófitas", "Incorreta apenas quanto às gimnospermas", "Totalmente incorreta"], correct: 0 },
          ],
        },
        {
          id: "gimnospermas",
          title: "Gimnospermas",
          sections: [
            {
              heading: "Gimnospermas",
              body: `Folhas aciculiformes (agulhas).
Copa em forma de cone (evita o acúmulo de neve).

Lembre-se:
Pinheiros, ciprestes e araucárias.
São vasculares (traqueófitas): xilema e floema.
Possuem folhas, caules e raízes.
Esporófitos produzem sementes.
Não possuem fruto nem flor.
Adaptadas ao clima frio.
Não dependem da água para reprodução: dispersão do grão de pólen.

Importante: o grão de pólen não é o gameta; ele é o gametófito masculino.`,
              visual: `
<div class="grid grid-cols-2 gap-2 max-w-xs mx-auto text-xs">
  <div class="rounded-lg bg-cream border border-sand px-3 py-2 flex items-center justify-between"><span class="text-bark">Vascular</span><span class="text-correct font-bold">✓</span></div>
  <div class="rounded-lg bg-cream border border-sand px-3 py-2 flex items-center justify-between"><span class="text-bark">Semente</span><span class="text-correct font-bold">✓</span></div>
  <div class="rounded-lg bg-cream border border-sand px-3 py-2 flex items-center justify-between"><span class="text-bark">Flor</span><span class="text-wrong font-bold">✗</span></div>
  <div class="rounded-lg bg-cream border border-sand px-3 py-2 flex items-center justify-between"><span class="text-bark">Fruto</span><span class="text-wrong font-bold">✗</span></div>
</div>`,
            },
            {
              heading: "Grão de pólen",
              body: `Estrutura:
Núcleo polínico.
Núcleo gerador.
Dois sacos aéreos laterais ocos.`,
              visual: `
<svg viewBox="0 0 200 120" class="w-full max-w-xs mx-auto" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="100" cy="55" rx="32" ry="22" fill="none" stroke="#5C4630" stroke-width="2.5"/>
  <circle cx="63" cy="55" r="17" fill="none" stroke="#A8763E" stroke-width="2"/>
  <circle cx="137" cy="55" r="17" fill="none" stroke="#A8763E" stroke-width="2"/>
  <circle cx="92" cy="52" r="3" fill="#3E2F20"/>
  <circle cx="108" cy="58" r="3" fill="#3E2F20"/>
  <text x="68" y="96" font-size="9" fill="#A8763E">saco aéreo</text>
  <text x="128" y="96" font-size="9" fill="#A8763E">saco aéreo</text>
  <text x="60" y="20" font-size="9" fill="#5C4630">núcleo polínico + núcleo gerador</text>
</svg>`,
            },
            {
              heading: "Dispersão do pólen",
              body: `Vento → Anemofilia.`,
            },
            {
              heading: "Semente",
              body: `3N: 2N do embrião + N do endosperma primário.`,
            },
            {
              heading: "Estróbilo (cone)",
              body: `Estruturas reprodutivas:
Estróbilo (cone).
Escama.
Esporângio.`,
              visual: `
<svg viewBox="0 0 160 200" class="w-full max-w-[160px] mx-auto" xmlns="http://www.w3.org/2000/svg">
  <path d="M80,10 L140,190 L20,190 Z" fill="none" stroke="#5C4630" stroke-width="2.5"/>
  <line x1="35" y1="150" x2="125" y2="150" stroke="#A8763E" stroke-width="1.5"/>
  <line x1="45" y1="115" x2="115" y2="115" stroke="#A8763E" stroke-width="1.5"/>
  <line x1="55" y1="80" x2="105" y2="80" stroke="#A8763E" stroke-width="1.5"/>
  <line x1="65" y1="45" x2="95" y2="45" stroke="#A8763E" stroke-width="1.5"/>
  <circle cx="35" cy="150" r="3" fill="#3E2F20"/>
  <text x="0" y="168" font-size="8.5" fill="#5C4630">escama</text>
  <text x="0" y="180" font-size="8.5" fill="#5C4630">(com esporângio)</text>
</svg>`,
            },
          ],
          quiz: [
            { q: "Qual é o formato característico das folhas das gimnospermas?", options: ["Aciculiformes (em forma de agulha)", "Largas e arredondadas", "Compostas e recortadas", "Ausentes"], correct: 0 },
            { q: "Por que a copa das gimnospermas costuma ter formato de cone?", options: ["Para evitar o acúmulo de neve", "Para atrair polinizadores", "Para reter mais água", "Para produzir mais frutos"], correct: 0 },
            { q: "Quais são exemplos de gimnospermas citados no conteúdo?", options: ["Pinheiros, ciprestes e araucárias", "Samambaias e avencas", "Musgos e hepáticas", "Orquídeas e bromélias"], correct: 0 },
            { q: "As gimnospermas são plantas:", options: ["Vasculares (traqueófitas), com xilema e floema", "Avasculares, sem tecidos condutores", "Sem raízes, caules ou folhas", "Exclusivamente aquáticas"], correct: 0 },
            { q: "O que produz as sementes nas gimnospermas?", options: ["Os esporófitos", "Os gametófitos apenas", "As flores", "Os frutos"], correct: 0 },
            { q: "As gimnospermas possuem fruto e flor?", options: ["Não possuem nem fruto nem flor", "Possuem fruto, mas não flor", "Possuem flor, mas não fruto", "Possuem ambos"], correct: 0 },
            { q: "As gimnospermas dependem da água para a reprodução?", options: ["Não; dependem da dispersão do grão de pólen", "Sim, totalmente", "Apenas em climas frios", "Apenas durante a germinação da semente"], correct: 0 },
            { q: "O grão de pólen da gimnosperma é:", options: ["O gametófito masculino (não é o próprio gameta)", "O próprio gameta masculino", "O óvulo", "O fruto da planta"], correct: 0 },
            { q: "Como ocorre a dispersão do pólen nas gimnospermas?", options: ["Pelo vento (anemofilia)", "Por insetos exclusivamente", "Pela água exclusivamente", "Por pássaros exclusivamente"], correct: 0 },
            { q: "A semente da gimnosperma é formada por:", options: ["2N do embrião + N do endosperma primário (3N no total)", "Apenas células haploides", "Apenas células diploides", "Um fruto protetor"], correct: 0 },
          ],
          extraQuizLabel: "Treino do PDF",
          extraQuizHeading: "Questões da lista do professor",
          extraQuiz: [
            { q: "Araucária, eucalipto, samambaia e orquídea são exemplos, respectivamente, de:", options: ["Gimnosperma, Dicotiledônea, Pteridófita e Monocotiledônea", "Pteridófita, Angiosperma, Gimnosperma e Monocotiledônea", "Monocotiledônea, Pteridófita, Gimnosperma e Dicotiledônea", "Gimnosperma, Monocotiledônea, Dicotiledônea e Pteridófita"], correct: 0 },
            { q: "O grande sucesso das plantas fanerogâmicas (gimnospermas e angiospermas) na conquista do ambiente terrestre pode ser atribuído a duas adaptações principais:", options: ["Independência da água para reprodução e propagação por meio de sementes", "Propagação por meio de frutos e reprodução por esporos", "Dependência da água para reprodução e ausência de sementes", "Reprodução exclusivamente por gametas flagelados"], correct: 0 },
            { q: "Uma planta apresenta xilema e floema bem desenvolvidos, flores diferenciadas e estruturas que atraem polinizadores. Sobre essa planta, é correto afirmar que:", options: ["Ela não é uma Gimnosperma, já que as gimnospermas não produzem flores", "Ela é obrigatoriamente uma Gimnosperma", "Ela não possui transporte eficiente de seiva", "Ela não pode ser uma planta Dicotiledônea"], correct: 0 },
            { q: "Em um esquema que separa as plantas em avasculares, vasculares com sementes (com ou sem frutos) e vasculares sem sementes, os grupos correspondentes são, respectivamente:", options: ["Briófitas, Angiospermas, Gimnospermas e Pteridófitas", "Pteridófitas, Gimnospermas, Angiospermas e Briófitas", "Briófitas, Gimnospermas, Angiospermas e Pteridófitas", "Gimnospermas, Briófitas, Pteridófitas e Angiospermas"], correct: 0 },
            { q: "São características comuns às gimnospermas e às angiospermas:", options: ["Sistema vascular e presença de grãos de pólen com tubo polínico", "Apenas a presença de sementes nuas", "Ausência total de sistema vascular", "Reprodução exclusiva por esporos"], correct: 0 },
          ],
        },
      ],
    },
);
