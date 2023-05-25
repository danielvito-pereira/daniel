<template>
    <div class="main-container">
      <SobreTitle/>
      <SobreContainer />
    </div>
</template>

<script>
import SobreTitle from "@/components/sectionSobre/SobreTitle.vue"
import SobreContainer from "@/components/sectionSobre/SobreContainer.vue"
export default {
  name: 'SectionSobre',
  components:{
    SobreTitle,
    SobreContainer
  }
}
</script>

<style lang="scss">
  .main-container{
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap:50px;
    max-width: 120rem;
    margin: auto;
    width: 92%;
    margin-bottom: 5rem;
    @media screen and (max-width:1000px){
      align-items: flex-start;
    }
  }
</style>