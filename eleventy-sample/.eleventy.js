module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('style.css')
  return {
    passthroughFileCopy: true
  }
}
