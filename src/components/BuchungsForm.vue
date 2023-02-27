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
        <input type="date" class="form-control" id="startdatum" disabled placeholder="Startdatum" v-model="Startdatum">
        </div>
        <div class="col">
        <label for="bezeichnung" class="form-label">Enddatum</label>
        <input type="date" class="form-control" id="enddatum" disabled placeholder="Enddatum" v-model="Enddatum">
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
          <input class="form-check-input nkt" type="checkbox" value="" v-model="StromGebucht" v-on:change="getFullPrice" id="strom">
          <label class="form-check-label" for="strom">
            Strom (Preis: {{ StromPreis }}€)
          </label>
        </div>
        <div class="form-check col">
          <input class="form-check-input nkt" type="checkbox" value="" v-model="WasserGebucht" v-on:change="getFullPrice" id="wasser">
          <label class="form-check-label" for="wasser">
            Wasser (Preis: {{ WasserPreis }}€)
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
        <input type="number" class="form-control" id="laenge" v-model="Laenge">
      </div>      
      <div class="mb-3">
        <label for="tagespreis" class="form-label">Breite</label>
        <input type="number" class="form-control" id="breite" v-model="Breite">
      </div>
      <div class="mb-3">
        <label for="tagespreis" class="form-label">Tiefe</label>
        <input type="number" class="form-control" id="tiefe" v-model="Tiefe">
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
    Gesamtpreis: null,
    WasserGebucht: false,
    StromGebucht: false,
    WasserPreis: null,
    StromPreis: null
  };
},
methods:{
  toggleComponent() {
    this.visible = !this.visible;
  },
  getFullPrice() {
    console.log("test");
    var day1 = new Date(this.Startdatum);
    var day2 = new Date(this.Enddatum);
    var dif = Math.abs(day2 - day1);
    var days = dif/(1000*3600*24)

    this.Gesamtpreis = this.Tagespreis * days;

    if(this.WasserGebucht){
      this.Gesamtpreis = this.Gesamtpreis + this.WasserPreis;
    }

    if(this.StromGebucht){
      this.Gesamtpreis = this.Gesamtpreis + this.StromPreis;
    }
    
  },
  async onBuchen(){

    const kunden_id = this.$store.getters.getKundenId;
    const startdatum = this.$store.getters.getstartDatum;
    const enddatum = this.$store.getters.getEnddatum;
    const liegeplatzid = this.$store.getters.getLiegeplatzId;

    var res = await axios.post(APIURLService.getAPIUrl()+'/api/Buchung/CreateBuchung',{ kundenid: kunden_id,
                                                                                    liegeplatzid: liegeplatzid,
                                                                                    registrierungsid: this.selected,
                                                                                    start: startdatum,
                                                                                    end: enddatum,
                                                                                    wasser: this.WasserGebucht,
                                                                                    strom: this.StromGebucht});
    console.log(res.data);
    if(res.data != -1){
      //buchung Erfolg
      this.$router.push('/buchungen')
    }else{
      //buchung klappte nichtz
    }

  },
  async onBootAnlegen(){
    await axios.post(APIURLService.getAPIUrl()+'/api/Kunden/CreateBoot',{ name: this.Boot_name,
                                                                                registrierungsid: this.registrierungsid,
                                                                                laenge: this.Laenge,
                                                                                breite: this.Breite,
                                                                                tiefe: this.Tiefe,
                                                                                benutzerId: this.$store.getters.getKundenId
                                                                                });
    this.toggleComponent();
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

  res = await axios.get(APIURLService.getAPIUrl()+'/api/Buchung/GetNebenkostenDetails');
  this.StromPreis = res.data[0].m_Preis;
  this.WasserPreis = res.data[1].m_Preis;



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

