const {nav, a} = require('./html');
const {render} = require('./render');

function TopNav({current} = {}) {
  return render(
    nav({
      class: 'top-nav',
      children: [
        MainPageLink({disabled: current === 'main'}),
        AllArticlesPageLink({disabled: current === 'all'}),
        AboutPageLink({disabled: current === 'about'}),
      ],
    }),
  );
}

function MainPageLink({disabled = false} = {}) {
  return render(
    a({
      href: disabled ? null : '/',
      children: 'Головна',
    }),
  );
}

function AllArticlesPageLink({disabled = false} = {}) {
  return render(
    a({
      href: disabled ? null : '/all',
      children: 'Всі статті',
    }),
  );
}

function AboutPageLink({disabled = false} = {}) {
  return render(
    a({
      href: disabled ? null : '/about',
      children: 'Про сайт',
    }),
  );
}

module.exports = {TopNav};
