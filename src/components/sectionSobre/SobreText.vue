<template>
    <div class="aboutM">
      <p class="p p1">{{ $t('about.p1') }}</p>
      <p class="p p2">{{ $t('about.p2') }}</p>
      <p class="p p3">{{ $t('about.p3') }}</p>
      <p class="p p4">{{ $t('about.p4') }}</p>
      <p class="p p5">{{ $t('about.p5') }}</p>
    </div>
</template>

<script>
export default {
  name: 'SobreText'
}
</script>

<style lang="scss" scoped>
    .aboutM{
      padding: 1rem;
    .p{
      font-size: 1.8rem;
      color: #000000;
      max-width: 60rem;
      line-height: 1.7;
      margin-bottom: 1rem;
      text-align: left;
    }

  }
</style>