window.DB_SUBJECTS = window.DB_SUBJECTS || [];
window.DB_SUBJECTS.push(
    {
      id: "historia",
      name: "História",
      emoji: "🏛️",
      contents: [
        {
          id: "grandes-navegacoes",
          title: "As Grandes Navegações",
          sections: [
            {
              heading: "1. Rota Portuguesa",
              body: `Portugal foi pioneiro nas Grandes Navegações. Seu objetivo principal era encontrar novas rotas comerciais, especialmente uma rota marítima para chegar às regiões produtoras de especiarias, evitando as rotas controladas por outros povos.

Périplo Africano (Príncipe Africano):
A expansão portuguesa começou pela exploração da costa da África. Portugal passou a avançar gradualmente pelo litoral africano, buscando novas terras, riquezas e principalmente uma passagem marítima para chegar ao Oriente.

Navegação de cabotagem:
Consiste em navegar mantendo-se próximo à costa. Isso era importante porque os navegadores ainda não possuíam conhecimento suficiente para realizar longas viagens em mar aberto com segurança. Assim, exploravam a costa aos poucos, reconhecendo novos territórios e criando mapas.`,
            },
            {
              heading: "Conquistas e explorações portuguesas",
              body: `Ceuta (1415): Portugal conquistou Ceuta, no norte da África. Esse acontecimento é considerado um marco inicial da expansão marítima portuguesa.

Pedro (1435): registro da expedição presente nas anotações.

Cabo da Boa Esperança (1488): Bartolomeu Dias conseguiu contornar o extremo sul da África. O local ficou conhecido como Cabo da Boa Esperança. A importância dessa viagem foi enorme porque demonstrou que era possível contornar a África e continuar pelo Oceano Índico em direção à Ásia.

Calicute / Índia — Vasco da Gama (1498): Vasco da Gama realizou a viagem que permitiu aos portugueses chegar à Índia (Calicute) por uma rota marítima, contornando a África. Isso abriu uma importante rota comercial portuguesa para o Oriente.

Brasil (1500): A frota portuguesa comandada por Pedro Álvares Cabral chegou ao território que posteriormente seria chamado de Brasil.

Sequência para entender a rota portuguesa:
África → contorno da África → Oceano Índico → Índia → Brasil

A ideia principal é entender que Portugal avançou progressivamente pela costa africana até conseguir encontrar uma passagem para o Oriente.`,
              visual: `
<div class="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm">
  <div class="rounded-lg bg-cream border border-sand px-3 py-2 text-bark font-medium text-center">Ceuta<br/><span class="text-[10px] text-bark/60">1415</span></div>
  <span class="text-ochre">→</span>
  <div class="rounded-lg bg-cream border border-sand px-3 py-2 text-bark font-medium text-center">Cabo da Boa Esperança<br/><span class="text-[10px] text-bark/60">1488</span></div>
  <span class="text-ochre">→</span>
  <div class="rounded-lg bg-cream border border-sand px-3 py-2 text-bark font-medium text-center">Índia (Calicute)<br/><span class="text-[10px] text-bark/60">1498</span></div>
  <span class="text-ochre">→</span>
  <div class="rounded-lg bg-espresso text-cream px-3 py-2 font-medium text-center">Brasil<br/><span class="text-[10px] opacity-80">1500</span></div>
</div>`,
            },
            {
              heading: "2. Rota Espanhola",
              body: `Enquanto Portugal buscava chegar à Ásia contornando a África, a Espanha procurou uma alternativa: navegar para o oeste, atravessando o Oceano Atlântico.

Cristóvão Colombo — navegação:
Cristóvão Colombo acreditava que poderia chegar à Ásia navegando para o oeste. Em 1492, ele realizou sua viagem financiada pela monarquia espanhola. Colombo chegou às ilhas do Caribe, mas acreditou inicialmente que havia chegado às proximidades da Ásia.

Circum-navegação
Antilhas (Caribe)
Rio Amazonas (Américo Vespúcio)
Batismo da "América"
Oceano Pacífico
Circum-navegação completa (Fernão de Magalhães e Sebastião El Cano)`,
            },
            {
              heading: "Conquistas espanholas",
              body: `Antilhas (1492): As Antilhas são um conjunto de ilhas localizado na região do Caribe. A chegada de Colombo às Antilhas marcou o início da expansão espanhola no continente americano.

Batismo da "América" (1507): O nome América foi associado ao continente em homenagem a Américo Vespúcio. As viagens e relatos de Vespúcio contribuíram para a compreensão de que aquelas terras não eram simplesmente uma parte da Ásia, mas formavam um Novo Mundo.

Oceano Pacífico (1513): Em 1513, o espanhol Vasco Núñez de Balboa atravessou o istmo do Panamá e avistou um grande oceano, que posteriormente ficou conhecido como Oceano Pacífico. Essa descoberta mostrou que havia outro grande oceano separando as terras americanas da Ásia.

Circum-navegação (1519–1522): A expedição iniciada por Fernão de Magalhães tinha como objetivo encontrar uma passagem pelo continente americano para chegar às ilhas das especiarias navegando para o oeste. A expedição começou em 1519. Fernão de Magalhães morreu durante a viagem, mas sua expedição continuou sob o comando de Juan Sebastián Elcano. Em 1522, a expedição retornou à Espanha, completando a primeira circum-navegação do planeta.

O que significa circum-navegação?
Circum-navegar = dar uma volta completa ao redor da Terra por via marítima. Essa viagem foi muito importante porque comprovou, na prática, a dimensão do planeta e a existência de uma enorme extensão de oceanos.`,
              visual: `
<div class="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm">
  <div class="rounded-lg bg-cream border border-sand px-3 py-2 text-bark font-medium text-center">Antilhas<br/><span class="text-[10px] text-bark/60">1492</span></div>
  <span class="text-ochre">→</span>
  <div class="rounded-lg bg-cream border border-sand px-3 py-2 text-bark font-medium text-center">"América"<br/><span class="text-[10px] text-bark/60">1507 · Vespúcio</span></div>
  <span class="text-ochre">→</span>
  <div class="rounded-lg bg-cream border border-sand px-3 py-2 text-bark font-medium text-center">Oceano Pacífico<br/><span class="text-[10px] text-bark/60">1513 · Balboa</span></div>
  <span class="text-ochre">→</span>
  <div class="rounded-lg bg-espresso text-cream px-3 py-2 font-medium text-center">Circum-navegação<br/><span class="text-[10px] opacity-80">1519–1522</span></div>
</div>`,
            },
            {
              heading: "3. Tratado de Tordesilhas",
              body: `Com Portugal e Espanha realizando suas próprias expedições e reivindicando novas terras, surgiu a necessidade de estabelecer uma divisão entre as áreas de exploração dos dois países. Por isso, foi assinado o Tratado de Tordesilhas, em 1494.

O tratado estabeleceu uma linha imaginária para dividir as áreas de exploração entre Portugal e Espanha.

Divisão territorial:
Terras a leste da linha → Portugal
Terras a oeste da linha → Espanha

Essa divisão ajuda a explicar por que Portugal ficou com uma parte do território americano que posteriormente formaria o Brasil, enquanto grande parte da América ficou sob domínio espanhol.`,
              visual: `
<div class="flex rounded-lg overflow-hidden border border-sand max-w-xs mx-auto text-center text-xs font-semibold">
  <div class="flex-1 bg-cream text-bark py-4">Espanha<br/><span class="font-normal text-[10px]">terras a oeste</span></div>
  <div class="w-1 bg-ochre"></div>
  <div class="flex-1 bg-espresso text-cream py-4">Portugal<br/><span class="font-normal text-[10px] opacity-80">terras a leste</span></div>
</div>
<p class="text-[10.5px] text-bark/50 text-center mt-2">Tratado de Tordesilhas — 1494</p>`,
            },
            {
              heading: "Linha do tempo — para enxergar a matéria",
              body: `PORTUGAL:
1415 → Ceuta
Navegação de cabotagem pela costa africana
1435 → Pedro — registro da anotação
1488 → Bartolomeu Dias / Cabo da Boa Esperança
1498 → Vasco da Gama / chegada à Índia
1500 → Brasil / Pedro Álvares Cabral

ESPANHA:
1492 → Colombo / chegada às Antilhas
1494 → Tratado de Tordesilhas
1507 → "América" / Américo Vespúcio
1513 → Vasco Núñez de Balboa / Oceano Pacífico
1519–1522 → Fernão de Magalhães e Juan Sebastián Elcano / circum-navegação`,
              visual: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
  <div>
    <p class="text-xs font-semibold text-espresso mb-2 text-center">🇵🇹 Portugal</p>
    <div class="flex flex-col items-center gap-1 text-center">
      <div class="w-full rounded-lg bg-cream border border-sand px-2 py-1.5 text-xs text-bark font-medium">1415 · Ceuta</div>
      <span class="text-ochre text-xs">↓</span>
      <div class="w-full rounded-lg bg-cream border border-sand px-2 py-1.5 text-xs text-bark font-medium">Cabotagem pela costa africana</div>
      <span class="text-ochre text-xs">↓</span>
      <div class="w-full rounded-lg bg-cream border border-sand px-2 py-1.5 text-xs text-bark font-medium">1435 · Pedro</div>
      <span class="text-ochre text-xs">↓</span>
      <div class="w-full rounded-lg bg-cream border border-sand px-2 py-1.5 text-xs text-bark font-medium">1488 · B. Dias / Cabo da Boa Esperança</div>
      <span class="text-ochre text-xs">↓</span>
      <div class="w-full rounded-lg bg-cream border border-sand px-2 py-1.5 text-xs text-bark font-medium">1498 · Vasco da Gama / Índia</div>
      <span class="text-ochre text-xs">↓</span>
      <div class="w-full rounded-lg bg-beige border border-sand px-2 py-1.5 text-xs text-bark font-semibold">1500 · Brasil / Cabral</div>
    </div>
  </div>
  <div>
    <p class="text-xs font-semibold text-espresso mb-2 text-center">🇪🇸 Espanha</p>
    <div class="flex flex-col items-center gap-1 text-center">
      <div class="w-full rounded-lg bg-cream border border-sand px-2 py-1.5 text-xs text-bark font-medium">1492 · Colombo / Antilhas</div>
      <span class="text-ochre text-xs">↓</span>
      <div class="w-full rounded-lg bg-cream border border-sand px-2 py-1.5 text-xs text-bark font-medium">1494 · Tratado de Tordesilhas</div>
      <span class="text-ochre text-xs">↓</span>
      <div class="w-full rounded-lg bg-cream border border-sand px-2 py-1.5 text-xs text-bark font-medium">1507 · "América" / Vespúcio</div>
      <span class="text-ochre text-xs">↓</span>
      <div class="w-full rounded-lg bg-cream border border-sand px-2 py-1.5 text-xs text-bark font-medium">1513 · Balboa / Oceano Pacífico</div>
      <span class="text-ochre text-xs">↓</span>
      <div class="w-full rounded-lg bg-beige border border-sand px-2 py-1.5 text-xs text-bark font-semibold">1519–1522 · Magalhães / Elcano</div>
    </div>
  </div>
</div>`,
            },
            {
              heading: "8. O que você precisa entender",
              body: `Não pense nessa matéria como uma lista de datas. Pense em duas estratégias diferentes para chegar ao Oriente:

🇵🇹 PORTUGAL
Portugal escolheu o caminho de contornar a África.
Portugal → África → Cabo da Boa Esperança → Oceano Índico → Índia

🇪🇸 ESPANHA
A Espanha tentou chegar ao Oriente navegando para o oeste, pelo Atlântico.
Espanha → Oceano Atlântico → América → tentativa de chegar à Ásia

O resultado foi a chegada dos europeus ao continente americano e o início de uma nova fase de exploração, conquista e colonização.`,
            },
            {
              heading: "9. Ouro da matéria",
              body: `Portugal = caminho pelo LESTE, contornando a África.
Espanha = caminho pelo OESTE, atravessando o Atlântico.
1492 = Colombo chega às Antilhas.
1494 = Tratado de Tordesilhas divide áreas entre Portugal e Espanha.
1488 = Bartolomeu Dias contorna o extremo sul da África.
1498 = Vasco da Gama chega à Índia.
1500 = chegada portuguesa ao Brasil.
1513 = Balboa avista o Oceano Pacífico.
1519–1522 = primeira circum-navegação da Terra.

A lógica geral é:
Busca por novas rotas comerciais → Grandes Navegações → Portugal e Espanha exploram rotas diferentes → chegada dos europeus à América → disputa pelas novas terras → Tratado de Tordesilhas.`,
            },
          ],
          quiz: [
            { q: "Como era chamada a navegação portuguesa que seguia próxima à costa?", options: ["Navegação de cabotagem", "Circun-navegação", "Navegação estelar", "Navegação por satélite"], correct: 0 },
            { q: "Qual foi uma das primeiras conquistas portuguesas no Périplo Africano?", options: ["Ceuta", "Antilhas", "Rio Amazonas", "Oceano Pacífico"], correct: 0 },
            { q: "Qual ponto marcou a passagem portuguesa para o Oceano Índico?", options: ["Cabo da Boa Esperança", "Rio Amazonas", "Antilhas", "Oceano Pacífico"], correct: 0 },
            { q: "Qual cidade indiana foi alcançada pelos portugueses no Périplo Africano?", options: ["Calicute", "Ceuta", "Antilhas", "Havana"], correct: 0 },
            { q: "Além da Índia, qual território a rota portuguesa também alcançou?", options: ["Brasil", "México", "Peru", "Cuba"], correct: 0 },
            { q: "Qual era a estratégia da rota espanhola?", options: ["Circun-navegação", "Navegação de cabotagem", "Rota terrestre pela Ásia", "Travessia do deserto do Saara"], correct: 0 },
            { q: "Quais territórios foram conquistas da rota espanhola no Caribe?", options: ["Antilhas", "Calicute", "Ceuta", "Cabo da Boa Esperança"], correct: 0 },
            { q: "Quem explorou o Rio Amazonas e deu nome ao continente americano?", options: ["Américo Vespúcio", "Vasco da Gama", "Bartolomeu Dias", "Cristóvão Colombo"], correct: 0 },
            { q: "Quem completou a primeira circun-navegação, após a morte de Fernão de Magalhães?", options: ["Sebastião El Cano", "Américo Vespúcio", "Pedro Álvares Cabral", "Bartolomeu Dias"], correct: 0 },
            { q: "O que definiu o Tratado de Tordesilhas?", options: ["A divisão de terras entre Espanha e Portugal", "Uma aliança militar", "O fim das navegações", "A criação de uma moeda única"], correct: 0 },
            { q: "Qual era o principal objetivo de Portugal com as Grandes Navegações?", options: ["Encontrar novas rotas comerciais para as regiões produtoras de especiarias", "Colonizar a Ásia militarmente", "Encontrar uma rota terrestre para a Índia", "Estabelecer comércio com a Oceania"], correct: 0 },
            { q: "Por que Portugal buscava uma nova rota marítima, e não a rota tradicional?", options: ["Para evitar as rotas controladas por outros povos", "Porque a rota terrestre havia sido destruída", "Porque não existia rota terrestre", "Porque queria evitar o Oceano Atlântico"], correct: 0 },
            { q: "A expansão portuguesa começou explorando qual região?", options: ["A costa da África", "A costa da Ásia", "O interior da Europa", "As ilhas do Caribe"], correct: 0 },
            { q: "O que é a navegação de cabotagem?", options: ["Navegar mantendo-se próximo à costa", "Navegar apenas à noite", "Navegar sem o uso de mapas", "Navegar apenas em rios"], correct: 0 },
            { q: "Por que os portugueses adotaram a navegação de cabotagem no início da expansão?", options: ["Porque ainda não tinham conhecimento suficiente para viagens seguras em mar aberto", "Porque era proibido se afastar da costa", "Porque não existiam caravelas", "Porque queriam evitar contato com outros povos"], correct: 0 },
            { q: "Em que ano Portugal conquistou Ceuta, no norte da África?", options: ["1415", "1435", "1488", "1498"], correct: 0 },
            { q: "Por que a conquista de Ceuta é importante para a história da expansão marítima?", options: ["É considerada um marco inicial da expansão marítima portuguesa", "Foi a primeira colônia portuguesa na América", "Marcou o fim das navegações portuguesas", "Foi o local onde nasceu Vasco da Gama"], correct: 0 },
            { q: "Em que ano ocorreu o registro da expedição de Pedro, presente nas anotações da matéria?", options: ["1435", "1415", "1488", "1500"], correct: 0 },
            { q: "Quem conseguiu contornar o extremo sul da África em 1488?", options: ["Bartolomeu Dias", "Vasco da Gama", "Pedro Álvares Cabral", "Cristóvão Colombo"], correct: 0 },
            { q: "Como ficou conhecido o local contornado por Bartolomeu Dias em 1488?", options: ["Cabo da Boa Esperança", "Cabo Verde", "Cabo de Santa Maria", "Cabo do Índico"], correct: 0 },
            { q: "Qual foi a importância da viagem de Bartolomeu Dias em 1488?", options: ["Demonstrou que era possível contornar a África e seguir pelo Oceano Índico até a Ásia", "Encerrou definitivamente as navegações portuguesas", "Provou que a Terra era redonda pela primeira vez", "Iniciou o Tratado de Tordesilhas"], correct: 0 },
            { q: "Em que ano Vasco da Gama chegou à Índia contornando a África?", options: ["1498", "1488", "1500", "1492"], correct: 0 },
            { q: "O que a chegada de Vasco da Gama à Índia, em 1498, permitiu a Portugal?", options: ["Abrir uma importante rota comercial portuguesa para o Oriente", "Encerrar o comércio de especiarias", "Iniciar a colonização da América", "Fundar a cidade de Calicute"], correct: 0 },
            { q: "Em que ano a frota portuguesa comandada por Pedro Álvares Cabral chegou ao território que seria o Brasil?", options: ["1500", "1498", "1494", "1488"], correct: 0 },
            { q: "Qual é a sequência correta para entender a rota portuguesa, segundo o conteúdo?", options: ["África → contorno da África → Oceano Índico → Índia → Brasil", "Brasil → Índia → África → Europa", "Índia → África → Brasil → Europa", "Europa → América → África → Índia"], correct: 0 },
            { q: "Enquanto Portugal contornava a África, qual foi a estratégia adotada pela Espanha?", options: ["Navegar para o oeste, atravessando o Oceano Atlântico", "Navegar para o norte, em direção à Escandinávia", "Construir uma rota terrestre pela Ásia", "Aliar-se a Portugal na mesma rota"], correct: 0 },
            { q: "Em que ano Cristóvão Colombo realizou sua viagem financiada pela monarquia espanhola?", options: ["1492", "1488", "1498", "1500"], correct: 0 },
            { q: "O que Cristóvão Colombo acreditava ao chegar às ilhas do Caribe?", options: ["Que havia chegado às proximidades da Ásia", "Que havia chegado a um novo continente desconhecido", "Que havia contornado a África", "Que havia alcançado a Índia pela rota portuguesa"], correct: 0 },
            { q: "O que são as Antilhas, mencionadas na chegada de Colombo em 1492?", options: ["Um conjunto de ilhas localizado na região do Caribe", "Uma cordilheira na América do Sul", "Uma região da costa africana", "Um arquipélago no Oceano Pacífico"], correct: 0 },
            { q: "A chegada de Colombo às Antilhas, em 1492, marcou o início de quê?", options: ["Da expansão espanhola no continente americano", "Da expansão portuguesa na Ásia", "Do Tratado de Tordesilhas", "Da circum-navegação"], correct: 0 },
            { q: "Em homenagem a quem o continente americano recebeu o nome 'América', em 1507?", options: ["Américo Vespúcio", "Cristóvão Colombo", "Fernão de Magalhães", "Vasco da Gama"], correct: 0 },
            { q: "O que as viagens e relatos de Américo Vespúcio ajudaram a compreender?", options: ["Que aquelas terras formavam um Novo Mundo, e não parte da Ásia", "Que a Terra era plana", "Que a Índia ficava a oeste da Europa", "Que não existiam mais terras a serem descobertas"], correct: 0 },
            { q: "Em que ano o espanhol Vasco Núñez de Balboa avistou o Oceano Pacífico?", options: ["1513", "1507", "1492", "1519"], correct: 0 },
            { q: "O que Vasco Núñez de Balboa atravessou para avistar o Oceano Pacífico?", options: ["O istmo do Panamá", "O deserto do Atacama", "Os Andes", "O Golfo do México"], correct: 0 },
            { q: "O que a descoberta do Oceano Pacífico, em 1513, revelou?", options: ["Que havia outro grande oceano separando a América da Ásia", "Que a Terra era menor do que se pensava", "Que a América não existia", "Que a rota portuguesa estava errada"], correct: 0 },
            { q: "Quem iniciou a expedição de circum-navegação em 1519?", options: ["Fernão de Magalhães", "Vasco Núñez de Balboa", "Cristóvão Colombo", "Pedro Álvares Cabral"], correct: 0 },
            { q: "Qual era o objetivo da expedição de Fernão de Magalhães, iniciada em 1519?", options: ["Encontrar uma passagem pelo continente americano para chegar às ilhas das especiarias navegando para o oeste", "Contornar a África até a Índia", "Conquistar o Brasil", "Fundar uma colônia nas Antilhas"], correct: 0 },
            { q: "O que aconteceu com Fernão de Magalhães durante a expedição de circum-navegação?", options: ["Ele morreu durante a viagem", "Ele completou a viagem sozinho", "Ele desistiu e retornou à Espanha", "Ele se tornou rei da Espanha"], correct: 0 },
            { q: "Quem assumiu o comando da expedição após a morte de Fernão de Magalhães?", options: ["Juan Sebastián Elcano", "Vasco Núñez de Balboa", "Cristóvão Colombo", "Pedro Álvares Cabral"], correct: 0 },
            { q: "Em que ano a expedição retornou à Espanha, completando a primeira circum-navegação do planeta?", options: ["1522", "1519", "1513", "1494"], correct: 0 },
            { q: "O que significa 'circum-navegar'?", options: ["Dar uma volta completa ao redor da Terra por via marítima", "Navegar apenas próximo à costa", "Atravessar um único oceano", "Navegar apenas em rios"], correct: 0 },
            { q: "Por que a primeira circum-navegação foi tão importante?", options: ["Comprovou, na prática, a dimensão do planeta e a existência de uma enorme extensão de oceanos", "Marcou o fim das Grandes Navegações", "Provou que a Terra era plana", "Encerrou o comércio com a Ásia"], correct: 0 },
            { q: "Em que ano foi assinado o Tratado de Tordesilhas?", options: ["1494", "1488", "1498", "1507"], correct: 0 },
            { q: "Por que o Tratado de Tordesilhas foi necessário?", options: ["Porque Portugal e Espanha precisavam dividir as áreas de exploração entre si", "Porque a Espanha havia invadido Portugal", "Porque a Igreja proibiu as navegações", "Porque a Inglaterra exigiu uma divisão"], correct: 0 },
            { q: "Segundo o Tratado de Tordesilhas, para quem ficariam as terras a leste da linha imaginária?", options: ["Portugal", "Espanha", "Inglaterra", "França"], correct: 0 },
            { q: "Segundo o Tratado de Tordesilhas, para quem ficariam as terras a oeste da linha imaginária?", options: ["Espanha", "Portugal", "Inglaterra", "França"], correct: 0 },
            { q: "A divisão do Tratado de Tordesilhas ajuda a explicar por que Portugal ficou com qual território na América?", options: ["O território que formaria o Brasil", "Todo o continente americano", "As Antilhas", "O istmo do Panamá"], correct: 0 },
            { q: "Segundo o 'ouro da matéria', qual caminho Portugal escolheu para chegar ao Oriente?", options: ["O caminho pelo leste, contornando a África", "O caminho pelo oeste, atravessando o Atlântico", "Uma rota terrestre pela Ásia", "Nenhuma rota, apenas comércio local"], correct: 0 },
            { q: "Segundo o 'ouro da matéria', qual caminho a Espanha escolheu para tentar chegar ao Oriente?", options: ["O caminho pelo oeste, atravessando o Atlântico", "O caminho pelo leste, contornando a África", "Uma rota pelo Ártico", "Uma rota terrestre pela Rússia"], correct: 0 },
            { q: "Qual foi o resultado geral das duas estratégias de Portugal e Espanha?", options: ["A chegada dos europeus ao continente americano e o início de uma nova fase de exploração e colonização", "O fim total do comércio entre Europa e Ásia", "A unificação política entre Portugal e Espanha", "O abandono das navegações por ambos os países"], correct: 0 },
            { q: "Qual é a lógica geral apresentada no 'ouro da matéria' para resumir todo o processo?", options: ["Busca por novas rotas → Grandes Navegações → Portugal e Espanha exploram rotas diferentes → chegada à América → disputa por terras → Tratado de Tordesilhas", "Tratado de Tordesilhas → Grandes Navegações → busca por rotas → chegada à América", "Chegada à América → Grandes Navegações → Tratado de Tordesilhas → busca por rotas", "Disputa por terras → Tratado de Tordesilhas → fim das navegações"], correct: 0 },
            { q: "Na linha do tempo de Portugal, o que vem imediatamente após a conquista de Ceuta, em 1415?", options: ["A navegação de cabotagem pela costa africana", "A chegada ao Brasil", "O Tratado de Tordesilhas", "A chegada à Índia"], correct: 0 },
            { q: "Na linha do tempo de Portugal, o que ocorre em 1498, logo após o Cabo da Boa Esperança?", options: ["A chegada de Vasco da Gama à Índia", "A chegada ao Brasil", "A conquista de Ceuta", "O Tratado de Tordesilhas"], correct: 0 },
            { q: "Na linha do tempo da Espanha, o que ocorre logo após a chegada de Colombo às Antilhas, em 1492?", options: ["O Tratado de Tordesilhas, em 1494", "A circum-navegação, em 1519", "O batismo da América, em 1507", "A descoberta do Oceano Pacífico"], correct: 0 },
            { q: "Na linha do tempo da Espanha, o que ocorre em 1513, entre o batismo da América e a circum-navegação?", options: ["Vasco Núñez de Balboa avista o Oceano Pacífico", "Colombo chega às Antilhas", "É assinado o Tratado de Tordesilhas", "Cabral chega ao Brasil"], correct: 0 },
            { q: "Qual evento da rota espanhola ocorreu por último, cronologicamente, entre os apresentados?", options: ["A circum-navegação (1519–1522)", "A chegada às Antilhas (1492)", "O Tratado de Tordesilhas (1494)", "O batismo da América (1507)"], correct: 0 },
            { q: "Qual evento da rota portuguesa ocorreu por último, cronologicamente, entre os apresentados?", options: ["A chegada ao Brasil (1500)", "A conquista de Ceuta (1415)", "O Cabo da Boa Esperança (1488)", "A chegada à Índia (1498)"], correct: 0 },
            { q: "Colombo, Vasco da Gama e Cabral têm em comum o quê, segundo a matéria?", options: ["Todos participaram diretamente das Grandes Navegações dos séculos XV e XVI", "Todos nasceram no mesmo ano", "Todos participaram da circum-navegação", "Todos assinaram o Tratado de Tordesilhas"], correct: 0 },
            { q: "Qual é a principal diferença entre a estratégia portuguesa e a espanhola nas Grandes Navegações?", options: ["Portugal contornou a África (leste); a Espanha atravessou o Atlântico (oeste)", "Ambas seguiram exatamente a mesma rota", "Portugal foi para o oeste e a Espanha para o leste", "Nenhuma das duas chegou a um novo território"], correct: 0 },
            { q: "O nome 'América', dado ao continente em 1507, substituiu qual ideia inicial de Colombo sobre as terras encontradas?", options: ["A ideia de que eram parte da Ásia", "A ideia de que eram parte da África", "A ideia de que eram um continente desconhecido chamado Atlântida", "A ideia de que não existiam terras ali"], correct: 0 },
          ],
        },
        {
          id: "renascimento-cultural",
          title: "Renascimento Cultural",
          sections: [
            {
              heading: "1. Definição",
              body: `Transição da Idade Média para a Idade Moderna.`,
            },
            {
              heading: "2. Antecedentes",
              body: `Crise do Feudalismo (Nobreza).
Formação dos Estados Nacionais (Absolutismo).
Surgimento da Burguesia.`,
              visual: `
<div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
  <div class="rounded-xl bg-cream border border-sand p-4 text-center">
    <p class="font-display text-sm text-espresso mb-1">Crise do Feudalismo</p>
    <p class="text-xs text-bark/70">Enfraquecimento da nobreza</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand p-4 text-center">
    <p class="font-display text-sm text-espresso mb-1">Estados Nacionais</p>
    <p class="text-xs text-bark/70">Formação do Absolutismo</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand p-4 text-center">
    <p class="font-display text-sm text-espresso mb-1">Burguesia</p>
    <p class="text-xs text-bark/70">Surgimento de uma nova classe social</p>
  </div>
</div>`,
            },
            {
              heading: "3. Maior intercâmbio cultural entre Ocidente e Oriente",
              body: `Cruzadas e Queda do Império Bizantino (Rotas de comércio e intelectuais migraram para o Ocidente).
Retomada da cultura clássica.`,
            },
            {
              heading: "4. Mudança de mentalidade",
              body: `Teocentrismo → Antropocentrismo:
Produção de conhecimento ligada ao humano.

Racionalismo: Ciência.
Naturalismo: Explicação dos fenômenos naturais a partir de abstrações.
Individualismo: Valorização do mérito / esforço / talento.`,
              visual: `
<div class="flex flex-col items-center gap-3">
  <div class="flex items-center gap-2">
    <div class="rounded-lg bg-cream border border-sand px-3 py-2 text-xs font-medium text-bark text-center">Teocentrismo</div>
    <span class="text-ochre text-lg">→</span>
    <div class="rounded-lg bg-espresso text-cream px-3 py-2 text-xs font-medium text-center">Antropocentrismo</div>
  </div>
  <div class="flex flex-wrap justify-center gap-2 text-[11px]">
    <span class="rounded-full bg-beige border border-sand px-3 py-1 text-bark">Racionalismo · Ciência</span>
    <span class="rounded-full bg-beige border border-sand px-3 py-1 text-bark">Naturalismo</span>
    <span class="rounded-full bg-beige border border-sand px-3 py-1 text-bark">Individualismo</span>
  </div>
</div>`,
            },
            {
              heading: "5. A Arte Renascentista",
              body: `Arte + Ciência.
Busca pelo realismo / naturalismo.
Desenvolvimento da tridimensionalidade.

O Mecenato: Patrocínio da arte e da ciência.
Fases: Trecento, Quattrocento, Cinquecento.

Uso do Mecenato:
Monarca: Fazem uso do mecenato para consolidação de poder.
Igreja: Uso de mecenato.`,
              visual: `
<div class="flex items-center justify-center gap-2 text-xs sm:text-sm">
  <div class="rounded-lg bg-cream border border-sand px-3 py-2 text-bark font-medium text-center">Trecento<br/><span class="text-[10px] text-bark/60">século XIV</span></div>
  <span class="text-ochre">→</span>
  <div class="rounded-lg bg-cream border border-sand px-3 py-2 text-bark font-medium text-center">Quattrocento<br/><span class="text-[10px] text-bark/60">século XV</span></div>
  <span class="text-ochre">→</span>
  <div class="rounded-lg bg-espresso text-cream px-3 py-2 font-medium text-center">Cinquecento<br/><span class="text-[10px] opacity-80">século XVI</span></div>
</div>`,
            },
          ],
          quiz: [
            { q: "O Renascimento representa a transição de qual período para qual outro?", options: ["Da Idade Média para a Idade Moderna", "Da Idade Antiga para a Idade Média", "Da Idade Moderna para a Idade Contemporânea", "Da Pré-História para a Idade Antiga"], correct: 0 },
            { q: "Qual foi um antecedente do Renascimento relacionado à nobreza?", options: ["A crise do Feudalismo", "O fortalecimento total do Feudalismo", "A extinção da nobreza", "A criação de novas monarquias feudais"], correct: 0 },
            { q: "O que caracterizou a formação dos Estados Nacionais nesse contexto?", options: ["O Absolutismo", "O Parlamentarismo", "A democracia direta", "O federalismo"], correct: 0 },
            { q: "Qual classe social surge e ganha força nesse período?", options: ["A burguesia", "O clero apenas", "Os escravos", "Os camponeses feudais"], correct: 0 },
            { q: "Quais eventos favoreceram o maior intercâmbio cultural entre Ocidente e Oriente?", options: ["As Cruzadas e a Queda do Império Bizantino", "As Grandes Navegações apenas", "A Revolução Francesa", "A Guerra dos Cem Anos"], correct: 0 },
            { q: "O que aconteceu com as rotas de comércio e os intelectuais após esses eventos?", options: ["Migraram para o Ocidente", "Desapareceram completamente", "Ficaram isolados no Oriente", "Foram proibidos de circular"], correct: 0 },
            { q: "Na mudança de mentalidade do Renascimento, o Racionalismo está ligado a:", options: ["Ciência", "Magia", "Superstição", "Misticismo"], correct: 0 },
            { q: "O Individualismo renascentista valoriza:", options: ["O mérito, o esforço e o talento individual", "Apenas a riqueza herdada", "Apenas o nascimento nobre", "A obediência cega às tradições"], correct: 0 },
            { q: "O que caracteriza o Mecenato na Arte Renascentista?", options: ["O patrocínio da arte e da ciência por monarcas e pela Igreja", "A proibição da arte", "O financiamento apenas por artistas pobres", "A censura total da ciência"], correct: 0 },
            { q: "Quais são as três fases da arte renascentista citadas no conteúdo?", options: ["Trecento, Quattrocento e Cinquecento", "Barroco, Rococó e Neoclássico", "Gótico, Românico e Bizantino", "Clássico, Helenístico e Romano"], correct: 0 },
            { q: "O Renascimento representa uma transição entre quais dois períodos históricos?", options: ["Da Idade Média para a Idade Moderna", "Da Idade Antiga para a Idade Média", "Da Idade Moderna para a Contemporânea", "Da Pré-História para a Antiguidade"], correct: 0 },
            { q: "O enfraquecimento de qual grupo social está entre os antecedentes do Renascimento?", options: ["A nobreza, com a crise do Feudalismo", "O clero apenas", "Os camponeses", "Os artesãos urbanos"], correct: 0 },
            { q: "A formação dos Estados Nacionais, um dos antecedentes do Renascimento, está associada a qual sistema político?", options: ["O Absolutismo", "O Parlamentarismo", "A democracia direta", "O federalismo moderno"], correct: 0 },
            { q: "Qual classe social surge e se fortalece como antecedente do Renascimento?", options: ["A burguesia", "O clero", "A nobreza feudal", "Os servos"], correct: 0 },
            { q: "Quais dois eventos históricos favoreceram o maior intercâmbio cultural entre Ocidente e Oriente?", options: ["As Cruzadas e a Queda do Império Bizantino", "A Revolução Francesa e a Guerra dos Cem Anos", "As Grandes Navegações e o Tratado de Tordesilhas", "A Reforma Protestante e a Contrarreforma"], correct: 0 },
            { q: "Após as Cruzadas e a Queda do Império Bizantino, o que aconteceu com as rotas de comércio e os intelectuais?", options: ["Migraram para o Ocidente", "Foram completamente destruídos", "Permaneceram isolados no Oriente", "Foram proibidos de circular pela Igreja"], correct: 0 },
            { q: "O que os pensadores do Renascimento retomaram culturalmente, a partir desse intercâmbio?", options: ["A cultura clássica (Greco-Romana)", "A cultura egípcia antiga", "A cultura viking", "A cultura persa"], correct: 0 },
            { q: "A mudança de mentalidade do Renascimento é resumida em qual transição de pensamento?", options: ["Teocentrismo → Antropocentrismo", "Antropocentrismo → Teocentrismo", "Politeísmo → Monoteísmo", "Absolutismo → Parlamentarismo"], correct: 0 },
            { q: "No Antropocentrismo, a produção de conhecimento passa a estar ligada a quê?", options: ["Ao ser humano", "Exclusivamente ao mundo divino", "Apenas à natureza selvagem", "Apenas aos animais"], correct: 0 },
            { q: "O Racionalismo, uma das mudanças de mentalidade do Renascimento, está ligado a que área?", options: ["À Ciência", "À magia", "À astrologia apenas", "À superstição popular"], correct: 0 },
            { q: "O que caracteriza o Naturalismo, segundo a mudança de mentalidade renascentista?", options: ["A explicação dos fenômenos naturais a partir de abstrações", "A rejeição total da natureza", "A crença exclusiva em fenômenos sobrenaturais", "A ausência de qualquer explicação científica"], correct: 0 },
            { q: "O que o Individualismo valoriza, dentro da mudança de mentalidade renascentista?", options: ["O mérito, o esforço e o talento individual", "Apenas a riqueza herdada", "Apenas o nascimento nobre", "A obediência cega às tradições"], correct: 0 },
            { q: "Na Arte Renascentista, quais dois campos passam a caminhar juntos?", options: ["Arte e Ciência", "Arte e Religião apenas", "Ciência e Política", "Religião e Política"], correct: 0 },
            { q: "O que a Arte Renascentista buscava representar, em termos de estilo?", options: ["Realismo e naturalismo", "Abstração total", "Formas geométricas simples apenas", "Cores exclusivamente escuras"], correct: 0 },
            { q: "Qual técnica se desenvolveu na Arte Renascentista para dar profundidade às pinturas?", options: ["A tridimensionalidade", "A monocromia", "A caligrafia", "A escultura em relevo apenas"], correct: 0 },
            { q: "O que é o Mecenato, na Arte Renascentista?", options: ["O patrocínio da arte e da ciência", "A proibição da arte", "Um imposto cobrado dos artistas", "Um tipo de contrato comercial entre países"], correct: 0 },
            { q: "Quais são as três fases da Arte Renascentista, segundo o conteúdo?", options: ["Trecento, Quattrocento e Cinquecento", "Barroco, Rococó e Neoclássico", "Gótico, Românico e Bizantino", "Antigo, Médio e Moderno"], correct: 0 },
            { q: "Quem usava o Mecenato para consolidação de poder, segundo o conteúdo?", options: ["O Monarca", "Apenas os artistas", "Apenas os camponeses", "Os comerciantes de especiarias"], correct: 0 },
            { q: "Além do Monarca, qual outra instituição também fazia uso do Mecenato?", options: ["A Igreja", "O Exército", "O Parlamento", "Os sindicatos"], correct: 0 },
            { q: "Qual é a definição central do Renascimento apresentada no conteúdo?", options: ["Um movimento de transição entre a Idade Média e a Idade Moderna", "Um movimento exclusivamente religioso", "Um movimento político sem relação com a cultura", "Um movimento restrito à economia"], correct: 0 },
            { q: "A crise do Feudalismo, citada como antecedente, afetou diretamente qual grupo?", options: ["A nobreza", "A burguesia", "O clero apenas", "Os intelectuais gregos"], correct: 0 },
            { q: "O Absolutismo, ligado à formação dos Estados Nacionais, concentrava o poder em quem?", options: ["No rei", "No parlamento", "Na Igreja exclusivamente", "Nos camponeses"], correct: 0 },
            { q: "O surgimento da burguesia está relacionado a qual antecedente do Renascimento?", options: ["Ao fortalecimento do comércio e das cidades", "Ao fim total do comércio", "À expansão do feudalismo", "À criação da Igreja Católica"], correct: 0 },
            { q: "As Cruzadas foram um dos eventos que intensificaram o contato entre quais regiões?", options: ["Ocidente e Oriente", "Norte e Sul da Europa", "América e África", "Ásia e Oceania"], correct: 0 },
            { q: "A Queda do Império Bizantino contribuiu para qual processo histórico ligado ao Renascimento?", options: ["A migração de intelectuais e rotas de comércio para o Ocidente", "O fim do comércio europeu", "A expansão do Império Otomano para a América", "A criação do Tratado de Tordesilhas"], correct: 0 },
            { q: "Por que a retomada da cultura clássica foi importante para o Renascimento?", options: ["Porque valorizava a razão, a arte e o ser humano, inspirando os pensadores da época", "Porque proibia qualquer estudo da Antiguidade", "Porque só tratava de temas religiosos", "Porque rejeitava toda forma de arte"], correct: 0 },
            { q: "O Racionalismo renascentista se opõe a qual forma de pensamento medieval?", options: ["À explicação baseada apenas na fé e na tradição", "À explicação baseada em fatos históricos", "À explicação baseada na observação da natureza", "À explicação baseada na lógica"], correct: 0 },
            { q: "O Individualismo renascentista contrasta com qual característica típica da Idade Média?", options: ["A valorização coletiva e hierárquica da sociedade feudal", "A valorização do mérito pessoal", "A ausência de qualquer hierarquia social", "O fim da Igreja Católica"], correct: 0 },
            { q: "Segundo o conteúdo, o que caracteriza especificamente o Antropocentrismo em relação à produção de conhecimento?", options: ["O conhecimento passa a ser produzido com foco no ser humano", "O conhecimento é banido", "O conhecimento continua ligado apenas ao clero", "O conhecimento se torna exclusivamente militar"], correct: 0 },
            { q: "Como a Arte Renascentista une elementos que antes eram vistos separadamente?", options: ["Unindo arte e ciência em uma mesma produção cultural", "Separando totalmente arte de religião", "Unindo apenas política e religião", "Unindo exclusivamente comércio e guerra"], correct: 0 },
            { q: "A tridimensionalidade desenvolvida na Arte Renascentista busca representar o quê?", options: ["A profundidade e o realismo das formas", "Apenas formas planas e simbólicas", "Exclusivamente temas religiosos", "Uma perspectiva puramente abstrata"], correct: 0 },
            { q: "Como o Mecenato funcionava na prática, segundo o conteúdo?", options: ["Patrocinando financeiramente a produção artística e científica", "Proibindo qualquer produção artística", "Cobrando impostos dos artistas", "Financiando apenas obras religiosas"], correct: 0 },
            { q: "Em que ordem cronológica aparecem as fases da Arte Renascentista?", options: ["Trecento, depois Quattrocento, depois Cinquecento", "Cinquecento, depois Quattrocento, depois Trecento", "Quattrocento, depois Trecento, depois Cinquecento", "As três fases ocorrem ao mesmo tempo"], correct: 0 },
            { q: "Por que o Monarca tinha interesse em patrocinar artistas através do Mecenato?", options: ["Para consolidar seu poder", "Para empobrecer a nobreza", "Para enfraquecer a Igreja", "Para financiar guerras exclusivamente"], correct: 0 },
            { q: "Qual é a relação entre o Mecenato da Igreja e a Arte Renascentista?", options: ["A Igreja também fazia uso do mecenato para patrocinar arte e ciência", "A Igreja proibia todo tipo de mecenato", "A Igreja só financiava textos religiosos, nunca arte", "A Igreja se opunha à ciência renascentista sem exceções"], correct: 0 },
            { q: "O que a transição do Teocentrismo para o Antropocentrismo representa de mais essencial?", options: ["A mudança do centro das explicações de Deus para o ser humano", "A substituição da religião católica por outra religião", "O fim de qualquer crença religiosa na Europa", "A criação de um novo sistema político"], correct: 0 },
            { q: "Qual conjunto de antecedentes históricos abriu caminho para o Renascimento?", options: ["Crise do Feudalismo, formação dos Estados Nacionais e surgimento da burguesia", "Apenas a criação da imprensa", "Apenas as Grandes Navegações", "Apenas a Reforma Protestante"], correct: 0 },
            { q: "O Naturalismo renascentista está mais próximo de qual tipo de explicação?", options: ["Uma explicação baseada em abstrações e observação dos fenômenos naturais", "Uma explicação puramente mística", "Uma explicação baseada exclusivamente em textos religiosos", "Uma explicação baseada em superstições populares"], correct: 0 },
            { q: "Como a burguesia contribuiu para o ambiente cultural do Renascimento?", options: ["Fortalecendo o comércio e financiando a cultura nas cidades", "Proibindo qualquer atividade comercial", "Isolando as cidades do restante da Europa", "Financiando apenas atividades militares"], correct: 0 },
            { q: "Segundo o conteúdo, o Renascimento surgiu inicialmente em qual contexto de mudanças profundas?", options: ["Um contexto de crise do sistema feudal e transformações políticas e sociais", "Um contexto de estabilidade total sem mudanças", "Um contexto de guerra permanente sem trocas culturais", "Um contexto de isolamento total da Europa"], correct: 0 },
            { q: "O que diferencia o pensamento medieval do pensamento renascentista em relação ao conhecimento?", options: ["O medieval era ligado ao divino; o renascentista, ao ser humano e à razão", "Ambos eram idênticos em sua base", "O medieval era mais científico que o renascentista", "O renascentista rejeitava toda forma de conhecimento"], correct: 0 },
            { q: "A valorização do mérito e do talento individual, no Individualismo, se opõe a qual ideia medieval?", options: ["A ideia de que o destino social era definido apenas pelo nascimento", "A ideia de que todos eram totalmente iguais", "A ideia de que o mérito sempre foi valorizado", "A ideia de que não existia hierarquia social na Idade Média"], correct: 0 },
            { q: "Como as rotas de comércio reabertas após as Cruzadas influenciaram o Renascimento?", options: ["Trouxeram novas ideias e riquezas que ajudaram a fomentar a cultura renascentista", "Isolaram ainda mais a Europa", "Impediram qualquer troca cultural", "Não tiveram nenhuma relação com o Renascimento"], correct: 0 },
            { q: "O que caracteriza, de forma geral, a 'Arte + Ciência' citada no conteúdo sobre a Arte Renascentista?", options: ["A junção entre técnica artística e conhecimento científico na produção das obras", "A total separação entre arte e ciência", "A substituição da ciência pela arte", "A proibição da ciência nas produções artísticas"], correct: 0 },
            { q: "Por que o Renascimento é considerado um marco na passagem da Idade Média para a Idade Moderna?", options: ["Porque reuniu mudanças profundas de mentalidade, arte, ciência e organização social", "Porque foi um evento isolado sem consequências", "Porque ocorreu apenas na política", "Porque não teve relação com a cultura europeia"], correct: 0 },
            { q: "O que a formação dos Estados Nacionais tem em comum com o Absolutismo, segundo o conteúdo?", options: ["Ambos estão relacionados à concentração de poder político como antecedente do Renascimento", "Não têm nenhuma relação entre si", "Ambos são posteriores ao Renascimento", "Ambos enfraqueceram os reis europeus"], correct: 0 },
            { q: "Segundo o conteúdo, o que a 'retomada da cultura clássica' trouxe de mais importante para os artistas e pensadores?", options: ["Referências e inspiração da Antiguidade Greco-Romana", "A proibição de qualquer arte antiga", "A criação de uma cultura totalmente nova sem influências", "O fim do interesse pela arte"], correct: 0 },
            { q: "Como pode-se resumir a relação entre Racionalismo e Naturalismo no Renascimento?", options: ["Ambos valorizam a observação e a explicação lógica dos fenômenos, em vez da fé cega", "Ambos rejeitam qualquer forma de observação", "Ambos são exclusivamente religiosos", "Ambos surgem apenas no século XX"], correct: 0 },
            { q: "Por que os antecedentes políticos e sociais (Feudalismo, Estados Nacionais, burguesia) são importantes para entender o Renascimento?", options: ["Porque criaram as condições históricas que permitiram o florescimento cultural do período", "Porque não têm nenhuma relação com a cultura renascentista", "Porque ocorreram depois do Renascimento", "Porque impediram totalmente o Renascimento de acontecer"], correct: 0 },
            { q: "De forma geral, o que o Renascimento representa como movimento histórico?", options: ["Uma retomada de valores clássicos combinada com uma nova valorização do ser humano, da razão e da arte", "Um retorno completo aos valores medievais", "Um movimento apenas econômico, sem relação com cultura", "Um evento isolado sem impacto na Europa"], correct: 0 },
          ],
        },
        {
          id: "reformas-religiosas",
          title: "Reformas Religiosas",
          sections: [
            {
              heading: "1. Definição",
              body: `Crise no domínio católico (I.C.A.R. → Papa).

I.C.A.R. = Igreja Católica Apostólica Romana.`,
            },
            {
              heading: "2. Antecedentes",
              body: `Movimento Absolutista.
Crise política: Poder nacional × Poder universal.
Crise intelectual: Guerras, pestes, fome, revoltas.
Crise moral (Corrupção):
Vendas de indulgências, relíquias e cargos eclesiásticos.
Simonia.
Nicolaísmo.`,
              visual: `
<div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
  <div class="rounded-xl bg-cream border border-sand p-3 text-center">
    <p class="font-display text-sm text-espresso mb-1">Absolutismo</p>
    <p class="text-[11px] text-bark/70">Fortalecimento do poder nacional</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand p-3 text-center">
    <p class="font-display text-sm text-espresso mb-1">Crise política</p>
    <p class="text-[11px] text-bark/70">Poder nacional × poder universal</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand p-3 text-center">
    <p class="font-display text-sm text-espresso mb-1">Crise intelectual</p>
    <p class="text-[11px] text-bark/70">Guerras, pestes, fome, revoltas</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand p-3 text-center">
    <p class="font-display text-sm text-espresso mb-1">Crise moral</p>
    <p class="text-[11px] text-bark/70">Indulgências, simonia, nicolaísmo</p>
  </div>
</div>`,
            },
            {
              heading: "3. Luteranismo",
              body: `Fundador: Martinho Lutero (Excomungado).
Local: S.R.G. (Sacro Império Romano-Germânico).

Salvação pela graça: Sem livre-arbítrio.
Contrário à infalibilidade papal → Nega hierarquia.
Crença apenas no Evangelho → Bíblia sem ser estritamente em Latim.
Tradução da Bíblia para língua alemã.

Conflitos armados e Paz de Augsburgo → Tolerância religiosa ("Cuius regio, eius religio").`,
            },
            {
              heading: "4. Calvinismo",
              body: `Fundador: João Calvino.
Local: Suíça / França.

Predestinação divina: Deus já determinou, de antemão, quem será salvo — independentemente do esforço ou das ações da pessoa.
Valorização do trabalho e acúmulo de bens: o sucesso material era visto como sinal de graça divina.

Variações regionais:
Inglaterra → Puritanismo.
Escócia → Presbiterianismo.
França → Huguenotes.`,
            },
            {
              heading: "5. Anglicanismo",
              body: `Fundador: Henrique VIII.
Local: Inglaterra.

Atos de Supremacia: em 1534, o Ato de Supremacia rompeu formalmente com Roma — o rei (não mais o Papa) passou a ser o chefe supremo da Igreja da Inglaterra, unindo poder político e religioso em uma só figura.`,
            },
            {
              heading: "🧠 Comparando as três reformas",
              body: `Um resumo rápido para revisar antes da prova.`,
              visual: `
<div class="overflow-x-auto">
  <table class="w-full text-sm border-collapse">
    <thead>
      <tr class="border-b-2 border-espresso/70">
        <th class="text-left py-2 pr-3 font-display text-bark">Ramo</th>
        <th class="text-left py-2 pr-3 font-display text-bark">Fundador</th>
        <th class="text-left py-2 pr-3 font-display text-bark">Local</th>
        <th class="text-left py-2 font-display text-bark">Ideia central</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-sand/60">
        <td class="py-2 pr-3 text-bark/80">Luteranismo</td>
        <td class="py-2 pr-3 text-bark/80">Martinho Lutero</td>
        <td class="py-2 pr-3 text-bark/80">Sacro Império Romano-Germânico</td>
        <td class="py-2 text-bark/80">Salvação pela graça (sem livre-arbítrio)</td>
      </tr>
      <tr class="border-b border-sand/60">
        <td class="py-2 pr-3 text-bark/80">Calvinismo</td>
        <td class="py-2 pr-3 text-bark/80">João Calvino</td>
        <td class="py-2 pr-3 text-bark/80">Suíça / França</td>
        <td class="py-2 text-bark/80">Predestinação divina</td>
      </tr>
      <tr>
        <td class="py-2 pr-3 text-bark/80">Anglicanismo</td>
        <td class="py-2 pr-3 text-bark/80">Henrique VIII</td>
        <td class="py-2 pr-3 text-bark/80">Inglaterra</td>
        <td class="py-2 text-bark/80">Rei como chefe da Igreja (Ato de Supremacia)</td>
      </tr>
    </tbody>
  </table>
</div>`,
            },
          ],
          quiz: [
            { q: "O que caracterizou a crise no domínio católico que originou as Reformas Religiosas?", options: ["Uma crise no domínio da Igreja Católica Apostólica Romana", "O fortalecimento total do Papado", "A unificação de todas as religiões cristãs", "O fim do cristianismo na Europa"], correct: 0 },
            { q: "Qual foi um dos antecedentes políticos das Reformas Religiosas?", options: ["O conflito entre poder nacional e poder universal (do Papa)", "A ausência total de governos nacionais", "A unificação política da Europa", "O fim das monarquias"], correct: 0 },
            { q: "O que caracterizava a crise moral da Igreja, segundo o conteúdo?", options: ["Venda de indulgências, relíquias e cargos eclesiásticos", "A pobreza extrema do clero", "A ausência de cargos eclesiásticos", "A proibição total de doações à Igreja"], correct: 0 },
            { q: "O que é Simonia?", options: ["A venda de cargos eclesiásticos", "O celibato dos padres", "A tradução da Bíblia", "Um tipo de indulgência gratuita"], correct: 0 },
            { q: "Quem fundou o Luteranismo?", options: ["Martinho Lutero", "João Calvino", "Henrique VIII", "O Papa"], correct: 0 },
            { q: "Segundo o Luteranismo, como ocorre a salvação?", options: ["Pela graça, sem depender do livre-arbítrio", "Apenas pelas boas ações", "Apenas pela riqueza acumulada", "Apenas pela obediência ao Papa"], correct: 0 },
            { q: "O que a Paz de Augsburgo estabeleceu?", options: ["Tolerância religiosa, com o princípio 'Cuius regio, eius religio'", "O fim total do luteranismo", "A unificação religiosa da Europa", "A proibição do catolicismo"], correct: 0 },
            { q: "Qual é a ideia central do Calvinismo?", options: ["A predestinação divina", "A salvação apenas pela riqueza", "A negação de qualquer forma de trabalho", "A obediência total ao Papa"], correct: 0 },
            { q: "Quem fundou o Anglicanismo, e por meio de qual ato o rei se tornou líder da Igreja?", options: ["Henrique VIII, por meio do Ato de Supremacia", "Martinho Lutero, pela Paz de Augsburgo", "João Calvino, pela predestinação", "O Papa, por decreto papal"], correct: 0 },
            { q: "Qual reforma teve variações regionais na Inglaterra, Escócia e França?", options: ["Calvinismo", "Luteranismo", "Anglicanismo", "Nenhuma delas"], correct: 0 },
            { q: "O que caracterizou a crise que originou as Reformas Religiosas, segundo o conteúdo?", options: ["Uma crise no domínio da Igreja Católica Apostólica Romana (ICAR)", "O fortalecimento total do papado", "A unificação de todas as religiões cristãs", "O fim do cristianismo na Europa"], correct: 0 },
            { q: "Qual movimento político está entre os antecedentes das Reformas Religiosas?", options: ["O Absolutismo", "O Parlamentarismo", "A democracia direta", "O federalismo"], correct: 0 },
            { q: "A crise política citada como antecedente envolvia o conflito entre quais poderes?", options: ["Poder nacional e poder universal (do Papa)", "Poder militar e poder religioso apenas", "Poder da nobreza e poder da burguesia", "Poder da Igreja Ortodoxa e da Igreja Católica"], correct: 0 },
            { q: "O que caracterizava a crise intelectual apontada como antecedente das Reformas?", options: ["Guerras, pestes, fome e revoltas", "A ausência total de conflitos", "O excesso de riqueza generalizada", "A expansão pacífica do comércio"], correct: 0 },
            { q: "O que caracterizava a crise moral da Igreja, segundo o conteúdo?", options: ["A corrupção, incluindo venda de indulgências, relíquias e cargos eclesiásticos", "A pobreza extrema do clero", "A ausência de qualquer cargo eclesiástico", "A proibição total de doações"], correct: 0 },
            { q: "O que é Simonia, mencionada entre os problemas morais da Igreja?", options: ["A venda de cargos eclesiásticos", "O celibato obrigatório dos padres", "A tradução da Bíblia", "Um tipo de indulgência gratuita"], correct: 0 },
            { q: "O que é o Nicolaísmo, também citado como problema moral da Igreja?", options: ["Prática relacionada à quebra do celibato pelo clero", "Um tipo de imposto papal", "Um ritual de purificação", "Uma forma de peregrinação religiosa"], correct: 0 },
            { q: "Quem fundou o Luteranismo?", options: ["Martinho Lutero", "João Calvino", "Henrique VIII", "O Papa Leão X"], correct: 0 },
            { q: "Qual foi a consequência sofrida por Martinho Lutero por suas ideias?", options: ["Foi excomungado", "Foi coroado rei", "Foi nomeado Papa", "Foi exilado para a América"], correct: 0 },
            { q: "Em qual região o Luteranismo se desenvolveu principalmente?", options: ["No Sacro Império Romano-Germânico (S.R.G.)", "Na Inglaterra", "Na França", "Na Itália"], correct: 0 },
            { q: "Segundo o Luteranismo, como ocorre a salvação?", options: ["Pela graça, sem depender do livre-arbítrio", "Exclusivamente pelas boas ações", "Exclusivamente pela riqueza acumulada", "Exclusivamente pela obediência ao Papa"], correct: 0 },
            { q: "O Luteranismo se posiciona como contrário a qual princípio católico?", options: ["À infalibilidade papal, negando a hierarquia da Igreja", "À existência de Deus", "À leitura da Bíblia", "Ao uso de igrejas físicas"], correct: 0 },
            { q: "Segundo o Luteranismo, em que a fé deve se basear exclusivamente?", options: ["No Evangelho (a Bíblia), e não apenas no latim", "Em rituais realizados apenas em latim", "Nas decisões exclusivas do Papa", "Em tradições orais sem registro escrito"], correct: 0 },
            { q: "Para qual língua Martinho Lutero traduziu a Bíblia?", options: ["Para o alemão", "Para o inglês", "Para o francês", "Para o espanhol"], correct: 0 },
            { q: "O que a Paz de Augsburgo estabeleceu, após os conflitos armados relacionados ao Luteranismo?", options: ["Tolerância religiosa, com o princípio 'Cuius regio, eius religio'", "O fim total do protestantismo", "A unificação religiosa da Europa", "A proibição do catolicismo em toda a Europa"], correct: 0 },
            { q: "O que significa, na prática, o princípio 'Cuius regio, eius religio' da Paz de Augsburgo?", options: ["Cada região seguiria a religião definida por seu governante", "Cada pessoa poderia escolher livremente sua religião", "Todas as regiões deveriam seguir o catolicismo", "Todas as regiões deveriam seguir o luteranismo obrigatoriamente"], correct: 0 },
            { q: "Quem fundou o Calvinismo?", options: ["João Calvino", "Martinho Lutero", "Henrique VIII", "Erasmo de Roterdã"], correct: 0 },
            { q: "Em quais regiões o Calvinismo se desenvolveu principalmente?", options: ["Suíça e França", "Inglaterra e Escócia apenas", "Alemanha e Áustria", "Espanha e Portugal"], correct: 0 },
            { q: "Qual é a ideia central do Calvinismo em relação à salvação?", options: ["A predestinação divina", "A salvação apenas pelas boas ações", "A salvação apenas pela riqueza", "A ausência de qualquer forma de salvação"], correct: 0 },
            { q: "O que a predestinação divina do Calvinismo defende?", options: ["Que Deus já determinou, de antemão, quem será salvo, independentemente do esforço da pessoa", "Que qualquer pessoa pode escolher livremente sua salvação", "Que a salvação depende exclusivamente da Igreja", "Que não existe salvação possível"], correct: 0 },
            { q: "O que o Calvinismo valoriza em relação à vida econômica?", options: ["O trabalho e o acúmulo de bens", "A pobreza extrema como virtude", "A recusa total ao trabalho", "A distribuição obrigatória de toda a riqueza"], correct: 0 },
            { q: "Como o Calvinismo é conhecido na Inglaterra, em suas variações regionais?", options: ["Puritanismo", "Presbiterianismo", "Huguenotes", "Anglicanismo"], correct: 0 },
            { q: "Como o Calvinismo é conhecido na Escócia, em suas variações regionais?", options: ["Presbiterianismo", "Puritanismo", "Huguenotes", "Luteranismo"], correct: 0 },
            { q: "Como os calvinistas são chamados na França?", options: ["Huguenotes", "Puritanos", "Presbiterianos", "Anglicanos"], correct: 0 },
            { q: "Quem fundou o Anglicanismo?", options: ["Henrique VIII", "Martinho Lutero", "João Calvino", "O Papa Clemente VII"], correct: 0 },
            { q: "Em qual país o Anglicanismo se estabeleceu como religião oficial?", options: ["Inglaterra", "Escócia", "França", "Alemanha"], correct: 0 },
            { q: "Qual ato oficializou o rompimento da Inglaterra com Roma, tornando o rei chefe da Igreja?", options: ["O Ato de Supremacia", "A Paz de Augsburgo", "O Tratado de Tordesilhas", "A Bula Papal de Excomunhão"], correct: 0 },
            { q: "Em que ano ocorreu o Ato de Supremacia que criou o Anglicanismo?", options: ["1534", "1517", "1492", "1555"], correct: 0 },
            { q: "O que o Ato de Supremacia (1534) uniu na figura do rei da Inglaterra?", options: ["O poder político e o poder religioso", "Apenas o poder militar", "Apenas o poder econômico", "O poder da nobreza e do clero estrangeiro"], correct: 0 },
            { q: "Antes do Ato de Supremacia, quem era considerado o chefe da Igreja na Inglaterra?", options: ["O Papa", "O próprio rei Henrique VIII", "O Arcebispo de Canterbury, de forma independente", "Nenhuma autoridade religiosa central"], correct: 0 },
            { q: "Qual das três reformas (Luteranismo, Calvinismo, Anglicanismo) tem como ideia central a predestinação divina?", options: ["Calvinismo", "Luteranismo", "Anglicanismo", "Nenhuma delas"], correct: 0 },
            { q: "Qual das três reformas está associada ao princípio 'salvação pela graça, sem livre-arbítrio'?", options: ["Luteranismo", "Calvinismo", "Anglicanismo", "Nenhuma delas"], correct: 0 },
            { q: "Qual das três reformas está associada à figura do rei como chefe da Igreja?", options: ["Anglicanismo", "Luteranismo", "Calvinismo", "Nenhuma delas"], correct: 0 },
            { q: "Qual reforma teve como fundador uma figura que foi excomungada pela Igreja Católica?", options: ["Luteranismo (Martinho Lutero)", "Calvinismo (João Calvino)", "Anglicanismo (Henrique VIII)", "Nenhuma delas"], correct: 0 },
            { q: "Qual reforma se desenvolveu principalmente no Sacro Império Romano-Germânico?", options: ["Luteranismo", "Calvinismo", "Anglicanismo", "Nenhuma delas"], correct: 0 },
            { q: "Qual reforma se desenvolveu principalmente na Suíça e na França?", options: ["Calvinismo", "Luteranismo", "Anglicanismo", "Nenhuma delas"], correct: 0 },
            { q: "Qual reforma teve variações regionais chamadas de Puritanismo, Presbiterianismo e Huguenotes?", options: ["Calvinismo", "Luteranismo", "Anglicanismo", "Nenhuma delas"], correct: 0 },
            { q: "O que a venda de indulgências, citada na crise moral da Igreja, representava na prática?", options: ["Uma forma de obter perdão dos pecados mediante pagamento", "Uma taxa cobrada apenas dos nobres", "Um tipo de imposto sobre terras", "Uma doação obrigatória de alimentos"], correct: 0 },
            { q: "Como a crise política (poder nacional x poder universal) se relaciona com o Absolutismo, segundo o conteúdo?", options: ["Reis nacionais fortalecidos passaram a contestar a autoridade universal do Papa", "O Papa passou a governar todos os reinos diretamente", "Os reis perderam todo o poder para o Papa", "Não existe relação entre os dois"], correct: 0 },
            { q: "Por que a crise moral da Igreja (indulgências, simonia, nicolaísmo) ajudou a impulsionar as Reformas Religiosas?", options: ["Porque gerou insatisfação e críticas à conduta do clero, favorecendo movimentos reformistas", "Porque fortaleceu ainda mais a autoridade papal", "Porque não teve nenhum impacto na população", "Porque foi resolvida antes de qualquer reforma acontecer"], correct: 0 },
            { q: "Segundo o Luteranismo, qual é a posição em relação à hierarquia da Igreja Católica?", options: ["É contrário à hierarquia, negando a infalibilidade papal", "Aceita totalmente a hierarquia católica", "Defende uma hierarquia ainda maior que a católica", "Não trata do tema da hierarquia"], correct: 0 },
            { q: "Qual foi um dos efeitos práticos da tradução da Bíblia para o alemão por Lutero?", options: ["Permitir que mais pessoas tivessem acesso direto ao texto bíblico, sem depender apenas do latim", "Proibir a leitura da Bíblia por leigos", "Substituir totalmente o uso do latim na Europa", "Encerrar o cristianismo na Alemanha"], correct: 0 },
            { q: "O que motivou os 'conflitos armados' mencionados antes da Paz de Augsburgo?", options: ["Disputas religiosas e políticas entre católicos e luteranos no Sacro Império", "Disputas entre Portugal e Espanha", "A chegada dos europeus à América", "O Tratado de Tordesilhas"], correct: 0 },
            { q: "Segundo o Calvinismo, o sucesso material de uma pessoa era interpretado como o quê?", options: ["Um possível sinal de graça divina, associado à valorização do trabalho", "Um pecado grave", "Um sinal de fraqueza espiritual", "Algo sem qualquer relação com a fé"], correct: 0 },
            { q: "Qual é a principal diferença entre a fundação do Anglicanismo e a do Luteranismo e Calvinismo?", options: ["O Anglicanismo nasceu de uma decisão política do rei Henrique VIII, e não de uma disputa puramente teológica", "Todas as três reformas nasceram exatamente da mesma forma", "O Anglicanismo não teve nenhum fundador", "O Anglicanismo antecedeu as outras duas reformas"], correct: 0 },
            { q: "O que a expressão 'crise no domínio católico' resume, no início do conteúdo sobre Reformas Religiosas?", options: ["O enfraquecimento da autoridade da Igreja Católica (ICAR) e do Papa", "O fortalecimento total da Igreja Católica", "O fim do cristianismo como religião", "A unificação de todas as igrejas cristãs"], correct: 0 },
            { q: "Entre os antecedentes das Reformas, qual deles está diretamente ligado a fatores como guerras, pestes e fome?", options: ["A crise intelectual", "A crise moral", "A crise política", "O Absolutismo"], correct: 0 },
            { q: "Qual reforma está mais diretamente ligada à ideia de que a riqueza e o trabalho estão associados à graça divina?", options: ["Calvinismo", "Luteranismo", "Anglicanismo", "Nenhuma delas"], correct: 0 },
            { q: "Comparando as três reformas, qual delas foi fundada por um monarca, e não por um teólogo ou religioso?", options: ["Anglicanismo (Henrique VIII)", "Luteranismo (Martinho Lutero)", "Calvinismo (João Calvino)", "Nenhuma delas"], correct: 0 },
            { q: "De forma geral, o que as três reformas (Luteranismo, Calvinismo, Anglicanismo) têm em comum?", options: ["Todas surgiram como rupturas com a autoridade da Igreja Católica Romana", "Todas defendem exatamente a mesma doutrina", "Todas foram fundadas na mesma década", "Nenhuma delas teve relação com a crise da Igreja Católica"], correct: 0 },
          ],
        },
        {
          id: "arte-renascentista",
          title: "Arte Renascentista",
          sections: [
            {
              heading: "Arte Renascentista",
              body: `Arte + ciência.
Busca pelo realismo/naturalismo.
Desenvolvimento da tridimensionalidade.
O mecenato patrocinou a arte e a ciência.`,
            },
            {
              heading: "Teocentrismo × Antropocentrismo",
              body: `Teocentrismo
Deus no centro.
Produção de conhecimento ligada ao mundo divino.

Antropocentrismo
Ciência.
Naturalismo: explicação dos fenômenos naturais a partir de observações.
Valorização do conhecimento científico e dos interesses humanos.`,
              visual: `
<div class="grid grid-cols-2 gap-3 max-w-sm mx-auto text-center text-xs">
  <div class="rounded-xl bg-cream border border-sand px-3 py-4">
    <p class="font-semibold text-bark mb-1">Teocentrismo</p>
    <p class="text-bark/70">Deus no centro</p>
    <p class="text-bark/50 mt-1">conhecimento ligado ao mundo divino</p>
  </div>
  <div class="rounded-xl bg-espresso text-cream px-3 py-4">
    <p class="font-semibold mb-1">Antropocentrismo</p>
    <p class="opacity-80">Ciência e naturalismo</p>
    <p class="opacity-60 mt-1">conhecimento científico e interesses humanos</p>
  </div>
</div>`,
            },
            {
              heading: "Influência",
              body: `Fazem uso do pensamento racional e da observação dos fatos.`,
            },
          ],
          quiz: [
            { q: "Na Arte Renascentista, quais dois campos caminham juntos?", options: ["Arte e ciência", "Arte e religião apenas", "Ciência e política", "Religião e política"], correct: 0 },
            { q: "O que a Arte Renascentista buscava representar?", options: ["Realismo e naturalismo", "Abstração pura", "Formas simbólicas sem realismo", "Apenas temas religiosos"], correct: 0 },
            { q: "Qual técnica se desenvolveu para dar profundidade às obras renascentistas?", options: ["A tridimensionalidade", "A monocromia", "O relevo apenas", "A caligrafia decorativa"], correct: 0 },
            { q: "O que o Mecenato patrocinava, segundo o conteúdo?", options: ["A arte e a ciência", "Apenas a guerra", "Apenas o comércio", "Apenas a agricultura"], correct: 0 },
            { q: "No Teocentrismo, o que ocupa o centro de todas as explicações?", options: ["Deus", "O ser humano", "A ciência", "A natureza"], correct: 0 },
            { q: "No Teocentrismo, a que a produção de conhecimento está ligada?", options: ["Ao mundo divino", "Ao ser humano", "À observação científica", "Aos interesses humanos"], correct: 0 },
            { q: "No Antropocentrismo, o que passa a ser valorizado como forma de explicar o mundo?", options: ["A ciência", "Apenas a fé", "Apenas os mitos", "Apenas a tradição oral"], correct: 0 },
            { q: "O que o Naturalismo, no Antropocentrismo, propõe como forma de explicação?", options: ["Explicação dos fenômenos naturais a partir de observações", "Explicação apenas pela vontade divina", "Rejeição total da natureza", "Explicação apenas por lendas populares"], correct: 0 },
            { q: "Além da ciência, o que mais o Antropocentrismo passa a valorizar?", options: ["O conhecimento científico e os interesses humanos", "Apenas os interesses da Igreja", "Apenas os interesses da nobreza", "Apenas os interesses militares"], correct: 0 },
            { q: "Segundo o conteúdo, a influência do pensamento renascentista faz uso de quê?", options: ["Do pensamento racional e da observação dos fatos", "Apenas da fé cega", "Apenas de tradições orais", "Apenas de rituais religiosos"], correct: 0 },
            { q: "Na Arte Renascentista, arte e ciência:", options: ["Caminham juntas, unidas na produção cultural", "São completamente separadas", "A ciência substitui totalmente a arte", "A arte é proibida pela ciência"], correct: 0 },
            { q: "O estilo buscado pela Arte Renascentista é descrito como:", options: ["Realista e naturalista", "Puramente abstrato", "Geométrico e simbólico apenas", "Sem qualquer preocupação com a forma"], correct: 0 },
            { q: "A tridimensionalidade desenvolvida na Arte Renascentista tinha como objetivo:", options: ["Dar sensação de profundidade e realismo às obras", "Simplificar ao máximo as formas", "Eliminar qualquer perspectiva", "Tornar as obras totalmente planas"], correct: 0 },
            { q: "O Mecenato, na Arte Renascentista, funcionava como:", options: ["Um patrocínio à produção artística e científica", "Uma proibição à produção artística", "Um imposto sobre obras de arte", "Uma censura estatal à ciência"], correct: 0 },
            { q: "No pensamento Teocêntrico, a figura central de todas as explicações é:", options: ["Deus", "O ser humano", "A razão", "A natureza"], correct: 0 },
            { q: "Segundo o Teocentrismo, a produção do conhecimento estava ligada:", options: ["Ao mundo divino", "Às observações científicas", "Aos interesses humanos", "À experimentação natural"], correct: 0 },
            { q: "O Antropocentrismo, em oposição ao Teocentrismo, coloca no centro das explicações:", options: ["A ciência e o ser humano", "Deus", "Apenas os mitos antigos", "Apenas a tradição oral"], correct: 0 },
            { q: "O Naturalismo, dentro do Antropocentrismo, explica os fenômenos naturais a partir de:", options: ["Observações", "Apenas da vontade divina", "Apenas de lendas", "Apenas de rituais"], correct: 0 },
            { q: "A influência do pensamento renascentista, segundo o conteúdo, envolve o uso de:", options: ["Pensamento racional e observação dos fatos", "Apenas fé religiosa", "Apenas tradição oral", "Apenas superstição popular"], correct: 0 },
            { q: "Comparando Teocentrismo e Antropocentrismo, qual é a principal diferença?", options: ["O centro das explicações muda de Deus para o ser humano e a razão", "Ambos colocam Deus no centro", "Ambos colocam o ser humano no centro", "Não existe diferença entre eles"], correct: 0 },
            { q: "Se uma obra de arte do período busca representar profundidade e volume realista, isso reflete qual característica renascentista?", options: ["A tridimensionalidade", "O Teocentrismo", "A Simonia", "O Nicolaísmo"], correct: 0 },
            { q: "Se um artista recebe patrocínio financeiro de um rico comerciante para produzir suas obras, isso é um exemplo de:", options: ["Mecenato", "Antropocentrismo", "Teocentrismo", "Naturalismo"], correct: 0 },
            { q: "Um pensador que explica um fenômeno natural observando diretamente a natureza, em vez de recorrer apenas à fé, está agindo de acordo com:", options: ["O Naturalismo", "O Teocentrismo", "A Simonia", "O Nicolaísmo"], correct: 0 },
            { q: "Um texto medieval que atribui todos os acontecimentos à vontade de Deus reflete qual visão de mundo?", options: ["O Teocentrismo", "O Antropocentrismo", "O Naturalismo", "O Racionalismo humanista renascentista"], correct: 0 },
            { q: "Um texto renascentista que valoriza a razão humana e a observação científica reflete qual visão de mundo?", options: ["O Antropocentrismo", "O Teocentrismo", "Apenas a fé", "Apenas a tradição"], correct: 0 },
            { q: "Segundo o conteúdo, o que caracteriza a 'busca pelo realismo' na Arte Renascentista?", options: ["A tentativa de representar a realidade de forma fiel e detalhada", "A rejeição de qualquer semelhança com a realidade", "O uso exclusivo de símbolos abstratos", "A ausência total de técnica"], correct: 0 },
            { q: "O que diferencia a arte medieval da Arte Renascentista, segundo o conteúdo?", options: ["A Arte Renascentista une arte e ciência, buscando realismo e tridimensionalidade", "Ambas são idênticas em técnica e objetivo", "A arte medieval já buscava tridimensionalidade plena", "A Arte Renascentista rejeita qualquer forma de ciência"], correct: 0 },
            { q: "Qual dessas opções está relacionada ao Teocentrismo?", options: ["Produção de conhecimento ligada ao mundo divino", "Valorização dos interesses humanos", "Explicação dos fenômenos por observação", "Uso do pensamento racional"], correct: 0 },
            { q: "Qual dessas opções está relacionada ao Antropocentrismo?", options: ["Valorização do conhecimento científico e dos interesses humanos", "Deus no centro de todas as explicações", "Produção de conhecimento exclusivamente religiosa", "Rejeição total da ciência"], correct: 0 },
            { q: "O Mecenato, tal como descrito no conteúdo, aproxima quais dois grupos?", options: ["Patrocinadores (como monarcas e a Igreja) e artistas/cientistas", "Apenas camponeses e nobres", "Apenas comerciantes e piratas", "Apenas reis e outros reis"], correct: 0 },
            { q: "Por que a tridimensionalidade é considerada um avanço da Arte Renascentista?", options: ["Porque trouxe mais realismo e profundidade às representações artísticas", "Porque tornou a arte mais simples e menos detalhada", "Porque eliminou a necessidade de técnica", "Porque proibiu qualquer forma de pintura"], correct: 0 },
            { q: "A 'explicação dos fenômenos naturais a partir de observações' é uma definição de qual conceito?", options: ["Naturalismo", "Teocentrismo", "Simonia", "Nicolaísmo"], correct: 0 },
            { q: "Segundo o conteúdo, o pensamento racional e a observação dos fatos representam:", options: ["A influência do pensamento renascentista", "Uma característica exclusiva da Idade Média", "Uma característica rejeitada pelo Renascimento", "Um conceito sem relação com o Renascimento"], correct: 0 },
            { q: "Assinale a alternativa que reúne corretamente duas características do Antropocentrismo:", options: ["Ciência e valorização dos interesses humanos", "Deus no centro e fé cega", "Produção de conhecimento ligada ao divino apenas", "Rejeição total da observação"], correct: 0 },
            { q: "Assinale a alternativa que reúne corretamente duas características do Teocentrismo:", options: ["Deus no centro e conhecimento ligado ao mundo divino", "Ciência e observação dos fatos", "Naturalismo e interesses humanos", "Pensamento racional e tridimensionalidade"], correct: 0 },
            { q: "A Arte Renascentista, ao unir arte e ciência, reflete qual mudança de mentalidade mais ampla do período?", options: ["A passagem do Teocentrismo para o Antropocentrismo", "A manutenção total do pensamento medieval", "O abandono completo da razão", "A rejeição da ciência em favor da fé"], correct: 0 },
            { q: "Um artista que estuda anatomia humana para representar corpos de forma mais realista está aplicando qual princípio renascentista?", options: ["A busca pelo realismo/naturalismo, unindo arte e ciência", "O Teocentrismo puro", "A Simonia", "O Nicolaísmo"], correct: 0 },
            { q: "Segundo o conteúdo, quem, além dos monarcas, também atuava como financiador através do Mecenato?", options: ["A Igreja", "Apenas os artistas entre si", "Apenas os camponeses", "Nenhuma outra instituição"], correct: 0 },
            { q: "O que significa dizer que o Mecenato 'patrocinou a arte e a ciência'?", options: ["Que houve financiamento direcionado à produção artística e científica", "Que a arte e a ciência foram proibidas", "Que apenas a ciência recebeu financiamento", "Que apenas a arte recebeu financiamento"], correct: 0 },
            { q: "No Teocentrismo, Deus está no centro; no Antropocentrismo, o centro passa a ser:", options: ["O ser humano e a razão", "A Igreja", "A nobreza", "O comércio"], correct: 0 },
            { q: "A valorização do 'conhecimento científico' no Antropocentrismo se opõe a qual ideia do Teocentrismo?", options: ["À explicação dos fatos exclusivamente pela vontade divina", "À explicação dos fatos pela observação", "Ao uso da razão", "Ao estudo da natureza"], correct: 0 },
            { q: "Segundo o conteúdo, o Naturalismo faz parte de qual conjunto mais amplo de ideias?", options: ["Do Antropocentrismo", "Do Teocentrismo", "Do Mecenato apenas", "Da Simonia"], correct: 0 },
            { q: "Se uma pintura renascentista representa uma cena bíblica, mas com técnicas de perspectiva e anatomia realista, isso demonstra:", options: ["A união entre temas tradicionais e as novas técnicas de arte e ciência renascentistas", "A ausência total de técnica na obra", "A rejeição do tema religioso", "A ausência de qualquer influência científica"], correct: 0 },
            { q: "Qual das alternativas descreve corretamente a 'Influência' do pensamento renascentista, segundo o conteúdo?", options: ["O uso do pensamento racional e da observação dos fatos", "O uso exclusivo da tradição oral", "A rejeição de qualquer forma de observação", "O uso exclusivo de textos religiosos"], correct: 0 },
            { q: "Assinale a alternativa correta sobre a Arte Renascentista:", options: ["Ela une arte e ciência, busca o realismo e desenvolve a tridimensionalidade", "Ela rejeita totalmente a ciência", "Ela é idêntica à arte medieval", "Ela não teve qualquer relação com o mecenato"], correct: 0 },
            { q: "Um cientista renascentista que observa o céu para entender o movimento dos astros, em vez de apenas aceitar explicações religiosas, reflete qual mudança de mentalidade?", options: ["Do Teocentrismo para o Antropocentrismo", "Do Antropocentrismo para o Teocentrismo", "Nenhuma mudança, pois ambos são iguais", "Uma mudança sem relação com o Renascimento"], correct: 0 },
            { q: "Segundo o conteúdo, o que teria sido impossível sem o apoio do Mecenato?", options: ["O financiamento contínuo de artistas e cientistas", "A existência da Igreja Católica", "A existência do Teocentrismo", "A existência da fé religiosa"], correct: 0 },
            { q: "A busca pelo realismo/naturalismo da Arte Renascentista está diretamente ligada a qual outra característica do período?", options: ["À valorização da ciência e da observação, típicas do Antropocentrismo", "À manutenção do Teocentrismo medieval", "À rejeição da tridimensionalidade", "À ausência de qualquer técnica artística"], correct: 0 },
            { q: "Qual conceito descreve melhor a frase 'Deus no centro, conhecimento ligado ao mundo divino'?", options: ["Teocentrismo", "Antropocentrismo", "Naturalismo", "Mecenato"], correct: 0 },
            { q: "Qual conceito descreve melhor a frase 'Ciência, naturalismo e valorização dos interesses humanos'?", options: ["Antropocentrismo", "Teocentrismo", "Simonia", "Nicolaísmo"], correct: 0 },
            { q: "Por que o pensamento racional é citado como uma influência central do Renascimento?", options: ["Porque passou a orientar a forma como as pessoas explicavam o mundo, ao lado da observação dos fatos", "Porque substituiu totalmente a arte", "Porque era rejeitado pelos artistas da época", "Porque não teve nenhuma relação com a ciência"], correct: 0 },
            { q: "Segundo o conteúdo, a Arte Renascentista pode ser resumida como uma arte que:", options: ["Une técnica artística, ciência e busca pelo realismo", "Rejeita qualquer forma de ciência", "É idêntica à arte da Idade Média", "Não recebia nenhum tipo de patrocínio"], correct: 0 },
            { q: "Assinale a opção que representa corretamente uma consequência da mudança de Teocentrismo para Antropocentrismo:", options: ["Maior valorização da ciência e dos interesses humanos nas explicações do mundo", "O fim total da religião na Europa", "O retorno ao pensamento puramente mítico", "A rejeição definitiva da arte"], correct: 0 },
            { q: "Ao financiar cientistas e artistas para ganhar prestígio, reis e a Igreja praticavam:", options: ["O Mecenato", "O Naturalismo", "A Simonia", "O Nicolaísmo"], correct: 0 },
            { q: "A observação dos fatos, citada como parte da 'Influência' renascentista, está mais associada a qual mudança de mentalidade?", options: ["Do Teocentrismo para o Antropocentrismo", "Da Antiguidade para a Idade Média", "Da Idade Moderna para a Contemporânea", "Nenhuma associação específica"], correct: 0 },
            { q: "Assinale a alternativa incorreta sobre o Teocentrismo, segundo o conteúdo:", options: ["O Teocentrismo valoriza o conhecimento científico acima de tudo", "O Teocentrismo coloca Deus no centro das explicações", "O Teocentrismo liga a produção de conhecimento ao mundo divino", "O Teocentrismo é característico do pensamento anterior ao Renascimento"], correct: 0 },
            { q: "Assinale a alternativa incorreta sobre o Antropocentrismo, segundo o conteúdo:", options: ["O Antropocentrismo rejeita totalmente a ciência", "O Antropocentrismo valoriza a ciência", "O Antropocentrismo valoriza os interesses humanos", "O Antropocentrismo está ligado ao Naturalismo"], correct: 0 },
            { q: "De forma geral, a Arte Renascentista reflete qual visão de mundo predominante no período?", options: ["O Antropocentrismo, com valorização da ciência, da razão e do ser humano", "O Teocentrismo, com Deus como único centro de explicações", "Uma visão neutra, sem qualquer influência filosófica", "Uma visão exclusivamente religiosa medieval"], correct: 0 },
            { q: "Qual é a relação central entre Mecenato e Arte Renascentista, segundo o conteúdo?", options: ["O Mecenato foi o mecanismo de patrocínio que sustentou financeiramente a produção artística e científica do período", "O Mecenato foi uma forma de arte, e não de financiamento", "O Mecenato proibia qualquer produção artística", "O Mecenato só existiu após o fim do Renascimento"], correct: 0 },
            { q: "Segundo o conteúdo, o realismo buscado pela Arte Renascentista está associado à união de quais dois elementos centrais do período?", options: ["Arte e ciência", "Religião e política", "Guerra e comércio", "Nobreza e clero"], correct: 0 },
          ],
        },
          {
          id: "brasil-colonial",
          title: "Brasil Colonial (1500–1800)",
          sections: [
            {
      heading: "Economia e Pacto Colonial",
      body: `A colônia brasileira nasceu com um objetivo claro: gerar riquezas para Portugal. Toda a economia era organizada para servir aos interesses da metrópole.

O Pacto Colonial era o fundamento dessa relação: a colônia só podia negociar com Portugal, não com outras nações. Tudo que se produzia (açúcar, ouro, tabaco) era exportado para Portugal, que lucrava com a revenda para a Europa. Em troca, a colônia recebia produtos manufaturados (tecidos, ferramentas) a preços muito mais altos.

Essa estrutura criou uma dependência econômica que Portugal explorou ao máximo.`
    },
    {
      heading: "Capitanias Hereditárias (1534)",
      body: `Para colonizar o imense território, o rei de Portugal dividiu a costa brasileira em enormes faixas de terra: as capitanias hereditárias. Cada uma foi entregue a um donatário (geralmente um nobre português).

Os donatários recebiam poderes para:
• Administrar a capitania como um senhor feudal
• Defender o território contra ataques
• Desenvolver a economia

Parecia uma solução, mas fracassou quase completamente. Os donatários enfrentavam:
• Falta de recursos financeiros para manter a colonização
• Ataques constantes de indígenas
• Grande distância de Portugal, impossível receber ajuda rápida
• Desinteresse de muitos donatários que preferiam ficar em Portugal

Apenas poucas capitanias prosperaram, como Pernambuco (açúcar) e São Vicente (no Sul).`
    },
    {
      heading: "Comparação: Capitanias vs Governo-Geral",
      body: `As Capitanias Hereditárias falharam porque o poder estava muito descentralizado. Cada donatário agia isoladamente, sem coordenação. Diante desse fracasso, a Coroa Portuguesa decidiu intervir diretamente.

Em 1549, criou o Governo-Geral: um único representante do rei administrando toda a colônia com autoridade centralizada.

🎯 **Veja a diferença visual:**

CAPITANIAS HEREDITÁRIAS (1534)
┌─────────────────────────────────────────────┐
│  Poder Descentralizado = Múltiplos Donatários│
├─────────────────────────────────────────────┤
│  [Cap. 1]  [Cap. 2]  [Cap. 3]  [Cap. 4]    │
│   Isolados   Sem coordenação   Fracos       │
│   = FRACASSO                                 │
└─────────────────────────────────────────────┘

GOVERNO-GERAL (1549)
┌─────────────────────────────────────────────┐
│  Poder Centralizado = Um Governador         │
├─────────────────────────────────────────────┤
│           [SALVADOR - Sede do GG]           │
│                ↓↓↓                          │
│  Controla toda a colônia  = ORGANIZAÇÃO    │
└─────────────────────────────────────────────┘

**Resultado:** Melhor administração, mais segurança, estratégia unificada.`
    },
    {
      heading: "Governo-Geral: Os Principais Governadores",
      body: `Tomé de Sousa (1549–1553)
• Primeiro governador-geral, enviado com essa missão clara
• Fundou Salvador em 1549, que se tornou a primeira capital
• Organizou a defesa e administração da colônia
• Criou a base institucional para o Brasil

Duarte da Costa (1553–1558)
• Enfrentou conflitos violentos com indígenas
• Combateu a presença de franceses tentando se instalar
• Período de grande turbulência

Mem de Sá (1558–1572)
• O mais bem-sucedido dos primeiros governadores
• Expulsou os franceses que tentavam invadir o Rio de Janeiro
• Fortaleceu a colonização e a defesa da costa
• Consolidou a autoridade portuguesa`
    },
    {
      heading: "União Ibérica (1580–1640)",
      body: `Um dos períodos mais críticos da história brasileira.

O que aconteceu:
Portugal e Espanha tiveram a mesma monarquia durante 60 anos. O rei espanhol Felipe II herdou o trono português.

Por que foi um desastre para o Brasil:

1. **Inimigos da Espanha atacaram Portugal**
   Espanha tinha inimigos poderosos: Holanda, Inglaterra, França. Esses países não podiam atacar a Espanha diretamente, mas podiam atacar suas colônias e as colônias do aliado Portugal.

2. **Brasil ficou vulnerável**
   A Holanda e outros países aproveitaram para invadir e tentar conquistar partes da colônia brasileira.

3. **Portugal não conseguia se defender sozinho**
   Estava sob o controle espanhol e não tinha recursos suficientes.

Consequência: O Brasil sofreu invasões estrangeiras durante esses 60 anos.`
    },
    {
      heading: "Bandeirantes: Expansão Territorial",
      body: `Enquanto a costa era colonizada pela plantação de açúcar, algo diferente acontecia no interior.

Bandeirantes eram expedições de colonos (principalmente saindo de São Paulo e do Sul) que penetravam o interior em busca de riquezas.

Objetivos dos Bandeirantes:
• Capturar indígenas para escravizá-los (apesar de proibido pela Coroa)
• Procurar ouro e pedras preciosas
• Destruir quilombos (comunidades de escravizados fugidos)
• Explorar novos territórios

Consequências:
✓ Expansão massiva do território: o Brasil cresceu para o interior
✓ Descoberta de áreas com ouro e diamantes (século XVII)
✓ Consolidação de nomes: São Paulo ganhou fama por isso
✓ Conflitos violentos com indígenas que eram capturados ou mortos

📌 **O Brasil de hoje é muito maior do que seria sem os bandeirantes.** O interior do país foi "aberto" por essas expedições.`
    },
    {
      heading: "Brasil Holandês",
      body: `Durante a União Ibérica, aproveitando a fraqueza portuguesa, a Holanda tentou conquistar partes do Brasil.

Invasão da Bahia (1624–1625)
• Holandeses invadem Salvador (a capital)
• Conseguem se manter por pouco tempo (1 ano)
• Foram expulsos pelos portugueses em 1625
• A Bahia permaneceu portuguesa

Invasão de Pernambuco (1630–1654)
• Muito mais séria e duradoura
• Pernambuco era a região mais rica (açúcar) — era o alvo
• Os holandeses ocuparam por 24 anos
• Governado por Maurício de Nassau, um administrador competente

Maurício de Nassau (1637–1644)
Enquanto controlava Pernambuco, Nassau:
• Melhorou a infraestrutura urbana (ruas, pontes, portos)
• Incentivou as artes e ciências
• Criou biblioteca, museu e observatório
• Atraiu artistas e cientistas
• Modernizou a administração

Apesar das melhorias, os portugueses expulsaram os holandeses em 1654. Pernambuco voltou para Portugal, mas o legado cultural e urbano de Nassau permaneceu.

**Resultado Final:** Portugal manteve o Brasil, mas perdeu tempo e recursos. A Holanda fracassou em suas ambições coloniais no Brasil.`
    }
  ],
  quiz: [
    {
      q: "Qual era o objetivo principal da economia colonial brasileira?",
      options: [
        "Gerar riquezas para Portugal através da exploração",
        "Desenvolver uma economia independente",
        "Negociar com todas as nações europeias",
        "Estabelecer indústrias manufatureiras"
      ],
      correct: 0
    },
    {
      q: "Por que as Capitanias Hereditárias fracassaram?",
      options: [
        "Tinham muito poder centralizado",
        "Falta de recursos, ataques indígenas e grande distância de Portugal",
        "O rei proibiu sua existência",
        "Pernambuco conquistou todas as outras"
      ],
      correct: 1
    },
    {
      q: "Qual foi a principal diferença entre Capitanias Hereditárias e Governo-Geral?",
      options: [
        "As Capitanias eram centralizadas, o Governo-Geral era descentralizado",
        "O Governo-Geral tinha poder descentralizado entre vários governadores",
        "As Capitanias eram descentralizadas, o Governo-Geral era centralizado",
        "Não havia diferença, era o mesmo sistema"
      ],
      correct: 2
    },
    {
      q: "Qual governador-geral foi responsável por expulsar os franceses e consolidar a colonização?",
      options: [
        "Tomé de Sousa",
        "Duarte da Costa",
        "Mem de Sá",
        "Maurício de Nassau"
      ],
      correct: 2
    },
    {
      q: "O que foi a União Ibérica e por que foi prejudicial para o Brasil?",
      options: [
        "Uma aliança comercial entre Portugal e Espanha que aumentou a riqueza",
        "Portugal e Espanha tiveram o mesmo rei; inimigos da Espanha atacaram o Brasil",
        "Uma invasão espanhola que conquistou o Brasil permanentemente",
        "Um acordo que liberou o comércio brasileiro com outras nações"
      ],
      correct: 1
    },
    {
      q: "Qual era o principal objetivo dos bandeirantes?",
      options: [
        "Evangelizar os indígenas",
        "Capturar indígenas, procurar ouro e expandir território",
        "Defender a costa de invasões estrangeiras",
        "Criar rotas comerciais com a Europa"
      ],
      correct: 1
    },
    {
      q: "Qual consequência dos bandeirantes foi mais importante para a história do Brasil?",
      options: [
        "Criaram grandes cidades no interior",
        "Destruíram completamente todas as tribos indígenas",
        "Expandiram o território brasileiro para o interior",
        "Encontraram ouro e mantiveram segredo para Portugal"
      ],
      correct: 2
    },
    {
      q: "Qual foi a principal razão para a invasão holandesa de Pernambuco (1630)?",
      options: [
        "Conquistar a capital de Portugal",
        "Interesse na produção de açúcar, a maior riqueza da região",
        "Expulsar os indígenas de lá",
        "Estabelecer rotas comerciais diretas com a Ásia"
      ],
      correct: 1
    },
    {
      q: "O que Maurício de Nassau fez em Pernambuco enquanto governava?",
      options: [
        "Destruiu toda a infraestrutura da região",
        "Melhorou cidades, incentivou artes e ciências, modernizou administração",
        "Retornou todo o ouro de açúcar para a Holanda",
        "Expulsou todos os portugueses do Brasil"
      ],
      correct: 1
    },
    {
      q: "Qual foi o resultado final da ocupação holandesa do Brasil?",
      options: [
        "Holanda conquistou permanentemente o Brasil",
        "Portugal perdeu o Brasil para a Holanda",
        "Portugal expulsou os holandeses; Brasil permaneceu português",
        "Brasil se tornou independente"
      ],
      correct: 2
    }
  ]
}
        }
      ]
    });
