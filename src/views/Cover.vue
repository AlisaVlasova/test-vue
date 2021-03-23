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
      <router-link to="/main" class="cover__button button">
        Начать
      </router-link>
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
    top: -30px;
    left: 110px;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 860px;
    height: 860px;

    padding: 280px 181px 160px;

    background: linear-gradient(63.53deg, #2d8550 16.62%, #5e6ec2 83.38%);
    border-radius: 50%;
  }

  &__description {
    color: #fff;
  }

  &__text {
    font-size: 35px;
    line-height: 41px;
    letter-spacing: 0.02em;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  &__title {
    margin: 29px 0 120px;

    font-size: 60px;
    font-weight: bold;
    line-height: 66px;
    letter-spacing: 0.02em;
  }

  &__large-title {
    font-size: 70px;
    line-height: 77px;
    text-transform: uppercase;
  }

  &__button {
    padding: 23px 130px;

    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
    text-align: center;

    color: #8e9ad5;
    background: #ffffff;

    border-radius: 100px;
  }
}
</style>
