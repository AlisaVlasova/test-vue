<template>
  <div class="sidebar">
    {{ currentPatient + 1 }} of {{ patients.length }}
    <ul>
      <li v-for="(drug, index) of drugs" :key="drug.id">
        {{ index + 1 }} - {{ drug.count }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
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
  },
};
</script>

<style></style>
