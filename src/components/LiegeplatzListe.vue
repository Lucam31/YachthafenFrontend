<template>
  <div class="list-group">
    <div class="list-group-item" v-for="Angebot in Angebote" :key="Angebot.m_LiegeplatzId">        
      <h2 class="Titel">{{ Angebot.m_Bezeichnung }}</h2>
      <p class="item">Länge: {{ Angebot.m_Laenge }} m</p>
      <p class="item">Breite: {{ Angebot.m_Breite }} m</p>
      <p class="item">Tiefgang: {{ Angebot.m_Tiefgang }} cm</p>
      <p class="item">Tagespreis: {{ Angebot.m_Tagespreis }} €</p>      
      
        <input type="button" class="input-group-text buchen" value="Buchen" aria-label="Username" aria-describedby="basic-addon1" v-on:click="onNavigate({Angebot})" role="link">
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'LiegeplatzListe',

data() {
  return{
    Angebote: this.$parent.Angebot,
  };
},
created(){
  //console.log(this.Angebot);
},
methods: {
  onNavigate(Angebot){
    const data = Angebot.Angebot;

    this.$store.commit('setLiegeplatzBezeichnung', data.m_Bezeichnung)
    this.$store.commit('setLiegeplatzID', data.m_LiegeplatzId)
    this.$store.commit('setLiegeplatzTagespreis', data.m_Tagespreis)
    this.$router.push({name: "buchen"});
  }
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
