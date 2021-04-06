const {render} = require('./render');

function Title({level = 1, children}) {
  if (level > 6) {
    throw new Error('title level cannot be higher than 6');
  }

  return `<h${level}>${render(children)}</h${level}>`;
}

module.exports = {Title};
