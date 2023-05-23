<template>
  <MainHeader/>
  <router-view/>
</template>

<script>
  import MainHeader from '@/components/header/MainHeader.vue'
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      MainHeader
    }
  })
</script>
  
<style  lang="scss">

</style>
