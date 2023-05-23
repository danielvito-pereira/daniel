<template>
  <div class="header__main">
    <ul class="header__links">
      <li class="header__links-wrapper">
        <a href="" class="a"><router-link to="/">Home</router-link></a>
      </li>
      <li class="header__links-wrapper">
        <a href="" class="a" ><router-link to="/about"> {{ $t('menu.sobre')}}</router-link></a>
      </li>
      <li class="header__links-wrapper">
        <a href="" class="a">{{ $t('menu.projetos')}}</a>
      </li>
      <li class="header__links-wrapper">
        <a href="" class="a">{{ $t('menu.contato')}}</a>
      </li>
    </ul>
    <HeaderHamburger/>
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
@import '@/assets/reset.scss';
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
        color:$primary-color;
        &:before {
          margin-left: auto;
        }

        &:after, &:before {
          content: '';
          width: 0%;
          height: 2px;
          background: $tertiary-color;
          display: block;
          transition: 0.5s ease-in-out;
        }

        &:hover::after, &:hover::before {
          width: 100%;
        }
        &:hover{
            color:$tertiary-color;
            transition: 0.5s ease-in-out;
        }
      }
      @media screen and (max-width: 768px){
        display: none;
      }

    }

    @media screen and (max-width: 768px){
      width: 50%;
      justify-content: flex-end;
    }  
    @media screen and (max-width: 1200px) and (min-width: 768px) {
      width: 70%;
    }
  }
</style>

