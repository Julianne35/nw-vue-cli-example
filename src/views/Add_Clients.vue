<template>
  <div>
    <MainAddClients />
  </div>
</template>

<script>
// @ is an alias to /src
import Titlebar from '@/components/home/Titlebar.vue';
import MainAddClients from '@/components/addClients/MainAddClients.vue';


export default {
  name: 'Add Clients',
  components: {
    Titlebar,
    MainAddClients
  }
};
</script>