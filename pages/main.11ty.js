const Title = require('../components/Title');
const Link = require('../components/Link');
const render = require('../components/render');

class Main {
  data() {
    return {
      permalink: '/',
      layout: 'general.njk',
    };
  }

  render(data) {
    // console.log(data.collections);
    // console.log(data.collections['chapter-01'][0])
    return render([
      Title({
        level: 1,
        children: 'Конституція України',
      }),
      data.collections.chapter.map((chapter) => {
        return [
          Title({
            level: 2,
            children: Link({
              href: chapter.url,
              children: `Розділ ${chapter.data.number}. ${chapter.data.title}`,
            }),
          }),
          data.collections[`chapter-${chapter.data.string}`].map((article) => {
            return [
              Title({
                level: 3,
                children: Link({
                  href: article.url,
                  children: `Стаття ${article.data.number}`,
                }),
              }),
              article.templateContent,
            ];
          }),
        ];
      }),
    ]);
  }
}

module.exports = Main;
