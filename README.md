# ResolvAÍ — site (landing page)

Página estática publicada no GitHub Pages em https://resolvaioficial.com.br
Identidade visual: verde-oliva `#4A5D23`, verde-folha `#7A9936`, laranja `#F2821F` só em botões, Montserrat + Inter.

- `index.html` — a página (classes Tailwind).
- `style.css` — CSS gerado (Tailwind 3). Para regerar após mudar classes: `npx tailwindcss -c tailwind.config.js -i in.css -o style.css --minify` (config em `tailwind.config.js`, entrada `in.css`).
- `site.js` — número do WhatsApp (`NUMERO`), formulário que abre o WhatsApp e avaliações.
- `avaliacoes.json` — avaliações reais. Vazio = a seção não aparece.
- `fonts/`, `fonts.css`, `simbolo*.png`, `logo-completa.png`, `icone-*.png` — fontes e imagens.
- Foto do topo: hoje vem do Unsplash; se não carregar, aparece o fundo verde com o símbolo. Para fixar uma foto própria, salve em `img/` e troque o `src` de `#heroImg`.
- `CNAME` — domínio.
