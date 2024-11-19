import fluid, { extract } from "fluid-tailwind";

module.exports = {
  content: { files: ["./{src,dist}/**/*.{html,njk}"], extract },
  theme: {
    screens: { sm: "40rem", md: "48rem", lg: "64rem", xl: "80rem", "2xl": "96rem" },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },

      typography: ({ theme }) => ({
        gray: {
          css: {
            "--tw-prose-body": theme("colors.gray[900]"),
            "--tw-prose-headings": theme("colors.gray[900]"),
            "--tw-prose-lead": theme("colors.gray[900]"),
            "--tw-prose-links": theme("colors.blue[600]"),
            "--tw-prose-bold": theme("colors.gray[900]"),
            "--tw-prose-counters": theme("colors.gray[400]"),
            "--tw-prose-bullets": theme("colors.gray[400]"),
            "--tw-prose-hr": theme("colors.gray[300]"),
            "--tw-prose-quotes": theme("colors.gray[900]"),
            "--tw-prose-quote-borders": theme("colors.gray[900]"),
            "--tw-prose-captions": theme("colors.gray[900]"),
            "--tw-prose-code": theme("colors.gray[900]"),
            "--tw-prose-pre-code": theme("colors.gray[900]"),
            "--tw-prose-pre-bg": theme("colors.gray[200]"),
            "--tw-prose-th-borders": theme("colors.gray[300]"),
            "--tw-prose-td-borders": theme("colors.gray[300]"),
            "--tw-prose-invert-body": theme("colors.gray[200]"),
            "--tw-prose-invert-headings": theme("colors.gray[200]"),
            "--tw-prose-invert-lead": theme("colors.gray[200]"),
            "--tw-prose-invert-links": theme("colors.blue[400]"),
            "--tw-prose-invert-bold": theme("colors.gray[200]"),
            "--tw-prose-invert-counters": theme("colors.gray[500]"),
            "--tw-prose-invert-bullets": theme("colors.gray[500]"),
            "--tw-prose-invert-hr": theme("colors.gray[700]"),
            "--tw-prose-invert-quotes": theme("colors.gray[200]"),
            "--tw-prose-invert-quote-borders": theme("colors.gray[200]"),
            "--tw-prose-invert-captions": theme("colors.gray[200]"),
            "--tw-prose-invert-code": theme("colors.gray[300]"),
            "--tw-prose-invert-pre-code": theme("colors.gray[300]"),
            "--tw-prose-invert-pre-bg": theme("colors.gray[800]"),
            "--tw-prose-invert-th-borders": theme("colors.gray[700]"),
            "--tw-prose-invert-td-borders": theme("colors.gray[700]"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography"), fluid({ checkSC144: false })],
};
