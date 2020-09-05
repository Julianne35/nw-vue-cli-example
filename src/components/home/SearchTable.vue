<template>
  <b-container id="searchStyle">
    <b-row>
      <b-col sm="8" offset-sm="2"></b-col>
    </b-row>

    <b-row style="padding-top: 1.5px !important;" class="mt-1" v-for="type in types" :key="type">
      <b-col>
        <label>
          <h4 class="border p-1">Search</h4>
        </label>
      </b-col>
      <b-col sm="9">
        <b-form-input :id="`type-${type}`" :type="type" class="rounded-0"></b-form-input>
      </b-col>
    </b-row>

    <b-row outlined class="border pt-3" id="rowStyle">
      <b-col>
         <b-table head-variant="dark" borderless hover :items="items"></b-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      types: ["search"],
       items: [
          { first_name: 'Dickerson',
            last_name: 'Macdonald' ,
            _rowVariant: 'light'},

          { first_name: 'Larsen',
            last_name: 'Shaw' ,
            _rowVariant: 'secondary'},

          { first_name: 'Geneva',
            last_name: 'Wilson',
            _rowVariant: 'light'},

          { first_name: 'Jami',
            last_name: 'Carney',
            _rowVariant: 'secondary'}
        ]
    };
  },
};
</script>

<style scoped>
#searchStyle {
  width: 72% !important;
  height: 50px !important;
  margin: 80px auto !important;
  color: #ebeeef !important;
  background-color: rgba(40, 98, 118, 0.8) !important;
  /* border-radius: 10px !important; */
  font-family: Calibri !important;
  font-size: 18px !important;
  border-color: rgba(149, 183, 194, 0.493) !important;
}
h4 {
  border-color: rgba(149, 183, 194, 0.493) !important;
}
#rowStyle {
  background-color: rgba(40, 98, 118, 0.6) !important;
  /* border: 8px rgba(40, 98, 118, 1) solid !important; */
}

</style>