window.DB_SUBJECTS = window.DB_SUBJECTS || [];
window.DB_SUBJECTS.push(
    {
      id: "geografia",
      name: "Geografia",
      emoji: "🌎",
      contents: [
        {
          id: "climatologia",
          title: "Climatologia",
          noShuffle: true,
          extraQuizLabel: "Questões estilo Anglo",
          extraQuizHeading: "10 questões extras, no estilo de prova",
          sections: [
            {
              heading: "1. Tempo × Clima",
              body: `🌦️ Tempo
É o estado momentâneo da atmosfera.
Exemplo de ideia: hoje está frio, amanhã pode esquentar.

🌍 Clima
É a sucessão habitual dos vários estados de tempo.

🎯 Na questão
Se falar de uma condição agora ou em determinado momento → pense em TEMPO.
Se falar do comportamento habitual de uma região → pense em CLIMA.`,
            },
            {
              heading: "2. Elementos do clima",
              body: `Os elementos mostram como está o clima.

Os principais trabalhados no material são:
🌡️ Temperatura
💧 Umidade
🌧️ Precipitação
💨 Pressão atmosférica`,
            },
            {
              heading: "🌡️ Temperatura",
              body: `Amplitude térmica
É a diferença entre a temperatura máxima e mínima.

Fórmula:
AMPLITUDE = MÁXIMA − MÍNIMA

Exemplo:
Máxima = 30°C
Mínima = 10°C
30 − 10 = 20°C
👉 Amplitude térmica = 20°C.

🎯 Na questão
Se aparecerem temperatura máxima e mínima, provavelmente você precisa calcular a amplitude térmica.

Isoterma → linha que une pontos de mesma temperatura.`,
            },
            {
              heading: "💧 Umidade",
              body: `É a quantidade de vapor de água presente na atmosfera.

Umidade relativa
É expressa em %.
Quando está próxima de 100%, a atmosfera está chegando ao ponto de saturação, podendo ocorrer precipitação.

🎯 Na questão
Se aparecer "Umidade relativa de 90%" → significa que o ar está muito próximo da saturação.

Isoígra → pontos de igual umidade.
Isoieta → pontos de igual pluviosidade.`,
            },
            {
              heading: "🌧️ Precipitação",
              body: `É a água que cai da atmosfera.

Principais formas:
Orvalho → condensação do vapor de água na superfície.
Geada → congelamento do orvalho durante uma noite/madrugada fria e sem nuvens.
Neve → temperatura baixa, próxima de 0°C, e umidade elevada.
Granizo → "chuva de pedra", formada por blocos de gelo em nuvens altas.
Chuva → precipitação líquida.`,
            },
            {
              heading: "🌧️ Os 3 tipos de chuva",
              body: `Essa parte é muito importante para analisar questões.

☀️ Chuva convectiva
Pense: CALOR → AR SOBE → RESFRIA → CONDENSA → CHUVA
Características: curta duração; alta intensidade; pequenas áreas; comum na Amazônia.
🎯 Como reconhecer? Se a questão falar de calor intenso + ar subindo + chuva forte e rápida → CONVECTIVA.`,
              visual: `
<div class="flex flex-col items-center gap-1 max-w-[190px] mx-auto text-center">
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-xs text-bark font-medium">☀️ Calor</div>
  <span class="text-ochre text-sm">↓</span>
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-xs text-bark font-medium">Ar sobe</div>
  <span class="text-ochre text-sm">↓</span>
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-xs text-bark font-medium">Resfria</div>
  <span class="text-ochre text-sm">↓</span>
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-xs text-bark font-medium">Condensa</div>
  <span class="text-ochre text-sm">↓</span>
  <div class="w-full rounded-lg bg-espresso text-cream px-3 py-2 text-xs font-medium">🌧️ Chuva — curta, forte, área pequena</div>
</div>`,
            },
            {
              heading: "",
              body: `🌡️ Chuva frontal
Pense: AR QUENTE + AR FRIO → ENCONTRO → CHUVA
Ocorre no encontro de massas de ar com características diferentes.
Características: contínua; intensidade baixa a moderada; grande área; comum em grande parte do Brasil, principalmente Sul e Sudeste.
🎯 Como reconhecer? Se aparecer frente + massa de ar quente + massa de ar fria → FRONTAL.`,
              visual: `
<div class="max-w-[220px] mx-auto">
  <div class="flex items-center justify-center gap-2">
    <div class="rounded-lg bg-cream border border-sand px-2.5 py-2 text-[11px] text-bark font-medium text-center">Ar quente</div>
    <span class="text-ochre text-base">↔</span>
    <div class="rounded-lg bg-cream border border-sand px-2.5 py-2 text-[11px] text-bark font-medium text-center">Ar frio</div>
  </div>
  <div class="flex justify-center my-1"><span class="text-ochre text-sm">↓ encontro</span></div>
  <div class="rounded-lg bg-espresso text-cream px-3 py-2 text-[11px] font-medium text-center">🌧️ Chuva frontal — contínua, grande área</div>
</div>`,
            },
            {
              heading: "",
              body: `⛰️ Chuva orográfica
Pense: AR ÚMIDO → MONTANHA → SOBE → ESFRIA → CONDENSA → CHUVA
A massa de ar úmida encontra uma barreira do relevo e é forçada a subir.
Barlavento → lado que recebe o ar úmido.
Sotavento → lado oposto à chegada do ar.
🎯 Como reconhecer? Se a questão falar de montanha + serra + relevo + ar úmido subindo → OROGRÁFICA.`,
              visual: `
<svg viewBox="0 0 300 170" class="w-full max-w-sm mx-auto" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arOro-1" markerWidth="7" markerHeight="7" refX="4" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#A8763E"/></marker>
  </defs>
  <polygon points="20,150 150,25 280,150" fill="none" stroke="#5C4630" stroke-width="2.5"/>
  <line x1="45" y1="140" x2="128" y2="42" stroke="#A8763E" stroke-width="2.5" marker-end="url(#arOro-1)"/>
  <text x="35" y="90" font-size="9.5" fill="#5C4630" transform="rotate(-52 35,90)">sobe · esfria · condensa</text>
  <line x1="172" y1="42" x2="255" y2="140" stroke="#5C4630" stroke-width="2" stroke-dasharray="4 3"/>
  <text x="200" y="100" font-size="9.5" fill="#5C4630" transform="rotate(52 200,100)">desce seco</text>
  <text x="15" y="164" font-size="10.5" fill="#5C4630" font-weight="600">Barlavento</text>
  <text x="228" y="164" font-size="10.5" fill="#5C4630" font-weight="600">Sotavento</text>
  <text x="120" y="18" font-size="10" fill="#A8763E" font-weight="600">🌧️ chuva</text>
</svg>`,
            },
            {
              heading: "💨 Pressão atmosférica",
              body: `É o peso exercido pela atmosfera sobre a superfície terrestre.
Aqui existem algumas relações que você precisa saber.

🌡️ Temperatura × pressão
Temperatura ↑ → Pressão ↓
Temperatura ↓ → Pressão ↑
🧠 Pense: Ar quente sobe → menor pressão. Ar frio desce → maior pressão.

⛰️ Altitude × pressão
Altitude ↑ → Pressão ↓
Altitude ↓ → Pressão ↑
🎯 Na questão: Se uma cidade está em uma altitude muito elevada → menor pressão atmosférica.`,
            },
            {
              heading: "💨 Ventos",
              body: `O vento é ar em movimento.
A regra mais importante é: ALTA PRESSÃO → BAIXA PRESSÃO (AP → BP)
Os ventos sopram das áreas de Alta Pressão para as áreas de Baixa Pressão.

🧠 Macete: Alta → Baixa
Se uma questão perguntar "para onde o vento vai?", procure primeiro as áreas de pressão.`,
              visual: `
<div class="flex items-center justify-center gap-3">
  <div class="w-16 h-16 rounded-full bg-beige border-2 border-sand flex items-center justify-center text-sm font-bold text-bark">AP</div>
  <span class="text-ochre text-2xl">→</span>
  <div class="w-16 h-16 rounded-full bg-espresso text-cream flex items-center justify-center text-sm font-bold">BP</div>
</div>
<p class="text-center text-[11px] text-bark/60 mt-2">O vento sopra da Alta Pressão para a Baixa Pressão</p>`,
            },
            {
              heading: "🌍 6. Fatores climáticos",
              body: `Agora muda a lógica:
Elementos → mostram como está o clima.
Fatores → ajudam a explicar por que o clima é daquele jeito.

Os principais fatores trabalhados no material são:
Latitude, Altitude, Relevo, Continentalidade e maritimidade, Correntes marítimas, Vegetação, Massas de ar.`,
            },
            {
              heading: "📍 Latitude",
              body: `Latitude é a distância em relação ao Equador (0°).

Regra principal:
MAIOR LATITUDE → MENOR TEMPERATURA
MENOR LATITUDE → MAIOR TEMPERATURA
Além disso: Maior latitude → maior amplitude térmica. Menor latitude → menor amplitude térmica.

🎯 Como analisar?
Se uma questão comparar Cidade A → 10° S e Cidade B → 50° S: a cidade B está em maior latitude, logo tende a apresentar menor temperatura média.`,
              visual: `
<div class="flex items-center justify-between gap-1 text-[10px] text-bark font-medium max-w-sm mx-auto">
  <div class="text-center flex-1">
    <div class="w-11 h-11 rounded-full bg-cream border border-sand flex items-center justify-center mx-auto mb-1 text-base">❄️</div>
    Polo<br/>menor T°
  </div>
  <span class="text-ochre text-lg">↔</span>
  <div class="text-center flex-1">
    <div class="w-14 h-14 rounded-full bg-beige border border-sand flex items-center justify-center mx-auto mb-1 text-lg">🌤️</div>
    Latitude média
  </div>
  <span class="text-ochre text-lg">↔</span>
  <div class="text-center flex-1">
    <div class="w-16 h-16 rounded-full bg-espresso text-cream flex items-center justify-center mx-auto mb-1 text-xl">☀️</div>
    Equador<br/>maior T°
  </div>
</div>`,
            },
            {
              heading: "⛰️ Altitude",
              body: `É a altura em relação ao nível do mar.

Regra:
ALTITUDE ↑ → TEMPERATURA ↓
ALTITUDE ↓ → TEMPERATURA ↑

🎯 Na questão
Duas cidades possuem a mesma latitude, mas: Cidade A → baixa altitude; Cidade B → alta altitude.
👉 A cidade B tende a ser mais fria.`,
              visual: `
<div class="flex flex-col items-center gap-2 max-w-[260px] mx-auto text-center">
  <div class="w-full rounded-lg bg-espresso text-cream px-3 py-2 text-xs font-medium">Alta altitude → menor temperatura, menor pressão</div>
  <span class="text-ochre text-sm">↕ altitude</span>
  <div class="w-full rounded-lg bg-beige border border-sand px-3 py-2 text-xs font-medium text-bark">Baixa altitude → maior temperatura, maior pressão</div>
</div>`,
            },
            {
              heading: "⛰️ Relevo",
              body: `O relevo pode funcionar como BARREIRA ou "CORREDOR".
Ele influencia a circulação das massas de ar.

🎯 Na questão
Se aparecer serra + montanha + massa de ar sendo impedida ou obrigada a subir → pense em relevo.
E também pode aparecer relacionado à chuva orográfica.`,
            },
            {
              heading: "🌊 Continentalidade × Maritimidade",
              body: `Essa comparação é muito importante.

🏠 Continentalidade
Influência do continente.
→ menor umidade
→ maior amplitude térmica

🌊 Maritimidade
Influência do oceano.
→ maior umidade
→ menor amplitude térmica

🧠 Como imaginar?
Continente = temperaturas variam mais.
Oceano = temperaturas variam menos.

🎯 Questão clássica: "Uma cidade localizada próxima ao litoral apresenta menor amplitude térmica." 👉 Pense: MARITIMIDADE.`,
              visual: `
<div class="grid grid-cols-2 gap-3 text-center text-xs max-w-sm mx-auto">
  <div class="rounded-xl bg-cream border border-sand px-3 py-4">
    <p class="font-semibold text-bark mb-1">🏠 Continentalidade</p>
    <p class="text-bark/70">Menor umidade<br/>Maior amplitude térmica</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand px-3 py-4">
    <p class="font-semibold text-bark mb-1">🌊 Maritimidade</p>
    <p class="text-bark/70">Maior umidade<br/>Menor amplitude térmica</p>
  </div>
</div>`,
            },
            {
              heading: "🌊 Correntes marítimas",
              body: `São massas de água que circulam pelos oceanos.

🔥 Corrente quente
Tende a deixar o litoral: mais quente e mais úmido.

❄️ Corrente fria
Tende a deixar o litoral: mais seco, favorecendo a ocorrência de desertos.

Exemplo importante:
Corrente de Humboldt (ou do Peru) → corrente fria → Pacífico Sul → contribui para a formação do deserto do Atacama.

🎯 Na questão: Atacama + corrente marítima → pense imediatamente em Humboldt → corrente fria.`,
            },
            {
              heading: "🌳 Vegetação",
              body: `A vegetação interfere no clima porque impede a incidência total dos raios solares na superfície.

Com o desmatamento:
↓ umidade
↓ chuvas
↑ temperatura

🎯 Como reconhecer?
Se a questão relacionar desmatamento + aumento da temperatura + redução da umidade → pense em vegetação.`,
            },
            {
              heading: "💨 Massas de ar",
              body: `São grandes porções da atmosfera que se deslocam levando as características da região onde se formaram.

Elas podem ser:
Pela temperatura → Quentes: Tropical (T) e Equatorial (E). Frias: Polar (P).
Pela umidade → Secas: continentais (c). Úmidas: oceânicas.

🧠 Como interpretar uma sigla?
Se aparecer algo como "mTa", pense: m = massa, T = Tropical, a = atlântica.
A ideia é descobrir de onde vem a massa e quais características ela carrega.`,
            },
            {
              heading: "🌎 El Niño e La Niña",
              body: `O material apresenta os fenômenos El Niño e La Niña.
Para a revisão, reconheça que são fenômenos relacionados às condições do Oceano Pacífico e que interferem nas condições climáticas.`,
            },
            {
              heading: "🏆 Mapa mental para questões",
              body: `Quando aparecer uma questão de Climatologia, pense assim:

🌡️ "Está falando de temperatura?" → Latitude / altitude / continentalidade / maritimidade
🌧️ "Está falando de chuva?" → Convectiva / frontal / orográfica
💨 "Está falando de vento?" → Alta pressão → Baixa pressão
⛰️ "Tem montanha ou serra?" → Relevo → chuva orográfica
🌊 "Tem oceano influenciando?" → Maritimidade
🏠 "Está longe do oceano?" → Continentalidade
🌊 "Tem corrente marítima?" → Quente = mais quente/úmido · Fria = mais seco
📍 "Comparou duas latitudes?" → Maior latitude = menor temperatura
⛰️ "Comparou duas altitudes?" → Maior altitude = menor temperatura
🌳 "Falou de desmatamento?" → Menor umidade + menor chuva + maior temperatura`,
            },
            {
              heading: "⚡ 10 relações para decorar",
              body: `1. Maior latitude → menor temperatura
2. Maior altitude → menor temperatura
3. Maior altitude → menor pressão
4. Maior temperatura → menor pressão
5. Alta pressão → Baixa pressão
6. Continentalidade → maior amplitude térmica
7. Maritimidade → menor amplitude térmica
8. Corrente quente → mais quente e úmido
9. Corrente fria → mais seco
10. Desmatamento → menor umidade, menor chuva e maior temperatura`,
            },
            {
              heading: "🧠 O segredo para a prova",
              body: `Não tente decorar Climatologia como uma lista enorme. Leia o que a questão está descrevendo e procure a "pista":

calor subindo → convectiva
frente quente + fria → frontal
montanha → orográfica
alta → baixa → vento
altitude → temperatura
latitude → temperatura
oceano → maritimidade
continente → continentalidade
corrente fria → ar mais seco

Isso transforma a matéria em relações que você consegue identificar na questão, em vez de apenas decorar definições.`,
            },
            {
              heading: "1ª Parte — Climas do Mundo: tipos climáticos mundiais",
              body: `Classificação por zonas:
Polar
Temperado frio
Frio de montanha
Temperado
Mediterrâneo
Monçônico
Árido e semi-árido
Equatorial
Tropical
Subtropical

Climogramas segundo os hemisférios:
Hemisfério Sul: temperaturas mais altas nos meses de verão (dez–mar) e mais baixas no inverno (jun–jul).
Hemisfério Norte: padrão invertido — temperaturas mais altas em jun–ago (verão) e mais baixas em dez–jan (inverno).`,
              visual: `
<div class="grid grid-cols-2 gap-3 max-w-sm mx-auto text-center text-xs">
  <div class="rounded-xl bg-cream border border-sand px-3 py-4">
    <p class="font-semibold text-bark mb-1">Hemisfério Sul</p>
    <p class="text-bark/70">Verão: dez–mar</p>
    <p class="text-bark/70">Inverno: jun–jul</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand px-3 py-4">
    <p class="font-semibold text-bark mb-1">Hemisfério Norte</p>
    <p class="text-bark/70">Verão: jun–ago</p>
    <p class="text-bark/70">Inverno: dez–jan</p>
  </div>
</div>`,
            },
            {
              heading: "Climas e seus climogramas característicos (mundo)",
              body: `Referência rápida dos principais tipos climáticos mundiais e suas características.`,
              visual: `
<div class="overflow-x-auto">
  <table class="w-full text-xs border-collapse">
    <thead><tr class="border-b-2 border-espresso/70"><th class="text-left py-2 pr-2 font-display text-bark">Clima</th><th class="text-left py-2 pr-2 font-display text-bark">Exemplo</th><th class="text-left py-2 font-display text-bark">Características</th></tr></thead>
    <tbody>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-2 text-bark/80 font-medium">Polar/Subpolar</td><td class="py-1.5 pr-2 text-bark/70">—</td><td class="py-1.5 text-bark/70">Temperaturas quase sempre negativas (até -25°C); pouca chuva, concentrada no "verão" polar.</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-2 text-bark/80 font-medium">Frio de Montanha</td><td class="py-1.5 pr-2 text-bark/70">Santis (Suíça)</td><td class="py-1.5 text-bark/70">Temperaturas baixas o ano todo (-10° a 10°C); chuvas elevadas e constantes.</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-2 text-bark/80 font-medium">Temperado Frio</td><td class="py-1.5 pr-2 text-bark/70">Arcangel (Rússia)</td><td class="py-1.5 text-bark/70">Grande amplitude térmica (-20° a +20°C); chuvas moderadas no verão.</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-2 text-bark/80 font-medium">Temperado Oceânico</td><td class="py-1.5 pr-2 text-bark/70">Paris (França)</td><td class="py-1.5 text-bark/70">Temperaturas amenas (0° a 20°C); chuvas bem distribuídas o ano todo.</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-2 text-bark/80 font-medium">Temperado Continental</td><td class="py-1.5 pr-2 text-bark/70">Perm (Rússia)</td><td class="py-1.5 text-bark/70">Grande amplitude térmica (-20° a 20°C); chuvas concentradas no verão.</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-2 text-bark/80 font-medium">Temp. Continental (semi-árido)</td><td class="py-1.5 pr-2 text-bark/70">Astrakan (Rússia)</td><td class="py-1.5 text-bark/70">Grande amplitude térmica; baixíssima precipitação o ano todo.</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-2 text-bark/80 font-medium">Mediterrâneo</td><td class="py-1.5 pr-2 text-bark/70">Atenas (Grécia)</td><td class="py-1.5 text-bark/70">Verões quentes e secos; invernos amenos e chuvosos.</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-2 text-bark/80 font-medium">Árido</td><td class="py-1.5 pr-2 text-bark/70">—</td><td class="py-1.5 text-bark/70">Baixíssima pluviosidade constante; pequena variação sazonal de temperatura.</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-2 text-bark/80 font-medium">Tropical de Monções</td><td class="py-1.5 pr-2 text-bark/70">Bombaim / Cherrapunji (Índia)</td><td class="py-1.5 text-bark/70">Chuvas torrenciais em poucos meses (monção de verão), podendo passar de 2.000 mm/mês.</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-2 text-bark/80 font-medium">Subtropical</td><td class="py-1.5 pr-2 text-bark/70">—</td><td class="py-1.5 text-bark/70">Temperaturas moderadas (14° a 25°C); chuvas o ano todo, leve concentração no verão.</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-2 text-bark/80 font-medium">Tropical</td><td class="py-1.5 pr-2 text-bark/70">—</td><td class="py-1.5 text-bark/70">Temperaturas altas (20° a 24°C); duas estações — seca (inverno) e chuvosa (verão).</td></tr>
      <tr><td class="py-1.5 pr-2 text-bark/80 font-medium">Equatorial</td><td class="py-1.5 pr-2 text-bark/70">—</td><td class="py-1.5 text-bark/70">Temperaturas altas e constantes (24° a 26°C); chuvas abundantes o ano todo.</td></tr>
    </tbody>
  </table>
</div>`,
            },
            {
              heading: "2ª Parte — Climatologia do Brasil: Latitude",
              body: `Latitude: afastamento em relação à Linha do Equador (0°), para Norte ou Sul (até 90°).

Regras:
Maior latitude → Menor média térmica
Menor latitude → Maior média térmica
Maior latitude → Maior amplitude térmica
Menor latitude → Menor amplitude térmica

Exemplo (cidades no nível do mar):
Belém (PA), 1°S → 25,7°C
Salvador (BA), 13°S → 24,9°C
Santos (SP), 24°S → 22,0°C
Florianópolis (SC), 27°S → 20,6°C
Porto Alegre (RS), 30°S → 20,3°C
Santa Vitória do Palmar (RS), 33°S → 16,4°C

Outro exemplo:
Macapá, 0°02'N → 27,2°C
Teresina, 5°05'S → 27,6°C
Aracaju, 10°54'S → 25,9°C
Cuiabá, 15°35'S → 26,3°C
Campo Grande, 20°26'S → 21,5°C
Porto Alegre, 30°01'S → 20,2°C`,
              visual: `
<div class="overflow-x-auto">
  <table class="w-full text-xs border-collapse max-w-xs mx-auto">
    <thead><tr class="border-b-2 border-espresso/70"><th class="text-left py-1.5 pr-2 font-display text-bark">Cidade</th><th class="text-left py-1.5 pr-2 font-display text-bark">Latitude</th><th class="text-left py-1.5 font-display text-bark">Temp. média</th></tr></thead>
    <tbody>
      <tr class="border-b border-sand/60"><td class="py-1 pr-2 text-bark/80">Belém (PA)</td><td class="py-1 pr-2 text-bark/70">1° S</td><td class="py-1 text-bark/70">25,7°C</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1 pr-2 text-bark/80">Salvador (BA)</td><td class="py-1 pr-2 text-bark/70">13° S</td><td class="py-1 text-bark/70">24,9°C</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1 pr-2 text-bark/80">Santos (SP)</td><td class="py-1 pr-2 text-bark/70">24° S</td><td class="py-1 text-bark/70">22,0°C</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1 pr-2 text-bark/80">Florianópolis (SC)</td><td class="py-1 pr-2 text-bark/70">27° S</td><td class="py-1 text-bark/70">20,6°C</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1 pr-2 text-bark/80">Porto Alegre (RS)</td><td class="py-1 pr-2 text-bark/70">30° S</td><td class="py-1 text-bark/70">20,3°C</td></tr>
      <tr><td class="py-1 pr-2 text-bark/80">Sta. Vitória do Palmar</td><td class="py-1 pr-2 text-bark/70">33° S</td><td class="py-1 text-bark/70 font-semibold">16,4°C</td></tr>
    </tbody>
  </table>
</div>
<p class="text-[11px] text-bark/50 text-center mt-2">Quanto maior a latitude, menor a temperatura média</p>`,
            },
            {
              heading: "Altitude",
              body: `Altitude: altura em relação ao nível do mar.

Regra:
Maior altitude → Menor temperatura
Menor altitude → Maior temperatura

Exemplo (São Paulo):
Santos (SP), 0 m → 21,9°C
São Paulo (capital), 800 m → 17,7°C
Campos do Jordão (SP), 1.800 m → 13,6°C

Comparação latitude x altitude:
Belo Horizonte, 19°49'S, 858,3 m → 22,2°C
Vitória, 20°19'S, 3,3 m → 25,4°C
Curitiba, 25°25'S, 934,6 m → 17,5°C
Florianópolis, 27°35'S, 22,7 m → 20,8°C
Brasília, 15°46'S, 1.171,8 m → 21,4°C
Salvador, 12°58'S, 8,3 m → 25,7°C`,
              visual: `
<div class="overflow-x-auto">
  <table class="w-full text-xs border-collapse max-w-xs mx-auto">
    <thead><tr class="border-b-2 border-espresso/70"><th class="text-left py-1.5 pr-2 font-display text-bark">Cidade (SP)</th><th class="text-left py-1.5 pr-2 font-display text-bark">Altitude</th><th class="text-left py-1.5 font-display text-bark">Temp. média</th></tr></thead>
    <tbody>
      <tr class="border-b border-sand/60"><td class="py-1 pr-2 text-bark/80">Santos</td><td class="py-1 pr-2 text-bark/70">0 m</td><td class="py-1 text-bark/70 font-semibold">21,9°C</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1 pr-2 text-bark/80">São Paulo (capital)</td><td class="py-1 pr-2 text-bark/70">800 m</td><td class="py-1 text-bark/70">17,7°C</td></tr>
      <tr><td class="py-1 pr-2 text-bark/80">Campos do Jordão</td><td class="py-1 pr-2 text-bark/70">1.800 m</td><td class="py-1 text-bark/70">13,6°C</td></tr>
    </tbody>
  </table>
</div>
<p class="text-[11px] text-bark/50 text-center mt-2">Mesma latitude aproximada, altitudes diferentes — quanto mais alto, mais frio</p>`,
            },
            {
              heading: "Disposição do Relevo",
              body: `O relevo influencia a circulação de massas de ar, formando "corredores" e/ou "barreiras".

No Brasil, essas "barreiras" contribuem para a formação de chuvas orográficas (ou chuvas de relevo).`,
            },
            {
              heading: "Continentalidade e Maritimidade",
              body: `Influência do continente e do oceano sobre o clima.

Continentalidade: menor umidade / maior amplitude térmica.
Maritimidade: maior umidade / menor amplitude térmica.

Exemplo — temperaturas em algumas capitais:
Goiânia (continental) → máxima 36,2°C / mínima 8,9°C
Brasília (continental) → máxima 31,6°C / mínima 7,0°C
Campo Grande (continental) → máxima 35,3°C / mínima 4,1°C
São Luís (marítima) → máxima 32,8°C / mínima 20,6°C
Fortaleza (marítima) → máxima 32,2°C / mínima 21,0°C`,
              visual: `
<div class="overflow-x-auto">
  <table class="w-full text-xs border-collapse">
    <thead><tr class="border-b-2 border-espresso/70"><th class="text-left py-1.5 pr-2 font-display text-bark">Capital</th><th class="text-left py-1.5 pr-2 font-display text-bark">Tipo</th><th class="text-left py-1.5 pr-2 font-display text-bark">Máx.</th><th class="text-left py-1.5 font-display text-bark">Mín.</th></tr></thead>
    <tbody>
      <tr class="border-b border-sand/60"><td class="py-1 pr-2 text-bark/80">Goiânia</td><td class="py-1 pr-2 text-bark/70">Continental</td><td class="py-1 pr-2 text-bark/70">36,2°C</td><td class="py-1 text-bark/70">8,9°C</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1 pr-2 text-bark/80">Brasília</td><td class="py-1 pr-2 text-bark/70">Continental</td><td class="py-1 pr-2 text-bark/70">31,6°C</td><td class="py-1 text-bark/70">7,0°C</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1 pr-2 text-bark/80">Campo Grande</td><td class="py-1 pr-2 text-bark/70">Continental</td><td class="py-1 pr-2 text-bark/70">35,3°C</td><td class="py-1 text-bark/70">4,1°C</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1 pr-2 text-bark/80">São Luís</td><td class="py-1 pr-2 text-bark/70">Marítima</td><td class="py-1 pr-2 text-bark/70">32,8°C</td><td class="py-1 text-bark/70">20,6°C</td></tr>
      <tr><td class="py-1 pr-2 text-bark/80">Fortaleza</td><td class="py-1 pr-2 text-bark/70">Marítima</td><td class="py-1 pr-2 text-bark/70">32,2°C</td><td class="py-1 text-bark/70">21,0°C</td></tr>
    </tbody>
  </table>
</div>
<p class="text-[11px] text-bark/50 text-center mt-2">Nas capitais continentais, a diferença entre máxima e mínima é bem maior</p>`,
            },
            {
              heading: "Massas de ar (Brasil)",
              body: `São grandes porções da atmosfera que se deslocam, carregando as características de sua região de origem.

Podem ser:
Quentes: massas Tropical (T) e Equatorial (E)
Frias: massa Polar (P)
Secas: continentais (c)
Úmidas: oceânicas (atlântica, pacífica, índica)

Massas de ar atuantes no Brasil:
mEc — Massa Equatorial continental
mEa — Massa Equatorial atlântica
mTa — Massa Tropical atlântica
mTc — Massa Tropical continental
mPa — Massa Polar atlântica

No verão:
mEa (alísios de nordeste) atua no litoral norte/nordeste
mEc avança sobre a Amazônia e Centro-Oeste
mTa atua no litoral leste/sudeste/sul
mTc atua no Centro-Oeste/Sul

No inverno:
mPa avança mais para o norte, provocando: chuvas frontais, nebulosidade, ondas de frio, geadas, neve (no Sul), friagem (ao penetrar na Amazônia).
mTa provoca chuvas de inverno no litoral do Nordeste.`,
              visual: `
<div class="overflow-x-auto">
  <table class="w-full text-xs border-collapse">
    <thead><tr class="border-b-2 border-espresso/70"><th class="text-left py-1.5 pr-2 font-display text-bark">Sigla</th><th class="text-left py-1.5 font-display text-bark">Nome / atuação</th></tr></thead>
    <tbody>
      <tr class="border-b border-sand/60"><td class="py-1 pr-2 text-bark/80 font-mono">mEc</td><td class="py-1 text-bark/70">Equatorial continental — Amazônia/Centro-Oeste (verão)</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1 pr-2 text-bark/80 font-mono">mEa</td><td class="py-1 text-bark/70">Equatorial atlântica — litoral N/NE (verão)</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1 pr-2 text-bark/80 font-mono">mTa</td><td class="py-1 text-bark/70">Tropical atlântica — litoral L/SE/S (verão); chuvas de inverno no NE</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1 pr-2 text-bark/80 font-mono">mTc</td><td class="py-1 text-bark/70">Tropical continental — Centro-Oeste/Sul (verão)</td></tr>
      <tr><td class="py-1 pr-2 text-bark/80 font-mono">mPa</td><td class="py-1 text-bark/70">Polar atlântica — frio, geadas, neve e friagem (inverno)</td></tr>
    </tbody>
  </table>
</div>`,
            },
            {
              heading: "ZCIT — Zona de Convergência Intertropical",
              body: `Faixa de baixa pressão próxima ao Equador, onde convergem os ventos alísios de NE e SE.

Sua posição média varia sazonalmente: em julho desloca-se mais ao norte; em janeiro, mais ao sul.`,
              visual: `
<div class="flex flex-col gap-2 max-w-xs mx-auto text-xs text-bark">
  <div class="flex items-center gap-2">
    <span class="w-14 shrink-0">Julho</span>
    <div class="flex-1 h-2.5 bg-sand/40 rounded-full relative"><div class="absolute top-0 h-2.5 w-8 bg-ochre rounded-full" style="left:58%"></div></div>
    <span class="text-[10px] shrink-0 text-bark/60">mais ao norte</span>
  </div>
  <div class="flex items-center gap-2">
    <span class="w-14 shrink-0">Janeiro</span>
    <div class="flex-1 h-2.5 bg-sand/40 rounded-full relative"><div class="absolute top-0 h-2.5 w-8 bg-ochre rounded-full" style="left:28%"></div></div>
    <span class="text-[10px] shrink-0 text-bark/60">mais ao sul</span>
  </div>
</div>`,
            },
            {
              heading: "ZCAS — Zona de Convergência do Atlântico Sul",
              body: `Conexão entre uma frente fria (no litoral da Região Sudeste) e áreas de instabilidade tropical no continente (Amazônia/Centro-Oeste).

Provoca uma faixa alongada de nebulosidade e chuvas que liga o Centro-Oeste/Amazônia ao Sudeste.`,
            },
            {
              heading: '"Rios Voadores"',
              body: `1. Na faixa equatorial do oceano Atlântico ocorre intensa evaporação — o vento se carrega de umidade.
2. A intensa evapotranspiração e condensação sobre a Amazônia produzem a sucção dos alísios, bombeando os ventos para o interior do continente, gerando chuvas e fazendo mover os "rios voadores".
3. Essa umidade avança em sentido oeste até atingir a Cordilheira dos Andes, sofrendo recirculação ao passar sobre a floresta.
4. Ao encontrar os Andes, parte da umidade se precipita novamente, formando as cabeceiras dos rios da Amazônia.
5. A umidade que atinge a região andina retorna em parte ao Brasil por meio dos rios voadores, podendo precipitar em outras regiões.
6. Na fase final, os rios voadores ainda podem alimentar os reservatórios de água do Sudeste e da Região Sul, dispersando-se pelos países fronteiriços, como Paraguai e Argentina.`,
              visual: `
<div class="flex flex-col items-center gap-1 max-w-xs mx-auto text-center">
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-xs text-bark font-medium">1. Evaporação no Atlântico equatorial</div>
  <span class="text-ochre text-xs">↓</span>
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-xs text-bark font-medium">2. Sucção dos alísios sobre a Amazônia</div>
  <span class="text-ochre text-xs">↓</span>
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-xs text-bark font-medium">3. Umidade avança a oeste, recirculando</div>
  <span class="text-ochre text-xs">↓</span>
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-xs text-bark font-medium">4. Encontra os Andes — forma cabeceiras dos rios</div>
  <span class="text-ochre text-xs">↓</span>
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-xs text-bark font-medium">5. Parte retorna ao Brasil como "rio voador"</div>
  <span class="text-ochre text-xs">↓</span>
  <div class="w-full rounded-lg bg-espresso text-cream px-3 py-2 text-xs font-medium">6. Alimenta reservatórios do Sudeste/Sul e países vizinhos</div>
</div>`,
            },
            {
              heading: "Tipos climáticos do Brasil",
              body: `Equatorial
Equatorial semiúmido
Tropical típico ou semiúmido
Tropical semiárido
Tropical litorâneo ou úmido
Tropical de altitude
Subtropical`,
              visual: `
<div class="overflow-x-auto">
  <table class="w-full text-xs border-collapse">
    <thead><tr class="border-b-2 border-espresso/70"><th class="text-left py-1.5 pr-2 font-display text-bark">Clima</th><th class="text-left py-1.5 pr-2 font-display text-bark">Cidade</th><th class="text-left py-1.5 font-display text-bark">Características</th></tr></thead>
    <tbody>
      <tr class="border-b border-sand/60"><td class="py-1 pr-2 text-bark/80 font-medium">Equatorial semiúmido</td><td class="py-1 pr-2 text-bark/70">Boa Vista (RR)</td><td class="py-1 text-bark/70">Chuvas concentradas de dez a maio; estiagem set–nov.</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1 pr-2 text-bark/80 font-medium">Equatorial úmido</td><td class="py-1 pr-2 text-bark/70">Manaus (AM)</td><td class="py-1 text-bark/70">Chuvas elevadas e bem distribuídas, pico fev-mar-mai.</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1 pr-2 text-bark/80 font-medium">Tropical</td><td class="py-1 pr-2 text-bark/70">Cuiabá (MT)</td><td class="py-1 text-bark/70">Seca (mai–set) e chuvosa (out–abr) bem definidas.</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1 pr-2 text-bark/80 font-medium">Tropical de altitude</td><td class="py-1 pr-2 text-bark/70">Ouro Preto (MG)</td><td class="py-1 text-bark/70">Mais ameno pela altitude; chuvas no verão, seca no inverno.</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1 pr-2 text-bark/80 font-medium">Subtropical</td><td class="py-1 pr-2 text-bark/70">Blumenau (SC)</td><td class="py-1 text-bark/70">Chuvas bem distribuídas o ano todo.</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1 pr-2 text-bark/80 font-medium">Semiárido</td><td class="py-1 pr-2 text-bark/70">Juazeiro (BA)</td><td class="py-1 text-bark/70">Pluviosidade muito baixa e irregular.</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1 pr-2 text-bark/80 font-medium">Tropical úmido (NE)</td><td class="py-1 pr-2 text-bark/70">Salvador</td><td class="py-1 text-bark/70">Inverno com mais chuva (influência da mTa).</td></tr>
      <tr><td class="py-1 pr-2 text-bark/80 font-medium">Tropical úmido (SE)</td><td class="py-1 pr-2 text-bark/70">Ubatuba</td><td class="py-1 text-bark/70">Verão com mais chuva (regime tropical padrão).</td></tr>
    </tbody>
  </table>
</div>`,
            },
          ],
          quiz: [
            { q: "O que é 'tempo', segundo o conteúdo?", options: ["Estado momentâneo da atmosfera", "Sucessão habitual dos estados de tempo", "Média histórica de temperaturas", "Um fenômeno oceânico"], correct: 0 },
            { q: "O que é 'clima'?", options: ["A sucessão habitual dos vários estados de tempo", "O estado da atmosfera em um único dia", "A quantidade de chuva em um mês", "A temperatura mínima de uma região"], correct: 0 },
            { q: "Se uma questão descrever uma condição 'agora' ou em um momento específico, ela está tratando de:", options: ["Tempo", "Clima", "Latitude", "Pressão"], correct: 0 },
            { q: "Se a questão descrever o comportamento habitual de uma região, ela está tratando de:", options: ["Clima", "Tempo", "Umidade", "Vento"], correct: 0 },
            { q: "Quais são os principais elementos do clima citados no material?", options: ["Temperatura, umidade, precipitação e pressão atmosférica", "Latitude, altitude, relevo e vegetação", "Massas de ar, correntes marítimas e vegetação", "El Niño e La Niña"], correct: 0 },
            { q: "Como se calcula a amplitude térmica?", options: ["Máxima menos mínima", "Máxima mais mínima", "Máxima dividida pela mínima", "Mínima menos máxima"], correct: 0 },
            { q: "Se a máxima do dia foi 30°C e a mínima 10°C, qual é a amplitude térmica?", options: ["20°C", "40°C", "10°C", "30°C"], correct: 0 },
            { q: "O que é uma isoterma?", options: ["Linha que une pontos de mesma temperatura", "Linha que une pontos de mesma umidade", "Linha que une pontos de mesma pluviosidade", "Linha que une pontos de mesma pressão"], correct: 0 },
            { q: "O que é umidade relativa?", options: ["A quantidade de vapor de água na atmosfera, expressa em %", "A quantidade de chuva acumulada em um mês", "A pressão exercida pelo ar", "A diferença entre temperatura máxima e mínima"], correct: 0 },
            { q: "Se a umidade relativa está próxima de 100%, isso significa que:", options: ["A atmosfera está próxima da saturação, podendo chover", "A atmosfera está seca", "A pressão está muito alta", "A temperatura está no seu ponto máximo"], correct: 0 },
            { q: "O que é isoígra?", options: ["Pontos de igual umidade", "Pontos de igual temperatura", "Pontos de igual pluviosidade", "Pontos de igual pressão"], correct: 0 },
            { q: "O que é isoieta?", options: ["Pontos de igual pluviosidade", "Pontos de igual umidade", "Pontos de igual temperatura", "Pontos de igual altitude"], correct: 0 },
            { q: "O orvalho se forma por:", options: ["Condensação do vapor de água na superfície", "Congelamento do vapor em nuvens altas", "Sublimação da neve", "Evaporação da água do solo"], correct: 0 },
            { q: "A geada se forma quando:", options: ["Ocorre o congelamento do orvalho em noite fria e sem nuvens", "A temperatura sobe rapidamente pela manhã", "Há muita nebulosidade durante a noite", "O vento sopra forte durante o dia"], correct: 0 },
            { q: "A neve se forma em condições de:", options: ["Temperatura baixa, próxima de 0°C, e umidade elevada", "Temperatura alta e baixa umidade", "Pressão atmosférica muito baixa apenas", "Vento forte sem variação de temperatura"], correct: 0 },
            { q: "O granizo é formado por:", options: ["Blocos de gelo em nuvens altas", "Vapor de água condensado na superfície", "Gotas de chuva congeladas no solo", "Neve derretida"], correct: 0 },
            { q: "Se uma questão mencionar 'calor intenso + ar subindo + chuva forte e rápida', o tipo de chuva é:", options: ["Convectiva", "Frontal", "Orográfica", "Nenhuma das anteriores"], correct: 0 },
            { q: "A chuva convectiva é caracterizada por:", options: ["Curta duração, alta intensidade e pequenas áreas", "Longa duração e grande área", "Ocorrer apenas em regiões polares", "Baixa intensidade constante"], correct: 0 },
            { q: "A chuva frontal ocorre por causa:", options: ["Do encontro de massas de ar com características diferentes", "Do relevo forçando o ar a subir", "Do calor intenso fazendo o ar subir rapidamente", "Da proximidade com o oceano apenas"], correct: 0 },
            { q: "Se uma questão mencionar 'montanha + serra + relevo + ar úmido subindo', o tipo de chuva é:", options: ["Orográfica", "Convectiva", "Frontal", "Nenhuma das anteriores"], correct: 0 },
            { q: "Na chuva orográfica, o lado que recebe o ar úmido é chamado de:", options: ["Barlavento", "Sotavento", "Isoieta", "Isoterma"], correct: 0 },
            { q: "Na chuva orográfica, o lado oposto à chegada do ar é chamado de:", options: ["Sotavento", "Barlavento", "Isoígra", "Isoterma"], correct: 0 },
            { q: "Qual é a relação entre temperatura e pressão atmosférica?", options: ["Temperatura alta → pressão baixa", "Temperatura alta → pressão alta", "Não existe relação entre elas", "Temperatura baixa → pressão baixa"], correct: 0 },
            { q: "Qual é a relação entre altitude e pressão atmosférica?", options: ["Altitude alta → pressão baixa", "Altitude alta → pressão alta", "Não existe relação entre elas", "Altitude baixa → pressão baixa"], correct: 0 },
            { q: "Segundo a regra apresentada, os ventos sopram:", options: ["Da alta pressão para a baixa pressão", "Da baixa pressão para a alta pressão", "Sempre do oceano para o continente", "Sempre de norte para sul"], correct: 0 },
            { q: "O que os 'elementos do clima' mostram, segundo o material?", options: ["Como está o clima", "Por que o clima é daquele jeito", "A localização exata de uma região", "A previsão do tempo para amanhã"], correct: 0 },
            { q: "O que os 'fatores climáticos' ajudam a explicar?", options: ["Por que o clima é daquele jeito", "Como está o clima no momento", "Apenas a quantidade de chuva", "Apenas a temperatura do dia"], correct: 0 },
            { q: "Qual é a regra principal sobre latitude e temperatura?", options: ["Maior latitude → menor temperatura", "Maior latitude → maior temperatura", "A latitude não influencia a temperatura", "Menor latitude → menor temperatura"], correct: 0 },
            { q: "Qual é a relação entre latitude e amplitude térmica?", options: ["Maior latitude → maior amplitude térmica", "Maior latitude → menor amplitude térmica", "Não há relação", "Latitude só influencia a pressão"], correct: 0 },
            { q: "Qual é a relação entre altitude e temperatura?", options: ["Altitude alta → temperatura baixa", "Altitude alta → temperatura alta", "Não há relação entre elas", "Altitude baixa → temperatura baixa"], correct: 0 },
            { q: "O relevo pode funcionar, segundo o material, como:", options: ["Barreira ou corredor para as massas de ar", "Apenas como fonte de umidade", "Apenas como fonte de calor", "Elemento que não influencia o clima"], correct: 0 },
            { q: "A continentalidade está associada a:", options: ["Menor umidade e maior amplitude térmica", "Maior umidade e menor amplitude térmica", "Nenhuma variação de temperatura", "Apenas à proximidade do oceano"], correct: 0 },
            { q: "A maritimidade está associada a:", options: ["Maior umidade e menor amplitude térmica", "Menor umidade e maior amplitude térmica", "Nenhuma variação de temperatura", "Apenas ao relevo montanhoso"], correct: 0 },
            { q: "Uma corrente marítima fria tende a deixar o litoral:", options: ["Mais seco, favorecendo desertos", "Mais quente e úmido", "Sem alteração climática", "Com maior amplitude térmica apenas"], correct: 0 },
            { q: "A Corrente de Humboldt, citada no material, está relacionada à formação de qual deserto?", options: ["Deserto do Atacama", "Deserto do Saara", "Deserto de Gobi", "Deserto da Patagônia"], correct: 0 },
            { q: "Qual tipo climático mundial é caracterizado por temperaturas quase sempre negativas e pouquíssima precipitação?", options: ["Polar/Subpolar", "Equatorial", "Tropical", "Mediterrâneo"], correct: 0 },
            { q: "No Hemisfério Sul, os meses de verão (temperaturas mais altas) geralmente correspondem a:", options: ["Dezembro a março", "Junho a agosto", "Setembro a novembro", "Março a maio"], correct: 0 },
            { q: "No Hemisfério Norte, os meses de verão correspondem a:", options: ["Junho a agosto", "Dezembro a março", "Março a maio", "Setembro a novembro"], correct: 0 },
            { q: "O clima Mediterrâneo é caracterizado por:", options: ["Verões quentes e secos, invernos amenos e chuvosos", "Chuvas o ano todo sem estação seca", "Temperaturas baixas o ano todo", "Chuvas torrenciais concentradas em poucos meses"], correct: 0 },
            { q: "O clima Tropical de Monções é caracterizado por:", options: ["Chuvas torrenciais concentradas em poucos meses (monção de verão)", "Chuvas bem distribuídas o ano todo", "Baixíssima pluviosidade constante", "Temperaturas baixas com pouca chuva"], correct: 0 },
            { q: "O clima Equatorial se caracteriza por:", options: ["Temperaturas altas e constantes, com chuvas abundantes e bem distribuídas", "Duas estações bem definidas, seca e chuvosa", "Verões secos e invernos chuvosos", "Amplitude térmica muito alta"], correct: 0 },
            { q: "Segundo a regra da latitude, cidades em maior latitude tendem a apresentar:", options: ["Menor média térmica e maior amplitude térmica", "Maior média térmica e menor amplitude térmica", "Média térmica e amplitude iguais em qualquer latitude", "Apenas maior pluviosidade"], correct: 0 },
            { q: "Comparando Belém (1°S) e Santa Vitória do Palmar (33°S), qual tende a ter menor temperatura média?", options: ["Santa Vitória do Palmar, por estar em maior latitude", "Belém, por estar em maior latitude", "Ambas têm a mesma temperatura média", "Depende apenas da altitude"], correct: 0 },
            { q: "Segundo a regra da altitude, quanto maior a altitude de uma cidade:", options: ["Menor tende a ser a temperatura", "Maior tende a ser a temperatura", "Maior tende a ser a pluviosidade apenas", "Não há relação com a temperatura"], correct: 0 },
            { q: "Comparando Santos (0 m) e Campos do Jordão (1.800 m), ambas em São Paulo, qual tende a ser mais fria?", options: ["Campos do Jordão, por estar em maior altitude", "Santos, por estar no litoral", "Ambas têm a mesma temperatura", "Depende apenas da latitude"], correct: 0 },
            { q: "A disposição do relevo influencia o clima principalmente por:", options: ["Formar corredores e barreiras que afetam a circulação das massas de ar", "Determinar diretamente a latitude do local", "Não ter nenhuma influência climática", "Definir apenas a umidade do solo"], correct: 0 },
            { q: "As barreiras de relevo no Brasil contribuem para a formação de:", options: ["Chuvas orográficas", "Chuvas frontais apenas", "Chuvas convectivas apenas", "Neve permanente"], correct: 0 },
            { q: "A continentalidade está associada a:", options: ["Menor umidade e maior amplitude térmica", "Maior umidade e menor amplitude térmica", "Nenhuma variação de temperatura", "Apenas à proximidade do oceano"], correct: 0 },
            { q: "A maritimidade está associada a:", options: ["Maior umidade e menor amplitude térmica", "Menor umidade e maior amplitude térmica", "Nenhuma variação de temperatura", "Apenas ao relevo montanhoso"], correct: 0 },
            { q: "Comparando Goiânia (continental) e São Luís (marítima), qual tende a ter maior amplitude térmica?", options: ["Goiânia", "São Luís", "Ambas têm a mesma amplitude", "Depende apenas da altitude"], correct: 0 },
            { q: "As massas de ar quentes, segundo o conteúdo, são classificadas como:", options: ["Tropical (T) e Equatorial (E)", "Polar (P) apenas", "Continental (c) apenas", "Oceânica apenas"], correct: 0 },
            { q: "A massa de ar fria, segundo o conteúdo, é classificada como:", options: ["Polar (P)", "Tropical (T)", "Equatorial (E)", "Continental (c)"], correct: 0 },
            { q: "Qual é a massa de ar que avança sobre a Amazônia e o Centro-Oeste no verão?", options: ["mEc (Equatorial continental)", "mPa (Polar atlântica)", "mTa (Tropical atlântica)", "mTc (Tropical continental)"], correct: 0 },
            { q: "No inverno, o avanço da mPa (massa Polar atlântica) para o norte provoca:", options: ["Chuvas frontais, ondas de frio, geadas e, no Sul, neve", "Chuvas torrenciais de verão", "Seca extrema sem nenhuma chuva", "Aumento da temperatura em todo o país"], correct: 0 },
            { q: "Ao penetrar na Amazônia, o avanço da mPa (massa polar) no inverno provoca o fenômeno conhecido como:", options: ["Friagem", "Veranico", "Monção", "El Niño"], correct: 0 },
            { q: "No inverno, a mTa (massa Tropical atlântica) provoca no litoral do Nordeste:", options: ["Chuvas de inverno", "Seca total", "Neve", "Geadas constantes"], correct: 0 },
            { q: "O que é a ZCIT (Zona de Convergência Intertropical)?", options: ["Uma faixa de baixa pressão próxima ao Equador, onde convergem os alísios de NE e SE", "Uma corrente marítima fria do Pacífico", "Uma cordilheira que separa o Brasil da Argentina", "Um tipo de massa de ar seca"], correct: 0 },
            { q: "Em que mês a ZCIT tende a se deslocar mais para o norte?", options: ["Julho", "Janeiro", "Abril", "Outubro"], correct: 0 },
            { q: "Em que mês a ZCIT tende a se deslocar mais para o sul?", options: ["Janeiro", "Julho", "Março", "Setembro"], correct: 0 },
            { q: "O que é a ZCAS (Zona de Convergência do Atlântico Sul)?", options: ["A conexão entre uma frente fria no Sudeste e áreas de instabilidade tropical na Amazônia/Centro-Oeste", "Uma zona de alta pressão permanente no Sul do Brasil", "O mesmo fenômeno que a ZCIT", "Uma corrente marítima quente do Atlântico Norte"], correct: 0 },
            { q: "Onde ocorre a intensa evaporação que dá origem aos 'rios voadores'?", options: ["Na faixa equatorial do oceano Atlântico", "No deserto do Atacama", "No Oceano Pacífico Sul", "Na Cordilheira dos Andes"], correct: 0 },
            { q: "O que 'bombeia' a umidade dos rios voadores para o interior do continente?", options: ["A sucção dos alísios, causada pela evapotranspiração e condensação sobre a Amazônia", "A força da maré atlântica", "O relevo do Nordeste", "A ZCAS"], correct: 0 },
            { q: "Ao encontrar a Cordilheira dos Andes, o que acontece com a umidade dos rios voadores?", options: ["Parte se precipita, formando as cabeceiras dos rios da Amazônia", "Toda a umidade desaparece instantaneamente", "A umidade se transforma em neve permanente", "Nada acontece, a umidade segue direto para o Pacífico"], correct: 0 },
            { q: "Na fase final do fenômeno dos rios voadores, parte da umidade pode:", options: ["Alimentar reservatórios de água do Sudeste e Sul do Brasil", "Retornar apenas para a Amazônia", "Desaparecer completamente sem efeito", "Formar a ZCIT"], correct: 0 },
            { q: "Qual tipo climático brasileiro é exemplificado por Boa Vista (RR), com chuvas concentradas de dezembro a maio?", options: ["Equatorial semiúmido", "Tropical semiárido", "Subtropical", "Tropical de altitude"], correct: 0 },
            { q: "Qual cidade é citada como exemplo de clima Tropical de altitude, com temperaturas mais amenas devido à altitude?", options: ["Ouro Preto (MG)", "Manaus (AM)", "Cuiabá (MT)", "Blumenau (SC)"], correct: 0 },
            { q: "Qual cidade é citada como exemplo de clima Semiárido, com pluviosidade muito baixa e irregular?", options: ["Juazeiro (BA)", "Boa Vista (RR)", "Ubatuba (SP)", "Blumenau (SC)"], correct: 0 },
            { q: "Por que Salvador (Nordeste) tem mais chuva no inverno, segundo o conteúdo?", options: ["Pela influência da mTa (massa Tropical atlântica)", "Pela influência da ZCIT no verão", "Pela altitude elevada", "Pela proximidade com a Amazônia"], correct: 0 },
          ],
          extraQuiz: [
            { q: "O desmatamento de uma região tende a causar:", options: ["Menor umidade, menor chuva e maior temperatura", "Maior umidade e mais chuva", "Menor temperatura apenas", "Aumento da pressão atmosférica apenas"], correct: 0 },
            { q: "Uma massa de ar identificada pela sigla 'mTa' é:", options: ["Massa Tropical Atlântica", "Massa Temperada Ártica", "Massa Tropical Antártica", "Massa Templada Amazônica"], correct: 0 },
            { q: "Segundo a classificação por temperatura, quais massas de ar são consideradas quentes?", options: ["Tropical (T) e Equatorial (E)", "Polar (P) e Tropical (T)", "Apenas Polar (P)", "Apenas Equatorial (E)"], correct: 0 },
            { q: "Quanto à umidade, as massas de ar secas são chamadas de:", options: ["Continentais (c)", "Oceânicas", "Equatoriais", "Polares"], correct: 0 },
            { q: "O El Niño e La Niña são fenômenos relacionados a:", options: ["Condições do Oceano Pacífico que interferem no clima", "Condições do Oceano Atlântico apenas", "Correntes de ar na Antártida", "Mudanças na órbita da Terra"], correct: 0 },
            { q: "Duas cidades têm a mesma latitude, mas uma está em maior altitude que a outra. Qual delas tende a ser mais fria?", options: ["A cidade de maior altitude", "A cidade de menor altitude", "Ambas terão a mesma temperatura", "Não é possível saber sem outros dados"], correct: 0 },
            { q: "Uma cidade litorânea, comparada a uma cidade do interior na mesma latitude, tende a apresentar:", options: ["Menor amplitude térmica", "Maior amplitude térmica", "A mesma amplitude térmica", "Menor umidade"], correct: 0 },
            { q: "Se uma questão comparar uma cidade a 10°S com outra a 50°S, qual tende a ter menor temperatura média?", options: ["A cidade a 50°S", "A cidade a 10°S", "As duas terão a mesma temperatura", "Depende apenas da altitude"], correct: 0 },
            { q: "Uma corrente marítima quente tende a deixar o litoral:", options: ["Mais quente e mais úmido", "Mais seco e frio", "Sem nenhuma alteração", "Com menor umidade apenas"], correct: 0 },
            { q: "Ao identificar em uma questão os termos 'frente', 'massa de ar quente' e 'massa de ar fria' juntos, o tipo de chuva a ser considerado é:", options: ["Frontal", "Convectiva", "Orográfica", "Nenhuma das anteriores"], correct: 0 },
          ],
        },
      ],
    },
);
