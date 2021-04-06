const {Title} = require('../components/Title');
const {render} = require('../components/render');

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
      Title({
        level: 1,
        children: `Стаття ${data.number}`,
      }),
      data.content,
      `<p><a href="/">⬅ Конституція України</a></p>`,
      data.number > 1
        ? `<p><a href="/articles/${data.number - 1}">⬅️ Стаття ${
            data.number - 1
          }</a></p>`
        : null,
      data.number < data.collections.article.length
        ? `<p><a href="/articles/${data.number + 1}">➡️ Стаття ${
            data.number + 1
          }</a></p>`
        : null,
    ]);
  }
}

module.exports = Article;
