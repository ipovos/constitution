const {nav, a, article, header, p, main, h1, footer} = require('../components/html');
const {TopNav} = require('../components/TopNav');
const {render} = require('../components/render');
const {createPageTitle} = require('../pages/utils');

class ChapterAdditional {
  data() {
    return {
      layout: 'general.11ty.js',
      getTitle(data) {
        return createPageTitle(data.title);
      },
    };
  }

  render(data) {
    const {chaptersSortedByNumber} = data.collections;

    const bottomNavChildren = [
      a({
        class: 'right',
        href: chaptersSortedByNumber[0].url,
        children: `Розділ ${chaptersSortedByNumber[0].data.numberRoman} →️`,
        rel: 'next',
      }),
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
                children: data.title,
              }),

              data.content,
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

module.exports = ChapterAdditional;
