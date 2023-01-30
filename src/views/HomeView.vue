<template>
  <AngebotsSuche></AngebotsSuche>
  <LiegeplatzListe></LiegeplatzListe>
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