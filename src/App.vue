<template>
  <div id="app">
  
<!-- <div>
  <b-dropdown id="dropdown-right" right text="Open Menu" variant="primary" style="width: 200px; float: right !important; padding-right: 10px !important;" class="mt-5">
    <b-dropdown-item href="/">Home</b-dropdown-item>
    <b-dropdown-item href="#/Search">Search</b-dropdown-item>
    <b-dropdown-item href="#/Add_Clients">Add Clients</b-dropdown-item>
    <b-dropdown-item href="#/Add_Hours">Add Hours</b-dropdown-item>
   <b-dropdown-item href="/#Release">Release of Liability</b-dropdown-item>
   <b-dropdown-item href="#/Export">Export</b-dropdown-item>
   <b-dropdown-item href="#/Settings">Settings</b-dropdown-item>
  </b-dropdown>
</div> -->

    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
