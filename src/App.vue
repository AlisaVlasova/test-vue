cd
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  overflow-x: hidden;
}

html {
  scroll-behavior: smooth;
}

p,
h1,
h2,
h3,
ul,
li {
  margin: 0;
  padding: 0;
  font-weight: inherit;
  font-size: inherit;
  list-style: none;
  color: inherit;
}

button {
  background-color: inherit;
  color: inherit;
  border: none;
  outline: none;
}
</style>
