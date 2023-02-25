<template>
    <div class="filter">
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-rulers" viewBox="0 0 1 16">
          <path d="M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5v-1H2v-1h4v-1H4v-1h2v-1H2v-1h4V9H4V8h2V7H2V6h4V2h1v4h1V4h1v2h1V2h1v4h1V4h1v2h1V2h1v4h1V1a1 1 0 0 0-1-1H1z"/>
        </svg>
      </span>
      <input type="text" class="form-control" placeholder="Länge" aria-label="Username" aria-describedby="basic-addon1" min="1" max="99" v-model="bootlaenge">
      <span class="input-group-text" id="basic-addon1">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-rulers" viewBox="0 0 16 1">
          <path d="M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5v-1H2v-1h4v-1H4v-1h2v-1H2v-1h4V9H4V8h2V7H2V6h4V2h1v4h1V4h1v2h1V2h1v4h1V4h1v2h1V2h1v4h1V1a1 1 0 0 0-1-1H1z"/>
        </svg>
      </span>
      <input type="text" class="form-control" placeholder="Breite" aria-label="Username" aria-describedby="basic-addon1" min="1" max="99" v-model="bootbreite">
      <span class="input-group-text" id="basic-addon1">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-droplet-half" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10c0 0 2.5 1.5 5 .5s5-.5 5-.5c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"/>
          <path fill-rule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z"/>
        </svg>
      </span>
      <input type="text" class="form-control" placeholder="Tiefgang" aria-label="Username" aria-describedby="basic-addon1" min="1" max="999" v-model="boottiefgang">
      <span class="input-group-text" id="basic-addon1">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
          <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
          <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
        </svg>
      </span>
      <input type="text" onfocus="(this.type = 'date')" class="form-control" placeholder="Startdatum" aria-label="Username" aria-describedby="basic-addon1" v-model="startdatum">
      <span class="input-group-text" id="basic-addon1">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
          <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
          <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
        </svg></span>
      <input type="text" onfocus="(this.type = 'date')" class="form-control" placeholder="Enddatum" aria-label="Username" aria-describedby="basic-addon1" v-model="enddatum">
      <input type="button" class="input-group-text" value="Suchen" aria-label="Username" aria-describedby="basic-addon1" @click="onsearch">
    </div>
  </div>
  <LiegeplatzListe v-if="Angebote" :Angebote="Angebote"></LiegeplatzListe>
</template>

<script>
// @ is an alias to /src

import LiegeplatzListe from '@/components/LiegeplatzListe.vue'
import axios from 'axios'
import APIURLService from '../services/API.service';



export default {
  name: 'SuchenView',
  components: {
    LiegeplatzListe
  },
  setup(){

    
  },
  data() {
  return{
    Angebote: null,
    bootlaenge: 1,
    bootbreite: 1,
    boottiefgang: 1,
    startdatum: "2023-03-16",
    enddatum: "2023-03-21"
  };
  },

  created() {
    const kunden_id = this.$store.getters.getKundenId;
    if(kunden_id == null){
      this.$router.push({name: "login"});
    }
  },
  methods: {
    async onsearch(){
      this.$store.commit('setStartdatum', this.startdatum);
      this.$store.commit('setEnddatum', this.enddatum);

      var res = await axios.post(APIURLService.getAPIUrl()+'/api/Buchung/GetVerfuegbareLiegeplaetze', {
                                                                                    bootlaenge: this.bootlaenge,
                                                                                    bootbreite: this.bootbreite,
                                                                                    boottiefgang: this.boottiefgang,
                                                                                    startdatum: this.startdatum,
                                                                                    enddatum: this.enddatum});
    this.Angebote = res.data;
    
   
    }
  }
}
</script>

<style>
</style>