const {a, header, nav, h1, article, main, p} = require('../components/html');
const {TopNav} = require('../components/TopNav');
const {render} = require('../components/render');
const {createPageTitle} = require('../pages/utils');

class Article {
  data() {
    return {
      layout: 'general.11ty.js',
      getTitle(data) {
        return createPageTitle(`Стаття ${data.number}`);
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

    const {articlesSortedByNumber, preamble} = data.collections;
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

    const bottomNavChildren = [
      data.number > articlesSortedByNumber[0].data.number
        ? a({
            href: articlesSortedByNumber[indexes.previous].url,
            children: `←️ Стаття ${
              articlesSortedByNumber[indexes.previous].data.number
            } `,
          })
        : a({
            href: preamble[0].url,
            children: `←️ ${preamble[0].data.title}`,
          }),
      data.number <
      articlesSortedByNumber[articlesSortedByNumber.length - 1].data.number
        ? a({
            class: 'right',
            href: articlesSortedByNumber[indexes.next].url,
            children: `Стаття ${
              articlesSortedByNumber[indexes.next].data.number
            } →`,
          })
        : null,
    ];

    return render([
      TopNav(),

      nav({
        class: 'bottom-nav space-top-1',
        children: bottomNavChildren,
      }),

      main({
        children: [
          article({
            children: [
              header({
                class: 'tc',
                children: [
                  p({
                    children: [
                      'Конституція України <br>',
                      a({
                        href: parentChapter.url,
                        children: `Розділ ${parentChapter.data.numberRoman}. ${parentChapter.data.title} `,
                      }),
                    ],
                  }),
                ],
              }),

              h1({
                class: 'tc',
                children: [`Стаття ${data.number}`],
              }),

              data.content,
            ],
          }),
        ],
      }),

      nav({
        class: 'bottom-nav space-top-2',
        children: bottomNavChildren,
      }),
    ]);
  }
}

module.exports = Article;
