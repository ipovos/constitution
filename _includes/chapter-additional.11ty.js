const {nav, a, article, header, p, main, h1} = require('../components/html');
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
      }),
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

      nav({
        class: 'bottom-nav space-top-2',
        children: bottomNavChildren,
      }),
    ]);
  }
}

module.exports = ChapterAdditional;
