<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const data = ref("");
const error = ref("");

onMounted(async () => {
  const number = route.query.number;
  const type = route.query.type;

  try {
    const response = await fetch(`http://numbersapi.com/${number}/${type}`);
    if (!response.ok) throw new Error("Ошибка при получении данных");
    // data.value = await response.json();
    data.value = await response.text();
  } catch (err) {
    error.value = err.message;
  }
});
</script>

<template>
  <div class="result">
    <p class="result__type"><span>Тип:</span> {{ route.query.type }}</p>
    <p class="result__num"><span>Число:</span> {{ route.query.number }}</p>
    <p class="result__fact"><span>Факт:</span> {{ data }}</p>
  </div>
</template>
<style lang="scss">
.result {
  width: 1240px;
  max-width: 100%;
  margin: 0 auto;
  padding: 150px 20px 0;
  p {
    font-size: 24px;
    font-weight: 400;
  }
  span {
    font-weight: 700;
  }
}
</style>
