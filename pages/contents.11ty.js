const Title = require('../components/Title');
const Link = require('../components/Link');
const List = require('../components/List');
const ListItem = require('../components/ListItem');
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
      List({
        type: 'ordered',
        children: data.collections.chapter.map((chapter) =>
          ListItem({
            children: Link({
              href: chapter.url,
              children: chapter.data.title,
            }),
          }),
        ),
      }),
    ]);
  }
}

module.exports = Contents;
