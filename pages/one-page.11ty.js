const {nav, a, main, article, h1, h2, h3} = require('../components/html');
const {render} = require('../components/render');

class Main {
  data() {
    return {
      permalink: '/one-page/index.html',
      layout: 'general.11ty.js',
      getTitle() {
        return 'Конституція України';
      },
    };
  }

  render(data) {
    return render([
      nav({
        class: 'top-nav',
        children: a({
          href: '/',
          children: 'Зміст',
        }),
      }),

      main({
        children: article({
          children: [
            h1({
              class: 'tc',
              children: 'Конституція України',
            }),
            data.collections.chapter
              .sort((a, b) => a.data.number - b.data.number)
              .map((chapter, index) => {
                return article({
                  class: index > 0 ? 'space-top-2' : null,
                  children: [
                    h2({
                      class: 'tc',
                      children: a({
                        href: chapter.url,
                        children: `<span>Розділ ${chapter.data.number}</span> ${chapter.data.title}`,
                      }),
                    }),
                    (data.collections[`chapter-${chapter.data.number}`] || [])
                      .sort((a, b) => a.data.number - b.data.number)
                      .map((constitutionArticle) => {
                        return article({
                          children: [
                            h3({
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
