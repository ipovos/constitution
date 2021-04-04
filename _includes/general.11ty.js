class General {
  render(data) {
    const {getTitle} = data;
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
    <style>
body {
    margin: 0;
    padding: 0;
    font-family: Helvetica, sans-serif;
    line-height: 1.75;
}
main {
    max-width: 50rem;
    margin: 0 auto;
    padding: 3rem 1rem 0;
}

h1, h2, h3, h4, h5 {
    margin: 3rem 0 1.38rem;
    font-weight: 400;
    line-height: 1.3;
}
h1 {
    margin-top: 0;
    font-size: 1.802rem;
}

h2 {
    font-size: 1.602rem;
}

h3 {
    font-size: 1.424rem;
}

h4 {
    font-size: 1.266rem;
}

h5 {
    font-size: 1.125rem;
}

small, .text_small {
    font-size: 0.833rem;
}
    </style>
</head>
<body>
<main>
    ${data.content}
</main>
</body>
</html>
    `;
  }
}

module.exports = General;
