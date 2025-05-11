<template>
    <div class="conteiner-symbol">
        <img src="/src/assets/img/Cerebro.svg" alt="">
    </div>
    
    <div class="conteiner-symbol-secundary">
        <img src="/src/assets/img/Cerebro.svg" alt="">
    </div>

    <div class="container card d-flex justify-content-center p-0 h-auto" style="width: 18rem;">
        <img src="/src/assets/img/Logo Secundaria.svg" class="card-img-top" alt="Logo Segundaria" height="60">
        <div class="card-body text-center mt-5">
            <h4 class="fw-bold">Vamos Começar!</h4>
            <div class="input-group mb-3 w-100">
                <input type="text" class="form-control p-2 mt-3" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="Digite seu nome">
            </div>
            <a href="#" class="btn mt-4 fw-bold btn-primary px-5">INICIA QUIZ</a>

        </div>
    </div>

    <div class="footer">
        <div class="college-logo">
            <img src="../../assets/img/unime-logo.png" alt="">
        </div>
        <p class="about-project">Projeto universitário realizado pelo primeiro e terceiro semestre do curso de sistemas de informação da faculdade UNIME - 2025</p>
        <p>© 2025 NeuroQuiz. Todos os direitos reservados.</p>
    </div>

</template>

<style scoped lang="scss">

@use "/src/styles/variables.scss" as *;
    
    .card{
        margin-top: 70px;
        height: auto;
        background: rgba(255, 255, 255, 0.65);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(7.1px);
        border: 1px solid rgba(255, 255, 255, 1);
    

        .btn{
        background-color: #7B3EF4;
        margin: 0 0 90px 0;
        border: none;
        }

        .btn:active{
        background-color: #7b3ef4c5;
        }

        .form-control{
        font-size: 13px;
        }

        .card-img-top{
        margin: 90px 0 0 0;
        }

        .container-background{
        width: 100%;
        height: 100%;
        }

    }
    
    .conteiner-symbol{
        position: absolute;
        z-index: 0;
        left: 70px;
        top: -10px;
        filter: none; 
    }
    .conteiner-symbol-secundary{
        position: absolute;
        z-index: 0;
        left: 55rem;
        top: 21rem;
        filter: none; 
    }

    @media (max-width: 768px) {
        .conteiner-symbol {
            position: absolute;
            z-index: 0;
            left: -70px;
            top: -100px;
            filter: blur(5px);
        }

        .conteiner-symbol-secundary{
        position: absolute;
        z-index: 0;
        left: 14rem;
        top: 23rem;
        filter: blur(5px); 
        }
    }
    
    .footer {
      @include column-align-center();

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


</style>

<script>
</script>