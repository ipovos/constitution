const Title = require('../components/Title');
const Link = require('../components/Link');
const render = require('../components/render');

class Contents {
  data() {
    return {
      permalink: '/contents/index.html',
      layout: 'general.11ty.js',
      getTitle() {
        return 'Зміст | Конституція України';
      },
    };
  }

  render(data) {
    return render([
      Title({level: 1, children: 'Конституція України'}),
      `<ol>${render(
        data.collections.chapter.map(
          (chapter) =>
            `<li>${Link({
              href: chapter.url,
              children: chapter.data.title,
            })}</li>`,
        ),
      )}</ol>`,
    ]);
  }
}

module.exports = Contents;
