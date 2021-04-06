function render(children) {
  if (typeof children === 'string') {
    return children;
  }

  if (Array.isArray(children)) {
    return children.map((item) => render(item)).join('');
  }

  if (
    typeof children === 'boolean' ||
    typeof children === 'undefined' ||
    children === null
  ) {
    return '';
  }

  throw new Error('unsupported children type');
}

module.exports = {render};
