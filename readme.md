# 📖 Revisão de Lucas M — Plataforma Pessoal de Estudos

Uma plataforma web moderna e responsiva para organizar, estudar e revisar conteúdos de forma interativa. Acesse suas matérias, estude os conteúdos e teste seu conhecimento com quizzes de revisão.

---

## ✨ Características

- 📚 **15 matérias** com conteúdos organizados por tema
- 🧠 **Quizzes interativos** para testar conhecimento
- 📱 **Totalmente responsivo** — funciona perfeitamente em celular, tablet e desktop
- 🔄 **Modo offline** — funciona como aplicativo PWA instalável
- 🎨 **Design moderno** — interface limpa e profissional
- ⚡ **Rápido** — carregamento otimizado
- 🏠 **Instalável** — adicione à tela inicial como um app

---

## 📂 Estrutura do Projeto

```
plataforma-estudos/
│
├── index.html              # Página principal (renderização + lógica)
├── sw.js                   # Service Worker (funcionalidade offline)
├── manifest.json           # Configuração PWA
│
├── icon-192.png            # Ícone do app (192×192px)
├── icon-512.png            # Ícone do app (512×512px)
│
└── materias/               # Conteúdos por matéria
    ├── literatura.js
    ├── geografia.js
    ├── historia.js
    ├── analise-linguistica.js
    ├── filosofia.js
    ├── sociologia.js
    ├── biologia-a.js
    ├── biologia-b.js
    ├── quimica-a.js
    ├── quimica-b.js
    ├── fisica-a.js
    ├── fisica-b.js
    ├── matematica-a.js
    ├── matematica-b.js
    └── educacao-financeira.js
```

---

## 🚀 Como Usar

### Acessar Online

Abra o link no navegador: [seu-link-aqui](seu-link-aqui)

### Instalar como Aplicativo (PWA)

1. Abra o site em um navegador moderno (Chrome, Firefox, Safari, Edge)
2. Clique no ícone de "Instalar" ou no menu do navegador
3. Selecione "Instalar aplicativo"
4. O app será adicionado à sua tela inicial
5. Funciona offline automaticamente ✅

### Rodar Localmente

