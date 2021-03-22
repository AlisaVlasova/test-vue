<template>
  <ul class="patients">
    <li
      v-for="patient of patients"
      :key="patient.id"
      class="patients__item"
      @touchstart="touchStart"
    >
      <p>{{ patient.name }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    patients() {
      return this.$store.getters.getPatients;
    },
  },
  methods: {
    touchStart(touchEvent) {
      if (touchEvent.changedTouches.length !== 1) {
        // We only care if one finger is used
        return;
      }
      const posXStart = touchEvent.changedTouches[0].clientX;
      const posYStart = touchEvent.changedTouches[0].clientY;
      addEventListener(
        "touchend",
        (touchEvent) => this.touchEnd(touchEvent, posXStart, posYStart),
        { once: true }
      );
    },
    touchEnd(touchEvent, posXStart, posYStart) {
      if (touchEvent.changedTouches.length !== 1) {
        // We only care if one finger is used
        return;
      }
      const posXEnd = touchEvent.changedTouches[0].clientX;
      const posYEnd = touchEvent.changedTouches[0].clientY;
      if (posXStart < posXEnd) {
        this.$emit("swipe", "right");
      } else if (posXStart > posXEnd) {
        this.$emit("swipe", "left");
      } else if (posYStart > posYEnd) {
        this.$emit("swipe", "up");
      }
    },
  },
};
</script>

<style scoped lang="scss"></style>
