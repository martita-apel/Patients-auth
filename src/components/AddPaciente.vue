<template>
  <b-card style="max-width: 30rem" class="mx-auto p-2 mt-3 mb-4">
    <b-form :model="patient">
      <h3 class="pb-0">Ingresar nuevo paciente</h3>
      <b-form inline>
        <b-form-input
          class="my-1 mx-1"
          placeholder="Nombre"
          type="text"
          v-model="patient.name"
          required
        ></b-form-input>

        <b-form-input
          class="my-1 mx-1"
          placeholder="Apellido"
          type="text"
          v-model="patient.lastname"
          required
        ></b-form-input>
      </b-form>

      <b-form inline>
        <b-form-input
          class="my-1 mx-1"
          placeholder="Email"
          type="text"
          v-model="patient.email"
          required
        ></b-form-input>

        <b-form-input
          class="my-1 mx-1"
          style="max-width: 7rem"
          placeholder="Edad"
          type="number"
          v-model="patient.age"
          required
        ></b-form-input>

        <b-button
          class="my-1 mx-1"
          type="submit"
          variant="warning"
          @click="addPatient"
          >Añadir</b-button
        >
      </b-form>

      <!--  <b-button
        type="primary"
        v-if="edit"
        :loading="loading"
        @click="editPatient"
        >Editar</b-button
      > -->
    </b-form>
  </b-card>
</template>

<script>
import firebase from "firebase";

export default {
  name: "AddPaciente",
  data() {
    return {
      patient: {
        name: "",
        email: "",
        age: "",
      },
    };
  },
  methods: {
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
    addPatient() {},
  },
};
</script>

<style>
h3 {
  color: #ffc600;
  padding-bottom: 20px;
}
</style>
