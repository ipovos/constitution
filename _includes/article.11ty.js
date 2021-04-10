const {a, nav, h1, article, main} = require('../components/html');
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
    const chapterNumber = Number(
      data.tags.find((tag) => tag.includes('chapter')).split('-')[1],
    );
    const parentChapter = data.collections.chapter.find(
      (chapter) => chapter.data.number === chapterNumber,
    );

    const {articlesSortedByNumber} = data.collections;
    const indexes = articlesSortedByNumber.reduce((acc, current, index) => {
      if (current.data.number === data.number) {
        return {
          previous: index - 1,
          current: index,
          next: index + 1,
        };
      }

      return acc;
    }, null);

    return render([
      nav({
        class: 'top-nav',
        children: [
          a({
            href: '/',
            children: 'Конституція України',
          }),
          ' / ',
          a({
            href: parentChapter.url,
            children: `Розділ ${parentChapter.data.number}. ${parentChapter.data.title}`,
          }),
        ],
      }),

      main({
        children: [
          article({
            children: [
              h1({
                class: 'tc',
                children: `Стаття ${data.number}`,
              }),
              data.content,
            ],
          }),
        ],
      }),

      nav({
        class: 'bottom-nav',
        children: [
          data.number > articlesSortedByNumber[0].data.number
            ? a({
                href: articlesSortedByNumber[indexes.previous].url,
                children: `⬅️ Стаття ${
                  articlesSortedByNumber[indexes.previous].data.number
                } `,
              })
            : null,
          data.number <
          articlesSortedByNumber[articlesSortedByNumber.length - 1].data.number
            ? a({
                class: 'right',
                href: articlesSortedByNumber[indexes.next].url,
                children: `Стаття ${
                  articlesSortedByNumber[indexes.next].data.number
                } ➡️`,
              })
            : null,
        ],
      }),
    ]);
  }
}

module.exports = Article;
