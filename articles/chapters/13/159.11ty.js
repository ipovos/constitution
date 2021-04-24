const {getArticlesDataByIds} = require('../../utils');

class Article {
  data() {
    return {
      number: 159,
      permalink: 'articles/159/index.html',
      description:
        'Законопроект про внесення змін до Конституції України розглядається Верховною Радою України за наявності висновку Конституційного Суду України щодо відповідності законопроекту вимогам статей 157 і 158 цієї Конституції.',
    };
  }

  render(data) {
    const articles = data.collections.article;
    const articlesNumbers = [157, 158];
    const articlesData = getArticlesDataByIds(articlesNumbers, articles);

    function Article(number, children = number) {
      return `<a href="${articlesData[number].url}" title="${articlesData[number].content}">${children}</a>`;
    }

    return `
    <p>Законопроект про внесення змін до Конституції України розглядається Верховною Радою України за наявності висновку Конституційного Суду України щодо відповідності законопроекту вимогам статей ${Article(
      157,
    )} і ${Article(158)} цієї Конституції.</p>`;
  }
}

module.exports = Article;
