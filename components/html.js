const {render} = require('./render');

function createHostedComponent(tagName) {
  return function ({children, ...otherProps}) {
    const attrs = Object.entries(otherProps)
      .filter(([key, value]) => value !== null && value !== undefined)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');

    return `<${tagName} ${attrs}>${render(children)}</${tagName}>`;
  };
}

module.exports = {
  a: createHostedComponent('a'),
  div: createHostedComponent('div'),
  p: createHostedComponent('p'),
  nav: createHostedComponent('nav'),
  main: createHostedComponent('main'),
  article: createHostedComponent('article'),
  section: createHostedComponent('section'),
  ul: createHostedComponent('ul'),
  ol: createHostedComponent('ol'),
  li: createHostedComponent('li'),

  h1: createHostedComponent('h1'),
  h2: createHostedComponent('h2'),
  h3: createHostedComponent('h3'),
};
