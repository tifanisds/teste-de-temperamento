<template>
    <div class="container">
        <h2>Temperamento: Melancólico</h2>
        <div class="circle">
            <img src="../../assets/img/melancolico.svg" alt="">
        </div>
        <p class="about-temperament">
            O melancólico é analítico, sensível e perfeccionista. Valoriza profundidade emocional, planejamento e organização, sendo muito dedicado e confiável em tudo o que faz.
        </p>
    </div>
</template>

<style scoped lang="scss">
@use "/src/styles/variables.scss" as *;

    .container {
        width: 90%;
        flex-direction: column;
        display: flex;
        align-items: center;
        justify-content: center;

        h2 {
            font-size: 20px;
            font-weight: 600;
        }

        .circle {
            margin: 20px 0 20px 0;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 206px;
            height: 206px;
            border-radius: 100px;
            background-color: $main-title-color;
        }

        p {
            font-size: 14px;
            text-align: center;
            font-weight: 500;
        }

    }

</style>