const MAX_CONTENT_LENGTH = 160;

function getContent(article) {
  const content = article.template.frontMatter.content
    .replace(/\*{(.|\s)+}\*/gi, '')
    .trim();

  if (content.length > MAX_CONTENT_LENGTH) {
    return content.slice(0, MAX_CONTENT_LENGTH).concat('...');
  }

  return content;
}

function getUrl(article) {
  return article.url;
}

function getArticlesDataByIds(ids, articles) {
  return ids.reduce((acc, number) => {
    const article = articles.find((article) => article.data.number === number);

    return {
      ...acc,
      [number]: {
        url: getUrl(article),
        content: getContent(article),
      },
    };
  }, {});
}

module.exports = {
  getArticlesDataByIds,
};
