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
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${title}</title>
    <style>
body {
    margin: 0;
    padding: 0;
    font-family: Helvetica, sans-serif;
}
main {
    max-width: 50rem;
    margin: 0 auto;
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
