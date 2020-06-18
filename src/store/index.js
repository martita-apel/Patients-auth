import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    patients: [],
    patient: {
      id: null,
      data: {
        name: "",
        lastname: "",
        email: "",
        age: "",
      },
    },
    edit: false,
  },
  mutations: {
    GET_PATIENTS(state, patients) {
      state.patients = patients;
    },
    ADD_NAME(state, name) {
      state.patient.data.name = name;
    },
    ADD_LASTNAME(state, lastname) {
      state.patient.data.lastname = lastname;
    },
    ADD_EMAIL(state, email) {
      state.patient.data.email = email;
    },
    ADD_AGE(state, age) {
      state.patient.data.age = age;
    },
    UPDATE_EDIT(state) {
      state.edit = !state.edit;
    },
    SET_PATIENT(state, patient) {
      state.patient = patient;
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
    addName({ commit }, name) {
      commit("ADD_NAME", name);
    },
    addLastname({ commit }, lastname) {
      commit("ADD_LASTNAME", lastname);
    },
    addEmail({ commit }, email) {
      commit("ADD_EMAIL", email);
    },
    addAge({ commit }, age) {
      commit("ADD_AGE", age);
    },
    addPatient({ dispatch, state }) {
      const paciente = state.patient.data;
      axios
        .post(
          "https://us-central1-pacientes-d1b71.cloudfunctions.net/patients/patient",
          paciente,
          { headers: { "Content-type": "application/json" } }
        )
        .then(() => {
          dispatch("getPatients");
        });
    },
    updateEdit({ commit }) {
      commit("UPDATE_EDIT");
    },
    findPatient({ commit }, id) {
      axios
        .get(
          `https://us-central1-pacientes-d1b71.cloudfunctions.net/patients/patient/${id}`,
          { headers: { "Content-type": "application/json" } }
        )
        .then((response) => {
          commit("SET_PATIENT", response.data);
        });
    },
    deletePatient({ dispatch }, id) {
      axios
        .delete(
          `https://us-central1-pacientes-d1b71.cloudfunctions.net/patients/patient/${id}`
        )
        .then(() => {
          dispatch("getPatients");
        });
    },
  },
});
