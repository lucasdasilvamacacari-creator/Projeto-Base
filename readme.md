# Revisão de Lucas M

Plataforma pessoal de estudos para o Ensino Médio. Reúne matérias organizadas em conteúdos, cada um com explicação teórica, ilustrações didáticas e um treino de múltipla escolha com correção imediata — para revisar antes de provas sem depender de vários materiais espalhados.

## Estado atual

- **15 matérias**, **29 conteúdos**, **697 perguntas de treino**
- Humanas → Ciências → Exatas, nessa ordem na tela inicial
- Instalável como aplicativo (PWA), com uso offline básico

| Matéria | Conteúdos |
|---|---|
| 📖 Literatura | 2 |
| 🌎 Geografia | 1 |
| 🏛️ História | 4 |
| 🗣️ Análise Linguística | 4 |
| 🏺 Filosofia | 1 |
| 🧑‍🤝‍🧑 Sociologia | 1 |
| 🧬 Biologia A | 5 |
| 🧬 Biologia B | 1 |
| 🧪 Química-A | 1 |
| ⚗️ Química B | 2 |
| 🌀 Física-A | 1 |
| ⚙️ Física B | 1 |
| 📊 Matemática A | 2 |
| 📐 Matemática B | 2 |
| 💸 Educação Financeira | 1 |

*(Física-A/B, Química-A/B, Biologia A/B e Matemática A/B são pares de matérias **independentes** — mesmo nome parecido, conteúdo nunca se mistura entre elas.)*

## Tecnologias

- **HTML + Tailwind CSS via CDN** — sem etapa de build; as classes são processadas em tempo real no navegador.
- **JavaScript puro** — sem framework, sem bibliotecas externas.
- **PWA** — instalável pelo Chrome (manifest + service worker), com cache offline dos arquivos da aplicação e busca sempre pela versão mais nova ao abrir o app.

Não há dependência de Node/npm, servidor ou banco de dados. É um site 100% estático.

## Arquitetura

O projeto é intencionalmente **um único arquivo `index.html`** — essa é a decisão de arquitetura vigente, escolhida por manter o deploy no Vercel simples (subir os 5 arquivos abaixo e pronto, sem risco de pasta faltando ou caminho quebrado). Dentro desse arquivo, duas partes bem separadas:

1. **`const DB = { subjects: [...] }`** — todo o conteúdo de estudo: cada matéria é um objeto com `id`, `name`, `emoji` e uma lista de `contents`; cada conteúdo tem `sections` (explicação + ilustrações em HTML/SVG) e `quiz` (perguntas de múltipla escolha). Isso é ~90% do arquivo.
2. **O motor da aplicação** (~400 linhas, no fim do arquivo) — roteador por hash (`#/materia/x/conteudo/y`), os três renderizadores de tela (início, matéria, conteúdo) e o engine do treino (embaralhamento de perguntas/alternativas, correção, pontuação, botão de recomeçar).

> Já existiu uma tentativa de separar isso em múltiplos arquivos/pastas (ES Modules). Funcionava localmente, mas quebrou no deploy real por causa de como os arquivos foram publicados — por isso o projeto foi revertido para arquivo único e permanece assim propositalmente.

## Arquivos do projeto

```
index.html        → toda a aplicação: layout, dados (DB) e motor
manifest.json      → manifesto do PWA
sw.js               → service worker (cache offline + atualização automática)
icon-192.png         → ícone do app
icon-512.png          → ícone do app
```

Os 5 arquivos ficam **todos na raiz** do repositório — sem subpastas. É só isso que precisa ser publicado.

## Como rodar localmente

Como não há build, basta abrir o `index.html` no navegador — ou, para simular exatamente o ambiente de produção:

```bash
python3 -m http.server 8000
# depois acesse http://localhost:8000/index.html
```

## Como publicar

`git push` para o repositório conectado ao Vercel. Sem passo de build, sem configuração de "Root Directory" além da raiz padrão.

## Como o conteúdo é organizado

Cada conteúdo segue a mesma estrutura, para manter consistência visual e pedagógica em toda a plataforma:

```
Matéria → Conteúdo → Seções (explicação + ilustração quando ajuda) → Treino (múltipla escolha)
```

Regras seguidas na hora de alimentar o site com conteúdo novo:

- O texto enviado é preservado — nunca reescrito ou resumido para "melhorar".
- Ilustrações (diagramas, tabelas, fluxogramas) só entram quando ajudam a visualizar o conceito, nunca por decoração.
- Treino padrão: **11 perguntas** de múltipla escolha (4 alternativas, 1 correta) por conteúdo novo — alguns conteúdos mais antigos têm mais perguntas por terem sido pedidos explicitamente maiores.
- As perguntas e as alternativas são embaralhadas a cada tentativa, exceto quando o conteúdo marca `noShuffle: true` (usado para listas fixas de exercícios de prova).
