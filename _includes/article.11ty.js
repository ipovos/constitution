const {Title} = require('../components/Title');
const {Link} = require('../components/Link');
const {p} = require('../components/html');
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
      Title({
        level: 1,
        children: `Стаття ${data.number}`,
      }),
      data.content,
      p({
        children: [
          Link({
            href: '/',
            children: 'Конституція України',
          }),
          ' / ',
          Link({
            href: parentChapter.url,
            children: `Розділ ${parentChapter.data.number}. ${parentChapter.data.title}`,
          }),
        ],
      }),
      data.number > articlesSortedByNumber[0].data.number
        ? p({
            children: Link({
              href: articlesSortedByNumber[indexes.previous].url,
              children: `⬅️ Стаття ${
                articlesSortedByNumber[indexes.previous].data.number
              } `,
            }),
          })
        : null,
      data.number <
      articlesSortedByNumber[articlesSortedByNumber.length - 1].data.number
        ? p({
            children: Link({
              href: articlesSortedByNumber[indexes.next].url,
              children: `Стаття ${
                articlesSortedByNumber[indexes.next].data.number
              } ➡️`,
            }),
          })
        : null,
    ]);
  }
}

module.exports = Article;
