<template>
  <div class="border rounded container p-5 text-start">
    <form>
      <p class="h2 mb-5">Liegeplatz buchen</p>
      <div class="mb-3">
        <label for="bezeichnung" class="form-label">Liegeplatzname</label>
        <input type="text" class="form-control" id="bezeichnung" disabled  v-model="Bezeichnung">
      </div>
      <div class="row mt-4 mb-4">
        <div class="col">
        <label for="bezeichnung" class="form-label">Startdatum</label>
        <input type="date" class="form-control" id="startdatum" disabled placeholder="Startdatum" v-model="Startdatum" v-on:change="getFullPrice">
        </div>
        <div class="col">
        <label for="bezeichnung" class="form-label">Enddatum</label>
        <input type="date" class="form-control" id="enddatum" disabled placeholder="Enddatum" v-model="Enddatum" v-on:change="getFullPrice">
        </div>
      </div>
      <div class="mb-3">
        <label for="bezeichnung" class="form-label">Boot</label>
        <div class="input-group">
        <select class="form-select" v-model="selected">
          <option :value="-1" disabled>Bitte Boot wählen oder Anlegen</option>        
          <option v-for="Boot in BooteDesUsers" v-bind:key="Boot.m_RegistrierungsId" v-bind:value="Boot.m_RegistrierungsId">
            {{Boot.m_Name}}
        </option>
        </select>
        <span class="input-group-text" id="basic-addon2" href="#" v-on:click.prevent="toggleComponent()">+</span>
      </div>
      </div>

      <div class="row mt-4 mb-4">
        <label for="nebenkosten" class="form-label">Nebenkosten</label>
        <div class="form-check col">
          <input class="form-check-input nkt" type="checkbox" value="" id="strom">
          <label class="form-check-label" for="strom">
            Strom
          </label>
        </div>
        <div class="form-check col">
          <input class="form-check-input nkt" type="checkbox" value="" id="wasser">
          <label class="form-check-label" for="wasser">
            Wasser
          </label>
        </div>
      </div>
      
      <div class="mb-3">
        <label for="tagespreis" class="form-label">Tagespreis</label>
        <input type="text" class="form-control" id="tagespreis" disabled v-model="Tagespreis">
      </div>
      <div class="mb-3">
        <label for="tagespreis" class="form-label">Gesamtpreis</label>
        <input type="text" class="form-control" id="gesamtpreis" disabled v-model="Gesamtpreis">
      </div>
      <button type="submit" class="input-group-text" v-on:click.prevent="onBuchen">Platz buchen</button>
    </form>
  </div>
  <div class="border rounded container p-5 text-start mt-5" v-show="visible">
    <form>
      <p class="h2 mb-5">Boot anlegen</p>
      <div class="mb-3">
        <label for="bezeichnung" class="form-label">Registrierungsnummer</label>
        <input type="text" class="form-control" id="Registrierung" v-model="registrierungsid">
      </div>
      <div class="mb-3">
        <label for="bezeichnung" class="form-label">Bootsname</label>
        <input type="text" class="form-control" id="boot_name" v-model="Boot_name">
      </div>
      <div class="mb-3">
        <label for="bezeichnung" class="form-label">Länge</label>
        <input type="text" class="form-control" id="laenge" v-model="Laenge">
      </div>      
      <div class="mb-3">
        <label for="tagespreis" class="form-label">Breite</label>
        <input type="text" class="form-control" id="breite" v-model="Breite">
      </div>
      <div class="mb-3">
        <label for="tagespreis" class="form-label">Tiefe</label>
        <input type="text" class="form-control" id="tiefe" v-model="Tiefe">
      </div>
      <button type="submit" class="input-group-text" v-on:click.prevent="onBootAnlegen">Boot speichern</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import APIURLService from '../services/API.service';

export default {
  name: 'BuchungsForm',
  components: {},
  data() {
  return{
    Bezeichnung: null,
    Tagespreis: null,
    BooteDesUsers: null,
    visible: false,
    selected: "-1",
    Boot_name: null,
    Laenge: null,
    Breite: null,
    Tiefe: null,
    registrierungsid: null,
    Startdatum: null,
    Enddatum: null,
    Gesamtpreis: null
  };
},
methods:{
  toggleComponent() {
    this.visible = !this.visible;
  },
  getFullPrice() {
    var day1 = new Date(this.Startdatum);
    var day2 = new Date(this.Enddatum);
    var dif = Math.abs(day2 - day1);
    var days = dif/(1000*3600*24)
    console.log(days)
    this.Gesamtpreis = this.Tagespreis * days;
  },
  async onBuchen(){
    console.log(this.selected);
    const kunden_id = this.$store.getters.getKundenId;
    const startdatum = this.$store.getters.getstartDatum;
    const enddatum = this.$store.getters.getEnddatum;
    const liegeplatzid = this.$store.getters.getLiegeplatzId;
    console.log(kunden_id);
    var res = await axios.post(APIURLService.getAPIUrl()+'/api/Buchung/CreateBuchung',{ kundenid: kunden_id,
                                                                                    liegeplatzid: liegeplatzid,
                                                                                    registrierungsid: this.selected,
                                                                                    start: startdatum,
                                                                                    end: enddatum,
                                                                                    wasser: true,
                                                                                    strom: true});
    console.log(res.data);
    if(res.data != -1){
      //buchung Erfolg
      this.$router.push('/buchungen')
    }else{
      //buchung klappte nichtz
    }

  },
  async onBootAnlegen(){
    var res = await axios.post(APIURLService.getAPIUrl()+'/api/Kunden/CreateBoot',{ name: this.Boot_name,
                                                                                registrierungsid: this.registrierungsid,
                                                                                laenge: this.Laenge,
                                                                                breite: this.Breite,
                                                                                tiefe: this.Tiefe});
    console.log(res.data);
    this.created();
  }
},
setup(){

  },
async created(){

  this.Bezeichnung = this.$store.getters.getLiegeplatzBezeichnung;
  this.Tagespreis = this.$store.getters.getLiegeplatzTagespreis;
  this.Startdatum = this.$store.getters.getstartDatum;
  this.Enddatum = this.$store.getters.getEnddatum;

  //Alle Boote des Users werden gehohlt und in BootedesUsers bereitgestellt
  const kunden_id = this.$store.getters.getKundenId;
  var res = await axios.get(APIURLService.getAPIUrl()+'/api/Kunden/GetBooteFromKunde?kundenId='+ kunden_id);
  this.BooteDesUsers = res.data;

  this.getFullPrice()
  
},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  background-color: #fff;
}
  button{
    position: relative;
    left: 100%;
    transform: translate(-100%, 0);
    margin: 0;
  }
  span:hover{
    cursor: pointer;
  }
.nkt{
  margin: 5px;
}
</style>

