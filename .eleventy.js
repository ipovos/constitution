module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection(
    'articlesSortedByNumber',
    function (collectionApi) {
      return collectionApi.getFilteredByTag('article').sort(function (a, b) {
        return a.data.number - b.data.number;
      });
    },
  );
};
