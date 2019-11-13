<template>
  <div>
    <hero />
    <section class="posts">
      <div class="container">
        <div class="posts-type">Latest Posts</div>
        <!-- provides exchanges -->
        <exchange-list
          :exchanges="exchanges" />
      </div>
    </section>
    <pagination :onNextPage="getMoreExchanges" />
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import Pagination from '@/components/Pagination'
import ExchangeList from '@/components/exchange/ExchangeList'

export default {
  components: {
    Hero,
    Pagination,
    ExchangeList
  },
  created() {
    this.$store.dispatch('exchange/getExchanges')
  },
  computed: {
    exchanges() {
      return this.$store.state.exchange.items
    }
  },
  methods: {
    getMoreExchanges({page}) {
      this.$store.dispatch('exchange/getMoreExchanges', {page})
    }
  }
}
</script>












