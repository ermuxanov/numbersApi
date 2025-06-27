<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const type = ref("math");
const number = ref("");
const error = ref("");

const submit = () => {
  error.value = "";
  if (!/^\d+$/.test(number.value)) {
    alert("Число должно быть в виде цифры");
    return;
  }
  if (type.value == "date" && number.value > 366) {
    alert("Число должно быть ниже 366, ведь в году максимум 366 дней");
    return;
  }
  router.push({
    name: "Result",
    query: {
      type: type.value,
      number: number.value,
    },
  });
};
</script>

<template>
  <div class="numbers">
    <h1 class="numbers__title">Информация о числе</h1>
    <form class="numbers__form" @submit.prevent="submit">
      <label class="numbers__form-label">
        <span class="numbers__form-span">Тип информации:</span>
        <select class="numbers__form-select" v-model="type">
          <option value="math">Math</option>
          <option value="year">Year</option>
          <option value="trivia">Trivia</option>
          <option value="date">Date</option>
        </select>
      </label>
      <label class="numbers__form-label">
        <span class="numbers__form-span">Введите число:</span>
        <input class="numbers__form-input" v-model="number" type="text" placeholder="123..." />
      </label>
      <button class="numbers__form-btn" type="submit">Показать</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.numbers {
  width: 1240px;
  max-width: 100%;
  margin: 0 auto;
  padding: 150px 20px 0;

  &__form {
    display: flex;
    gap: 20px;
    margin-top: 20px;
    flex-wrap: wrap;
    &-select {
      padding: 6px;
      border-radius: 6px;
      width: 120px;
    }
    &-label {
      &:first-of-type {
        flex-basis: 100%;
      }
    }
    &-span {
      margin-right: 20px;
    }
    &-btn {
      padding: 12px 24px;
    }
    &-input {
      background: #fff;
      padding: 10px;
      border-radius: 8px;
      outline: 1px solid rgb(130, 192, 255);
      transition: 0.3s ease;
      &:hover,
      &:focus {
        outline: 1px solid rgb(30, 144, 255);
      }
    }
    &-btn {
      max-width: max-content;
      padding: 10px;
      border-radius: 6px;
      background: rgb(130, 192, 255);
      color: #e7e7e7;
      transition: 0.3s ease;
      &:hover {
        background: rgb(30, 144, 255);
      }
    }
  }
}
</style>
