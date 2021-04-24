const {a, main, article, h1, h2, h3, div} = require('../components/html');
const {TopNav} = require('../components/TopNav');
const {render} = require('../components/render');
const {createPageTitle} = require('./utils');

class Main {
  data() {
    return {
      permalink: '/',
      layout: 'general-all.11ty.js',
      description:
        'Згідно Конституції Україна є суверенна і незалежна, демократична, соціальна, правова держава. Україна є унітарною державою. Україна є республікою...',
      getTitle() {
        return createPageTitle('Всі статті');
      },
    };
  }

  render(data) {
    return render([
      TopNav({current: 'all'}),

      main({
        children: article({
          children: [
            h1({
              class: 'tc',
              children: 'Конституція України',
            }),
            article({
              children: [
                h2({
                  class: 'tc',
                  children: a({
                    href: data.collections.preamble[0].url,
                    children: data.collections.preamble[0].data.title,
                  }),
                }),
                data.collections.preamble[0].templateContent,
              ],
            }),
            data.collections.chapter
              .sort((a, b) => a.data.number - b.data.number)
              .map((chapter) => {
                if (chapter.data.number === 7) {
                  console.log(chapter.templateContent)
                }
                return article({
                  class: 'space-top-3',
                  children: [
                    h2({
                      class: 'tc',
                      children: a({
                        href: chapter.url,
                        children: `<span>Розділ ${chapter.data.numberRoman}</span> ${chapter.data.title}`,
                      }),
                    }),

                    chapter.data.number === 7 || chapter.data.number === 15
                      ? div({children: chapter.templateContent})
                      : null,

                    (data.collections[`chapter-${chapter.data.number}`] || [])
                      .sort((a, b) => a.data.number - b.data.number)
                      .map((constitutionArticle, innerIndex) => {
                        return article({
                          class: innerIndex > 0 ? 'space-top-2' : null,
                          children: [
                            h3({
                              class: 'h2',
                              children: a({
                                href: constitutionArticle.url,
                                children: `Стаття ${constitutionArticle.data.number}`,
                              }),
                            }),
                            constitutionArticle.templateContent,
                          ],
                        });
                      }),
                  ],
                });
              }),
          ],
        }),
      }),
    ]);
  }
}

module.exports = Main;
