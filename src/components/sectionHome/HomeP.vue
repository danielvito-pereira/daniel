<template>
  <div class="paragrap">
    <p class="p">
      {{ $t('home.p') }}
    </p>
  </div>

</template>

<script>

export default {
  name: 'HomeP',

}
</script>

<style lang="scss">
.paragrap{
 
  max-width: 80rem;
  .p{
    color: #333;
    font-size: 2.2rem;
    text-align: center;
    width: 100%;
    line-height: 1.6;
    
  }
}

</style>