<template>
  <ul class="drugs">
    <li v-for="drug of drugs" :key="drug.id">
      <button @click="getDrug(drug.id)">Препарат{{ drug.id }}</button>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    drugs() {
      return this.$store.getters.getDrugs;
    },
  },
  methods: {
    getDrug(id) {
      this.$emit("drugActive", id);
    },
  },
};
</script>

<style></style>
