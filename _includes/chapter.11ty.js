const {Title} = require('../components/Title');
const {Link} = require('../components/Link');
const {p} = require('../components/html');
const {render} = require('../components/render');

class Chapter {
  data() {
    return {
      layout: 'general.11ty.js',
      getTitle(data) {
        return `Розділ ${data.number}. ${data.title} | Конституція України`;
      },
    };
  }

  render(data) {
    const {chaptersSortedByNumber} = data.collections;
    const indexes = chaptersSortedByNumber.reduce((acc, current, index) => {
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
        children: `Розділ ${data.number}. ${data.title}`,
      }),
      (
        data.collections['chapter-' + data['number']]?.sort(
          (a, b) => a.data.number - b.data.number,
        ) ?? []
      ).map((article) => {
        return [
          Title({
            level: 2,
            children: Link({
              href: article.url,
              children: `Стаття ${article.data['number']}`,
            }),
          }),
          article.templateContent,
        ];
      }),
      p({
        children: Link({
          href: '/',
          children: 'Конституція України',
        }),
      }),
      data.number > chaptersSortedByNumber[0].data.number
        ? p({
            children: Link({
              href: chaptersSortedByNumber[indexes.previous].url,
              children: `⬅️ Розділ ${
                chaptersSortedByNumber[indexes.previous].data.number
              } `,
            }),
          })
        : null,
      data.number <
      chaptersSortedByNumber[chaptersSortedByNumber.length - 1].data.number
        ? p({
            children: Link({
              href: chaptersSortedByNumber[indexes.next].url,
              children: `Розділ ${
                chaptersSortedByNumber[indexes.next].data.number
              } ➡️`,
            }),
          })
        : null,
    ]);
  }
}

module.exports = Chapter;
