<template>
  <div>
    <!-- Form Card-->
    <b-card
      style="height: 630px !important; margin-top: 2rem; background-color: rgba(255,255,255,.3) !important;"
    >
      <b-form-group>
        <b-row>
          <b-col>
            <h1>Add Client</h1>

          <!-- Date Picker Coder-->
            <div style="float:right !important;">
              <!-- <label for="example-input">Choose a date</label> -->
              <b-input-group style="width: 155px !important;" class="mb-3 mt-1">
                <b-form-input
                  class="rounded-0"
                  style="font-size: 14px !important; height: 40px !important;"
                  id="example-input"
                  v-model="value"
                  type="text"
                  placeholder="Date / /"
                  autocomplete="off"
                ></b-form-input>
                <b-input-group-append>
                  <b-form-datepicker
                    class="ml-2"
                    v-model="value"
                    button-only
                    button-variant="secondary"
                    right
                    locale="en-US"
                    aria-controls="example-input"
                    @context="onContext"
                  ></b-form-datepicker>
                </b-input-group-append>
              </b-input-group>
              <!-- <p class="mb-1">Value: '{{ value }}'</p>
              <p class="mb-1">Selected: '{{ selected }}'</p>
              <p>Formatted: '{{ formatted }}'</p>-->
            </div>
          </b-col>
        </b-row>

          <!-- Name, Age, Phone, Email, Uplaod ... -->
        <b-row class="">
          <b-col sm="6">
            <b-form-group
              style="width: 450px !important; margin-left: -58px !important;"
              label-cols-sm="3"
              label="Name:"
              label-align-sm="right"
              label-for="nested-name"
            >
              <b-form-input id="nested-name"></b-form-input>
            </b-form-group>

            <b-form-group
              style="width: 450px !important; margin-left: -58px !important;"
              label-cols-sm="3"
              label="Age:"
              label-align-sm="right"
              label-for="nested-age"
            >
              <b-form-input id="nested-age"></b-form-input>
            </b-form-group>

            <b-form-group
              style="width: 450px !important; margin-left: -58px !important;"
              label-cols-sm="3"
              label="Phone:"
              label-align-sm="right"
              label-for="nested-phone"
            >
              <b-form-input id="nested-phone"></b-form-input>
            </b-form-group>

            <b-form-group
              style="width: 450px !important; margin-left: -58px !important;"
              label-cols-sm="3"
              label="Email:"
              label-align-sm="right"
              label-for="nested-email"
            >
              <b-form-input id="nested-Email"></b-form-input>
            </b-form-group>
          </b-col>

          <b-col sm="6">
            <b-form-file
              v-model="file2"
              size="md"
              placeholder="Upload Picture ID"
              drop-placeholder="Drop file here..."
              ref="file-input"
            ></b-form-file>
            <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>
            <b-card>
              <div style="height: 10vh !important"><img src="" class="img-fluid" alt="Place Holder for Picture of ID" /></div>
            </b-card>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-form-group
              label="Release Liability:"
              class="mb-0"
              label-cols-sm="2"
            >
              <b-form-radio-group
                class="pt-2 d-flex justify-content-start"
                :options="['Generate Liability Release to Sign', 'Generare Covid Release']"
              ></b-form-radio-group>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-form-textarea class="mt-3" id="textarea-rows" placeholder="Tall textarea" rows="5"></b-form-textarea>
          </b-col>
        </b-row>
        <b-button
          style="width: 150px !important; background-color: rgb(20, 50, 86) !important;"
          class="float-right mt-3"
          type="submit"
          variant="primary"
        >Submit</b-button>
      </b-form-group>
    </b-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: '',
        formatted: '',
        selected: '',
        file: null,
        file2: null,
      }
    },
    methods: {
      onContext(ctx) {
        // The date formatted in the locale, or the `label-no-date-selected` string
        this.formatted = ctx.selectedFormatted
        // The following will be an empty string until a valid date is entered
        this.selected = ctx.selectedYMD
      }
    }
  }
</script>