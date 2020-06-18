<template>
  <b-card style="max-width: 30rem" class="mx-auto p-2 mt-3 mb-4">
    <b-form>
      <h3 class="pb-0">
        Ingresar nuevo paciente
        <b-button
          class="my-1 mx-1"
          size="sm"
          variant="info"
          v-if="edit"
          @click="actualizarPatient(patient.id)"
          >Actualizar</b-button
        >
      </h3>

      <b-form inline>
        <b-form-input
          class="my-1 mx-1"
          placeholder="Nombre"
          type="text"
          :value="patient.data.name"
          @input="addName"
          required
        ></b-form-input>

        <b-form-input
          class="my-1 mx-1"
          placeholder="Apellido"
          type="text"
          :value="patient.data.lastname"
          @input="addLastname"
          required
        ></b-form-input>
      </b-form>

      <b-form inline>
        <b-form-input
          class="my-1 mx-1"
          placeholder="Email"
          type="text"
          :value="patient.data.email"
          @input="addEmail"
          required
        ></b-form-input>

        <b-form-input
          class="my-1 mx-1"
          style="max-width: 7rem"
          placeholder="Edad"
          type="number"
          :value="patient.data.age"
          @input="addAge"
          required
        ></b-form-input>

        <b-button class="my-1 mx-1" variant="warning" @click="agregarPatient"
          >Añadir</b-button
        >
      </b-form>
    </b-form>
  </b-card>
</template>

<script>
import firebase from "firebase";
import { mapState, mapActions } from "vuex";

export default {
  name: "AddPaciente",
  data() {
    return {};
  },
  computed: {
    ...mapState(["patient", "edit"]),
  },
  methods: {
    ...mapActions([
      "getPatients",
      "addPatient",
      "addName",
      "addLastname",
      "addEmail",
      "addAge",
      "updatePatient",
    ]),
    login(e) {
      e.preventDefault();
      firebase
        .auth()
        .signInWithEmailAndPassword(this.usuario.email, this.usuario.password)
        .then((user) => {
          console.log(user);
          this.$router.push("/");
          alert("Te has registrado con éxito!");
        })
        .catch(() => {
          console.log("Usuario no autenticado");
        });
    },
    agregarPatient() {
      this.addPatient();
      alert("¡El paciente se ha registrado exitosamente!");
    },
    actualizarPatient(id) {
      this.updatePatient(id);
    },
  },
  created() {
    this.getPatients();
  },
};
</script>

<style>
h3 {
  color: #ffc600;
  padding-bottom: 20px;
}
</style>
