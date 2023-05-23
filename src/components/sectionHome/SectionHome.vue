<template>
  <section class="home">
    <div class="home-hero__content">
      <HomeH1/>
      <HomeP/>
      <MainButton :buttonText="$t('menu.projetos')" buttonLink="/caminho-do-link"/>
    </div>
  </section>
</template>

<script>
import HomeH1 from "@/components/sectionHome/HomeH1.vue"
import HomeP from "@/components/sectionHome/HomeP.vue"
import MainButton from "@/components/MainButton.vue"
export default {
  name: 'SectionHome',
  components:{
    HomeH1,
    HomeP,
    MainButton
  }
}
</script>

<style lang="scss">
  @import '@/assets/reset.scss';
  .home{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    padding-top: calc(26% - $height-home);
    @media  (min-width:1024px) {
      padding-top: calc(15% - $height-home);
    }
    .home-hero__content {
      width: min(120rem, 90%);
      gap: 3.125rem;
      display: flex;
      flex-flow: column nowrap;
      align-items:center;
      justify-content: center;

    }
  }
</style>