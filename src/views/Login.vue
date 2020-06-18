<template>
  <b-container>
    <h1>Ingresa con tu cuenta</h1>
    <b-card style="max-width: 25rem" class="mx-auto p-2 mt-3 mb-5">
      <b-form :model="usuario">
        <b-form-group>
          <b-form-input
            placeholder="Ingresa tu correo electrónico"
            type="text"
            v-model="usuario.email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group>
          <b-form-input
            placeholder="Ingresa tu contraseña"
            type="password"
            v-model="usuario.password"
            required
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" class="boton" @click="login"
          >Iniciar Sesión</b-button
        >
      </b-form>
    </b-card>
    <h5 class="mx-3 my-5">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, atque
      cupiditate possimus voluptatem modi rerum eaque tenetur.
    </h5>
  </b-container>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Login",
  data() {
    return {
      showPassword: false,
      usuario: {
        email: "",
        password: "",
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
  },
};
</script>

<style scoped>
h1 {
  color: #ffde6c;
}
.boton {
  background-color: #2a7ce3;
  border: none;
}
.boton:hover {
  background-color: #ffde6c;
  color: #2c3e50;
}
</style>
