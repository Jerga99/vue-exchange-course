<template>
  <div>
    <button 
      @click="isOpen = true" 
      class="button is-primary is-outlined m-t-sm">Update Info</button>
    <div :class="['modal', {'is-active': isOpen}]">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">User Profile</p>
          <button
            @click="isOpen = false"
            class="delete"
            aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <form>
            <div class="field">
              <label class="title">Full Name</label>
              <input 
                v-model="profileToUpdate.fullName"
                class="input">
            </div>
            <div class="field">
              <label class="title">Avatar</label>
              <input 
                v-model="profileToUpdate.avatar"
                class="input">
            </div>
            <div class="field">
              <label class="title">Info about user</label>
              <input 
                v-model="profileToUpdate.info"
                class="input">
            </div>
          </form>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success">Save changes</button>
          <button @click="isOpen = false" class="button">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      userProfile: {
        required: true,
        type: Object
      }
    },
    data () {
      return {
        // Copying by value lecture (:
        isOpen: false,
        profileToUpdate: {...this.userProfile}
      }
    }
  }
</script>

<style>

</style>