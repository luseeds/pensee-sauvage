<template>
  <div>
    <section
      class="mountains overflow-hidden max-w-6xl my-0 mx-auto text-6xl text-center"
      ref="mountains"
    >
      <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
        <mask id="m">
          <g class="cloud1">
            <rect fill="#fff" width="100%" height="801" y="799" />
            <image
              xlink:href="../../../content/assets/mountains/cloud1Mask.jpg"
              width="1200"
              height="800"
            />
          </g>
        </mask>
        <image
          class="sky"
          xlink:href="../../../content/assets/mountains/sky.jpg"
          width="1200"
          height="590"
        />
        <image
          class="mountBg"
          xlink:href="../../../content/assets/mountains/mountBg.png"
          width="1200"
          height="800"
        />
        <image
          class="mountMg"
          xlink:href="../../../content/assets/mountains/mountMg.png"
          width="1200"
          height="800"
        />
        <image
          class="cloud2"
          xlink:href="../../../content/assets/mountains/cloud2.png"
          width="1200"
          height="800"
        />
        <image
          class="mountFg"
          xlink:href="../../../content/assets/mountains/mountFg.png"
          width="1200"
          height="800"
        />
        <image
          class="cloud1"
          xlink:href="../../../content/assets/mountains/cloud1.png"
          width="1200"
          height="800"
        />
        <image
          class="cloud3"
          xlink:href="../../../content/assets/mountains/cloud3.png"
          width="1200"
          height="800"
        />
        <text fill="#fff">
          <tspan x="600" y="1.7em">RÉVEILLONS</tspan>
          <tspan x="600" y="2.7em">NOUS</tspan>
        </text>
        <polyline
          class="arrow"
          fill="#fff"
          points="599,0 599,39 590,29 590,32 600,42 610,32 610,29 601,39 601,0"
          transform="translate(0 300)"
        />

        <g mask="url(#m)">
          <rect fill="#fff" width="100%" height="100%" />
          <text x="600" y="2.65em" fill="#162a43">MAINTENANT</text>
        </g>

        <rect
          id="arrowBtn"
          ref="arrow"
          width="100"
          height="100"
          opacity="0"
          x="550"
          y="275"
          dy="2em"
          style="cursor:pointer"
        />
      </svg>
    </section>
  </div>
</template>

<script>
export default {
  name: "Mountains",
  mounted() {
    window.gsap = require("gsap/dist/gsap").gsap
    const { ScrollTrigger } = require("gsap/dist/ScrollTrigger")
    const { ScrollToPlugin } = require("gsap/dist/ScrollToPlugin")
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)
    const refs = this.$refs

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".mountains",
          start: () => `top center-=${refs.mountains.scrollHeight * 0.29}px`,
          end: () => `bottom-=${refs.mountains.scrollHeight * 0.39}px center`,
          scrub: 1,
          pin: ".mountains"
          // markers: true
        }
      })
      .fromTo(".sky", { y: 0 }, { y: -200 }, 0)
      .fromTo(".cloud1", { y: 100 }, { y: -800 }, 0)
      .fromTo(".cloud2", { y: -150 }, { y: -500 }, 0)
      .fromTo(".cloud3", { y: -50 }, { y: -650 }, 0)
      .fromTo(".mountBg", { y: -10 }, { y: -100 }, 0)
      .fromTo(".mountMg", { y: -30 }, { y: -250 }, 0)
      .fromTo(".mountFg", { y: -50 }, { y: -600 }, 0)

    this.$refs.arrow.addEventListener("mouseenter", e => {
      gsap.to(".arrow", {
        y: 310,
        duration: 0.8,
        ease: "back.inOut(3)",
        overwrite: "auto"
      })
    })
    this.$refs.arrow.addEventListener("mouseleave", e => {
      gsap.to(".arrow", {
        y: 300,
        duration: 0.5,
        ease: "power3.out",
        overwrite: "auto"
      })
    })
    this.$refs.arrow.addEventListener("click", e => {
      gsap.to(window, {
        scrollTo: {
          y: this.$refs.mountains.scrollHeight
          // offsetY: this.$refs.mountains.scrollHeight / 2
        },
        duration: 1.5,
        ease: "power1.inOut"
      })
    })
  }
}
</script>
<style scoped>
svg text {
  text-anchor: middle;
  font-size: 99px;
  font-family: Montserrat, Arial, Helvetica, sans-serif;
}
</style>
