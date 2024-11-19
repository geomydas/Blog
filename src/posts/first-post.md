---
title: My First Post!
---

Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse soluta, quaerat alias itaque laborum minima quos quae, autem sapiente adipisci, voluptatum minus provident modi quod ad exercitationem nulla in incidunt.

## Lorem ipsum

Lorem ipsum dolor sit amet consectetur adipisicing elit. A eaque quam quod fugiat sit recusandae unde mollitia facere facilis tempore deserunt voluptatibus asperiores soluta dolorum, accusamus autem eligendi quasi quas.

- Lorem ipsum
- Lorem ipsum
- Lorem ipsum

Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis cupiditate tempore facere, minima enim ut alias repudiandae ducimus, dolorem earum excepturi vel quia adipisci veniam? Perspiciatis iusto repellendus molestias. At.

1. Lorem ipsum
2. Lorem ipsum
3. Lorem ipsum

`Lorem` **ipsum** _dolor_ **_sit_** amet consectetur adipisicing elit. Facilis cupiditate tempore facere, minima enim ut alias repudiandae ducimus, dolorem earum excepturi vel quia adipisci veniam? Perspiciatis iusto [repellendus molestias.](At.)

---

```
const CleanCSS = require("clean-css");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/_includes/output.css");
  eleventyConfig.addPassthroughCopy("./fonts/inter-v18-latin-regular.woff2 ");
  eleventyConfig.addPassthroughCopy("./fonts/inter-v18-latin-700.woff2");
  eleventyConfig.addPassthroughCopy("./fonts/inter-v18-latin-900.woff2");

  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
```

| Lorem | ipsum |
| ----- | ----- |
| Lorem | ipsum |
| Lorem | ipsum |
| Lorem | ipsum |