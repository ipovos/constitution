const {
  nav,
  a,
  article,
  header,
  footer,
  p,
  div,
  main,
  h1,
  h2,
} = require('../components/html');
const {TopNav} = require('../components/TopNav');
const {render} = require('../components/render');
const {createPageTitle} = require('../pages/utils');

class Chapter {
  data() {
    return {
      layout: 'general.11ty.js',
      getTitle(data) {
        return createPageTitle(`Розділ ${data.numberRoman}. ${data.title}`);
      },
    };
  }

  render(data) {
    const {chaptersSortedByNumber, preamble} = data.collections;
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

    const chapterArticlesSortedByNumber =
      data.collections['chapter-' + data.number]?.sort(
        (a, b) => a.data.number - b.data.number,
      ) ?? [];

    const bottomNavChildren = [
      data.number > chaptersSortedByNumber[0].data.number
        ? a({
            href: chaptersSortedByNumber[indexes.previous].url,
            children: `← Розділ ${
              chaptersSortedByNumber[indexes.previous].data.numberRoman
            } `,
            rel: 'prev',
          })
        : a({
            href: preamble[0].url,
            children: `←️ ${preamble[0].data.title}`,
            rel: 'prev',
          }),
      data.number <
      chaptersSortedByNumber[chaptersSortedByNumber.length - 1].data.number
        ? a({
            class: 'right',
            href: chaptersSortedByNumber[indexes.next].url,
            children: `Розділ ${
              chaptersSortedByNumber[indexes.next].data.numberRoman
            } →`,
            rel: 'next',
          })
        : null,
    ];

    return render([
      TopNav(),

      footer({
        class: 'space-top-1',
        children: nav({
          class: 'bottom-nav',
          children: bottomNavChildren,
        }),
      }),

      main({
        children: [
          article({
            children: [
              header({
                class: 'tc',
                children: [
                  p({
                    children: 'Конституція України',
                  }),
                ],
              }),

              h1({
                class: 'tc',
                children: `<span>Розділ ${data.numberRoman}</span> ${data.title}`,
              }),

              data.number === 7 || data.number === 15 ? div({children: data.content}) : null,

              chapterArticlesSortedByNumber.map(
                (constitutionArticle, index) => {
                  return article({
                    class: index > 0 ? 'space-top-2' : null,
                    children: [
                      h2({
                        children: a({
                          href: constitutionArticle.url,
                          children: `Стаття ${constitutionArticle.data.number}`,
                        }),
                      }),
                      constitutionArticle.templateContent,
                    ],
                  });
                },
              ),
            ],
          }),
        ],
      }),

      footer({
        class: 'bottom-nav space-top-2',
        children: bottomNavChildren,
      }),
    ]);
  }
}

module.exports = Chapter;
