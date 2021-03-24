<template>
  <div class="sidebar">
    <div class="sidebar__header">
      <button @click="home" class="sidebar__button">
        <img src="@/assets/image/home.svg" alt="Home" title="Домой" />
      </button>
      <button @click="restart" class="sidebar__button">
        <img src="@/assets/image/restart.svg" alt="Restart" title="Сначала" />
      </button>
    </div>

    <div class="sidebar__params params">
      <h2 class="sidebar__title">Параметры:</h2>
      <ul class="params__list">
        <li v-for="drug of drugs" :key="drug.id" class="params__item">
          <img
            :src="require(`../assets/image/${drug.imgUrl}.svg`)"
            alt="Drug"
            class="params__item-image"
          />
          {{ drug.count }}
        </li>
      </ul>
    </div>

    <div class="sidebar__footer">
      <p>Осталось в очереди:</p>
      <p class="sidebar__count">
        <strong>{{ currentPatient + 1 }}</strong>
        / {{ patients.length }}
      </p>
      <div class="sidebar__footer-bg"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  computed: {
    drugs() {
      return this.$store.getters.getDrugs;
    },
    patients() {
      return this.$store.getters.getPatients;
    },
    currentPatient() {
      return this.$store.getters.getCurrentPatient;
    },
    drugImg(drug) {
      return `@/assets/image/${drug.imgUrl}`;
    },
  },
  methods: {
    home() {
      this.$store.dispatch("restart");
      this.$router.push({ name: "Cover" });
    },
    restart() {
      this.$store.dispatch("restart");
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  position: relative;
  z-index: 2;

  background-color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &::before {
    content: "";
    display: block;

    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    background: linear-gradient(63.53deg, #2d8550 16.62%, #5e6ec2 83.38%);
    opacity: 0.7;
  }

  &__header {
    position: relative;

    display: flex;

    padding: 70px 50px;
  }

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 70px;
    width: 70px;

    margin-right: 38px;

    background: #fff;

    border-radius: 100%;

    &:nth-of-type(2) {
      margin-right: 0;
    }
  }

  &__title {
    font-size: 36px;
    line-height: 44px;

    color: #ffffff;
  }

  &__footer {
    position: relative;

    padding: 20px 50px;

    font-size: 36px;
    line-height: 44px;
    text-align: center;
    letter-spacing: 0.02em;

    color: #ffffff;

    &-bg {
      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;

      background: #ffffff;
      opacity: 0.15;
    }
  }

  &__count {
    font-size: 46px;
    line-height: 80px;
  }
}

.params {
  position: relative;
  padding: 0 50px;

  &__list {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    margin-top: 30px;
  }

  &__item {
    display: flex;
    align-items: center;

    padding: 10px 20px 10px 10px;
    margin: 0 20px 40px 0;

    font-size: 48px;
    font-weight: bold;
    line-height: 59px;

    background: #ffffff;
    box-shadow: 0px 0px 50px rgba(131, 42, 64, 0.4);

    border-radius: 40px;

    &-image {
      margin-right: 40px;
    }

    :nth-of-type(2) {
      margin-right: 0;
    }

    :nth-of-type(3) {
      margin: 0;
    }
  }
}
</style>
