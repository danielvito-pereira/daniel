<template> 
  <a :href="buttonLink" class="btn"> {{ buttonText }}</a>
</template>

<script>
export default {
  name: 'MainButton',
  props: {
    buttonText: {
      type: String,
      default: 'Hover me' // Valor padrão caso não seja fornecido
    },
    buttonLink: {
      type: String,
      default: '#' // Valor padrão caso não seja fornecido
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/reset.scss';
.btn:link,
.btn:visited {
  text-transform: uppercase;
  text-decoration: none;
  color:$primary-color;
  padding: 10px 30px;
  border: 1px solid;
  border-radius: 1000px;
  display: inline-block;
  transition: all .2s;
  position: relative;
}

  .btn:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(27, 27, 27, .5);
  }

  .btn:active {
    transform: translateY(-3px);
  }

  .btn::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 100px;
    top: 0;
    left: 0;
    position: absolute;
    z-index: -1;
    transition: all .3s;
  }

  .btn:hover::after {
    background: $tertiary-color;
    transform: scaleX(1.4) scaleY(1.5);
    opacity: 0;
  }
</style>