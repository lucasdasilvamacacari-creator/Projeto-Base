window.DB_SUBJECTS = window.DB_SUBJECTS || [];
window.DB_SUBJECTS.push(
    {
      id: "fisica-a",
      name: "Física-A",
      emoji: "🌀",
      contents: [
        {
          id: "dinamica-mcu",
          title: "Dinâmica dos movimentos circulares e uniformes (MCU)",
          sections: [
            {
              heading: "1. Dinâmica do movimento circular",
              body: `Aceleração → alguém que altera o valor da velocidade.
Dividi em 2:

At — Aceleração tangencial
→ Altera o valor da velocidade.
Fórmula:
At = ΔV / Δt

Ac — Aceleração centrípeta
→ Altera a direção e o sentido da velocidade.
→ Aponta para o centro.
Fórmula:
Ac = V² / R`,
              visual: `
<svg viewBox="0 0 320 240" class="w-full max-w-sm mx-auto" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrowV-a" markerWidth="8" markerHeight="8" refX="5" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#3E2F20"/>
    </marker>
    <marker id="arrowAc-a" markerWidth="8" markerHeight="8" refX="5" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#A8763E"/>
    </marker>
  </defs>
  <circle cx="160" cy="125" r="85" fill="none" stroke="#C9B18C" stroke-width="2" stroke-dasharray="6 5"/>
  <circle cx="160" cy="125" r="3.5" fill="#3E2F20"/>
  <text x="168" y="121" font-size="11" fill="#5C4630">centro</text>
  <circle cx="228" cy="72" r="6" fill="#A8763E"/>
  <line x1="228" y1="72" x2="192" y2="38" stroke="#3E2F20" stroke-width="2.5" marker-end="url(#arrowV-a)"/>
  <text x="196" y="30" font-size="13" fill="#3E2F20" font-weight="600">V</text>
  <line x1="228" y1="72" x2="185" y2="102" stroke="#A8763E" stroke-width="2.5" marker-end="url(#arrowAc-a)"/>
  <text x="178" y="118" font-size="13" fill="#A8763E" font-weight="600">Ac</text>
  <text x="45" y="225" font-size="11" fill="#5C4630">V é tangente à trajetória · Ac aponta sempre para o centro</text>
</svg>`,
            },
            {
              heading: "2. Força resultante no movimento circular",
              body: `Para o corpo percorrer uma trajetória circular, "alguém" deve puxá-lo para o centro. Esse "alguém" será chamado de resultante.

Fcp = m · V² / R

Importante: sempre que o movimento for circular e uniforme, a resultante das forças será a resultante centrípeta.
R = Rcp

* Sempre na bundinha
* Decomposição
* Ajuda – paralinha`,
            },
            {
              heading: "3. Exemplos",
              body: `I) Rampa
MCU → R = Rcp
P − N = m · V² / R

II) Looping
MCU → Rcp
N − P = m · V² / R

III) Globo da Morte
MCU → Rcp
R = Rcp
P + N = m · V² / R

Se o corpo perde o contato:
N = 0
Então:
P + 0 = m · V² / R
mg = m · V² / R
g = V² / R
V² = gR
V = √gR
→ Velocidade mínima para completar a volta.`,
              visual: `
<div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
  <div class="text-center">
    <svg viewBox="0 0 200 190" class="w-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrowP-r" markerWidth="7" markerHeight="7" refX="4" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#5C4630"/></marker>
        <marker id="arrowN-r" markerWidth="7" markerHeight="7" refX="4" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#A8763E"/></marker>
      </defs>
      <path d="M20,150 Q100,45 180,150" fill="none" stroke="#C9B18C" stroke-width="3"/>
      <circle cx="100" cy="65" r="6" fill="#3E2F20"/>
      <line x1="100" y1="65" x2="100" y2="112" stroke="#5C4630" stroke-width="2.5" marker-end="url(#arrowP-r)"/>
      <text x="106" y="105" font-size="12" fill="#5C4630" font-weight="600">P</text>
      <line x1="100" y1="65" x2="100" y2="32" stroke="#A8763E" stroke-width="2.5" marker-end="url(#arrowN-r)"/>
      <text x="106" y="30" font-size="12" fill="#A8763E" font-weight="600">N</text>
      <circle cx="100" cy="140" r="2.5" fill="#5C4630"/>
      <text x="108" y="145" font-size="10" fill="#5C4630">centro (Rcp)</text>
    </svg>
    <p class="text-xs text-bark/60 mt-1 font-medium">Rampa — P − N = mV²/R</p>
  </div>
  <div class="text-center">
    <svg viewBox="0 0 200 190" class="w-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrowP-l" markerWidth="7" markerHeight="7" refX="4" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#5C4630"/></marker>
        <marker id="arrowN-l" markerWidth="7" markerHeight="7" refX="4" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#A8763E"/></marker>
      </defs>
      <circle cx="100" cy="100" r="70" fill="none" stroke="#C9B18C" stroke-width="2" stroke-dasharray="5 4"/>
      <circle cx="100" cy="100" r="3" fill="#3E2F20"/>
      <text x="106" y="96" font-size="10" fill="#5C4630">centro</text>
      <circle cx="100" cy="170" r="6" fill="#3E2F20"/>
      <line x1="100" y1="170" x2="100" y2="122" stroke="#A8763E" stroke-width="2.5" marker-end="url(#arrowN-l)"/>
      <text x="106" y="140" font-size="12" fill="#A8763E" font-weight="600">N</text>
      <line x1="100" y1="170" x2="100" y2="185" stroke="#5C4630" stroke-width="2.5"/>
      <text x="106" y="188" font-size="12" fill="#5C4630" font-weight="600">P</text>
    </svg>
    <p class="text-xs text-bark/60 mt-1 font-medium">Looping — N − P = mV²/R</p>
  </div>
  <div class="text-center">
    <svg viewBox="0 0 200 190" class="w-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrowP-g" markerWidth="7" markerHeight="7" refX="4" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#5C4630"/></marker>
        <marker id="arrowN-g" markerWidth="7" markerHeight="7" refX="4" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#A8763E"/></marker>
      </defs>
      <circle cx="100" cy="100" r="70" fill="none" stroke="#C9B18C" stroke-width="2" stroke-dasharray="5 4"/>
      <circle cx="100" cy="100" r="3" fill="#3E2F20"/>
      <text x="106" y="118" font-size="10" fill="#5C4630">centro</text>
      <circle cx="100" cy="30" r="6" fill="#3E2F20"/>
      <line x1="92" y1="30" x2="92" y2="70" stroke="#5C4630" stroke-width="2.5" marker-end="url(#arrowP-g)"/>
      <text x="66" y="55" font-size="12" fill="#5C4630" font-weight="600">P</text>
      <line x1="108" y1="30" x2="108" y2="60" stroke="#A8763E" stroke-width="2.5" marker-end="url(#arrowN-g)"/>
      <text x="114" y="50" font-size="12" fill="#A8763E" font-weight="600">N</text>
    </svg>
    <p class="text-xs text-bark/60 mt-1 font-medium">Globo da Morte — P + N = mV²/R</p>
  </div>
</div>`,
            },
          ],
          quiz: [
            {
              q: "O que a aceleração tangencial (At) altera no movimento circular?",
              options: ["O valor da velocidade", "A direção da velocidade", "Apenas o sentido do movimento", "O raio da trajetória"],
              correct: 0,
            },
            {
              q: "Qual é a fórmula da aceleração tangencial?",
              options: ["At = ΔV / Δt", "At = V² / R", "At = m · V² / R", "At = √(gR)"],
              correct: 0,
            },
            {
              q: "A aceleração centrípeta (Ac) é responsável por alterar:",
              options: ["Apenas o valor da velocidade", "A direção e o sentido da velocidade", "A massa do corpo", "O tempo de percurso"],
              correct: 1,
            },
            {
              q: "Para onde aponta a aceleração centrípeta?",
              options: ["Para fora da trajetória", "Tangente à trajetória", "Para o centro da trajetória", "Não tem direção definida"],
              correct: 2,
            },
            {
              q: "Qual é a fórmula da aceleração centrípeta?",
              options: ["Ac = V² / R", "Ac = ΔV / Δt", "Ac = m · g", "Ac = √(gR)"],
              correct: 0,
            },
            {
              q: "No MCU, a força resultante sobre o corpo é chamada de:",
              options: ["Força tangencial", "Força centrípeta", "Força de atrito", "Força elástica"],
              correct: 1,
            },
            {
              q: "No exemplo da Rampa, qual é a equação da resultante centrípeta?",
              options: ["P − N = mV²/R", "N − P = mV²/R", "P + N = mV²/R", "N = mV²/R"],
              correct: 0,
            },
            {
              q: "No exemplo do Looping, a equação correta é:",
              options: ["P − N = mV²/R", "N − P = mV²/R", "P + N = mV²/R", "N = 0"],
              correct: 1,
            },
            {
              q: "No Globo da Morte, quando o corpo perde o contato (N = 0), qual é a velocidade mínima para completar a volta?",
              options: ["V = √(gR)", "V = gR", "V = g/R", "V = R/g"],
              correct: 0,
            },
            {
              q: "No Globo da Morte, antes de perder o contato, a equação da resultante centrípeta é:",
              options: ["P − N = mV²/R", "N − P = mV²/R", "P + N = mV²/R", "N − P = 0"],
              correct: 2,
            },
          ],
        },
      ],
    },
);
