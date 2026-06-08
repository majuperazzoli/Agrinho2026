# Agrinho2026

Agro Forte — campanha informativa sobre práticas de agricultura sustentável e impacto climático.

## Descrição

Site estático informativo que apresenta conteúdo educativo sobre práticas agrícolas sustentáveis, consumo consciente e ações para reduzir impactos climáticos. O objetivo é sensibilizar produtores e consumidores sobre escolhas que fortalecem o campo e preservam o meio ambiente.

## Funcionalidades

- Página inicial com hero, seções de "Sobre", "Impacto" e "Como participar".
- Cards com tópicos: produção inteligente, consumo equilibrado e clima resiliente.
- Seção de fatos climáticos com botão para alternar mensagens (comportamento em `script.js`).
- Layout responsivo para dispositivos móveis e desktop.

## Arquivos principais

- `index.html`: marcação HTML do site.
- `style.css`: estilos principais e tokens do design system.
- `script.js`: pequenos comportamentos (ex.: mudar fatos climáticos).

## Design System (resumo)

- Paleta de cores:
	- Primária (CTAs): `#0066CC` — botões e links de ação.
	- Acento: `#00BFA6` — destaques e estados de hover.
	- Fundo: `#F6F8FA` — background da página.
	- Texto: `#0F1724` — cor do texto primário.
- Tipografia (Google Fonts):
	- Títulos: `Poppins` (pesos 600/700).
	- Corpo: `Inter` (400/500/600).
- Tokens CSS: definidos em `:root` dentro de `style.css` (`--color-primary`, `--font-heading`, `--font-body`, etc.).

## Como rodar localmente

Opções rápidas para visualizar o site localmente:

1. Abrir `index.html` diretamente no navegador.
2. Servidor simples (recomendado):

```bash
python3 -m http.server 8000
# ou
npx serve .
```

Em seguida abra `http://localhost:8000`.

## Notas de acessibilidade e uso

- Verifique contraste de cores caso altere variáveis; priorize legibilidade para textos longos.
- Mantenha pesos de fonte coerentes: `Poppins` para títulos e `Inter` para corpo.

## Contribuições

Pull requests são bem-vindos. Para pequenas alterações, edite os arquivos locais e abra um PR descrevendo a mudança.

## Licença

Conteúdo sob a licença fornecida no repositório.
