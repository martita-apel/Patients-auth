import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    patients: [],
  },
  mutations: {
    GET_PATIENTS(state, patients) {
      state.patients = patients;
    },
  },
  actions: {
    getPatients({ commit }) {
      axios
        .get(
          "https://us-central1-pacientes-d1b71.cloudfunctions.net/patients/patients"
        )
        .then((response) => {
          commit("GET_PATIENTS", response.data);
        });
    },
  },
});
