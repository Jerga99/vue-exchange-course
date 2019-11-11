<template>
  <app-modal 
    :onModalSubmit="submitModal">
    <!-- Warning in ideal case you should have only one H1 per page -->
    <h1>Some Deal</h1>
    <template #openingElement>
      <a
        target="_"
        class="button is-fullwidth is-large is-danger is-outlined m-b-sm">
        Make a deal
      </a>
    </template>
  </app-modal>
</template>

<script>
  import AppModal from '@/components/Modal'
  export default {
    components: { AppModal },
    props: {
      onModalSubmit: {
        required: true,
        type: Function
      }
    },
    methods: {
      submitModal(closeCallback) {
      }
    }
  }
</script>

<style>

</style>









