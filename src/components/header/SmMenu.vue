<template>
  <div class="header__main" v-if="menuOpen">
    <ul class="header__links">
      <li class="header__links-wrapper">
        <a href="" class="a"><router-link to="/">Home</router-link></a>
      </li>
      <li class="header__links-wrapper">
        <a href="" class="a">{{ $t('menu.sobre') }}</a>
      </li>
      <li class="header__links-wrapper">
        <a href="" class="a">{{ $t('menu.projetos') }}</a>
      </li>
      <li class="header__links-wrapper">
        <a href="" class="a">{{ $t('menu.contato') }}</a>
      </li>
    </ul>
    <HeaderHamburger />
    <HeaderDarkmode />
    <HeaderIdiomas />
  </div>
</template>

<script>
import HeaderHamburger from "@/components/header/HeaderHamburger.vue"
import HeaderDarkmode from "@/components/header/HeaderDarkmode.vue"
import HeaderIdiomas from "@/components/header/HeaderIdiomas.vue"

export default {
  name: 'SmMenu',
  components: {
    HeaderHamburger,
    HeaderDarkmode,
    HeaderIdiomas
  },
  props: {
    menuOpen: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
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

    .header__links-wrapper {
      cursor: pointer;
      height: 100%;
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;

      &:before {
        margin-left: auto;
      }

      &:after,
      &:before {
        content: '';
        width: 0%;
        height: 2px;
        background: #f44336;
        display: block;
        transition: 0.5s;
      }

      &:hover::after,
      &:hover::before {
        width: 100%;
      }
    }

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    width: 50%;
    justify-content: flex-end;
  }

  @media screen and (max-width: 1200px) {
    width: 70%;
  }

}
</style>
