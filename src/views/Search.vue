<template>
  <div class="search">
    <Titlebar />
    <h1>Search Clients</h1>
        <b-navbar-nav class="ml-auto">
        <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2 d-flex align-content-center" placeholder="Search"></b-form-input>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
      </b-navbar-nav>
  </div>
</template>

<script>
// @ is an alias to /src
import Titlebar from '@/components/home/Titlebar.vue';


export default {
  name: 'Search',
  components: {
    Titlebar
  }
};
</script>

