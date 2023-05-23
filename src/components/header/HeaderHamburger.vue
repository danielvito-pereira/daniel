<template>
  <div>
    <div class="header__main-hamburger" @click.stop.prevent="toggle()">
      <SvgHamburguer/>
    </div>
    <div v-show="isOpen" class="menu"> <!-- Substituído v-show por v-if -->
      <a href="" class="a"><router-link to="/">Home</router-link></a>
      <a href="" class="a" >{{ $t('menu.sobre')}}</a>
      <a href="" class="a">{{ $t('menu.projetos')}}</a>
      <a href="" class="a">{{ $t('menu.contato')}}</a>
      <div class="buttons">
        <HeaderDarkmode/>
        <HeaderIdiomas/>
      </div>
    </div>
  </div>
</template>

<script>
import SvgHamburguer from '@/components/header/SvgHamburguer.vue'
import HeaderIdiomas from "@/components/header/HeaderIdiomas.vue"
import HeaderDarkmode from "@/components/header/HeaderDarkmode.vue"
export default {
  components:{
    SvgHamburguer,
    HeaderIdiomas,
    HeaderDarkmode,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },

  }
};
</script>

<style lang="scss">
  @import '@/assets/reset.scss';
  .header__main-hamburger {
    @media  (min-width: 769px) {
      display: none;
    }
  }
  .menu {
    display:flex;
    flex-flow: column nowrap;
    align-items: flex-end;
    justify-content: space-around;
    position: absolute;
    background-color: #ffff;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    animation: fade-in 0.3s ease-in-out;
    height: 50vh;
    right: 0;
    left: 0;
    top: 7rem;
    border-bottom-left-radius: 18px;
    border-bottom-right-radius: 18px;
    .a{
      width: 100%;
      display:flex;
      flex-flow: column nowrap;
      align-items: flex-end;
      justify-content:center;
      padding: 1rem 2rem;
      text-transform: uppercase;
      &:hover{
        color: red;
      }
      &:before {
          margin-left: auto;
        }

        &:after {
          content: '';
          width: 100%;
          height: 2px;
          background: #f44336;
          display: block;
          transition: 0.5s;
        }
    }
    @keyframes fade-in {
      0% {
        opacity: 0;
        transform: translateY(-10px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .buttons{
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: center;
      gap: 50px;
      padding: 1rem;
    }
  }
</style>


