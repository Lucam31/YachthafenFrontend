<template>
  <div class="border rounded container p-5 text-start">
    <form>
      <p class="h2 mb-5">Liegeplatz buchen</p>
      <div class="mb-3">
        <label for="bezeichnung" class="form-label">Liegeplatzname</label>
        <input type="text" class="form-control" id="bezeichnung" disabled  v-model="Bezeichnung">
      </div>
      <div class="mb-3">
        <label for="bezeichnung" class="form-label">Boot</label>
        <div class="input-group">
        <select class="form-select">
          <option disabled value="" selected="selected">Bitte Boot auswählen</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <span class="input-group-text" id="basic-addon2" href="#" @click.self="toggleComponent()">+</span>
      </div>
      </div>
      
      <div class="mb-3">
        <label for="tagespreis" class="form-label">Tagespreis</label>
        <input type="text" class="form-control" id="tagespreis" disabled v-model="Tagespreis">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
  <div class="border rounded container p-5 text-start mt-5" v-show="visible">
    <form>
      <p class="h2 mb-5">Boot anlegen</p>
      <div class="mb-3">
        <label for="bezeichnung" class="form-label">Bootsname</label>
        <input type="text" class="form-control" id="boot_name" v-model="Boot_name">
      </div>
      <div class="mb-3">
        <label for="bezeichnung" class="form-label">Penislänge</label>
        <input type="text" class="form-control" id="laenge" v-model="Laenge">
      </div>
      
      <div class="mb-3">
        <label for="tagespreis" class="form-label">Breite</label>
        <input type="text" class="form-control" id="breite" v-model="Breite">
      </div>
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
    BooteDesUsers: null,
    visible: false
  };
},
methods:{
  toggleComponent() {
    console.log(this.visible);
    this.visible = !this.visible;
  }
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
  button{
    position: relative;
    left: 100%;
    transform: translate(-100%, 0%);
  }
  span:hover{
    cursor: pointer;
  }
</style>

