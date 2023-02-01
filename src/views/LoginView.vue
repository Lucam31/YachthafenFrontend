<template>
  <div class="form">
    <div class="border rounded container p-5 text-center">
      <form>
        <p class="h2">Login</p>
        <div class="mb-3">
          <input type="text" class="form-control" id="e-mail" placeholder="E-Mail" v-model="email">
        </div>
        <div class="mb-3">
          <input type="text" class="form-control" id="password" placeholder="Password" v-model="passwort">
        </div>
        <button type="submit" class="btn btn-primary" v-on:click.prevent="onLogin">Login</button>
        <button type="submit" class="btn btn-primary"><a href="/register" class="registerButton" v-on:click.prevent="onRegister">Abmelden TEST Button</a></button>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'LoginView',
  components: {
    
  },
  setup(){

  },
  data() {
  return{
    kunden_id: null,
    email: 'test@test.de',
    passwort: 'MarcelStinkt'
  };
  },
  methods: {
    async onLogin(){
      var res = await axios.post('https://localhost:7082/api/Login/LoginKunde', {email: this.email,
                                                                                 passwort: this.passwort});

    this.kunden_id = res.data;

    if(this.kunden_id != "-1"){
      this.$store.commit('setKundenDaten', res.data);
      this.$router.push('/suchen')
    }else{
      //error Handling einfügen --> Nutzer ist nicht angemeldet
    }
    },
    onRegister(){
      this.$store.commit('clearKundenDaten');
    }
  }
}
</script>

<style>
.form{
  position: relative;
  left: 50%;
  transform: translate(-50%, 0%);
}
button{
  margin-left: 1rem;
  margin-right: 1rem;
}
.registerButton{
  text-decoration: none;
  color: white;
}
.registerButton:hover{
  text-decoration: none;
  color: white;
}
</style>