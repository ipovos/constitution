const {getArticlesDataByIds} = require('../../utils');

class Article {
  data() {
    return {
      number: 112,
      permalink: 'articles/112/index.html',
    };
  }

  render(data) {
    const articles = data.collections.article;
    const articlesNumbers = [108, 109, 110, 111, 106];
    const articlesData = getArticlesDataByIds(articlesNumbers, articles);

    function Article(number, children = number) {
      return `<a href="${articlesData[number].url}" title="${articlesData[number].content}">${children}</a>`;
    }

    return `
<p>У разі дострокового припинення повноважень Президента України відповідно до статей ${Article(
      108,
    )}, ${Article(109)}, ${Article(110)}, ${Article(111)} цієї Конституції
виконання обов'язків Президента України на період до обрання і вступу на пост нового Президента України покладається на
Голову Верховної Ради України. Голова Верховної Ради України в період виконання ним обов'язків Президента України не
може здійснювати повноваження, передбачені пунктами 2, 6-8, 10-13, 22, 24, 25, 27, 28 ${Article(
      106,
      'статті 106',
    )} Конституції України.</p>
    `;
  }
}

module.exports = Article;
