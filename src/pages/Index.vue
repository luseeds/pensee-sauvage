<template>
  <Layout>
    <index-intro />
    <index-mountains />
    <index-youtube />
    <index-description />
  </Layout>
</template>

<script>
import IndexIntro from "~/components/Index/IndexIntro"
import IndexMountains from "~/components/Index/IndexMountains"
import IndexYoutube from "~/components/Index/IndexYoutube"
import IndexDescription from "~/components/Index/IndexDescription"

export default {
  metaInfo: {
    title: "Home"
  },
  components: {
    IndexIntro,
    IndexMountains,
    IndexYoutube,
    IndexDescription
  }
}
</script>
