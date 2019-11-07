

<template>
  <header class="header">
    <nav 
      class="navbar"
      :class="$route.path === '/' ? '' : 'with-background' ">
      <div class="container">
        <div class="navbar-brand">
          <a
            @click="alertMessage()" 
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
            <div
              v-if="isAuthenticated" 
              class="navbar-item nav-home">
                {{user.email}}
            </div>
            <router-link
              v-for="item in items" 
              :key="item.text"
              :to="item.link"
              class="navbar-item nav-home">{{item.text}}</router-link>
            <template v-if="!isAuthenticated">
              <router-link
                to="/login"
                class="navbar-item nav-home">
                Login
              </router-link>
              <router-link
                to="/register"
                class="navbar-item nav-home">
                Register
              </router-link>
            </template>
            <template v-else>
              <a
                @click="$store.dispatch('auth/signOut')"
                href="#" 
                class="navbar-item nav-home">
                Logout
              </a>
            </template>
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
  computed: {
    user() {
      return this.$store.state.auth.user
    },
    isAuthenticated() {
      return this.$store.getters['auth/isAuthenticated']
    }
  },
  methods: {
    alertMessage() {
      alert(this.$route.path)
    }
  }
}
</script>















