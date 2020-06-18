<template>
  <div>
    <table class="tabla_pacientes">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Email</th>
          <th>Edad</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in patients" :key="p.id">
          <td>{{ p.data.name }}</td>
          <td>{{ p.data.lastname }}</td>
          <td>{{ p.data.email }}</td>
          <td>{{ p.data.age }}</td>
          <td><b-button variant="success">Editar</b-button></td>
          <td><b-button variant="danger">Eliminar</b-button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Pacientes",
  data() {
    return {};
  },
  computed: {
    ...mapState(["patients"]),
  },
  methods: {
    ...mapActions(["getPatients"]),
  },
  created() {
    this.getPatients();
  },
};
</script>

<style>
.tabla_pacientes {
  font-size: 20px;
  border-collapse: collapse;
  margin: 20px auto 40px auto;
}
.tabla_pacientes thead {
  font-weight: bold;
  text-align: left;
  color: #ffc600;
}
.tabla_pacientes td,
.tabla_pacientes th {
  padding: 10px 15px;
  text-align: left;
}

.tabla_pacientes tbody tr:hover {
  background-color: #ddd;
  color: #2c3e50;
}
.tabla_pacientes td {
  border: 1px solid;
}
</style>
