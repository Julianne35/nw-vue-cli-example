<template>
  <div id="barStyle">
    <h5 class="d-flex pl-2">Client Database App</h5>
    <SidebarMenu />
  </div>
</template>

<script>
// @ is an alias to /src
import SidebarMenu from '@/components/home/SidebarMenu.vue';


export default {
  name: 'Titlebar',
  components: {
    SidebarMenu
  }
};
</script>

<style scoped>
#barStyle {
    display: block !important;
    width: 100% !important;
    height: 28px !important;
    background-color: #b5b5b5 !important;
}
h5 { 
    padding-top: 3.5px !important; 
    font-family: Calibri !important;
    font-size: 18px !important;
}
</style>
