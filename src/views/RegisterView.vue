<template>
    <div class="form text-center">
        <form>
          <p class="h2">Registrierung</p>
          <div class="row mt-4 mb-4">
            <div class="col">
            <input type="text" class="form-control" id="Name" placeholder="Name" v-model="Name">
            </div>
            <div class="col">
            <input type="text" class="form-control" id="Vorname" placeholder="Vorname" v-model="Vorname">
            </div>
          </div>
          <div class="mb-4">
            <input type="text" class="form-control" id="E-Mail" placeholder="E-Mail" v-model="Email">
          </div>
          <div class="mb-4">
            <input type="text" class="form-control" id="password" placeholder="Password" v-model="Passwort">
          </div>
          <button type="submit" class="btn btn-primary" v-on:click.prevent="onRegistrieren">Registrieren</button>
          <button type="submit" class="btn btn-primary" v-on:click.prevent="onLogin">Login</button>
        </form>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import axios from 'axios'
  import APIURLService from '../services/API.service';

  export default {
    name: 'RegisterView',
    components: {
      
    },
    data() {
    return{
      Name: null,
      Vorname: null,
      Email: null,
      Passwort: null
    };},
    methods: {
    async onLogin(){
      this.$router.push('/login')
    },
    onRegistrieren(){
      axios.post(APIURLService.getAPIUrl()+'/api/Login/RegisterKunde', {name: this.Name,
                                                                                vorname: this.Vorname,
                                                                                email: this.Email,
                                                                                passwort: this.Passwort});

      this.$router.push('/login')
    }
  }
  }
  </script>
  
  <style>
  
  </style>