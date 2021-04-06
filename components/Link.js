const {render} = require('./render');

function Link({href, children}) {
  return `<a href="${href}">${render(children)}</a>`;
}

module.exports = {Link};
