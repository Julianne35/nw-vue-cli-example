<template>
    <div>
<b-button 
style="background-color: #143256 !important; width: 160px; float: right !important; margin-top: -33px !important;" 
class="rounded-0 border-0" v-b-toggle.sidebar>Open Menu</b-button>

    <b-sidebar style="color: red !important;" class="bg-primary sidebar" id="sidebar" title="Main Menu" shadow>
      <div class="px-3 py-2">
           
    <b-list-group>
      <b-list-group-item style="background-color:rgb(96,131,144) !important; color: #e1e5e6 !important;" href="/">
      Home</b-list-group-item>

      <b-list-group-item style="background-color:rgb(143,165,173) !important; color: #e1e5e6 !important;" href="#/Search" >
        Search</b-list-group-item>

      <b-list-group-item style="background-color:rgb(96,131,144) !important; color: #e1e5e6 !important;" href="#/Add_Clients">
        Add Clients</b-list-group-item>

      <b-list-group-item style="background-color:rgb(143,165,173) !important; color: #e1e5e6 !important;" href="#/Add_Hours" >
        Add Hours</b-list-group-item>

      <b-list-group-item style="background-color:rgb(96,131,144) !important; color: #e1e5e6 !important;" href="#/Release" >
        Release of Liability</b-list-group-item>

      <b-list-group-item style="background-color:rgb(143,165,173) !important; color: #e1e5e6 !important;" href="#/Export" >
        Export</b-list-group-item>

      <b-list-group-item style="background-color:rgb(96,131,144) !important; color: #e1e5e6 !important;" href="#/Settings" >
        Settings</b-list-group-item>

    </b-list-group>
      </div>
    </b-sidebar>
    </div>
</template>

<style lang="scss">
@import '~bootstrap/scss/bootstrap.scss';
  @import '~bootstrap-vue/src/index.scss';
</style>

