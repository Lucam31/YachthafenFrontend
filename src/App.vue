<template>
    <NavBar></NavBar>
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
  setup(){
  },
  data() {
  return{
    Rolle: null
  };
  }
}
</script>

<style>

</style>
