class GeneralAll {
  render(data) {
    const {getTitle, description} = data;
    const title =
      typeof getTitle === 'function' ? getTitle(data) : 'Конституція України';

    return `
<!doctype html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${title}</title>
    <meta name="description" content="${description}">
    <style>
:root {
    --px-font-size: 16px;
    --fr-line-height: 1.625;
    --rem-line-height: 1.625rem;
    --color-divider-main: #aaa;
    --color-divider-secondary: #e6e6e6;
}

*, *:after, *:before {
    box-sizing: border-box;
}

html {
    font-family: Helvetica, sans-serif;
    font-size: var(--px-font-size);
    line-height: var(--fr-line-height);
}

body {
    margin: 0;
    padding: 0;
}

a {
    color: #1d01ed;
}

a.current {
    color: inherit;
}

.top-nav {
    display: flex;
    justify-content: center;
    border-bottom: 1px solid var(--color-divider-secondary);
    margin-top: var(--rem-line-height);
    margin-bottom: -1px;
    padding-bottom: var(--rem-line-height);
}

.top-nav a:nth-child(n+2) {
    margin-left: 1rem;
}

.top-nav a:nth-child(n+2):before {
    position: relative;
    left: -.5rem;
    content: '';
    border-left: 1px solid var(--color-divider-main);
}

.page {
    max-width: 40rem;
    margin: 0 auto;
    padding: 0 1rem calc(5 * var(--rem-line-height));
}

main em {
    color: #555;
}

h1, h2, h3 {
    font-weight: 400;
}


h1 {
    margin-top: var(--rem-line-height);
    margin-bottom: var(--rem-line-height);
    font-size: 1.953rem;
    line-height: 1.6641;
}

h2, .h2 {
    margin-top: var(--rem-line-height);
    margin-bottom: var(--rem-line-height);
    font-size: 1.563rem;
    line-height: 2.0793;
}

h1 span, h2 span {
    display: block;
    font-size: 1rem;
    line-height: var(--fr-line-height);
}

h3 {
    font-size: 1.25rem;
    line-height: 1.3;
}

p {
    margin-top: var(--rem-line-height);
    margin-bottom: var(--rem-line-height);;
}

ol, ul {
    padding-left: 2rem;
}

.tc {
    text-align: center;
}

.space-top-2 {
    margin-top: calc(2 * var(--rem-line-height));
}

.space-top-3 {
    margin-top: calc(3 * var(--rem-line-height));
}

@media (max-width: 760px) {
    h1 {
        font-size: 1.602rem;
        line-height: 2.03;
    }

    h2, .h2 {
        font-size: 1.125rem;
        line-height: 1.4445;
    }

    h3 {
        font-size: 1rem;
        line-height: var(--fr-line-height);
    }
}

    </style>
</head>
<body>
<div class="page">
    ${data.content}
</div>
</body>
</html>
    `;
  }
}

module.exports = GeneralAll;
