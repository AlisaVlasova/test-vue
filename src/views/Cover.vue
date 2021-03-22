<template>
  <div class="cover">
    <div class="cover__wellcome">
      <p class="cover__text">Добро пожаловать в игру</p>
      <h1 class="cover__title">
        <h2 class="cover__small-title">Помоги</h2>
        Фармацевту
      </h1>
      <router-link to="/main" class="cover__button button">
        Начать
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.cover {
  background-image: url(../assets/image/bg.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
