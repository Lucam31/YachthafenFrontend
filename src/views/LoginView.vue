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
        <button type="submit" class="btn btn-primary"><a href="/register">Register</a></button>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import { useCookies } from "vue3-cookies";


export default {
  name: 'LoginView',
  components: {
    
  },
  setup(){
    const { cookies } = useCookies();
    return { cookies };
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
      var res = await axios.post('https://localhost:7082/api/Login/LoginKunde', {
                                                                                    email: this.email,
                                                                                    passwort: this.passwort});

    this.kunden_id = res.data;
    console.log(res);
    this.cookies.set("kunden_id", this.kunden_id);
    if(this.kunden_id != null){
      this.$router.push('/home')
    }
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