<template>
  <div class="final">
    <ul>
      <li v-for="(drug, index) of drugs" :key="drug.id">
        Препарат {{ index + 1 }} -
        {{ Math.round((drug.count * 100) / drugs.length) }} %
      </li>
      <button @click="restart">Start again</button>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    drugs() {
      return this.$store.getters.getDrugs;
    },
  },
  methods: {
    restart() {
      this.$store.dispatch("restart");
      this.$router.push({ name: "Cover" });
    },
  },
};
</script>

<style></style>
