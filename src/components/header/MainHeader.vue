<template>
  <header class="header">
    <MainContent />
    <SmMenu v-if="menuOpen" />
  </header>
</template>

<script>
import MainContent from '@/components/header/MainContent.vue'
import HeaderHamburger from '@/components/header/HeaderHamburger.vue'
import SmMenu from '@/components/header/SmMenu.vue'

export default {
  name: 'MainHeader',
  components: {
    MainContent,
    HeaderHamburger,
    SmMenu
  },
  data() {
    return {
      menuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
  },
}
</script>

<style lang="scss">
.header {
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0rem;
  position: fixed;
  width: 100%;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
  background: #000;
  background: #fff;
  box-shadow: 0 10px 100px rgba(0,0,0,.1);
  @media  (max-width: 769px) {
    flex-flow: column nowrap;
  }
}
</style>
