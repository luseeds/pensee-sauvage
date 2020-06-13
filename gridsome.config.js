// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require("tailwindcss")
const purgecss = require("@fullhuman/postcss-purgecss")

const postcssPlugins = [tailwind()]

if (process.env.NODE_ENV === "production") postcssPlugins.push(purgecss())

module.exports = {
  siteName: "Pensée sauvage",
  siteDescription: "Il est temps d'agir.",
  siteUrl: "https://pensee-sauvage.luseeds.com",
  plugins: [
    // {
    //   use: "@gridsome/source-filesystem",
    //   options: {
    //     typeName: "Project",
    //     path: "./content/projects/**/*.md"
    //   }
    // },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 600000
      }
    }
  ],
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link"
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule("svg")
    svgRule.uses.clear()
    svgRule.use("vue-svg-loader").loader("vue-svg-loader")
  }
}
