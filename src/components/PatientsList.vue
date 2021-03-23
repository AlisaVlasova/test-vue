<template>
  <ul class="patients">
    <li
      v-for="(patient, index) of patients"
      :key="patient.id"
      class="patients__item"
      :class="{ active: index === currentPatient }"
      :style="index < currentPatient && move(direction)"
      @touchstart="touchStart"
    >
      <img
        :src="require(`../assets/image/${patient.imgUrlName}.png`)"
        alt="Patient"
        class="patients__image"
      />
      <div class="patients__description">
        <h2 class="patients__title">
          {{ patient.title }}
        </h2>
        <p class="patients__text">
          {{ patient.text }}
        </p>
      </div>
      <p
        class="stamp"
        v-if="index < currentPatient"
        :style="stamp(patient.drugId)"
      >
        Препарат {{ patient.drugId }}
      </p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "PatientsList",
  computed: {
    patients() {
      return this.$store.getters.getPatients;
    },
    currentPatient() {
      return this.$store.getters.getCurrentPatient;
    },
    drugs() {
      return this.$store.getters.getDrugs;
    },
  },
  methods: {
    touchStart(touchEvent) {
      if (touchEvent.changedTouches.length !== 1) {
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
        return;
      }
      const posXEnd = touchEvent.changedTouches[0].clientX;
      const posYEnd = touchEvent.changedTouches[0].clientY;
      if (posXStart < posXEnd) {
        this.$emit("handleDrug", 3);
      } else if (posXStart > posXEnd) {
        this.$emit("handleDrug", 1);
      } else if (posYStart > posYEnd) {
        this.$emit("handleDrug", 2);
      }
    },
    move(direction) {
      switch (direction) {
        case "left":
          return { transform: "translate(-100%, 0) rotate(-40deg)" };

        case "right":
          return { transform: "translate(100%, 0) rotate(40deg)" };

        case "up":
          return { transform: "translate(0, -100%) rotate(-20deg)" };
      }
    },
    stamp(id) {
      const color = this.drugs.find((drug) => drug.id === id).color;

      return { color };
    },
  },
  props: {
    direction: String,
  },
};
</script>

<style scoped lang="scss">
.patients {
  position: relative;

  min-width: 100%;
  min-height: 850px;

  padding: 130px 0 180px;

  &__item {
    position: absolute;
    left: 50%;

    max-width: 540px;

    margin-right: 50px;

    box-shadow: 0px 0px 40px rgba(127, 127, 127, 0.4);
    border-radius: 40px;

    opacity: 0;

    transition: all 1.5s ease;

    &.active {
      opacity: 1;
      transform: translate(-50%, 0);
    }
  }

  &__description {
    padding: 15px 50px 30px;
  }

  &__title {
    margin-bottom: 15px;

    font-weight: bold;
    font-size: 32px;
    line-height: 39px;

    color: #8e9ad5;
  }

  &__text {
    font-size: 24px;
    line-height: 29px;
  }
}

.stamp {
  position: absolute;
  top: 45%;
  left: 20%;

  padding: 30px;

  font-size: 52px;
  line-height: 51px;

  border: 8px solid;

  transform: rotate(-30deg);
}
</style>
