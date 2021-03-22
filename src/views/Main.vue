<template>
  <div>
    <sidebar></sidebar>
    <patients-list @swipe="swipe"></patients-list>
    <drugs-list @drugActive="handleDrug"></drugs-list>
  </div>
</template>

<script>
import PatientsList from "@/components/PatientsList";
import Sidebar from "@/components/Sidebar";
import DrugsList from "../components/DrugsList.vue";

export default {
  name: "Main",
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
      } else {
        this.$router.push({ name: "Final" });
      }
    },
    swipe(direction) {
      switch (direction) {
        case "left":
          this.handleDrug(1);
          break;
        case "right":
          this.handleDrug(3);
          break;
        case "up":
          this.handleDrug(2);
          break;
      }
    },
  },
};
</script>

<style scoped lang="scss"></style>
