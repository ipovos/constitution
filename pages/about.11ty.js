const {a, h1, main, p} = require('../components/html');
const {TopNavAbout} = require('../components/TopNav');
const {render} = require('../components/render');
const {createPageTitle} = require('./utils');

class About {
  data() {
    return {
      permalink: '/about/index.html',
      layout: 'general.11ty.js',
      getTitle() {
        return createPageTitle('Про сайт');
      },
    };
  }

  render(data) {
    return render([
      TopNavAbout(),

      main({
        children: [
          h1({class: 'tc', children: 'Про сайт'}),
          p({
            children: 'Подумаю потім',
          }),
        ],
      }),
    ]);
  }
}

module.exports = About;