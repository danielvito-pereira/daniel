<template>
  <div class="skills">
    <h2 class="t">Skills</h2>
    <div class="cards">
      <SkillsLanguage :text="'HTML'"/>
      <SkillsLanguage :text="'CSS'"/>
      <SkillsLanguage :text="'JavaScript'"/>
      <SkillsLanguage :text="'SCSS'"/>
      <SkillsLanguage :text="'Vue.js'"/>
      <SkillsLanguage :text="'Java'"/>
      <SkillsLanguage :text="'SQL-basic'"/>
      <SkillsLanguage :text="'SCRUM'"/>
    </div>
    <SectionContato/>
  </div>
</template>

<script>
import SkillsLanguage from "@/components/sectionSobre/SkillsLanguage.vue"
import SectionContato from "@/components/sectionContato/SectionContato.vue"
export default {
name: 'SobreSkills',
components:{
  SkillsLanguage,
  SectionContato,
}
}
</script>

<style lang="scss">
  .skills {
    width: 80%;
    height: 30%;
    padding: 1rem;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: space-between;
    @media screen and (max-width:1000px){
      gap: 50px;
    }
    .t{
      font-weight: 400;
      font-size: 2.8rem;
      padding: 1rem 0rem;
      margin-bottom: 3rem;
    }
    .cards {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      margin-bottom: 3rem;
    }
  }
</style>