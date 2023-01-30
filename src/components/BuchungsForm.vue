<template>
  <div class="border rounded container p-5 text-start">
    <form>
      <p class="h2">Liegeplatz buchen</p>
      <div class="mb-3">
        <label for="bezeichnung" class="form-label">Liegeplatzname</label>
        <input type="text" class="form-control" id="bezeichnung" disabled  v-model="Bezeichnung">
      </div>
      <div class="row">
        <div class="mb-3 col">
          <label for="laenge" class="form-label">Bootslänge in Meter</label>
          <input type="number" class="form-control" id="laenge" min="1" max="5">
        </div>
        <div class="mb-3 col">
          <label for="breite" class="form-label">Bootsbreite in Meter</label>
          <input type="number" class="form-control" id="breite" min="1" max="5">
        </div>
      </div>
      <div class="row">
        <div class="mb-3 col">
          <label for="tiefgang" class="form-label">Tiefgang in Zentimeter</label>
          <input type="number" class="form-control" id="tiefgang" min="1" max="5">
        </div>
        <div class="mb-3 col">
          <label for="registrierunsnummer" class="form-label">Boot Registrierungsnummer</label>
          <input type="text" class="form-control" id="regNum" minlength="1" maxlength="30">
        </div>
      </div>
      <div class="mb-3">
        <label for="tagespreis" class="form-label">Tagespreis</label>
        <input type="text" class="form-control" id="tagespreis" disabled v-model="Tagespreis">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import { useCookies } from "vue3-cookies";

export default {
  name: 'BuchungsForm',
  data() {
  return{
    Bezeichnung: null,
    Tagespreis: null,
    BooteDesUsers: null
  };
},
setup(){
    const { cookies } = useCookies();
    return { cookies };
  },
async created(){
  this.Bezeichnung = this.$store.getters.getLiegeplatzBezeichnung;
  this.Tagespreis = this.$store.getters.getLiegeplatzTagespreis;

  //Alle Boote des Users werden gehohlt und in BootedesUsers bereitgestellt
  const kunden_id = this.cookies.get("kunden_id").kundenId;
  console.log(kunden_id);
  var res = await axios.get('https://localhost:7082/api/Kunden/GetBooteFromKunde?kundenId='+ kunden_id);
  this.BooteDesUsers = res.data;
  
},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* .buchung{
    position: relative;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 80%;
  } */
  button{
    position: relative;
    left: 100%;
    transform: translate(-100%, 0%);
  }
</style>
