<template>
    <div class="container">
      <div class="introduction">
        <img class="logo" src="../../assets/img/Logo.svg" alt="">
        <h1>Descubra seu Temperamento</h1>
        <p>Colérico, Melancólico, Sanguíneo ou Fleumático — qual guia suas emoções e decisões?</p>

        <button type="button" class="btn btn-dark start-btn">COMECE O TESTE</button>
      </div>

      <div class="call-for-testing">
        <div class="image">
          <img src="../../assets/img/temperamentos.svg" alt="">
        </div>

        <div class="how-it-works">
          <p class="title">Como funciona?</p>
          <p class="text">Responda a algumas perguntas simples sobre como você reage emocionalmente a certas situações. Ao final, você receberá uma análise do seu temperamento dominante com dicas práticas e insights sobre sua personalidade.</p>
          
          <button type="button" class="btn call-btn">FAZER O TESTE AGORA</button>
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

        <button type="button" class="btn start-btn">INICIAR AGORA</button>
      </div>

      <div class="footer">
        <div class="college-logo">
          <img src="../../assets/img/unime-logo.png" alt="">
        </div>
        <p class="about-project">Projeto universitário realizado pelo primeiro e terceiro semestre do curso de sistemas de informação da faculdade UNIME - 2025</p>
        <p>© 2025 NeuroQuiz. Todos os direitos reservados.</p>
      </div>
    </div>
  </template>
  
  <script>
  
  </script>
  
  <style scoped lang="scss">  

    .container {
      margin: 0;
      padding: 0;

      .introduction {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: linear-gradient(to top, #7B3EF4, #ebe1ff, #D9D9D900);
      color: #000000;

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
          background-color: #000000;
          color: #FFF;
        }
      }

      .call-for-testing {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #FFF;
        margin-top: 70px;
        
        .image {
          width: 400px;
          margin-bottom: 70px;
        }

        .how-it-works {
          padding: 50px 0 50px 0;
          width: 100%; 
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #F6F6F6;
          

          .title {
            font-size: 27px;
            font-weight: 500;
          }

          .text {
            width: 100%;
            max-width: 700px;
            text-align: center;
            font-size: 18px;
            font-weight: 500;
          }

          .call-btn {
            background-color: #7B3EF4;
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
        background-color: #7B3EF4;
        display: flex;
        flex-direction: column;
        align-items: center;

        .title {
          font-size: 27px;
          font-weight: 600;
          color: #FFF;
        }

        .card {
          width: 400px;
          height: 180px;
          border-radius: 15px;
          background-color: #FFF;
          margin: 20px 0 20px 0;
          
          .card-body {
            display: flex;
            flex-direction: column;
            align-items: center;
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
            margin: 20px 0 20px 0;
            border-radius: 15px;
            background-color: #000000;
            color: #FFF;
          }
      }

      .footer {
        display: flex;
        align-items: center;
        flex-direction: column;

        .college-logo img {
          margin: 30px 0 20px 0;
          width: 140px;
        }

        .about-project {
          text-align: center;
          font-size: 16px;
          font-weight: 400;
          padding-bottom: 20px;
          border-bottom: 1px solid #454347;
        }
      }
    }


  </style>
  