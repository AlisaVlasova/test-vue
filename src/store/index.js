import Vue from "vue";
import Vuex from "vuex";

import { patientsData, drugsData } from "@/data";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drugs: [...drugsData],
    patients: [...patientsData],
    currentPatient: 0,
  },
  mutations: {
    setDrugsCount(state, id) {
      let selectedDrug = state.drugs.find((item) => item.id === id);
      selectedDrug.count += 1;
    },
    setPatientsDrug(state, id) {
      let selectedPatient = state.patients.find(
        (item, index) => index === state.currentPatient
      );
      selectedPatient.drugId = id;
    },
    setCurrentPatient(state, patient) {
      state.currentPatient = patient;
    },
    restart(state) {
      state.drugs = [...state.drugs].map((drug) => ({ ...drug, count: 0 }));
      state.currentPatient = 0;
    },
  },
  actions: {
    setDrugs(state, data) {
      state.commit("setDrugs", data);
    },
    setDrugsCount(state, data) {
      state.commit("setDrugsCount", data);
    },
    setPatientsDrug(state, data) {
      state.commit("setPatientsDrug", data);
    },
    setCurrentPatient(state, data) {
      state.commit("setCurrentPatient", data);
    },
    restart(state) {
      state.commit("restart");
    },
  },
  modules: {},
  getters: {
    getDrugs: (state) => state.drugs,
    getPatients: (state) => state.patients,
    getCurrentPatient: (state) => state.currentPatient,
  },
});
