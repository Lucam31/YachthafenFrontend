<template>
    <NavBar v-if="this.$store.getters.getKundenId != null"></NavBar>
<div class="content" :class="{'loginContent': isLoginView}">
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
  computed: {
		isLoginView() {
      if (this.$route.name === 'login' || this.$route.name === 'register') {
        return true;
      }
      return false;
		}
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
  background: rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin: 5em 0;
  padding: 3em;
}
.loginContent{
  width: 35%;
}
body{
  background-color: #add8e6 ;
  background-image: url('../img/bg2.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
a{
  text-decoration: none;
  color: currentColor;
}
</style>
