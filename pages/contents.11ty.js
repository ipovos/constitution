const {nav, a, h1, ol, li, main, p} = require('../components/html');
const {render} = require('../components/render');

class Contents {
  data() {
    return {
      permalink: '/',
      layout: 'general.11ty.js',
      getTitle() {
        return 'Зміст | Конституція України';
      },
    };
  }

  render(data) {
    return render([
      nav({
        class: 'top-nav',
        children: a({href: '/one-page', children: 'Однією сторінкою'}),
      }),

      main({
        children: [
          h1({class: 'tc', children: 'Конституція України'}),
          p({
            class: 'first-li',
            children: a({
              href: data.collections.preamble[0].url,
              children: data.collections.preamble[0].data.title,
            }),
          }),
          ol({
            children: data.collections.chaptersSortedByNumber.map((chapter) =>
              li({
                children: a({
                  href: chapter.url,
                  children: chapter.data.title,
                }),
              }),
            ),
          }),
        ],
      }),
    ]);
  }
}

module.exports = Contents;
