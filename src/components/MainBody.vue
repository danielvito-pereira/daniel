<template>
  <main class="main">
    <SectionHome/>
    <SectionSobre/>
    <SectionProjeto/>
  </main>
</template>

<script>
import SectionHome from '@/components/sectionHome/SectionHome.vue'
import SectionSobre from '@/components/sectionSobre/SectionSobre.vue'
import SectionProjeto from '@/components/sectionProjeto/SectionProjeto.vue'
export default {
  name: 'MainBody',
  components:{
    SectionHome,
    SectionSobre,
    SectionProjeto,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .main{
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
</style>
