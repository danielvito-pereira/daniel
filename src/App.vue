<template>
  <MainHeader/>
  <!--
  <router-view/>
  -->
  <MainBody/>
</template>

<script>
  import MainHeader from '@/components/header/MainHeader.vue'
  import MainBody from '@/components/MainBody.vue'
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      MainHeader,
      MainBody
    }
  })
</script>
  
