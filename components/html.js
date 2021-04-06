const {render} = require('./render');

function p({children}) {
  return `<p>${render(children)}</p>`;
}

module.exports = {p};
