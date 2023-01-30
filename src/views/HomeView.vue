<template>
  <div class="content">
    <AngebotsSuche></AngebotsSuche>
    <LiegeplatzListe v-if="Angebot"></LiegeplatzListe>
  </div>
</template>

<script>
// @ is an alias to /src
import AngebotsSuche from '@/components/AngebotsSuche.vue'
import LiegeplatzListe from '@/components/LiegeplatzListe.vue'
import axios from 'axios'

export default {
  name: 'HomeView',
  components: {
    AngebotsSuche,
    LiegeplatzListe
  },
  data() {
  return{
    Angebot: null,
    LiegeplatzViewKey: 0
  };
  },

  async created() {

    var res = await axios.post('https://localhost:7082/api/Buchung/GetVerfuegbareLiegeplaetze', {
                                                                                    bootlaenge: 0,
                                                                                    bootbreite: 0,
                                                                                    boottiefgang: 0,
                                                                                    startdatum: "2023-01-30T07:22:54.899Z",
                                                                                    enddatum: "2023-01-30T07:22:54.899Z"});

    this.Angebot = res.data;
    console.log(this.Angebot);
  }
}
</script>

<style>
</style>