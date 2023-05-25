<template>
  <div class="projeto">
    <div class="imagem">
      <img :src="imagemSrc" :alt="imagemAlt" :srcset="imagemSrcset">
    </div>
    <div class="textoprojeto">
      <h2 class="h2">{{ titulo }}</h2>
      <p class="p">{{ descricao }}</p>
      <MainButton :buttonText="$t('menu.projeto')" buttonLink="/caminho-do-link"/>
    </div>
  </div>
</template>

<script>
import MainButton from '@/components/MainButton.vue';

export default {
  name: 'MainProjetos',
  components: {
    MainButton
  },
  props: {
    imagemSrc: {
      type: String,
      default: ''
    },
    imagemAlt: {
      type: String,
      default: ''
    },
    imagemSrcset: {
      type: String,
      default: ''
    },
    titulo: {
      type: String,
      default: ''
    },
    descricao: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
  .projeto{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-auto-columns: 1fr;
    gap: 0px 0%;
    grid-auto-flow: row;
    grid-template-areas:
      ". .";
    gap: 50px;
    margin-top: 2rem;
    @media screen and (max-width:1000px){
      display: flex;
      flex-flow: column nowrap;
    }
    padding: 1rem;
    .imagem{}
    .textoprojeto{
      display: flex;
      flex-flow: column nowrap;
      align-items: flex-start;
      justify-content: space-around;
      gap: 50px;
      .h2{
        text-align: left;
      }
      .p{
        text-align: left;
        font-size: 1.8rem;
        color: #666;
        max-width: 60rem;
        line-height: 1.7;
        margin-bottom: 3rem;
        @media screen and (max-width:1283px) {
        font-size: 1.5rem;
      }
      }
    }
  }
  
</style>
