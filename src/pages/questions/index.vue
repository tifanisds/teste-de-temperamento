<template>
  <div
    v-if="currentQuestion"
    class="container d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light text-center p-0"
  >
 
    <div class="logo-image mt-5">
      <img src="/src/assets/img/Logo Secundaria.svg" alt="Logo" height="90" />
    </div>
    
    <div class="card m-0 p-0 align-items-center mt-5 mb-4">
      <div class="card-body-title p-2 rounded-3 fw-bolder text-white">
        {{ currentQuestion.statement }}
      </div>
    </div>
    
    <div class="container align-items-center d-flex flex-column" style="max-width: 400px;">
      <label
      v-for="alt in currentQuestion.alternatives"
      :key="alt.id"
      class="option-box p-3 mb-3 rounded-3 fw-semibold d-block text-center"
      :class="{ 'option-select bg-success text-white': selected === alt.id }"
      @click="selected = alt.id"
      style="cursor: pointer;"
      >
      <input
      type="radio"
      :name="'question-' + currentQuestion.id"
      class="form-check-input me-2"
      :value="alt.id"
      v-model="selected"
      hidden
      />
      <span class="fw-bold me-2">{{ alt.id }}</span> {{ alt.text }}
    </label>
  </div>

  <div class="bar-progress mt-2">
    <div class="w-100 mt-2 mb-3" style="max-width: 500px;">
  <div class="position-relative w-100 mb-2">
<div class="progress" style="height: 8px; border-radius: 5px;">
  <div
    class="progress-bar bg-purple"
    role="progressbar"
    :style="{ width: progressPercent + '%' }"
    :aria-valuenow="progressPercent"
    aria-valuemin="0"
    aria-valuemax="100"
  ></div>
</div>
<div
  class="number position-absolute"
  style="font-size: 14px; font-weight: 500; color: #666;"
>
  {{ progressPercent }}%
</div>
  </div>
</div>
  </div>
  

    <button
      class="btn btn-primary mb-5 mt-2"
      @click="nextQuestion"
      :disabled="!selected"
    >
      Próxima pergunta
    </button>
    <p
      class="text-muted text-decoration-underline"
      style="cursor: pointer;"
      @click="skipQuestion"
      >
        Pular
    </p>

  </div>
  

  
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const personalityCount = ref({
  Fleumatico: 0,
  Sanguineo: 0,
  Colerico: 0,
  Melancolico: 0
})

const questions = ref([])
const currentIndex = ref(0)
const currentQuestion = ref(null)
const selected = ref(null)
import { useRouter } from 'vue-router'

const router = useRouter()

function navigateToResult() {
  const result = Object.entries(personalityCount.value).reduce((a, b) => 
    a[1] > b[1] ? a : b
  )[0]

  router.push({ name: 'result', query: { result } })
}



const progressPercent = computed(() => {
  if (questions.value.length === 0) return 0
  return Math.round((currentIndex.value / questions.value.length) * 100)
})  



onMounted(async () => {
  const res = await fetch('http://localhost:3000/questions')
  const data = await res.json()
  questions.value = data
  currentQuestion.value = data[currentIndex.value]
})



function nextQuestion() {
  if (selected.value) {
    const answer = currentQuestion.value.alternatives.find(
      (alt) => alt.id === selected.value
    )
    if (answer) {
      personalityCount.value[answer.personality]++
    }
  }



  selected.value = null
  currentIndex.value++
  if (currentIndex.value < questions.value.length) {
    currentQuestion.value = questions.value[currentIndex.value]
  } else {
    navigateToResult()
  }
}


function skipQuestion() {
  selected.value = null
  currentIndex.value++
  if (currentIndex.value < questions.value.length) {
    currentQuestion.value = questions.value[currentIndex.value]
  } else {
    currentQuestion.value = null
  }
}

</script>

<style scoped lang="scss">
@use "/src/styles/variables.scss" as *;

.card {
  display: flex;
  border: none;
  align-items: center;

  &-body-title {
    display: flex;
    justify-content: center;
    width: 380px;
    background-color: $main-color;
    font-family: 'Montserrat', sans-serif;
    padding: 16px;
    border-radius: 12px;
    font-weight: bold;
    color: white;
  }
}

.option-box {
  background-color: $main-title-color;
  width: 360px;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s;

  &.option-select {
    background-color: #7B3EF4 !important;
    opacity: 0.6;
    color: white;
  }
}

.bar-progress {
  width: 300px;
  height: auto;

  .progress {
    height: 8px;
    border-radius: 5px;
  }

  .progress-bar.bg-purple {
    background-color: #8b4dfd !important;
  }

  .number {
    position: absolute;
    top: -20px;
    left: 224px;
    font-size: 14px;
    font-weight: 500;
    color: #666;
  }
}

@media (max-width: 768px) {
  .logo-image img {
    height: 70px;
  }

  .card-body-title {
    width: 340px;
  }

  .option-box {
    width: 340px;
  }

  .bar-progress {
    width: 100%;
    width: 400px;
  }

  .bar-progress .number {
    left: 192px;
  }
}

</style>
    