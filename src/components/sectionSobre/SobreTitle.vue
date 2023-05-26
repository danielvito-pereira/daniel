<template>
  <div class="main-container">
    <h2 class="h2">{{ $t('about.h2') }}</h2>
  </div>
</template>

<script>
export default {
name: 'SobreTitle',
components:{

}
}
</script>

<style lang="scss">
.main-container{
  max-width: 120rem;
  width: 92%;
  .h2{
    display: block;
    font-size: 4rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    letter-spacing: 3px;
    text-align: center;
    padding: 1rem;
    position: relative;
    color: #111;
    font-weight: 400;
    @media screen and (max-width:1000px){
      font-size: 3rem;
      padding: 0rem;
  }
  }
}
</style>