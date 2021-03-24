<template>
  <div class="main">
    <sidebar></sidebar>
    <div class="main__content">
      <patients-list
        @handleDrug="handleDrug"
        :direction="direction"
      ></patients-list>
      <drugs-list @drugActive="handleDrug"></drugs-list>
    </div>
  </div>
</template>

<script>
import PatientsList from "@/components/PatientsList.vue";
import Sidebar from "@/components/Sidebar";
import DrugsList from "../components/DrugsList.vue";

export default {
  name: "Main",
  data() {
    return {
      direction: null,
    };
  },
  components: {
    PatientsList,
    Sidebar,
    DrugsList,
  },
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
  methods: {
    handleDrug(id) {
      this.$store.dispatch("setDrugsCount", id);
      this.$store.dispatch("setPatientsDrug", id);

      if (this.currentPatient + 1 < this.patients.length) {
        this.$store.dispatch("setCurrentPatient", this.currentPatient + 1);
        this.swipe(id);
      } else {
        this.$router.push({ name: "Final" });
      }
    },
    swipe(id) {
      switch (id) {
        case 1:
          this.direction = "left";
          break;
        case 2:
          this.direction = "up";
          break;
        case 3:
          this.direction = "right";
          break;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.main {
  display: grid;
  grid-template-columns: 1fr 2fr;

  height: 100vh;

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }
}
</style>
