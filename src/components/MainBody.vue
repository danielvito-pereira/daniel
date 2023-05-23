<template>
  <main class="main">
    <SectionHome/>
    <SectionSobre/>
    <SectionProjeto/>
    <SectionContato/>
  </main>
</template>

<script>
import SectionHome from '@/components/sectionHome/SectionHome.vue'
import SectionSobre from '@/components/sectionSobre/SectionSobre.vue'
import SectionContato from '@/components/sectionContato/SectionContato.vue'
export default {
  name: 'MainBody',
  components:{
    SectionHome,
    SectionSobre,
    SectionContato
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
  }
</style>
