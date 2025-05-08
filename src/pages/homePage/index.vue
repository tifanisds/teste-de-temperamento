<template>
    <div class="container">
      <div class="introduction">
        <img class="logo" src="../../assets/img/Logo.svg" alt="">
        <h1>Descubra seu Temperamento</h1>
        <p>Colérico, Melancólico, Sanguíneo ou Fleumático — qual guia suas emoções e decisões?</p>

        <button type="button" class="btn btn-dark start-btn">COMECE O TESTE</button>
      </div>
    </div>
  </template>
  
  <script>
  
  </script>
  
  <style scoped lang="scss">  

    .container {
      margin: 0;
      padding: 0;
      display: flex;

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
          width: 220px;
          height: 50px;
          font-size: 18px;
          font-weight: 800;
          margin-top: 20px;
          margin-bottom: 40px;
        }
      }
    }


  </style>
  