const {render} = require('./render');

function Title({level = 1, children}) {
  return `<h${level}>${render(children)}</h${level}>`;
}

module.exports = {Title};
