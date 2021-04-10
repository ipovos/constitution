const BASE_FONT_SIZE = 16;
const LINE_HEIGHT = 26;
const LINE_HEIGHT_FRACTION = LINE_HEIGHT / BASE_FONT_SIZE;

const IS_GRID_VISIBLE = !true;

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
*,*:after,*:before {
    box-sizing: border-box;
}

* {
    /*background: hsla(0deg, 100%, 50%, 0.25);*/
}

html {
    font-size: ${BASE_FONT_SIZE}px;
    font-family: Helvetica, sans-serif;
    line-height: ${LINE_HEIGHT_FRACTION};
}

body {
    margin: 0;
    padding: 0;
    ${
      IS_GRID_VISIBLE
        ? `background: repeating-linear-gradient(transparent, transparent ${
            LINE_HEIGHT - 1
          }px, #ccc ${LINE_HEIGHT - 1}px, #ccc ${LINE_HEIGHT}px)`
        : ''
    };
}

.container {
    max-width: 40rem;
    margin: 0 auto;
}

.bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    max-width: 40rem;
    margin: 0 auto;
    padding: 1rem 0;

    display: flex;
    justify-content: space-between;
    background: linear-gradient(0, #fff, rgba(255, 255, 255, 0.85) 70%, rgba(255, 255, 255, 0.2));
}

.bottom-nav a {
    padding: 0 1rem;
}

.bottom-nav .right {
    margin-left: auto;
}

.top-nav {
    margin-top: ${LINE_HEIGHT_FRACTION}rem;
    margin-bottom: -1px;
    padding-bottom: ${LINE_HEIGHT_FRACTION}rem;
    border-bottom: 1px solid #e6e6e6;
}

.page {
    max-width: 40rem;
    margin: 0 auto;
    padding: 0 1rem ${LINE_HEIGHT_FRACTION * 2}rem;
}

h1, h2, h3 {
    font-weight: 400;
}

h1 {
    margin-top: ${LINE_HEIGHT_FRACTION}rem;
    margin-bottom: ${LINE_HEIGHT_FRACTION}rem;
    font-size: 1.953rem;
    line-height: 1.6641;
}

h2, .h2 {
    margin-top: ${LINE_HEIGHT_FRACTION}rem;
    margin-bottom: ${LINE_HEIGHT_FRACTION}rem;
    font-size: 1.563rem;
    line-height: 2.0793;
}

h1 span, h2 span {
    display: block;
    font-size: 1rem;
    line-height: ${LINE_HEIGHT_FRACTION};
}

h3 {
    font-size: 1.25rem;
    line-height: 1.3;
}

small, .text_small {
    font-size: 0.833rem;
}

p {
    margin-top: 1.625rem;
    margin-bottom: 1.625rem;;
}

ol, ul {
    padding-left: 2rem;
}

.tc {
    text-align: center;
}

.space-top-2 {
    margin-top: ${LINE_HEIGHT_FRACTION * 2}rem;
}

.space-top-3 {
    margin-top: ${LINE_HEIGHT_FRACTION * 3}rem;
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
        line-height: ${LINE_HEIGHT_FRACTION};
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

module.exports = General;
