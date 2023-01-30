<template>
  <div class="content">
    <BuchungsForm></BuchungsForm>
    <LiegeplatzListe></LiegeplatzListe>
  </div>
</template>

<script>
// @ is an alias to /src
import BuchungsForm from '@/components/BuchungsForm.vue'

export default {
  name: 'BuchenView',
  components: {
    BuchungsForm
  }
}
</script>

<style>
</style>