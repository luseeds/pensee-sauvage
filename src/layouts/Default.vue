<template>
  <div
    class="layout bg-background-primary font-sans text-copy-primary leading-normal flex flex-col min-h-screen"
  >
    <header class="border-t-14 border-gray-400">
      <nav
        class="container mx-auto flex flex-wrap justify-between items-center py-4 sm:py-8"
      >
        <div class="w-full sm:w-auto sm:flex justify-center items-center">
          <g-link to="/" class="home">
            <g-image
              src="../../static/profile-sm.jpeg"
              class="logo w-56 md:w-40 mx-auto md:mx-0 rounded-full"
              alt="pensee sauvage photo de profil"
            />
          </g-link>
          <g-link
            to="/"
            class="home block font-black text-copy-primary text-4xl text-center pt-4 text-blue-900 sm:ml-6 md:pt-0"
          >
            <h1>Pensée Sauvage</h1>
          </g-link>
        </div>

        <div class="block mx-auto mt-8 md:hidden">
          <button
            @click="toggle"
            class="flex items-center px-3 py-2 border rounded border-gray-500 hover:text-gray-600 hover:border-gray-600"
            aria-label="Menu toggle"
          >
            <svg
              class="current-color h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                fill="gray"
              />
            </svg>
          </button>
        </div>
        <ul
          class="uppercase tracking-wide font-bold w-full block flex-grow md:flex md:flex-initial md:w-auto items-center mt-8 md:mt-0"
          :class="isOpen ? 'block' : 'hidden'"
        >
          <li class="mb-6 md:mb-0 md:mr-8 text-center">
            <theme-switcher />
          </li>
          <li class="mb-6 text-center md:mb-0 md-mr-8">
            <g-link to="/a-propos" class="text-copy-primary hover:text-gray-600"
              >À propos</g-link
            >
          </li>
        </ul>
      </nav>
    </header>

    <div class="flex-grow">
      <slot />
    </div>

    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import ThemeSwitcher from "~/components/ThemeSwitcher"
import Footer from "~/components/Footer"

export default {
  components: {
    ThemeSwitcher,
    Footer
  },
  props: ["page"],
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    }
  },
  mounted() {
    fetch(`/.netlify/functions/visits?page=${this.page}`)
  }
}
</script>

<style src="~/css/main.css" />
