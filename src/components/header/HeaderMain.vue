<template>
  <div class="header__main">
    <ul class="header__links">
      <li class="header__links-wrapper">
        <a href="" class="a"><router-link to="/">Home</router-link></a>
      </li>
      <li class="header__links-wrapper">
        <a href="" class="a" >{{ $t('menu.sobre')}}</a>
      </li>
      <li class="header__links-wrapper">
        <a href="" class="a">{{ $t('menu.projetos')}}</a>
      </li>
      <li class="header__links-wrapper">
        <a href="" class="a">{{ $t('menu.contato')}}</a>
      </li>
    </ul>
    <HeaderHamburger/>
    <!--
    <div class="header__main-hamburguer"  @click="toggle()">
      <label class="hamburger">
        <input type="checkbox">
        <svg viewBox="0 0 32 32">
          <path class="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
          <path class="line" d="M7 16 27 16"></path>
        </svg>
      </label>
    </div>
    -->
    <HeaderDarkmode v-if="shouldShowLinks"/>
    <HeaderIdiomas v-if="shouldShowLinks"/>
  </div>
</template>

<script>
import HeaderHamburger from "@/components/header/HeaderHamburger.vue"
import HeaderDarkmode from "@/components/header/HeaderDarkmode.vue"
import HeaderIdiomas from "@/components/header/HeaderIdiomas.vue"
export default {
  name: "HeaderMain",
  components:{
    HeaderHamburger,
    HeaderDarkmode,
    HeaderIdiomas,
  },
  data(){
    return {
      shouldShowLinks: false,
      isOpen: false,
    };
  },

  mounted() {
    this.checkScreenWidth();
    window.addEventListener("resize", this.checkScreenWidth);
    
  },
  destroyed(){
    window.removeEventListener("resize", this.checkScreenWidth);
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
    },
    toggle() {
      this.isOpen = !this.isOpen;
    },
    checkScreenWidth() {
      this.shouldShowLinks = window.innerWidth >= 770;
    }
  },
}
</script>

<style lang="scss">
  .header__main {
    width: 50%;
    display: flex;
    flex-flow: row nowrap;
    gap: 2.25rem;
    .header__links {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      text-transform: uppercase;
      .header__links-wrapper{
        cursor: pointer;
        height: 100%;
        display: flex;
        flex-flow: column nowrap;
        justify-content:space-between;
      &:before {
        margin-left: auto;
      }

      &:after, &:before {
        content: '';
        width: 0%;
        height: 2px;
        background: #f44336;
        display: block;
        transition: 0.5s;
      }

      &:hover::after, &:hover::before {
        width: 100%;
      }
      }
      @media screen and (max-width: 768px){
        display: none;
      }

    }

    @media screen and (max-width: 768px){
      justify-content: flex-end;
    }  
    @media screen and (max-width: 1200px){
      width: 70%;


    }  
  }
</style>

