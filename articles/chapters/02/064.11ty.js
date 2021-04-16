const {getArticlesDataByIds} = require('../../utils');

class Article {
  data() {
    return {
      number: 64,
      permalink: 'articles/64/index.html',
    };
  }

  render(data) {
    const articles = data.collections.article;
    // prettier-ignore
    const articlesNumbers = [24, 25, 27, 28, 29, 40, 47, 51, 52, 55, 56, 57, 58, 59, 60, 61, 62, 63];
    const articlesData = getArticlesDataByIds(articlesNumbers, articles);

    return `<p>Конституційні права і свободи людини і громадянина не можуть бути обмежені, крім випадків, передбачених Конституцією
України.</p>

<p>В умовах воєнного або надзвичайного стану можуть встановлюватися окремі обмеження прав і свобод із зазначенням строку
дії цих обмежень. Не можуть бути обмежені права і свободи, передбачені статтями ${articlesNumbers
      .map(
        (number) =>
          `<a href="${articlesData[number].url}" title="${articlesData[number].content}">${number}</a>`,
      )
      .join(', ')} цієї Конституції.</p>`;
  }
}

module.exports = Article;
