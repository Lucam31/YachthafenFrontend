<template>
  <div class="list-group">
    <div class="list-group-item" v-for="{liegeplatz_id, bezeichnung, laenge, breite, tiefgang, tagespreis } of Angebot" :key="liegeplatz_id">        
      <h2 class="Titel">{{ bezeichnung }}</h2>
      <p class="item">Länge: {{ laenge }} m</p>
      <p class="item">Breite: {{ breite }} m</p>
      <p class="item">Tiefgang: {{ tiefgang }} cm</p>
      <p class="item">Tagespreis: {{ tagespreis }} €</p>
      <router-link to="/buchen" custom v-slot="{ navigate }">
        <input type="button" class="input-group-text buchen" value="Buchen" aria-label="Username" aria-describedby="basic-addon1" @click="navigate" role="link">
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LiegeplatzListe',

data() {
  return{
    Angebot: [
    {
        liegeplatz_id: 1,
        bezeichnung: "Platz 1",
        laenge: 1,
        breite: 1,
        tiefgang: 20,
        tagespreis: 50
      },
      {
        liegeplatz_id: 2,
        bezeichnung: "Platz 2",
        laenge: 5,
        breite: 5,
        tiefgang: 200,
        tagespreis: 500
      },
      {
        liegeplatz_id: 2,
        bezeichnung: "Platz 3",
        laenge: 5,
        breite: 5,
        tiefgang: 200,
        tagespreis: 500
      }
    ]
  };
}}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .list-group-item{
    display: flex;
    flex-wrap: wrap;
    padding: 3%;
  }
  .Titel{
    width: 100%;
    text-align: left;
  }
  .item{
    width: 50%;
    text-align: left;
  }
  .buchen{
    position: relative;
    left: 100%;
    transform: translate(-100%, 0%);
  }
</style>
