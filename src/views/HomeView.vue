<template>
  <div class="content">
    <AngebotsSuche></AngebotsSuche>
    <LiegeplatzListe></LiegeplatzListe>
  </div>
</template>

<script>
// @ is an alias to /src
import AngebotsSuche from '@/components/AngebotsSuche.vue'
import LiegeplatzListe from '@/components/LiegeplatzListe.vue'

export default {
  name: 'HomeView',
  components: {
    AngebotsSuche,
    LiegeplatzListe
  }
}
</script>

<style>
</style>