<template>
  <div class="idiomas">
    <button @click.stop.prevent="toggle()" title="Idiomas">
      <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
        <path d="m475 976 181-480h82l186 480h-87l-41-126H604l-47 126h-82Zm151-196h142l-70-194h-2l-70 194Zm-466 76-55-55 204-204q-38-44-67.5-88.5T190 416h87q17 33 37.5 62.5T361 539q45-47 75-97.5T487 336H40v-80h280v-80h80v80h280v80H567q-22 69-58.5 135.5T419 598l98 99-30 81-127-122-200 200Z"/>
      </svg>
    </button>
    <div class="cont" v-show="isOpen" ref="dropdown">
      <ul class="ul">
        <li class="li">
          <a href="#" class="a" @click="setLocale('pt_br')">Português</a>
        </li>
        <li class="li">
          <a href="#" class="a" @click="setLocale('en')">Inglês</a>
        </li>
        <li class="li">
          <a href="#" class="a" @click="setLocale('es')">Espanhol</a>        
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderIdiomas',
  props: {
    text: {
      type: String,
      default: 'Linguas',
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
    },
    toggle() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        document.addEventListener('click', this.handleOutsideClick);
      } else {
        document.removeEventListener('click', this.handleOutsideClick);
      }
    },
    handleOutsideClick(event) {
      if (!this.$refs.dropdown.contains(event.target)) {
        this.isOpen = false;
        document.removeEventListener('click', this.handleOutsideClick);
      }
    },
  },
};
</script>

<style lang="scss">
.idiomas {
  position: relative;
  display: inline-block;
  button {
    cursor: pointer;
  }
  .cont {
    width: 300%;
    display: flex;
    flex-flow: column nowrap;
    position: absolute;
    background-color: blue;
    border-radius: 5px;
    .ul {
      display: flex;
      gap: 1.25rem;
      padding: 1rem;
      flex-flow: column nowrap;
      .li {
        cursor: pointer;
      }
    }
  }
}
</style>
