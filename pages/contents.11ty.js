const {a, h1, ol, li, main, p} = require('../components/html');
const {TopNav} = require('../components/TopNav');
const {render} = require('../components/render');
const {createPageTitle} = require('./utils');

class Contents {
  data() {
    return {
      permalink: '/contents/index.html',
      layout: 'general.11ty.js',
      description: '',
      getTitle() {
        return createPageTitle('Зміст');
      },
    };
  }

  render(data) {
    return render([
      TopNav({current: 'contents'}),

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
            children: data.collections.chaptersSortedByNumber.map((chapter) => {
                const chapterArticlesSortedByNumber = data.collections['chapter-' + chapter.data.number]?.sort(
                  (a, b) => a.data.number - b.data.number,
                );

                return li({
                  children: [
                    a({
                      href: chapter.url,
                      children: chapter.data.title,
                    }),
                    chapterArticlesSortedByNumber ? ol({
                      class: 'list-none',
                      start: chapterArticlesSortedByNumber[0].data.number,
                      children: chapterArticlesSortedByNumber?.map((article) => li({
                        children: a({
                          href: article.url,
                          children: `Стаття ${article.data.number}`
                        }),
                      })),
                    }) : null,
                  ],
                })
              },
            ),
          }),
        ],
      }),
    ]);
  }
}

module.exports = Contents;
