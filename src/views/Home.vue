<template>
<div>
   <Main />
</div>
</template>

<script>
// @ is an alias to /src
import Logo from '@/components/Logo.vue';
import Main from '@/components/Main.vue';

export default {
  name: 'Home',
  components: {
    Main
  }
};
</script>

<style scoped>
</style>
