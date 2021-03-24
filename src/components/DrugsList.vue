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

  width: 100%;

  padding: 0 5% 5%;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: stretch;
  }

  &__button {
    padding: 23px 40px;
    margin-bottom: 30px;

    font-weight: bold;
    font-size: 1.7rem;
    line-height: 1.7rem;

    color: #ffffff;

    border-radius: 100px;
    border: 2px solid transparent;

    @media (max-width: 1024px) {
      width: 100%;
    }
  }
}
</style>
