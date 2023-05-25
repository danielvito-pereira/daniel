<template>
  <div class="header__content">
    <HeaderLogo/>
    <HeaderMain/>
  </div>
</template>

<script>
import HeaderLogo from '@/components/header/HeaderLogo.vue'
import HeaderMain from '@/components/header/HeaderMain.vue'
export default {
  name:"MainContent",
  components:{
    HeaderLogo,
    HeaderMain
  }
}
</script>

<style lang="scss">
@import '@/assets/reset.scss';
  .header__content {
    width: 90%;
    max-width: 120rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 5rem;
    box-shadow: 0 10px 100px rgba(0,0,0,.1);
    border-radius: 18px;
      background: #ffffff;
      box-shadow:  0px 26px 52px #d4d4d4,
                  -26px -26px 52px #ffffff;
    @media screen and (max-width: 768px) {
      width: 100%;
      padding: 1rem;
      justify-content: space-between;
    }

    @media screen and (max-width: 1200px) {
      width: 100%;
      padding: 1rem;
      justify-content: space-between;
    }
  }
</style>