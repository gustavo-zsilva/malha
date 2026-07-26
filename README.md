# MALHA — catálogo de camisetas

Site estático (HTML + CSS + JS puro, sem build, sem dependências) pro seu catálogo
de camisetas — Linha Básica e Linha Premium.

## Como publicar no GitHub Pages

1. Crie um repositório novo no GitHub (ex: `catalogo-camisetas`).
2. Suba os arquivos desta pasta (`index.html`, `style.css`, `script.js`, `assets/`)
   direto na raiz do repositório — não dentro de uma subpasta.
3. No repositório: **Settings → Pages → Source** → selecione a branch `main` e a pasta `/root`.
4. Espere 1–2 minutos. Seu site vai ficar em `https://seu-usuario.github.io/catalogo-camisetas/`.

Sem Vercel, sem `npm install`, sem configuração — é só HTML/CSS/JS servido direto.

## O que editar antes de publicar

### 1. Seu número de WhatsApp
Abra `script.js` e edite as duas primeiras linhas do arquivo:

```js
const CONFIG = {
  whatsappNumber: "5548999999999", // troque pelo seu número: DDI+DDD+numero, só dígitos
  whatsappMessage: "Oi! Vi o catálogo de camisetas e queria fazer um pedido.",
};
```

Troque `5548999999999` pelo seu número real (55 = Brasil, depois DDD, depois o número,
tudo junto sem espaço, traço ou parênteses).

### 2. Nome do site
O nome atual é "MALHA" (só um placeholder). Pra trocar:
- em `index.html`, troque o texto dentro de `<a class="nav__brand">MALHA<span class="nav__dot">.</span></a>`
- em `index.html`, troque a tag `<title>`

### 3. Preços, cores e produtos
Todo o catálogo (nomes, preços, cores, tabelas de medida) fica no topo do `script.js`,
nos arrays `basicaProducts` e `premiumProducts`. Cada produto é um objeto simples —
copie um bloco existente pra adicionar um produto novo, ou edite os valores direto.

### 4. Fotos
As fotos ficam em `assets/img/`. Pra trocar a foto padrão de um produto, basta
substituir o arquivo (mantendo o mesmo nome) ou apontar `img: "assets/img/novo-arquivo.jpg"`
pro novo arquivo no `script.js`.

### 5. Fotos por cor (clique na bolinha de cor)
Cada bolinha de cor já é clicável e tenta carregar uma foto específica daquela cor.
Enquanto a foto não existir, a bolinha só dá uma piscadinha vermelha e nada quebra —
o site continua mostrando a foto padrão normalmente.

Pra ativar a foto de uma cor específica, basta criar o arquivo no caminho:

```
assets/img/colors/<produto-em-slug>/<cor-em-slug>.jpg
```

O "slug" é o nome em minúsculo, sem acento, com espaço virando hífen. Exemplos:

| Produto (name no script.js) | Cor | Caminho do arquivo |
|---|---|---|
| Oversized | Azul Marinho | `assets/img/colors/oversized/azul-marinho.jpg` |
| Camiseta Básica | Vermelho Claro | `assets/img/colors/camiseta-basica/vermelho-claro.jpg` |
| Cropped Regata de Ribana | Verde Musgo | `assets/img/colors/cropped-regata-de-ribana/verde-musgo.jpg` |
| Baby Look Estonada | Azul Marinho | `assets/img/colors/baby-look-estonada/azul-marinho.jpg` |

Regra geral: pegue o `name` do produto e o nome da cor exatamente como estão no
`script.js`, passe os dois pelo mesmo processo (minúsculo, sem acento, espaço → hífen)
e essa é a pasta/arquivo esperado. Assim que o arquivo existir nesse caminho, o clique
na cor já troca a foto sozinho — não precisa mexer em nenhum código.

## Estrutura

```
index.html     → estrutura da página
style.css      → todo o visual (conceito de "etiqueta de camiseta")
script.js      → catálogo de produtos + toda a interatividade
assets/img/    → fotos dos produtos (extraídas dos seus PDFs)
```

## Sobre o design

O cartão de cada produto é desenhado como uma etiqueta de camiseta (a mesma que
aparece na foto real da peça pronta): tem o furinho no topo, vira como se fosse a
etiqueta sendo virada pra mostrar a tabela de medidas, e usa fonte de "carimbo" pros
preços e especificações — igual a etiqueta de lavagem de verdade.

Sem dependências externas além das fontes do Google Fonts (Anton, Space Mono, Inter),
carregadas via CDN no `<head>` do `index.html`.
