<template>
  <div class="container">
    <div class="introduction">
      <img class="logo" src="@/assets/img/Logo.svg" alt="">
      <h1>Descubra seu Temperamento</h1>
      <p>Colérico, Melancólico, Sanguíneo ou Fleumático — qual guia suas emoções e decisões?</p>

      <router-link to="/questions">
        <button type="button" class="btn btn-dark start-btn">COMECE O TESTE</button>
      </router-link>
    </div>

    <div class="call-for-testing">
      <div class="image">
        <img src="@/assets/img/temperamentos.svg" alt="">
      </div>

      <div class="how-it-works">
        <p class="title">Como funciona?</p>
        <p class="text">Responda a algumas perguntas simples sobre como você reage emocionalmente a certas situações. Ao final, você receberá uma análise do seu temperamento dominante com dicas práticas e insights sobre sua personalidade.</p>
        
        <router-link to="questions">
          <button type="button" class="btn call-btn">FAZER O TESTE AGORA</button>
        </router-link>
      </div>
    </div>

    <div class="benefits-of-test">
      <p class="title">Por que fazer o NeuroQuiz?</p>

      <div class="card self-knowledge">
        <div class="card-body">
          <h5 class="card-title">Autoconhecimento</h5>
          <p class="card-text">Descubra mais sobre sua personalidade e como ela influencia suas escolhas e relações.</p>
        </div>
      </div>

      <div class="card self-knowledge">
        <div class="card-body">
          <h5 class="card-title">Dicas práticas</h5>
          <p class="card-text">Receba sugestões úteis e aplicáveis para melhorar sua vida pessoal e profissional.</p>
        </div>
      </div>

      <div class="card self-knowledge">
        <div class="card-body">
          <h5 class="card-title">Compartilhe com amigos</h5>
          <p class="card-text">Compare resultados com amigos e descubra os temperamentos ao seu redor.</p>
        </div>
      </div>

      <router-link to="questions">
        <button type="button" class="btn start-btn">INICIAR AGORA</button>
      </router-link>
    </div>

    <div class="footer">
      <div class="college-logo">
        <img src="@/assets/img/unime-logo.png" alt="">
      </div>
      <p class="about-project">Projeto universitário realizado pelo primeiro e terceiro semestre do curso de sistemas de informação da faculdade UNIME - 2025</p>
      <p class="copyright">© 2025 NeuroQuiz. Todos os direitos reservados.</p>
    </div>
  </div>
</template>

<script>

</script>

<style scoped lang="scss">  
  @use "/src/styles/variables.scss" as *;

  .container {
    margin: 0;
    padding: 0;

    .introduction {
      width: 100%;
      @include column-align-center();
      background: linear-gradient(to top, $main-color, #ebe1ff, #D9D9D900);
      color: $main-text-color;

      .logo {
        margin-top: 50px;
        width: 180px;
      }

      h1 {
        margin-top: 70px;
        font-size: 28px;
        text-align: center;
        font-weight: 600;
      }

      p {
        width: 80%;
        font-size: 18px;
        text-align: center;
        font-weight: 500;
      }

      .start-btn {
        width: 250px;
        height: 50px;
        font-size: 18px;
        font-weight: 800;
        margin-top: 20px;
        margin-bottom: 40px;
        border-radius: 15px;
        background-color: $main-text-color;
        color: #FFF;
      }
    }

    .call-for-testing {
      @include column-align-center();
      background-color: #FFF;
      margin-top: 70px;

      .image {
        display: flex;
        justify-content: center;
        margin-bottom: 70px;

        img {
          width: 340px;
        }
      }

      .how-it-works {
      padding: 50px 0 50px 0;
        width: 100%; 
        @include column-align-center();
        background-color: #F6F6F6;

        .title {
          font-size: 27px;
          font-weight: 500;
        }

        .text {
          width: 80%;
          max-width: 700px;
          text-align: center;
          font-size: 18px;
          font-weight: 500;
        }

        .call-btn {
          background-color: $main-color;
          color: #FFF;
          font-weight: 800;
          font-size: 18px;
          width: 300px;
          height: 50px;
          border-radius: 15px;
        }
      }
    }

    .benefits-of-test {
      padding: 50px 0 20px 0;
      background-color: $main-color;
      @include column-align-center();

      .title {
        text-align: center;
        font-size: 27px;
        font-weight: 700;
        color: #FFF;
      }

      .card {
        width: 350px;
        height: 180px;
        border-radius: 15px;
        background-color: #FFF;
        margin: 20px 0 20px 0;

        .card-body {
          @include column-align-center();
          justify-content: center;

          .card-title {
            font-size: 24px;
            font-weight: 600;
          }

          .card-text {
            font-size: 18px;
            font-weight: 400;
            text-align: center;
          }
        }
      }

      .start-btn {
        width: 250px;
        height: 50px;
        font-size: 18px;
        font-weight: 800;
        margin-top: 20px;
        margin-bottom: 40px;
        border-radius: 15px;
        background-color: #000000;
        color: #FFF;
      }
    }

    .footer {
      @include column-align-center();

      .college-logo img {
        margin: 30px 0 20px 0;
        width: 140px;
      }

      .about-project {
        width: 80%;
        text-align: center;
        font-size: 16px;
        font-weight: 400;
        padding-bottom: 20px;
        border-bottom: 1px solid #454347;
      }

      .copyright {
        font-size: 13px;
        text-align: center;
      }
    }
  }
</style>