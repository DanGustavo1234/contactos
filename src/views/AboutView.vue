<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <contactos msg="Welcome to ktaxi contacts"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import contactos from '@/components/contactos.vue';


@Options({
  components: {
    contactos,
  },
})
export default class AboutView extends Vue {}
</script>