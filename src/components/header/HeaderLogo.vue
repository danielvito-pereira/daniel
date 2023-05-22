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

<style>
  .header__logo{
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #333;
    transition: color .3s;
    text-transform: uppercase;
  }
</style>