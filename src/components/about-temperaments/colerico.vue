<template>
    <div class="container">
        <h2>Temperamento: Colérico</h2>
        <div class="circle">
            <img src="../../assets/img/colerico.svg" alt="">
        </div>
        <p class="about-temperament">
            Pessoas coléricas são determinadas, líderes naturais e orientadas para resultados. Gostam de desafios, tomam decisões rápidas e possuem uma energia intensa para realizar o que querem.
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