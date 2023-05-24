<template>
  <div class="grid-contant">
    <SobreText/>
    <SobreSkills/>
  </div>
</template>

<script>
import SobreText from "@/components/sectionSobre/SobreText.vue"
import SobreSkills from "@/components/sectionSobre/SobreSkills.vue"
export default {
name: 'SobreContainer',
components:{
  SobreText,
  SobreSkills
}
}
</script>

<style lang="scss">
.grid-contant{
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
}

</style>