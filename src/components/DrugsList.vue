<template>
  <ul class="drugs">
    <li v-for="(drug, index) of drugs" :key="drug.id" class="drugs__item">
      <button
        @click="getDrug(drug.id)"
        class="drugs__button"
        :style="{ background: drug.colorGradient }"
      >
        Препарат {{ index + 1 }}
      </button>
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

<style lang="scss" scoped>
.drugs {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 30px;

  &__button {
    padding: 30px 50px;

    font-weight: bold;
    font-size: 28px;
    line-height: 34px;

    color: #ffffff;

    border-radius: 100px;
  }
}
</style>
