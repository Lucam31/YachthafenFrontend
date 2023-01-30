<template>
  <div class="list-group">
    <div class="list-group-item" v-for="{m_LiegeplatzId, m_Bezeichnung, m_Laenge, m_Breite, m_Tiefgang, m_Tagespreis } of Angebot" :key="m_LiegeplatzId">        
      <h2 class="Titel">{{ m_Bezeichnung }}</h2>
      <p class="item">Länge: {{ m_Laenge }} m</p>
      <p class="item">Breite: {{ m_Breite }} m</p>
      <p class="item">Tiefgang: {{ m_Tiefgang }} cm</p>
      <p class="item">Tagespreis: {{ m_Tagespreis }} €</p>      
      <router-link :to="{name: 'buchen', params: {liegeplatz_id: m_LiegeplatzId }}" >
        <input type="button" class="input-group-text buchen" value="Buchen" aria-label="Username" aria-describedby="basic-addon1" role="link">
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LiegeplatzListe',

data() {
  return{
    Angebot: this.$parent.Angebot,
  };
},
created(){
  console.log(this.Angebot);
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
