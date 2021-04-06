const {Title} = require('../components/Title');
const {Link} = require('../components/Link');
const {p} = require('../components/html');
const {render} = require('../components/render');

class Chapter {
  data() {
    return {
      layout: 'general.11ty.js',
      getTitle(data) {
        return `Розділ ${data.number}. ${data.title} | Конституція України`;
      },
    };
  }

  render(data) {
    return render([
      Title({
        level: 1,
        children: `Розділ ${data.number}. ${data.title}`,
      }),
      (data.collections['chapter-' + data['number']] || []).map((article) => {
        return [
          Title({
            level: 2,
            children: Link({
              href: article.url,
              children: `Стаття ${article.data['number']}`,
            }),
          }),
          article.templateContent,
        ];
      }),
      p({
        children: Link({
          href: '/',
          children: 'Конституція України',
        }),
      }),
      data.number > 1
        ? p({
            children: Link({
              href: data.collections.chapter[data.number - 2].url,
              children: `⬅️ Розділ ${data.number - 1} `,
            }),
          })
        : null,
      data.number < data.collections.chapter.length
        ? p({
            children: Link({
              href: data.collections.chapter[data.number].url,
              children: `Розділ ${data.number + 1} ➡️`,
            }),
          })
        : null,
    ]);
  }
}

module.exports = Chapter;
