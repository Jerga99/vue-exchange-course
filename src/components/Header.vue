

<template>
  <header class="header">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a
            @click="alertMessage('Hello World Passing IN!!!!!!!!!')" 
            class="navbar-item has-text-white is-size-2 has-text-weight-bold"
            href="#">
            {{ brandName }}
          </a>
          <span role="button" tabindex="0" class="navbar-burger burger has-text-white" data-target="navbar-menu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbar-menu" class="navbar-menu">
          <div class="navbar-end">
            <a
              v-for="item in items" 
              :key="item.text"
              :href="item.link"
              class="navbar-item nav-home">{{item.text}}</a>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  // props: ['brandName', 'items'],
  props: {
    brandName: {
     type: String,
     default: 'Exchangario'
    },
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    alertMessage(message) {
      alert(message)
    }
  }
}
</script>















