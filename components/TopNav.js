const {nav, a} = require('./html');
const {render} = require('./render');

function TopNav({current} = {}) {
  return render(
    nav({
      class: 'top-nav',
      children: [
        MainPageLink({current: current === 'main'}),
        AllArticlesPageLink({current: current === 'all'}),
        AboutPageLink({current: current === 'about'}),
      ],
    }),
  );
}

function MainPageLink({current = false} = {}) {
  return render(
    a({
      class: current ? 'current' : null,
      href: current ? null : '/',
      children: 'Головна',
    }),
  );
}

function AllArticlesPageLink({current = false} = {}) {
  return render(
    a({
      class: current ? 'current' : null,
      href: current ? null : '/all',
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
