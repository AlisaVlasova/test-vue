<template>
  <div class="cover">
    <div class="cover__wellcome">
      <div class="cover__description">
        <p class="cover__text">Добро пожаловать в игру</p>
        <h1 class="cover__title">
          Помоги
          <p class="cover__large-title">Фармацевту</p>
        </h1>
      </div>
      <router-link to="/main" class="cover__button btn"> Начать </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cover",
};
</script>

<style scoped lang="scss">
.cover {
  position: relative;

  height: 100vh;

  background-image: url(../assets/image/bg.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &__wellcome {
    position: absolute;
    top: -10%;
    left: 8%;

    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 860px;
    max-height: 860px;

    padding: 280px 181px 160px;

    background: linear-gradient(63.53deg, #2d8550 16.62%, #5e6ec2 83.38%);

    border-radius: 50%;

    animation: up-down 2s ease-in-out 1;
  }

  &__description {
    color: #fff;
  }

  &__text {
    font-size: 2.2rem;
    line-height: 2rem;
    letter-spacing: 0.02em;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  &__title {
    margin: 29px 0 120px;

    font-size: 3.7rem;
    font-weight: bold;
    line-height: 3.3rem;
    letter-spacing: 0.02em;
  }

  &__large-title {
    font-size: 4.3rem;
    line-height: 4.5rem;
    text-transform: uppercase;
  }

  &__button {
    padding: 23px 130px;

    font-weight: bold;
    font-size: 2.2rem;
    line-height: 2.2rem;
    text-align: center;

    color: #8e9ad5;
    background: #ffffff;

    border-radius: 100px;
  }
}

@keyframes up-down {
  0% {
    top: -100%;
  }
  70% {
    top: 10%;
  }
  100% {
    top: -10%;
  }
}
</style>
