<template>
<div class="mx-auto border border-bottom-0" style="width: 100%;" id="bkg">
<div class="mt-4 mr-1 ml-1 mx-auto" id="box1">
  <Titlebar />
  <ClientDataTable />
  <FooterAddClients />
</div>
</div>
</template>

<script>
// @ is an alias to /src
import Titlebar from '@/components/home/Titlebar.vue';
import FooterAddClients from '@/components/addClients/FooterAddClients.vue';
import ClientDataTable from '@/components/addClients/ClientDataTable.vue';

export default {
  name: 'MainAddClients',
  components: {
    ClientDataTable,
    Titlebar,
    FooterAddClients
  }
};
</script>

<style scoped>
#bkg {
  background-image: url("../../assets/add_clients_background.jpg") !important;
  background-size: cover !important;
  height: 800px !important;
}
#box1 {
  border: 14px solid !important;
  border-image : linear-gradient(0deg, rgba(2, 0, 36, 0) 0%, rgba(17,94,122,1) 100%) 1 !important;

  background-color: rgba(255, 255, 255, 0.180) !important;
  display: block !important;
  width: 95% !important;
  height: 750px !important;
}
</style>