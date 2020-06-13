// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue"

export default function(Vue, { router, head, isClient }) {
  Vue.component("Layout", DefaultLayout)

  head.meta.push({
    name: "keywords",
    content: "#todo SEO"
  })

  head.meta.push({
    name: "description",
    content: "#todo SEO."
  })

  head.meta.push({
    name: "author",
    content: "luseeds"
  })

  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap"
  })
}
