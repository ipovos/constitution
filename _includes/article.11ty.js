const render = require('../components/render');

class Article {
  data() {
    return {
      layout: 'general.11ty.js',
      getTitle(data) {
        return `Стаття ${data.number} | Конституція України`;
      },
    };
  }

  render(data) {
    return render([
      data.content,
      `<p><a href="/">⬅ Конституція України</a></p>`,
    ]);
  }
}

module.exports = Article;
