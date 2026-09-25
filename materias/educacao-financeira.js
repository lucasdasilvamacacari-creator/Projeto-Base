window.DB_SUBJECTS = window.DB_SUBJECTS || [];
window.DB_SUBJECTS.push(
    {
      id: "educacao-financeira",
      name: "Educação Financeira",
      emoji: "💸",
      contents: [
        {
          id: "credito-e-juros-compostos",
          title: "Crédito e Juros Compostos",
          sections: [
            {
              heading: "📌 Ideia principal da matéria",
              body: `Nesta matéria você aprende o outro lado dos juros.

Na aula passada, os juros faziam o dinheiro render. Agora, eles fazem uma dívida crescer. A fórmula é exatamente a mesma; o que muda é a taxa de juros.

A pergunta mais importante da matéria é: "Quanto eu vou pagar no final?"`,
            },
            {
              heading: "1. A regra de ouro: juros compostos servem para investir e para dever",
              body: `A mesma fórmula é usada dos dois lados:
M = C × (1 + i)ⁿ

M = Montante (valor final).
C = Capital (valor inicial).
i = Taxa de juros.
n = Tempo (meses ou anos).

O ouro da aula:
Investimento → juros trabalham a seu favor.
Dívida → juros trabalham contra você.
O problema não é a fórmula, é o tamanho da taxa de juros.

Exemplo da aula:
R$ 1.000 aplicados em um CDB (14,15% ao ano) → R$ 1.141,50.
R$ 1.000 no rotativo do cartão (442,4% ao ano) → R$ 5.424,00.

Conclusão: a dívida cresce muito mais rápido do que um investimento rende.`,
              visual: `
<div class="space-y-3 max-w-sm mx-auto">
  <div>
    <div class="flex justify-between text-xs text-bark/70 mb-1"><span>Investimento (CDB, 1 ano)</span><span class="font-semibold text-correct">R$ 1.141,50</span></div>
    <div class="h-3 rounded-full bg-sand/40"><div class="h-3 rounded-full bg-correct" style="width: 21%"></div></div>
  </div>
  <div>
    <div class="flex justify-between text-xs text-bark/70 mb-1"><span>Dívida (rotativo, 1 ano)</span><span class="font-semibold text-wrong">R$ 5.424,00</span></div>
    <div class="h-3 rounded-full bg-sand/40"><div class="h-3 rounded-full bg-wrong" style="width: 100%"></div></div>
  </div>
</div>
<p class="text-[11px] text-bark/50 text-center mt-2">Mesmos R$ 1.000, mesmo tempo — a taxa é que muda tudo</p>`,
            },
            {
              heading: "2. As 3 perguntas de qualquer crédito (conteúdo mais importante)",
              body: `Antes de aceitar qualquer crédito, faça estas três perguntas:

Taxa — Quanto o banco cobra de juros. Pergunta: Quanto custa por mês? Exemplo: 2,2% ao mês • 15% ao mês.

Prazo — Por quanto tempo a dívida será paga. Pergunta: Em quantas parcelas? Importante: Quanto maior o prazo, menor costuma ser a parcela.

Total pago — É a pergunta mais importante. Pergunta: Quanto vai sair do meu bolso no final? Sempre some todas as parcelas e compare com o preço à vista.

Ouro da aula: Parcela pequena não significa crédito barato.`,
              visual: `
<div class="grid grid-cols-3 gap-2.5">
  <div class="rounded-xl bg-cream border border-sand p-3 text-center">
    <p class="font-display text-sm text-espresso mb-1">1. Taxa</p>
    <p class="text-[11px] text-bark/70">Quanto custa por mês?</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand p-3 text-center">
    <p class="font-display text-sm text-espresso mb-1">2. Prazo</p>
    <p class="text-[11px] text-bark/70">Em quantas parcelas?</p>
  </div>
  <div class="rounded-xl bg-espresso text-cream p-3 text-center">
    <p class="font-display text-sm mb-1">3. Total pago</p>
    <p class="text-[11px] opacity-80">Quanto sai do bolso?</p>
  </div>
</div>`,
            },
            {
              heading: "3. Cartão de crédito",
              body: `O cartão é um empréstimo de curto prazo. Enquanto a fatura é paga inteira até o vencimento, não há juros. O problema começa quando você paga apenas uma parte.

Como funciona:
Pagou a fatura inteira → Juros zero.
Pagou só uma parte → O restante entra no rotativo.

Se não conseguir pagar tudo, existem três caminhos:
Rotativo → 15% ao mês (o pior).
Parcelar a fatura → Cerca de 7% ao mês.
Empréstimo pessoal → Cerca de 4% ao mês.

Ouro da aula: Entre essas opções, o empréstimo pessoal costuma ser menos caro do que deixar a dívida no cartão.`,
            },
            {
              heading: "4. Rotativo do cartão (o crédito mais caro)",
              body: `O rotativo é considerado o crédito mais caro do dia a dia. A taxa usada na aula foi aproximadamente 15% ao mês (442,4% ao ano).

Como a dívida cresce (R$ 1.000 no rotativo):
Hoje → R$ 1.000.
1 mês → R$ 1.150.
3 meses → R$ 1.520,87.
12 meses → R$ 5.350,25.

O ouro da aula:
Os juros são compostos.
Todo mês os juros são calculados sobre a dívida já aumentada.
A dívida cresce de forma acelerada.`,
              visual: `
<div class="space-y-2 max-w-sm mx-auto">
  <div>
    <div class="flex justify-between text-xs text-bark/70 mb-1"><span>Hoje</span><span class="font-semibold">R$ 1.000,00</span></div>
    <div class="h-2.5 rounded-full bg-sand/40"><div class="h-2.5 rounded-full bg-ochre" style="width: 18.7%"></div></div>
  </div>
  <div>
    <div class="flex justify-between text-xs text-bark/70 mb-1"><span>1 mês</span><span class="font-semibold">R$ 1.150,00</span></div>
    <div class="h-2.5 rounded-full bg-sand/40"><div class="h-2.5 rounded-full bg-ochre" style="width: 21.5%"></div></div>
  </div>
  <div>
    <div class="flex justify-between text-xs text-bark/70 mb-1"><span>3 meses</span><span class="font-semibold">R$ 1.520,87</span></div>
    <div class="h-2.5 rounded-full bg-sand/40"><div class="h-2.5 rounded-full bg-ochre" style="width: 28.4%"></div></div>
  </div>
  <div>
    <div class="flex justify-between text-xs text-bark/70 mb-1"><span>12 meses</span><span class="font-semibold text-wrong">R$ 5.350,25</span></div>
    <div class="h-2.5 rounded-full bg-sand/40"><div class="h-2.5 rounded-full bg-wrong" style="width: 100%"></div></div>
  </div>
</div>`,
            },
            {
              heading: "5. Cheque especial",
              body: `O cheque especial é um limite automático da conta corrente. Quando o saldo acaba, o banco empresta dinheiro automaticamente.

Características:
Taxa média: 7,5% ao mês.
Pode chegar ao teto de 8% ao mês.
O juro corre por dia de uso.

Por que ele é perigoso?
É invisível.
O saldo fica negativo sem perceber.
O salário cobre a dívida e ela volta.`,
            },
            {
              heading: "6. Comparando os tipos de crédito",
              body: `A aula compara a mesma dívida de R$ 500 por 3 meses:

Rotativo → 15% ao mês → R$ 760,44.
Cheque especial → 7,5% ao mês → R$ 621,15.
Parcelamento da fatura → 7% ao mês → R$ 612,52.
Empréstimo pessoal → 4% ao mês → R$ 562,43.

Ouro da aula: A mesma dívida muda completamente dependendo da taxa de juros.`,
              visual: `
<div class="space-y-2 max-w-sm mx-auto">
  <div>
    <div class="flex justify-between text-xs text-bark/70 mb-1"><span>Rotativo (15%/mês)</span><span class="font-semibold text-wrong">R$ 760,44</span></div>
    <div class="h-2.5 rounded-full bg-sand/40"><div class="h-2.5 rounded-full bg-wrong" style="width: 100%"></div></div>
  </div>
  <div>
    <div class="flex justify-between text-xs text-bark/70 mb-1"><span>Cheque especial (7,5%/mês)</span><span class="font-semibold">R$ 621,15</span></div>
    <div class="h-2.5 rounded-full bg-sand/40"><div class="h-2.5 rounded-full bg-ochre" style="width: 81.7%"></div></div>
  </div>
  <div>
    <div class="flex justify-between text-xs text-bark/70 mb-1"><span>Parcelamento fatura (7%/mês)</span><span class="font-semibold">R$ 612,52</span></div>
    <div class="h-2.5 rounded-full bg-sand/40"><div class="h-2.5 rounded-full bg-ochre" style="width: 80.5%"></div></div>
  </div>
  <div>
    <div class="flex justify-between text-xs text-bark/70 mb-1"><span>Empréstimo pessoal (4%/mês)</span><span class="font-semibold text-correct">R$ 562,43</span></div>
    <div class="h-2.5 rounded-full bg-sand/40"><div class="h-2.5 rounded-full bg-correct" style="width: 73.9%"></div></div>
  </div>
</div>
<p class="text-[11px] text-bark/50 text-center mt-2">Mesma dívida de R$ 500 por 3 meses, quatro taxas diferentes</p>`,
            },
            {
              heading: "7. Trocar uma dívida cara por uma barata",
              body: `A professora mostra que faz sentido trocar uma dívida mais cara por outra menos cara.

Exemplo da aula — Ana deve R$ 1.000 no rotativo. Comparação:
Permanecer no rotativo → Dívida cresce muito mais.
Pegar empréstimo de 4% ao mês e quitar o cartão → Dívida cresce bem menos.

Ouro da aula: Compare sempre os dois montantes finais antes de decidir.`,
            },
            {
              heading: `8. Parcelado "sem juros": o juro escondido`,
              body: `Nem sempre o parcelado "sem juros" realmente não tem juros.

Exemplo da aula — Fone de ouvido:
À vista: R$ 600.
Parcelado: 3 × R$ 220.

Conta correta:
Total parcelado = R$ 660.
Diferença = R$ 60.
Juro escondido = 10%.

Regra prática: Se existe desconto à vista, existe juro embutido no parcelamento.`,
            },
            {
              heading: "9. Como descobrir o juro escondido",
              body: `A professora ensina um passo a passo:

Passo 1 — Some todas as parcelas (Parcela × número de parcelas).
Passo 2 — Descubra o verdadeiro preço à vista.
Passo 3 — Compare: Diferença ÷ Preço à vista. Esse resultado mostra a porcentagem do juro do período.

Ouro da aula: Sempre faça essa conta quando comparar preço à vista e parcelado.`,
              visual: `
<div class="flex flex-col items-center gap-1 max-w-xs mx-auto text-center">
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-sm text-bark font-medium">1. Somar todas as parcelas</div>
  <span class="text-ochre text-xs">↓</span>
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-sm text-bark font-medium">2. Descobrir o preço à vista</div>
  <span class="text-ochre text-xs">↓</span>
  <div class="w-full rounded-lg bg-espresso text-cream px-3 py-2 text-sm font-medium">3. Diferença ÷ Preço à vista = juro escondido</div>
</div>`,
            },
            {
              heading: "10. CET — Custo Efetivo Total",
              body: `O CET é o custo completo de um empréstimo. Ele é obrigatório por lei.

O CET inclui: Juros, IOF, Tarifas, Seguros, Outras cobranças.

Exemplo da aula — Empréstimo:
Valor: R$ 1.000.
Juros: 3%.
Tarifa + IOF: R$ 50.

Resultado:
Valor devolvido: R$ 1.080.
Taxa anunciada: 3%.
Custo real: 8%.

Ouro da aula: Nunca compare apenas a taxa de juros. Compare o CET.`,
              visual: `
<div class="space-y-2 max-w-xs mx-auto">
  <div>
    <div class="flex justify-between text-xs text-bark/70 mb-1"><span>Taxa anunciada</span><span class="font-semibold">3%</span></div>
    <div class="h-3 rounded-full bg-sand/40"><div class="h-3 rounded-full bg-sand" style="width: 37.5%"></div></div>
  </div>
  <div>
    <div class="flex justify-between text-xs text-bark/70 mb-1"><span>CET (custo real)</span><span class="font-semibold text-wrong">8%</span></div>
    <div class="h-3 rounded-full bg-sand/40"><div class="h-3 rounded-full bg-wrong" style="width: 100%"></div></div>
  </div>
</div>`,
            },
            {
              heading: "11. Financiamento",
              body: `O financiamento engana porque a parcela parece pequena.

Exemplo da aula — Carro de R$ 60.000 • Entrada: R$ 12.000 • Valor financiado: R$ 48.000.

24 meses → parcela R$ 2.595 → total pago R$ 74.280.
36 meses → parcela R$ 1.944 → total pago R$ 81.984.
48 meses → parcela R$ 1.629 → total pago R$ 90.192.

O ouro da aula:
Quanto maior o prazo, menor a parcela.
Quanto maior o prazo, maior o total pago.
O vendedor mostra a parcela; você deve olhar o total.`,
              visual: `
<div class="overflow-x-auto">
  <table class="w-full text-sm border-collapse">
    <thead><tr class="border-b-2 border-espresso/70"><th class="text-left py-2 pr-3 font-display text-bark">Prazo</th><th class="text-left py-2 pr-3 font-display text-bark">Parcela</th><th class="text-left py-2 font-display text-bark">Total pago</th></tr></thead>
    <tbody>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">24 meses</td><td class="py-1.5 pr-3 text-bark/80">R$ 2.595</td><td class="py-1.5 text-bark/80">R$ 74.280</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">36 meses</td><td class="py-1.5 pr-3 text-bark/80">R$ 1.944</td><td class="py-1.5 text-bark/80">R$ 81.984</td></tr>
      <tr><td class="py-1.5 pr-3 text-bark/80">48 meses</td><td class="py-1.5 pr-3 text-bark/80">R$ 1.629</td><td class="py-1.5 text-bark/80 font-semibold text-wrong">R$ 90.192</td></tr>
    </tbody>
  </table>
</div>`,
            },
            {
              heading: "12. Resumão da professora",
              body: `Quanto custa R$ 1.000 em um ano:

Rotativo do cartão → Dívida de R$ 5.424.
Cheque especial → Dívida de R$ 2.398.
Financiamento de veículo → Dívida de R$ 1.294.
Tesouro Selic (investimento) → R$ 1.142,50.

O que essa tabela quer mostrar? Uma dívida cobra muito mais juros do que um investimento seguro consegue render.`,
              visual: `
<div class="space-y-2 max-w-sm mx-auto">
  <div>
    <div class="flex justify-between text-xs text-bark/70 mb-1"><span>Rotativo do cartão</span><span class="font-semibold text-wrong">R$ 5.424</span></div>
    <div class="h-2.5 rounded-full bg-sand/40"><div class="h-2.5 rounded-full bg-wrong" style="width: 100%"></div></div>
  </div>
  <div>
    <div class="flex justify-between text-xs text-bark/70 mb-1"><span>Cheque especial</span><span class="font-semibold">R$ 2.398</span></div>
    <div class="h-2.5 rounded-full bg-sand/40"><div class="h-2.5 rounded-full bg-ochre" style="width: 44.2%"></div></div>
  </div>
  <div>
    <div class="flex justify-between text-xs text-bark/70 mb-1"><span>Financiamento de veículo</span><span class="font-semibold">R$ 1.294</span></div>
    <div class="h-2.5 rounded-full bg-sand/40"><div class="h-2.5 rounded-full bg-sand" style="width: 23.9%"></div></div>
  </div>
  <div>
    <div class="flex justify-between text-xs text-bark/70 mb-1"><span>Tesouro Selic (investir)</span><span class="font-semibold text-correct">R$ 1.142,50</span></div>
    <div class="h-2.5 rounded-full bg-sand/40"><div class="h-2.5 rounded-full bg-correct" style="width: 21.1%"></div></div>
  </div>
</div>
<p class="text-[11px] text-bark/50 text-center mt-2">R$ 1.000 aplicados de 4 formas diferentes por 1 ano</p>`,
            },
            {
              heading: "🎯 Ouro da matéria — Revisão de Lucas M",
              body: `As 3 perguntas de qualquer crédito: Taxa • Prazo • Total pago.
Usar juros compostos: M = C × (1 + i)ⁿ para calcular dívidas.
Rotativo é o crédito mais caro: Cerca de 15% ao mês.
Cheque especial também cobra juros altos: Cerca de 7,5% ao mês.
Descobrir juro escondido: Somar parcelas e comparar com o preço à vista.
Saber o que é CET: Juros + IOF + tarifas + seguros + outros custos.
Comparar financiamento pelo total pago: Nunca apenas pela parcela.

✅ As 3 ideias para levar para casa (igual à aula):
1. O juro é o mesmo dos dois lados: a mesma fórmula serve para investimento e dívida; o que muda é a taxa.
2. Parcela pequena não significa crédito barato: multiplique parcela × número de parcelas e compare com o preço à vista.
3. Quitar uma dívida cara é o melhor investimento: nenhuma aplicação segura rende perto do que o rotativo cobra.`,
            },
            {
              heading: "📝 Dados de referência e fórmulas úteis (agosto/2026)",
              body: `Indicadores de referência:
Taxa Selic (meta): 14,25% a.a. — Definida pelo Copom; vigente desde 17/06/2026.
CDI: 14,15% a.a. — Anda colado na Selic (um pouco abaixo).
Tesouro Selic: ≈ 14,25% a.a. — Título público pós-fixado, segue a Selic.
Poupança: 6,17% a.a. — Regra de Selic > 8,5% a.a. (0,5% a.m. + TR).
CDB (referência): % do CDI — Ex.: 100% do CDI = 14,15% a.a.
IPCA (12 meses): 4,64% — Inflação acumulada até junho/2026, usada para o ganho real.

Fórmulas úteis:
Juros simples: J = C · i · t
Juros compostos: M = C · (1 + i)ⁿ
Aumentos sucessivos: (1 + i₁) · (1 + i₂) − 1
Ganho ou perda real: (1 + rendimento) ÷ (1 + inflação) − 1

Fontes consultadas em agosto/2026 (valores podem variar). Lista de Exercícios — Retomada de Conteúdo, Colégio Anglo Bauru.`,
              visual: `
<div class="overflow-x-auto">
  <table class="w-full text-sm border-collapse">
    <thead><tr class="border-b-2 border-espresso/70"><th class="text-left py-2 pr-3 font-display text-bark">Indicador</th><th class="text-left py-2 font-display text-bark">Valor (a.a.)</th></tr></thead>
    <tbody>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">Taxa Selic (meta)</td><td class="py-1.5 text-bark/80">14,25%</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">CDI</td><td class="py-1.5 text-bark/80">14,15%</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">Tesouro Selic</td><td class="py-1.5 text-bark/80">≈ 14,25%</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">Poupança</td><td class="py-1.5 text-bark/80">6,17%</td></tr>
      <tr><td class="py-1.5 pr-3 text-bark/80">IPCA (12 meses)</td><td class="py-1.5 text-bark/80">4,64%</td></tr>
    </tbody>
  </table>
</div>`,
            },
          ],
          quiz: [
            { q: "A poupança rende cerca de 6,17% ao ano. Qual é o montante final de R$ 1.500,00 aplicados por 1 ano?", options: ["R$ 1.592,55", "R$ 1.500,00", "R$ 1.661,70", "R$ 1.592,00"], correct: 0 },
            { q: "Um CDB paga 80% do CDI (14,15% a.a.). Qual é a taxa anual desse CDB?", options: ["11,32% a.a.", "14,15% a.a.", "8,00% a.a.", "17,15% a.a."], correct: 0 },
            { q: "Nesse mesmo CDB (80% do CDI), quanto renderiam R$ 5.000,00 em 1 ano?", options: ["R$ 566,00", "R$ 707,50", "R$ 500,00", "R$ 632,50"], correct: 0 },
            { q: "O Tesouro Selic rende cerca de 14,25% ao ano. Qual o rendimento de R$ 2.400,00 em 1 ano, a juros simples?", options: ["R$ 342,00", "R$ 240,00", "R$ 171,00", "R$ 300,00"], correct: 0 },
            { q: "Entre poupança (6,17%), Tesouro Selic (14,25%) e CDB 100% do CDI (14,15%), qual rende mais para R$ 3.000,00 em 1 ano?", options: ["Tesouro Selic", "CDB", "Poupança", "Todos rendem igual"], correct: 0 },
            { q: "Dois irmãos investiram juntos em um CDB: R$ 1.200,00 e R$ 800,00. O rendimento total foi R$ 260,00. Quanto cabe a quem investiu R$ 1.200,00?", options: ["R$ 156,00", "R$ 130,00", "R$ 104,00", "R$ 174,00"], correct: 0 },
            { q: "Um investimento rendeu 5% no 1º semestre e 9% no 2º semestre. Qual foi a variação acumulada no ano?", options: ["14,45%", "14%", "13,55%", "15%"], correct: 0 },
            { q: "Uma ação subiu 25% em um mês e caiu 25% no mês seguinte. O investidor voltou ao valor inicial?", options: ["Não; ficou com uma perda acumulada de 6,25%", "Sim, voltou exatamente ao valor inicial", "Não; teve um ganho de 6,25%", "Não; perdeu 25% no total"], correct: 0 },
            { q: "Sobre um ganho bruto de R$ 2.000,00 incidem IR de 20% e, depois, taxa de administração de 5% sobre o que sobrou. Qual é o valor líquido final?", options: ["R$ 1.520,00", "R$ 1.500,00", "R$ 1.600,00", "R$ 1.900,00"], correct: 0 },
            { q: "Aplicando R$ 4.000,00 a 14% a.a. por 2 anos, com juros compostos (1,14² = 1,2996), qual é o montante final?", options: ["R$ 5.198,40", "R$ 5.120,00", "R$ 4.560,00", "R$ 5.360,00"], correct: 0 },
            { q: "Nesse mesmo investimento (R$ 4.000,00 a 14% a.a. por 2 anos), quanto foi de juros no período?", options: ["R$ 1.198,40", "R$ 1.120,00", "R$ 560,00", "R$ 1.000,00"], correct: 0 },
            { q: "Para R$ 5.000,00 a 12% a.a. por 3 anos (juros compostos: 1,12³ = 1,404928), qual é a diferença entre o montante a juros compostos e a juros simples?", options: ["R$ 224,64", "R$ 180,00", "R$ 300,00", "R$ 150,00"], correct: 0 },
            { q: "Um CDB rendeu 14,15% no ano e o IPCA do período foi 4,64%. Qual foi, aproximadamente, a taxa de ganho real dessa aplicação?", options: ["≈ 9,1%", "≈ 14,15%", "≈ 4,64%", "≈ 18,79%"], correct: 0 },
            { q: "Quem guardou R$ 1.000,00 em casa (rendimento 0%) por 1 ano, com IPCA de 4,64%, teve qual resultado sobre o poder de compra?", options: ["Perda real de aproximadamente 4,4%", "Ganho real de 4,64%", "Manteve o poder de compra exatamente", "Perda de 100% do valor"], correct: 0 },
            { q: "R$ 8.000,00 aplicados em um CDB de 100% do CDI (14,15% a.a.) por 1 ano. Qual é o juro bruto?", options: ["R$ 1.132,00", "R$ 1.000,00", "R$ 1.200,00", "R$ 800,00"], correct: 0 },
            { q: "Descontando IR de 17,5% sobre esse ganho, qual é o ganho líquido em reais?", options: ["R$ 933,90", "R$ 1.132,00", "R$ 800,00", "R$ 1.000,00"], correct: 0 },
            { q: "Com IPCA de 4,64%, o ganho real líquido desse CDB de R$ 8.000,00 foi:", options: ["Positivo (≈ 6,7%), protegendo o poder de compra", "Negativo, não protegendo o poder de compra", "Exatamente zero", "Igual ao IPCA"], correct: 0 },
          ],
        },
      ],
    },
);
