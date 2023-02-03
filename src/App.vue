<template>
    <NavBar v-if="this.$store.getters.getKundenId != null"></NavBar>
<div class="content">
  <router-view/>
</div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'

  
export default {
  name: 'App',
  components: {
    NavBar
  },
  created(){
    const kunden_id = this.$store.getters.getKundenId;
    if(kunden_id == null){
      this.$router.push({name: "login"});
    }
  },
  data() {
  return{
    Rolle: null
  };
  }
}
</script>

<style>
.content{
  position: relative;
  width: 80%;
  left: 50%;
  transform: translate(-50%, 0);
  background: rgba(255, 255, 255, 0.7);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin: 5em 0;
  padding: 3em;
}
body{
  background-color: #add8e6 ;
}
a{
  text-decoration: none;
  color: currentColor;
}
</style>
