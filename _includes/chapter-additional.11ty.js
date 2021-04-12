const {nav, a, article, main, h1} = require('../components/html');
const {render} = require('../components/render');

class ChapterAdditional {
  data() {
    return {
      layout: 'general.11ty.js',
      getTitle(data) {
        return `${data.title} | Конституція України`;
      },
    };
  }

  render(data) {
    const {chaptersSortedByNumber} = data.collections;

    return render([
      nav({
        class: 'top-nav',
        children: [
          a({
            href: '/',
            children: 'Конституція України',
          }),
        ],
      }),

      main({
        children: [
          article({
            children: [
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
        class: 'bottom-nav',
        children: [
          a({
            class: 'right',
            href: chaptersSortedByNumber[0].url,
            children: `Розділ ${chaptersSortedByNumber[0].data.number} ➡️`,
          }),
        ],
      }),
    ]);
  }
}

module.exports = ChapterAdditional;
