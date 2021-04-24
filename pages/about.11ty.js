const {h1, main, p, a} = require('../components/html');
const {TopNav} = require('../components/TopNav');
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
      TopNav({current: 'about'}),

      main({
        children: [
          h1({class: 'tc', children: 'Про сайт'}),
          p({
            children: 'Для розвитку України потрібно розвивати українців.',
          }),
          p({
            children:
              'Виховання правової культури — важлива частина зони росту громадян України.',
          }),
          p({
            children:
              'Цей сайт має на меті покращити знання Конституції України серед усіх, хто знає українську мову, завдяки релевантній пошукової видачі, швидкості відкриття та зручності користування.',
          }),
          p({
            children: [
              'Джерело тексту Конституціі — ',
              a({
                href:
                  'https://zakon.rada.gov.ua/laws/show/254%D0%BA/96-%D0%B2%D1%80#Text',
                children:
                  'Документ 254к/96-ВР, чинний, поточна редакція — Редакція від 01.01.2020, підстава - 27-IX',
              }),
            ],
          }),
          p({
            children: [
              'Контактна пошта: ',
              a({
                href: 'mailto:contact@constitution.in.ua',
                children: 'contact@constitution.in.ua',
              }),
            ],
          }),
          p({
            children:
              'На фавіконці шрифт Source Sans Pro <br><em>Copyright 2010, 2012, 2014 Adobe Systems Incorporated (<a href="http://www.adobe.com/">http://www.adobe.com/</a>), with Reserved Font Name Source. SIL Open Font License, 1.1 (<a href="http://scripts.sil.org/OFL">http://scripts.sil.org/OFL</a>)</em>',
          }),
        ],
      }),
    ]);
  }
}

module.exports = About;
