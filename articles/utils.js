function getContent(article) {
  return article.template.frontMatter.content.replace(/{(.|\s)+}/gi, '').trim();
}

function getUrl(article) {
  return article.url;
}

module.exports = {
  getContent,
  getUrl,
};
