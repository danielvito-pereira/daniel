<template>
  <div class="header__logo">
    <a href="" class="a"><router-link to="/">Daniel Vitor</router-link></a>
  </div>
</template>

<script>
export default {
  name: "HeaderLogo",
}
</script>

<style lang="scss">
@import '@/assets/reset.scss';
  .header__logo{
    display: flex;
    flex-flow: column;
    align-items: center;
    cursor: pointer;
    color: $primary-color;
    transition: color .3s;
    text-transform: uppercase;
    &:after {
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
  }
</style>