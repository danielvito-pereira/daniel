<template>
  <div class="Contato">
    <h2 class="t">{{ $t('menu.contato')}}</h2>
    <ul class="rrss">
      <li class="li">
        <a href="https://github.com/danielvito-pereira" class="a" title="Github" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="svg" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
        </a>
      </li>
      <li class="li">
        <a href="https://github.com/danielvito-pereira" class="a" title="Github" target="_blank" rel="noopener noreferrer">
          <svg id="Layer_1" class="svg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.31"><title>linkedin-app</title><path class="cls-1" d="M27.75,0H95.13a27.83,27.83,0,0,1,27.75,27.75V94.57a27.83,27.83,0,0,1-27.75,27.74H27.75A27.83,27.83,0,0,1,0,94.57V27.75A27.83,27.83,0,0,1,27.75,0Z"></path><path class="cls-2" d="M49.19,47.41H64.72v8h.22c2.17-3.88,7.45-8,15.34-8,16.39,0,19.42,10.2,19.42,23.47V98.94H83.51V74c0-5.71-.12-13.06-8.42-13.06s-9.72,6.21-9.72,12.65v25.4H49.19V47.41ZM40,31.79a8.42,8.42,0,1,1-8.42-8.42A8.43,8.43,0,0,1,40,31.79ZM23.18,47.41H40V98.94H23.18V47.41Z"></path></svg>
        </a> 
      </li>
    </ul>
  </div>
</template>

<script>

export default {
name: 'SectionContato',

}

</script>

<style lang="scss">
  .Contato {
    width: 80%;
    height: 30%;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: space-between;
    @media screen and (max-width:1000px){
      width: 100%;
    }
    @media screen and (max-width:1283px) {
        font-size: 2rem;
      }
    .t{
      font-weight: 700;
      font-size: 2.8rem;
      padding: 1rem 0rem;
      margin-bottom: 1rem;
      @media screen and (max-width:1283px) {
        font-size: 2rem;
      }
    }
    .rrss{
      width: 100%;
      gap: 50px;
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      justify-content: flex-start;
      svg{
        width: 3em;
        height: 3em;
        @media screen and (max-width:1000px){
          width: 2em;
          height: 2em;
      }
      }
      @media screen and (max-width:1000px){
        width: 100%;
        flex-flow: row nowrap;
      }
    }
  }
</style>