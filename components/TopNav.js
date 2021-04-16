const {nav, a} = require('./html');
const {render} = require('./render');

function TopNav({current} = {}) {
  return render(
    nav({
      class: 'top-nav',
      children: [
        AllArticlesPageLink({current: current === 'all'}),
        ContentsPageLink({current: current === 'contents'}),
        AboutPageLink({current: current === 'about'}),
      ],
    }),
  );
}

function ContentsPageLink({current = false} = {}) {
  return render(
    a({
      class: current ? 'current' : null,
      href: current ? null : '/contents',
      children: 'Зміст',
    }),
  );
}

function AllArticlesPageLink({current = false} = {}) {
  return render(
    a({
      class: current ? 'current' : null,
      href: current ? null : '/',
      children: 'Всі статті',
    }),
  );
}

function AboutPageLink({current = false} = {}) {
  return render(
    a({
      class: current ? 'current' : null,
      href: current ? null : '/about',
      children: 'Про сайт',
    }),
  );
}

module.exports = {TopNav};
