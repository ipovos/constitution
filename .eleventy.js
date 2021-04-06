module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection(
    'articlesSortedByNumber',
    function (collectionApi) {
      return collectionApi
        .getFilteredByTag('article')
        .sort((a, b) => a.data.number - b.data.number);
    },
  );

  eleventyConfig.addCollection(
    'chaptersSortedByNumber',
    function (collectionApi) {
      return collectionApi
        .getFilteredByTag('chapter')
        .sort((a, b) => a.data.number - b.data.number);
    },
  );
};
