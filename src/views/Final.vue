<template>
  <div class="final">
    <img src="@/assets/image/final.png" alt="" class="final__image" />

    <div class="final__header">
      <button @click="home" class="final__button">
        <img src="@/assets/image/home-light.svg" alt="Home" title="Домой" />
      </button>
    </div>

    <div class="final__result">
      <div>
        <ul class="stat">
          <li v-for="(drug, index) of drugs" :key="drug.id" class="stat__item">
            <p class="stat__num">
              {{ Math.round((drug.count * 100) / drugs.length) }} %
            </p>
            <p class="stat__name">Препарат {{ index + 1 }}</p>
          </li>
        </ul>
        <div class="final__description">
          <h2 class="final__title">
            Ваш результат:
            <strong> «Что я здесь делаю?» </strong>
          </h2>
          <p class="final__text">
            Это тестовое задание, так что не будем углубляться в глубины проблем
            фармацевтов.
          </p>
        </div>
      </div>
      <button @click="restart" class="final__button-restart">
        Попробовать еще
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Final",
  computed: {
    drugs() {
      return this.$store.getters.getDrugs;
    },
  },
  methods: {
    restart() {
      this.$store.dispatch("restart");
      this.$router.push({ name: "Main" });
    },
    home() {
      this.$store.dispatch("restart");
      this.$router.push({ name: "Cover" });
    },
  },
};
</script>

<style lang="scss" scoped>
.final {
  position: relative;

  display: flex;
  flex-direction: column;

  height: 100vh;

  &__image {
    position: absolute;
    top: -5%;
    right: -3%;

    width: 50%;
    max-width: 820px;
    max-height: 820px;

    animation: right-left 2s ease-in-out 1;
  }

  &__header {
    position: relative;
    z-index: 1;

    padding: 5% 5%;
  }

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 70px;
    width: 70px;

    background: linear-gradient(63.53deg, #2d8550 16.62%, #5e6ec2 83.38%);

    border-radius: 100%;
  }

  &__result {
    position: relative;
    z-index: 1;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    max-width: 55%;
    height: 100%;

    padding: 5% 10%;
  }

  &__description {
    margin-top: 40px;
  }

  &__title {
    display: flex;
    flex-direction: column;

    margin-bottom: 20px;

    font-size: 2rem;
    line-height: 1.7rem;
    letter-spacing: 0.02em;

    color: #8e9ad5;

    & strong {
      font-size: 2.3rem;
      line-height: 2.2rem;
    }
  }

  &__text {
    font-size: 1.5rem;
    line-height: 1.4rem;
  }

  &__button-restart {
    width: fit-content;

    padding: 23px 30px;

    font-weight: bold;
    font-size: 1.5rem;
    line-height: 1.5rem;

    color: #fff;
    background: linear-gradient(90deg, #d9d9d9 0%, #a1a1a1 100%);
    border-radius: 100px;
  }
}

.stat {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 50px;

  border-bottom: 2px solid #d9d9d9;

  &__item {
    text-align: center;
  }

  &__num {
    font-size: 3rem;
    line-height: 3rem;
    margin-bottom: 10px;
  }
}

@keyframes right-left {
  0% {
    right: -100%;
  }
  70% {
    right: 0%;
  }
  100% {
    right: -3%;
  }
}
</style>
