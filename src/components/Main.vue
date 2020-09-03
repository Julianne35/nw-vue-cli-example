<template>
<div class="mx-auto border border-bottom-0" style="width: 100%;" id="bkg">
<div class="mt-4 mr-1 ml-1 mx-auto" id="box1">
  <Titlebar />
  <Logo />
  <SearchTable />
  <Footer />
</div>
</div>
</template>

<script>
// @ is an alias to /src
import Logo from '@/components/Logo.vue';
import Titlebar from '@/components/Titlebar.vue';
import SearchTable from '@/components/SearchTable.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Background',
  components: {
    Logo,
    Titlebar,
    SearchTable,
    Footer
  }
};
</script>

<style scoped>
#bkg {
  background-image: url("../assets/background.jpg") !important;
  background-size: cover !important;
  height: 800px !important;
}
#box1 {
  border: 14px solid !important;
  border-image : linear-gradient(0deg, rgba(2, 0, 36, 0) 0%, rgba(17,94,122,1) 100%) 1 !important;

  background-color: rgba(255, 255, 255, 0.180) !important;
  display: block !important;
  width: 95% !important;
  height: 720px !important;
}
</style>