#### Requisitos
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Opcional: [VS Code](https://code.visualstudio.com/) + extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

#### Passos

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/plataforma-estudos.git
   cd plataforma-estudos
   ```

2. **Abra com Live Server:**
   - Abra a pasta em VS Code
   - Clique com botão direito em `index.html`
   - Selecione "Open with Live Server"
   - Uma aba do navegador abre em `http://localhost:5500`

   **OU use Python:**
   ```bash
   # Python 3
   python -m http.server 8000

   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   Depois acesse `http://localhost:8000`

3. **Pronto!** 🎉 Explore as matérias e teste os quizzes.

---

## 📚 Matérias Disponíveis

| Matéria | Conteúdos |
|---------|-----------|
| 📖 Literatura | Arcadismo, Romantismo |
| 🌎 Geografia | Climatologia |
| 🏛️ História | Grandes Navegações, Renascimento Cultural, Reformas Religiosas, Arte Renascentista |
| 🗣️ Análise Linguística | Figuras de Linguagem, Variação Linguística, Sentido e Signo, Variação de Modalidade |
| 🏺 Filosofia | Aristóteles |
| 🧑‍🤝‍🧑 Sociologia | Max Weber |
| 🧬 Biologia A | Fungos, Briófitas, Ciclo da Vida, Pteridófitas, Gimnospermas |
| 🧬 Biologia B | Código Genético |
| 🧪 Química A | Estequiometria |
| ⚗️ Química B | Ácidos, Bases |
| 🌀 Física A | Dinâmica dos MCU |
| ⚙️ Física B | Energia Mecânica e Trabalho |
| 📊 Matemática A | Funções, Função Quadrática |
| 📐 Matemática B | Semelhança de Triângulos, Triângulo Retângulo |
| 💸 Educação Financeira | Crédito e Juros Compostos |

---

## 🎓 Como Estudar

1. **Escolha uma matéria** na página inicial
2. **Selecione um conteúdo** para aprender
3. **Leia as explicações** com seus conceitos e exemplos
4. **Teste seu conhecimento** respondendo o quiz com 10 questões
5. **Veja sua pontuação** e revise os pontos com dúvida
6. **Repita quantas vezes quiser** — o quiz embaralha as questões a cada tentativa

---

## 🔧 Como Adicionar Novo Conteúdo

### Adicionar Conteúdo a uma Matéria Existente

1. Abra o arquivo da matéria em `materias/seu-tema.js`
2. Localize o array `contents`
3. Adicione um novo objeto no final do array:

```javascript
{
  id: "novo-conteudo",
  title: "Título do Novo Conteúdo",
  sections: [
    {
      heading: "Subtítulo opcional",
      body: `Texto explicativo aqui...`
    },
    {
      heading: "Outro tópico",
      body: `Mais explicações...`
    }
  ],
  quiz: [
    { q: "Pergunta 1?", options: ["A", "B", "C", "D"], correct: 0 },
    { q: "Pergunta 2?", options: ["A", "B", "C", "D"], correct: 1 },
    // ... até 10 perguntas no total
  ]
}
```

4. **Commit e Push:**
   ```bash
   git add .
   git commit -m "Add: novo conteúdo em tal matéria"
   git push
   ```

5. **Aguarde 1-2 minutos** para o GitHub Pages atualizar

### Criar uma Nova Matéria

1. Crie um novo arquivo `materias/novo-tema.js`
2. Siga o modelo:

```javascript
window.DB_SUBJECTS = window.DB_SUBJECTS || [];
window.DB_SUBJECTS.push({
  id: "novo-tema",
  name: "Nome da Matéria",
  emoji: "📚",
  contents: [
    {
      id: "primeiro-conteudo",
      title: "Título",
      sections: [
        { heading: "Conceito", body: "Explicação..." }
      ],
      quiz: [
        { q: "?", options: ["A", "B", "C", "D"], correct: 0 }
        // ... 10 perguntas
      ]
    }
  ]
});
```

3. Abra `index.html` e adicione antes do `<script>` principal:
   ```html
   <script src="materias/novo-tema.js"></script>
   ```

4. Commit, push e aguarde atualização

---

## 🛠️ Estrutura Técnica

### Tecnologias

- **HTML5** — Estrutura semântica
- **CSS3 (Tailwind)** — Estilos responsivos e modernos
- **JavaScript Vanilla** — Sem dependências externas
- **Service Worker** — Cache e funcionalidade offline
- **PWA** — Instalável como aplicativo

### Como Funciona

1. **Renderização:** JavaScript renderiza os conteúdos dinamicamente no navegador
2. **Rotas:** Navegação via `#hash` (compatível com GitHub Pages)
3. **Quizzes:** Sistema de perguntas com feedback instantâneo
4. **Offline:** Service Worker cacheia todos os assets automaticamente
5. **PWA:** Manifesto permite instalação como app nativo

---

## 📱 Compatibilidade

| Navegador | Suporte |
|-----------|---------|
| Chrome | ✅ Completo |
| Firefox | ✅ Completo |
| Safari | ✅ Completo |
| Edge | ✅ Completo |
| Opera | ✅ Completo |

**Recomendado:** Última versão de qualquer navegador moderno

---

## 🔒 Privacidade e Dados

- ✅ **Sem servidor backend** — Tudo roda localmente no navegador
- ✅ **Sem coleta de dados** — Suas respostas não são enviadas para ninguém
- ✅ **Sem cookies de rastreamento** — Sua privacidade é respeitada
- ✅ **Sem publicidades** — Plataforma limpa e focada no aprendizado

---

## 📝 Notas Importantes

- Cada conteúdo deve ter **exatamente 10 questões** no quiz
- Use a estrutura de pastas: não mude a organização sem atualizar as referências
- Testar localmente com Live Server antes de fazer commit
- O site atualiza no GitHub Pages em **1-2 minutos** após o push

---

## 🐛 Reportar Problemas

Se encontrar:
- Conteúdo com erro
- Questão do quiz incorreta
- Bug na interface
- Problema de compatibilidade

Abra uma [Issue](https://github.com/seu-usuario/plataforma-estudos/issues) descrevendo o problema e como reproduzir.

---

## 📄 Licença

Este projeto é de uso pessoal. Sinta-se livre para estudar, aprender e compartilhar.

---

## 🎯 Objetivo

Uma plataforma simples, rápida e sem distrações para revisar e consolidar conhecimento. Estude quando quiser, onde quiser, como quiser.

**Bom estudo!** 📚✨

---

*Última atualização: Setembro de 2026*
