const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const CleanCSS = require("clean-css");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/_includes/output.css");
  eleventyConfig.addPassthroughCopy("./fonts/inter-v18-latin-regular.woff2");
  eleventyConfig.addPassthroughCopy("./fonts/inter-v18-latin-700.woff2");
  eleventyConfig.addPassthroughCopy("./fonts/inter-v18-latin-900.woff2");

  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addPlugin(syntaxHighlight);
  
  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
