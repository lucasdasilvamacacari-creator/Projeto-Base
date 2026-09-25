window.DB_SUBJECTS = window.DB_SUBJECTS || [];
window.DB_SUBJECTS.push(
    {
      id: "fisica-b",
      name: "Física B",
      emoji: "⚙️",
      contents: [
        {
          id: "energia-mecanica-trabalho",
          title: "Energia Mecânica e Trabalho",
          sections: [
            {
              heading: "1. Energia mecânica",
              body: `Eₘ = energia mecânica
Eₚ = energia potencial
E𝑐 = energia cinética

Fórmula:
Eₘ = Eₚ + E𝑐

Unidades de medida:
Eₘ, Eₚ e E𝑐 → joule (J)`,
            },
            {
              heading: "2. Energia cinética",
              body: `E𝑐 = energia cinética
m = massa
v = velocidade (m/s)

Fórmula:
E𝑐 = m · v² / 2

Unidades de medida:
E𝑐 → joule (J)
m → quilograma (kg)
v → metro por segundo (m/s)`,
            },
            {
              heading: "3. Energia potencial gravitacional",
              body: `Eₚg = energia potencial gravitacional
m = massa (kg)
g = aceleração gravitacional (m/s²)
h = altura (m)

Fórmula:
Eₚg = m · g · h

Unidades de medida:
Eₚg → joule (J)
m → quilograma (kg)
g → metro por segundo ao quadrado (m/s²)
h → metro (m)`,
            },
            {
              heading: "4. Energia potencial elástica",
              body: `Eₚe = energia potencial elástica
K = constante elástica da mola

Fórmula:
Eₚe = k · x² / 2

Unidades de medida:
Eₚe → joule (J)
K → newton por metro (N/m)
x (deformação da mola) → metro (m)`,
            },
            {
              heading: "5. Trabalho",
              body: `τ = trabalho
F = força aplicada
ΔS = deslocamento
θ = ângulo entre a força e o deslocamento

Fórmula:
τ = F · ΔS · cos θ

Unidades de medida:
τ → joule (J)
F → newton (N)
ΔS → metro (m)
θ → grau (°)`,
            },
            {
              heading: "6. Casos particulares do trabalho",
              body: `Caso 1 — 0° ≤ θ < 90°
Fórmula:
τ = F · ΔS · cos θ
• cos θ > 0
• τ > 0
• MOTOR

Caso 2 — θ = 90°
Fórmula anotada:
τ = F · ΔS · cos 90°
• cos 90° = 0
• τ = 0
• NULO

Caso 3 — 90° < θ ≤ 180°
Fórmula:
τ = F · ΔS · cos θ
• cos θ < 0
• τ < 0
• RESISTENTE`,
              visual: `
<div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
  <div class="text-center">
    <svg viewBox="0 0 140 100" class="w-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arDS-1" markerWidth="7" markerHeight="7" refX="4" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#5C4630"/></marker>
        <marker id="arF-1" markerWidth="7" markerHeight="7" refX="4" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#A8763E"/></marker>
      </defs>
      <circle cx="15" cy="80" r="3" fill="#3E2F20"/>
      <line x1="15" y1="80" x2="128" y2="80" stroke="#5C4630" stroke-width="2.5" marker-end="url(#arDS-1)"/>
      <text x="60" y="94" font-size="10" fill="#5C4630">ΔS</text>
      <line x1="15" y1="80" x2="73.9" y2="52.5" stroke="#A8763E" stroke-width="2.5" marker-end="url(#arF-1)"/>
      <text x="76" y="46" font-size="10" fill="#A8763E" font-weight="600">F</text>
    </svg>
    <p class="text-xs text-bark/60 mt-1 font-medium">Caso 1 — Motor (0° ≤ θ &lt; 90°)</p>
  </div>
  <div class="text-center">
    <svg viewBox="0 0 140 100" class="w-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arDS-2" markerWidth="7" markerHeight="7" refX="4" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#5C4630"/></marker>
        <marker id="arF-2" markerWidth="7" markerHeight="7" refX="4" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#A8763E"/></marker>
      </defs>
      <circle cx="15" cy="80" r="3" fill="#3E2F20"/>
      <line x1="15" y1="80" x2="128" y2="80" stroke="#5C4630" stroke-width="2.5" marker-end="url(#arDS-2)"/>
      <text x="60" y="94" font-size="10" fill="#5C4630">ΔS</text>
      <line x1="15" y1="80" x2="15" y2="20" stroke="#A8763E" stroke-width="2.5" marker-end="url(#arF-2)"/>
      <text x="20" y="18" font-size="10" fill="#A8763E" font-weight="600">F</text>
    </svg>
    <p class="text-xs text-bark/60 mt-1 font-medium">Caso 2 — Nulo (θ = 90°)</p>
  </div>
  <div class="text-center">
    <svg viewBox="0 0 140 100" class="w-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arDS-3" markerWidth="7" markerHeight="7" refX="4" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#5C4630"/></marker>
        <marker id="arF-3" markerWidth="7" markerHeight="7" refX="4" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#A8763E"/></marker>
      </defs>
      <circle cx="65" cy="80" r="3" fill="#3E2F20"/>
      <line x1="65" y1="80" x2="130" y2="80" stroke="#5C4630" stroke-width="2.5" marker-end="url(#arDS-3)"/>
      <text x="95" y="94" font-size="10" fill="#5C4630">ΔS</text>
      <line x1="65" y1="80" x2="17.4" y2="52.5" stroke="#A8763E" stroke-width="2.5" marker-end="url(#arF-3)"/>
      <text x="4" y="47" font-size="10" fill="#A8763E" font-weight="600">F</text>
    </svg>
    <p class="text-xs text-bark/60 mt-1 font-medium">Caso 3 — Resistente (90° &lt; θ ≤ 180°)</p>
  </div>
</div>`,
            },
            {
              heading: "📏 Unidades de medida — resumo",
              body: `Referência rápida de todas as grandezas usadas neste conteúdo (Sistema Internacional).`,
              visual: `
<div class="overflow-x-auto">
  <table class="w-full text-sm border-collapse">
    <thead>
      <tr class="border-b-2 border-espresso/70">
        <th class="text-left py-2 pr-3 font-display text-bark">Grandeza</th>
        <th class="text-left py-2 pr-3 font-display text-bark">Símbolo</th>
        <th class="text-left py-2 font-display text-bark">Unidade (SI)</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-sand/60"><td class="py-2 pr-3 text-bark/80">Energia mecânica</td><td class="py-2 pr-3 text-bark/80">Eₘ</td><td class="py-2 text-bark/80">joule (J)</td></tr>
      <tr class="border-b border-sand/60"><td class="py-2 pr-3 text-bark/80">Energia potencial</td><td class="py-2 pr-3 text-bark/80">Eₚ</td><td class="py-2 text-bark/80">joule (J)</td></tr>
      <tr class="border-b border-sand/60"><td class="py-2 pr-3 text-bark/80">Energia cinética</td><td class="py-2 pr-3 text-bark/80">E𝑐</td><td class="py-2 text-bark/80">joule (J)</td></tr>
      <tr class="border-b border-sand/60"><td class="py-2 pr-3 text-bark/80">Massa</td><td class="py-2 pr-3 text-bark/80">m</td><td class="py-2 text-bark/80">quilograma (kg)</td></tr>
      <tr class="border-b border-sand/60"><td class="py-2 pr-3 text-bark/80">Velocidade</td><td class="py-2 pr-3 text-bark/80">v</td><td class="py-2 text-bark/80">metro por segundo (m/s)</td></tr>
      <tr class="border-b border-sand/60"><td class="py-2 pr-3 text-bark/80">Aceleração gravitacional</td><td class="py-2 pr-3 text-bark/80">g</td><td class="py-2 text-bark/80">metro por segundo² (m/s²)</td></tr>
      <tr class="border-b border-sand/60"><td class="py-2 pr-3 text-bark/80">Altura</td><td class="py-2 pr-3 text-bark/80">h</td><td class="py-2 text-bark/80">metro (m)</td></tr>
      <tr class="border-b border-sand/60"><td class="py-2 pr-3 text-bark/80">Energia potencial elástica</td><td class="py-2 pr-3 text-bark/80">Eₚe</td><td class="py-2 text-bark/80">joule (J)</td></tr>
      <tr class="border-b border-sand/60"><td class="py-2 pr-3 text-bark/80">Constante elástica</td><td class="py-2 pr-3 text-bark/80">K</td><td class="py-2 text-bark/80">newton por metro (N/m)</td></tr>
      <tr class="border-b border-sand/60"><td class="py-2 pr-3 text-bark/80">Deformação da mola</td><td class="py-2 pr-3 text-bark/80">x</td><td class="py-2 text-bark/80">metro (m)</td></tr>
      <tr class="border-b border-sand/60"><td class="py-2 pr-3 text-bark/80">Trabalho</td><td class="py-2 pr-3 text-bark/80">τ</td><td class="py-2 text-bark/80">joule (J)</td></tr>
      <tr class="border-b border-sand/60"><td class="py-2 pr-3 text-bark/80">Força</td><td class="py-2 pr-3 text-bark/80">F</td><td class="py-2 text-bark/80">newton (N)</td></tr>
      <tr class="border-b border-sand/60"><td class="py-2 pr-3 text-bark/80">Deslocamento</td><td class="py-2 pr-3 text-bark/80">ΔS</td><td class="py-2 text-bark/80">metro (m)</td></tr>
      <tr><td class="py-2 pr-3 text-bark/80">Ângulo</td><td class="py-2 pr-3 text-bark/80">θ</td><td class="py-2 text-bark/80">grau (°)</td></tr>
    </tbody>
  </table>
</div>`,
            },
          ],
          quiz: [
            { q: "Qual é a fórmula da energia mecânica?", options: ["Eₘ = Eₚ + E𝑐", "Eₘ = Eₚ · E𝑐", "Eₘ = Eₚ − E𝑐", "Eₘ = E𝑐 / Eₚ"], correct: 0 },
            { q: "Qual é a fórmula da energia cinética?", options: ["E𝑐 = m · v² / 2", "E𝑐 = m · v / 2", "E𝑐 = m² · v / 2", "E𝑐 = m · g · h"], correct: 0 },
            { q: "Qual é a fórmula da energia potencial gravitacional?", options: ["Eₚg = m · g · h", "Eₚg = m · v² / 2", "Eₚg = k · x² / 2", "Eₚg = F · ΔS"], correct: 0 },
            { q: "Nessa fórmula, em qual unidade a altura (h) deve ser medida, no SI?", options: ["Metro (m)", "Quilômetro (km)", "Centímetro (cm)", "Newton (N)"], correct: 0 },
            { q: "Qual é a fórmula da energia potencial elástica?", options: ["Eₚe = k · x² / 2", "Eₚe = m · g · h", "Eₚe = m · v² / 2", "Eₚe = F · ΔS · cos θ"], correct: 0 },
            { q: "Qual é a unidade de medida da constante elástica (K), no SI?", options: ["Newton por metro (N/m)", "Joule (J)", "Metro por segundo (m/s)", "Quilograma (kg)"], correct: 0 },
            { q: "Qual é a fórmula geral do trabalho?", options: ["τ = F · ΔS · cos θ", "τ = F / ΔS", "τ = F + ΔS", "τ = m · v² / 2"], correct: 0 },
            { q: "No Caso 1 do trabalho (0° ≤ θ < 90°), como ele é classificado?", options: ["Motor", "Nulo", "Resistente", "Indefinido"], correct: 0 },
            { q: "No Caso 2 do trabalho (θ = 90°), qual é o resultado e a classificação?", options: ["τ = 0, trabalho nulo", "τ > 0, trabalho motor", "τ < 0, trabalho resistente", "τ é indefinido"], correct: 0 },
            { q: "No Caso 3 do trabalho (90° < θ ≤ 180°), como ele é classificado?", options: ["Resistente", "Motor", "Nulo", "Indefinido"], correct: 0 },
          ],
        },
      ],
    },
);
