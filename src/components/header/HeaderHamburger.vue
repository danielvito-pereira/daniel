<template>
  <div>
    <div class="header__main-hamburger" @click.stop.prevent="toggle()">
      <label class="hamburger">
        <input type="checkbox">
        <svg viewBox="0 0 32 32">
          <path class="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
          <path class="line" d="M7 16 27 16"></path>
        </svg>
      </label>
    </div>
    <div v-show="isOpen" class="menu"> <!-- Substituído v-show por v-if -->
      <a href="" class="a"><router-link to="/">Home</router-link></a>
      <a href="" class="a" >{{ $t('menu.sobre')}}</a>
      <a href="" class="a">{{ $t('menu.projetos')}}</a>
      <a href="" class="a">{{ $t('menu.contato')}}</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },

  }
};
</script>

<style lang="scss">
.header__main-hamburger {
  .hamburger {
    cursor: pointer;

    input {
      display: none;
    }

    svg {
      /* O tamanho do SVG define o tamanho geral */
      height: 3em;
      /* Define a transição para transformar o SVG */
      transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .line {
      fill: none;
      stroke: white;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-width: 3;
      /* Define a transição para transformar o Stroke */
      transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
        stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .line-top-bottom {
      stroke-dasharray: 12 63;
    }

    input:checked + svg {
      transform: rotate(-45deg);
    }

    input:checked + svg .line-top-bottom {
      stroke-dasharray: 20 300;
      stroke-dashoffset: -32.42;
    }
  }

  @media  (min-width: 769px) {
    display: none;
  }
}
.menu {
  display:flex;
  flex-flow: column nowrap;
  align-items: flex-end;
  justify-content: space-around;
  position: absolute;
  background-color: #0d0b0b;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  animation: fade-in 0.3s ease-in-out;
  height: 50vh;
  right: 0;
  left: 0;
  top: 7rem;
  .a{
    width: 100%;
    display:flex;
    flex-flow: column nowrap;
    align-items: flex-end;
    justify-content:center;
    padding: 1rem 2rem;
    background-color: aliceblue;
    text-transform: uppercase;
    &:hover{
      color: red;
    }
    &:before {
        margin-left: auto;
      }

      &:after {
        content: '';
        width: 100%;
        height: 2px;
        background: #f44336;
        display: block;
        transition: 0.5s;
      }
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>


