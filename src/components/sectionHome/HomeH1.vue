<template>
  <div class="hero__h1">
    <h1 class="h1">  {{ $t('home.h1') }} <span class="nome">Daniel Vitor</span> </h1>
  </div>
</template>

<script>
export default {
  name: 'HomeH1',
  components:{

  }
}
</script>

<style lang="scss">
  .hero__h1{
    padding-top: 3rem;
    .h1{
      font-size: 5rem;
      text-transform: uppercase;
      text-align: center;
      color: #111;
      font-weight: 800;
      @media screen and (max-width:1283px) {
        font-size: 3rem;
      }
      @media screen and (max-width:757px) {
        font-size: 2rem;
        line-height: 1.2; /* Aumenta a distância entre as linhas de texto */
      }
      .nome{
        white-space: nowrap;
      }
    }
  }
</style>