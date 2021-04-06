const render = require('./render');

const typeToTagName = {
  ordered: 'ol',
  unordered: 'ul',
};

function List({type, children}) {
  const tagName = typeToTagName[type];

  if (typeof tagName === 'undefined') {
    throw new Error('unsupported list type');
  }

  return `<${tagName}>${render(children)}</${tagName}>`;
}

module.exports = List;
