<template>
    <header class="header">
      <MainContent/>

    </header>
</template>

<script>
import MainContent from '@/components/header/MainContent.vue'

export default {
  name: 'MainHeader',
  components:{
    MainContent,

  },
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
}
</script>

<style lang="scss">
  .header{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0rem;
    position: fixed;
    width: 100%;
    z-index: 1000;
    top:0;
    right: 0;
    left:0;
  }
</style>