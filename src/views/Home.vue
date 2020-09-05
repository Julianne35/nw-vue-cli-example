<template>
<div>
   <MainHome />
</div>
</template>

<script>
// @ is an alias to /src
import Logo from '@/components/home/Logo.vue';
import MainHome from '@/components/home/MainHome.vue';

export default {
  name: 'Home',
  components: {
    MainHome
  }
};
</script>

<style scoped>
</style>
