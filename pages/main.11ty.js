const {a, h1, ol, li, main, p} = require('../components/html');
const {TopNavMain} = require('../components/TopNav');
const {render} = require('../components/render');
const {createPageTitle} = require('./utils');

class Contents {
  data() {
    return {
      permalink: '/',
      layout: 'general.11ty.js',
      getTitle() {
        return createPageTitle('Головна');
      },
    };
  }

  render(data) {
    return render([
      TopNavMain(),

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
            class: 'list-roman',
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
