<template>
  <b-container direction="vertical">
    <h1>Registro de Pacientes</h1>

    <Pacientes />
    <Add-Paciente />

    <b-button :xs="8" class="mb-4" type="danger" @click="logout"
      >Cerrar Sesión</b-button
    >
  </b-container>
</template>

<script>
// @ is an alias to /src
import AddPaciente from "@/components/AddPaciente.vue";
import Pacientes from "@/components/Pacientes.vue";
import firebase from "firebase";

export default {
  name: "Home",
  components: {
    AddPaciente,
    Pacientes,
  },
  data() {
    return {};
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/login");
        });
    },
  },
};
</script>
