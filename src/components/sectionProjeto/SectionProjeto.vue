<template>
    <div class="projetos">
      <h2 class="h2">{{ $t('menu.projetos')}}</h2>
      <p class="p"> <b>  Aqui </b>você encontrará alguns projetos pessoais</p>
      <div class="conteudo">
        <MainProjetos
          imagemSrc="@/src/assets/projetos/whitespace.png"
          imagemAlt="whitespace"
          titulo="Whitepace"
          descricao="É uma plataforma moderna e elegante desenvolvida usando Vue.js, que oferece uma experiência de usuário envolvente e agradável. O WhitespaceVue também é responsivo, adaptando-se perfeitamente a diferentes dispositivos e tamanhos de tela. Essa abordagem garante que os visitantes tenham uma experiência consistente, independentemente do dispositivo que estejam usando."
        />
        <MainProjetos
          imagemSrc="/caminho-da-imagem.jpg"
          imagemAlt="Descrição da imagem"
          imagemSrcset="/caminho-da-imagem-2x.jpg 2x, /caminho-da-imagem-3x.jpg 3x"
          titulo="NLW Return"
          descricao="NLW Return é o resultado da combinação harmoniosa dessas tecnologias, aproveitando as capacidades do HTML, CSS e JavaScript  para criar uma experiência única e envolvente. Essas tecnologias fornecem os recursos necessários para estruturar, estilizar, interagir e hospedar o site, garantindo sua funcionalidade e atratividade visual. Tudo isso feito durante um evento da nlw"
        />


        <MainProjetos
          imagemSrc="/caminho-da-imagem.jpg"
          imagemAlt="Descrição da imagem"
          imagemSrcset="/caminho-da-imagem-2x.jpg 2x, /caminho-da-imagem-3x.jpg 3x"
          titulo="Teste de digitar"
          descricao="O aplicativo Medidor de Digitação é uma ferramenta que avalia sua velocidade e precisão ao digitar. Assim que o usuário começa a digitar na área de testes, o aplicativo é acionado, iniciando um cronômetro e verificando se o texto digitado coincide com o texto exibido no aplicativo. Se o texto estiver correto, uma linha ao redor da área de digitação é destacada. No caso de um erro, a linha se torna vermelha até que o erro seja corrigido. Foi feito em js, html e css. "
        />
      </div>
    </div>
</template>

<script>
import MainProjetos from '@/components/sectionProjeto/MainProjetos.vue'
export default {
  name: 'SectionProjeto',
  components:{
    MainProjetos
  }
}
</script>

<style lang="scss">
  .projetos{
    width: 90%;
    max-width: 120rem;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    margin-bottom: 3.5rem;
    .h2{
      width: 100%;
      display: block;
      font-size: 4rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      letter-spacing: 3px;
      text-align: center;
      margin-bottom: 3.5rem;
      position: relative;
      color: #111;
      padding: 1rem 0rem;
      @media screen and (max-width:1283px) {
        width: 90%;
        font-size: 2rem;
        text-align: left;
      }
    }
    .p{
      display: block;
      text-align: center;
      color: #555;
      font-size: 2rem;
      font-weight: 500;
      max-width: 80rem;
      margin: auto;
      line-height: 1.6;
      @media screen and (max-width:1283px) {
        width: 90%;
        font-size: 2rem;
        text-align: left;
      }
    }
    .conteudo{
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;
      gap:100px;
      margin-top: 5rem;
      @media screen and (max-width:1283px) {
        margin-top: 1rem;
      }
    }
  }
</style>