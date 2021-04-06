const {render} = require('./render');

function ListItem({children}) {
  return `<li>${render(children)}</li>`;
}

module.exports = {ListItem};
