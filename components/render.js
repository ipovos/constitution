function render(children) {
  if (typeof children === 'string') {
    return children;
  }

  if (Array.isArray(children)) {
    return children.map((item) => render(item)).join('');
  }

  throw new Error('unsupported children type');
}

module.exports = render;
