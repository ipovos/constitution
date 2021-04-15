const {nav, a} = require('./html');
const {render} = require('./render');

const MAIN_PAGE_LINK = render(
  a({
    href: '/',
    children: 'Головна',
  }),
);

const ALL_ARTICLES_PAGE_LINK = render(
  a({
    href: '/all',
    children: 'Всі статті',
  }),
);

const ABOUT_PAGE_LINK = render(
  a({
    href: '/about',
    children: 'Про сайт',
  }),
);

function TopNav() {
  return render(
    nav({
      class: 'top-nav',
      children: [MAIN_PAGE_LINK, ALL_ARTICLES_PAGE_LINK, ABOUT_PAGE_LINK],
    }),
  );
}

function TopNavAbout() {
  return render(
    nav({
      class: 'top-nav',
      children: [MAIN_PAGE_LINK, ALL_ARTICLES_PAGE_LINK],
    }),
  );
}

function TopNavAll() {
  return render(
    nav({
      class: 'top-nav',
      children: [MAIN_PAGE_LINK, ABOUT_PAGE_LINK],
    }),
  );
}

function TopNavMain() {
  return render(
    nav({
      class: 'top-nav',
      children: [ALL_ARTICLES_PAGE_LINK, ABOUT_PAGE_LINK],
    }),
  );
}

module.exports = {TopNav, TopNavAbout, TopNavAll, TopNavMain};
