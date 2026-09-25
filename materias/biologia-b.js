window.DB_SUBJECTS = window.DB_SUBJECTS || [];
window.DB_SUBJECTS.push(
    {
      id: "biologia-b",
      name: "Biologia B",
      emoji: "🧬",
      contents: [
        {
          id: "codigo-genetico",
          title: "Código Genético",
          sections: [
            {
              heading: "1. Relação entre DNA, RNA e proteína",
              body: `O DNA é a molécula que armazena as informações genéticas. Essas informações precisam ser utilizadas para produzir proteínas.

A relação pode ser entendida assim:
DNA → RNA → PROTEÍNA

O DNA contém a informação, o RNA leva essa informação até o local de produção e a proteína é formada a partir dela.

Como essa informação funciona?
O DNA possui bases nitrogenadas:
A = Adenina
T = Timina
C = Citosina
G = Guanina

No RNA, a Timina (T) é substituída pela Uracila (U):
A = Adenina
U = Uracila
C = Citosina
G = Guanina

Durante a formação do RNA, ocorre o pareamento das bases:
DNA → RNA
A → U
T → A
C → G
G → C`,
              visual: `
<div class="flex flex-col items-center gap-3">
  <div class="flex items-center gap-2 flex-wrap justify-center">
    <div class="rounded-lg bg-espresso text-cream px-4 py-2 text-sm font-semibold">DNA</div>
    <span class="text-ochre text-lg">→</span>
    <div class="rounded-lg bg-beige border border-sand px-4 py-2 text-sm font-semibold text-bark">RNA</div>
    <span class="text-ochre text-lg">→</span>
    <div class="rounded-lg bg-cream border border-sand px-4 py-2 text-sm font-semibold text-bark">PROTEÍNA</div>
  </div>
  <div class="overflow-x-auto w-full max-w-[180px]">
    <table class="w-full text-sm border-collapse mt-2">
      <thead><tr class="border-b-2 border-espresso/70"><th class="text-left py-1.5 pr-3 font-display text-bark">DNA</th><th class="text-left py-1.5 font-display text-bark">RNA</th></tr></thead>
      <tbody>
        <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">A</td><td class="py-1.5 text-bark/80">U</td></tr>
        <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">T</td><td class="py-1.5 text-bark/80">A</td></tr>
        <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">C</td><td class="py-1.5 text-bark/80">G</td></tr>
        <tr><td class="py-1.5 pr-3 text-bark/80">G</td><td class="py-1.5 text-bark/80">C</td></tr>
      </tbody>
    </table>
  </div>
</div>`,
            },
            {
              heading: "2. Códon",
              body: `A informação genética é lida de 3 em 3 bases.

Um conjunto de 3 bases do RNA mensageiro (RNAm) é chamado de códon.
3 bases → 1 códon → 1 aminoácido

Os aminoácidos são as unidades que se juntam para formar uma proteína.

Exemplo:
RNAm: AUG → determina o aminoácido Metionina (MET)
RNAm: GUC → determina o aminoácido Valina (VAL)

Portanto, a sequência de códons do RNAm determina a sequência de aminoácidos da proteína.`,
            },
            {
              heading: "3. Síntese de proteínas",
              body: `A síntese de proteínas acontece em duas etapas principais.

1ª etapa — Transcrição
A transcrição acontece no núcleo.
Nessa etapa, uma parte do DNA serve como molde para produzir uma molécula de RNA mensageiro (RNAm).
DNA → RNAm
O RNAm é como uma cópia da informação do DNA que poderá sair do núcleo.

2ª etapa — Tradução
A tradução acontece no citoplasma, nos ribossomos.
O RNAm chega ao ribossomo e seus códons são lidos.
O RNA transportador (RNAt) possui um anticódon, que se liga ao códon correspondente do RNAm, trazendo o aminoácido correto.
Assim: RNAm → códons → RNAt → aminoácidos → proteína`,
              visual: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
  <div class="rounded-xl bg-cream border border-sand p-4 text-center">
    <p class="text-xs uppercase tracking-wide text-ochre font-semibold mb-1">1ª etapa</p>
    <p class="font-display text-base text-espresso mb-1">Transcrição</p>
    <p class="text-[11px] text-bark/60 mb-2">Local: núcleo</p>
    <p class="text-sm text-bark font-medium">DNA → RNAm</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand p-4 text-center">
    <p class="text-xs uppercase tracking-wide text-ochre font-semibold mb-1">2ª etapa</p>
    <p class="font-display text-base text-espresso mb-1">Tradução</p>
    <p class="text-[11px] text-bark/60 mb-2">Local: citoplasma (ribossomos)</p>
    <p class="text-sm text-bark font-medium">RNAm → proteína</p>
  </div>
</div>`,
            },
            {
              heading: "4. Códon e anticódon",
              body: `É importante não confundir:

Códon: sequência de 3 bases presente no RNAm.
Anticódon: sequência de 3 bases presente no RNAt, complementar ao códon do RNAm.

Exemplo:
RNAm: AUG
RNAt: UAC
O anticódon UAC se encaixa no códon AUG.`,
            },
            {
              heading: "5. Como a proteína é formada",
              body: `Imagine que o RNAm seja uma sequência de instruções:
AUG → GUC → CCC → GGU → UGA

Cada códon indica o aminoácido que deve ser colocado na sequência:
AUG → MET
GUC → VAL
CCC → PRO
GGU → GLY
UGA → PARADA

Então: MET → VAL → PRO → GLY

Essa sequência de aminoácidos forma uma proteína.`,
              visual: `
<div class="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm">
  <div class="text-center"><div class="rounded-lg bg-cream border border-sand px-2.5 py-1.5 font-mono text-bark">AUG</div><p class="text-[10px] text-bark/60 mt-1">MET</p></div>
  <span class="text-ochre">→</span>
  <div class="text-center"><div class="rounded-lg bg-cream border border-sand px-2.5 py-1.5 font-mono text-bark">GUC</div><p class="text-[10px] text-bark/60 mt-1">VAL</p></div>
  <span class="text-ochre">→</span>
  <div class="text-center"><div class="rounded-lg bg-cream border border-sand px-2.5 py-1.5 font-mono text-bark">CCC</div><p class="text-[10px] text-bark/60 mt-1">PRO</p></div>
  <span class="text-ochre">→</span>
  <div class="text-center"><div class="rounded-lg bg-cream border border-sand px-2.5 py-1.5 font-mono text-bark">GGU</div><p class="text-[10px] text-bark/60 mt-1">GLY</p></div>
  <span class="text-ochre">→</span>
  <div class="text-center"><div class="rounded-lg bg-espresso text-cream px-2.5 py-1.5 font-mono">UGA</div><p class="text-[10px] text-bark/60 mt-1">PARADA</p></div>
</div>`,
            },
            {
              heading: "6. Códon de iniciação e códons de parada",
              body: `A tradução possui sinais que indicam quando começar e quando terminar.

Códon de iniciação
O principal códon de início é: AUG → Metionina (MET)
Ele indica o início da tradução.

Códons de parada
Alguns códons não determinam aminoácidos. Eles indicam que a tradução deve terminar.
Exemplos: UAA, UAG e UGA → códons de parada

Portanto:
AUG → início
UAA / UAG / UGA → parada`,
            },
            {
              heading: "7. O papel de cada RNA",
              body: `Existem diferentes tipos de RNA envolvidos na produção de proteínas.

RNAm — RNA mensageiro
É responsável por levar a informação genética do DNA até o ribossomo.
Função: levar a receita.

RNAt — RNA transportador
Transporta os aminoácidos até o ribossomo e possui um anticódon que reconhece os códons do RNAm.
Função: levar os ingredientes.

RNAr — RNA ribossômico
Participa da formação e funcionamento do ribossomo, local onde ocorre a tradução.
Função: participar da "cozinha" onde a proteína é produzida.`,
              visual: `
<div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
  <div class="rounded-xl bg-cream border border-sand p-4 text-center">
    <p class="font-display text-base text-espresso mb-1">RNAm</p>
    <p class="text-[11px] text-bark/60 mb-2">RNA mensageiro</p>
    <p class="text-xs text-bark/80">Leva a informação do DNA até o ribossomo</p>
    <p class="text-[10px] text-ochre font-medium mt-2">"leva a receita"</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand p-4 text-center">
    <p class="font-display text-base text-espresso mb-1">RNAt</p>
    <p class="text-[11px] text-bark/60 mb-2">RNA transportador</p>
    <p class="text-xs text-bark/80">Transporta os aminoácidos até o ribossomo</p>
    <p class="text-[10px] text-ochre font-medium mt-2">"leva os ingredientes"</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand p-4 text-center">
    <p class="font-display text-base text-espresso mb-1">RNAr</p>
    <p class="text-[11px] text-bark/60 mb-2">RNA ribossômico</p>
    <p class="text-xs text-bark/80">Participa da formação do ribossomo</p>
    <p class="text-[10px] text-ochre font-medium mt-2">"participa da cozinha"</p>
  </div>
</div>`,
            },
            {
              heading: "8. Analogia para entender a síntese de proteínas",
              body: `Uma forma de entender sem decorar é imaginar que a produção de uma proteína é como fazer um bolo:

DNA = receita original — o DNA guarda a informação de como fazer a proteína.
RNAm = cópia da receita — uma cópia da informação do DNA é produzida para poder ser utilizada.
Ribossomo = cozinha — é o local onde a informação do RNAm é lida e a proteína é montada.
RNAt = ajudante — leva os ingredientes corretos até o ribossomo.
Aminoácidos = ingredientes — são as unidades que serão organizadas para formar a proteína.
Proteína = bolo — é o produto final formado a partir dos aminoácidos.`,
              visual: `
<div class="overflow-x-auto">
  <table class="w-full text-sm border-collapse">
    <thead><tr class="border-b-2 border-espresso/70"><th class="text-left py-2 pr-3 font-display text-bark">Elemento biológico</th><th class="text-left py-2 font-display text-bark">Analogia (bolo)</th></tr></thead>
    <tbody>
      <tr class="border-b border-sand/60"><td class="py-2 pr-3 text-bark/80">DNA</td><td class="py-2 text-bark/80">Receita original</td></tr>
      <tr class="border-b border-sand/60"><td class="py-2 pr-3 text-bark/80">RNAm</td><td class="py-2 text-bark/80">Cópia da receita</td></tr>
      <tr class="border-b border-sand/60"><td class="py-2 pr-3 text-bark/80">Ribossomo</td><td class="py-2 text-bark/80">Cozinha</td></tr>
      <tr class="border-b border-sand/60"><td class="py-2 pr-3 text-bark/80">RNAt</td><td class="py-2 text-bark/80">Ajudante</td></tr>
      <tr class="border-b border-sand/60"><td class="py-2 pr-3 text-bark/80">Aminoácidos</td><td class="py-2 text-bark/80">Ingredientes</td></tr>
      <tr><td class="py-2 pr-3 text-bark/80">Proteína</td><td class="py-2 text-bark/80">Bolo</td></tr>
    </tbody>
  </table>
</div>`,
            },
            {
              heading: "9. Código genético",
              body: `O código genético é o conjunto de regras que relaciona os códons do RNAm aos aminoácidos que formarão as proteínas.
Ele permite que a informação armazenada no DNA seja transformada em uma sequência específica de aminoácidos.

Características importantes
É universal: praticamente todos os seres vivos utilizam o mesmo código genético.
É degenerado: diferentes códons podem determinar o mesmo aminoácido. Isso acontece porque existem vários códons diferentes para alguns aminoácidos.`,
            },
            {
              heading: "10. O processo completo",
              body: `Agora juntando tudo:
DNA → Transcrição → RNAm → Ribossomo → Leitura dos códons → RNAt traz os aminoácidos → Aminoácidos são unidos → Proteína

O mais importante para entender:
O DNA guarda a informação.
O RNAm copia e leva essa informação.
O ribossomo lê o RNAm.
O RNAt traz os aminoácidos correspondentes.
Os aminoácidos são organizados na ordem determinada pelos códons.
Essa sequência de aminoácidos forma a proteína.

DNA → RNAm → códons → aminoácidos → proteína`,
              visual: `
<div class="flex flex-col items-center gap-1 max-w-xs mx-auto text-center">
  <div class="w-full rounded-lg bg-espresso text-cream px-3 py-2 text-sm font-medium">DNA</div>
  <span class="text-ochre text-xs">↓ Transcrição</span>
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-sm text-bark font-medium">RNAm</div>
  <span class="text-ochre text-xs">↓</span>
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-sm text-bark font-medium">Ribossomo</div>
  <span class="text-ochre text-xs">↓</span>
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-sm text-bark font-medium">Leitura dos códons</div>
  <span class="text-ochre text-xs">↓</span>
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-sm text-bark font-medium">RNAt traz os aminoácidos</div>
  <span class="text-ochre text-xs">↓</span>
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-sm text-bark font-medium">Aminoácidos são unidos</div>
  <span class="text-ochre text-xs">↓</span>
  <div class="w-full rounded-lg bg-beige border border-sand px-3 py-2 text-sm text-bark font-semibold">Proteína</div>
</div>`,
            },
          ],
          quiz: [
            { q: "Qual é a relação básica entre DNA, RNA e proteína?", options: ["DNA → RNA → PROTEÍNA", "RNA → DNA → PROTEÍNA", "PROTEÍNA → DNA → RNA", "DNA → PROTEÍNA → RNA"], correct: 0 },
            { q: "No RNA, qual base substitui a Timina do DNA?", options: ["Uracila", "Citosina", "Guanina", "Adenina"], correct: 0 },
            { q: "No pareamento DNA → RNA, a base C do DNA corresponde a qual base no RNA?", options: ["G", "U", "A", "C"], correct: 0 },
            { q: "O que é um códon?", options: ["Um conjunto de 3 bases do RNAm que corresponde a um aminoácido", "Um conjunto de 2 bases do DNA", "Uma única base do RNAt", "Uma proteína completa"], correct: 0 },
            { q: "Onde ocorre a transcrição?", options: ["No núcleo", "No citoplasma", "No ribossomo", "Na membrana celular"], correct: 0 },
            { q: "Onde ocorre a tradução?", options: ["No citoplasma, nos ribossomos", "No núcleo", "Na mitocôndria", "No retículo endoplasmático"], correct: 0 },
            { q: "O que é o anticódon?", options: ["Uma sequência de 3 bases do RNAt, complementar ao códon do RNAm", "Uma sequência de 3 bases do DNA", "O mesmo que o códon do RNAm", "Uma proteína formada no ribossomo"], correct: 0 },
            { q: "Qual é o principal códon de iniciação da tradução?", options: ["AUG", "UAA", "UAG", "UGA"], correct: 0 },
            { q: "Quais códons indicam parada da tradução?", options: ["UAA, UAG e UGA", "AUG, GUC e CCC", "Apenas AUG", "Apenas UGA"], correct: 0 },
            { q: "Por que o código genético é considerado degenerado?", options: ["Porque diferentes códons podem determinar o mesmo aminoácido", "Porque só funciona em alguns seres vivos", "Porque não segue nenhuma regra fixa", "Porque cada aminoácido tem apenas um códon possível"], correct: 0 },
          ],
        },
      ],
    },
);
