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
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  line-height: 20px;

  color: #414141;

  scroll-behavior: smooth;
}

p,
h1,
h2,
h3,
ul,
li,
a {
  margin: 0;
  padding: 0;
  color: inherit;
  font-weight: inherit;
  font-size: inherit;
  list-style: none;
  text-decoration: none;
}

button {
  background-color: inherit;
  color: inherit;
  border: none;
  outline: none;
}
</style>
