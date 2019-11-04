<template>
  <div>

    <app-header 
      :items="menuItems" />

    <hero />
    <section class="posts">
      <div class="container">
        <div class="posts-type">Latest Posts</div>
        <!-- provides exchanges -->
        <exchange-list
          :exchanges="exchanges" />
      </div>
    </section>
    <pagination />
  </div>
</template>

<script>
import AppHeader from '@/components/Header'
import Hero from '@/components/Hero'
import Pagination from '@/components/Pagination'
import ExchangeList from '@/components/exchange/ExchangeList'

const exchanges = [{
  id: "ad7asdsa68dasd",
  type: "product", // service or product
  title: "I have Driller",
  description: "I will exchange this super driller...",
  value: 20, // value per hour in case of service,
  user: "2398173193",
  image: "https://images.unsplash.com/photo-1458829549177-e9a8f3db5b14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
  country: "Germany",
  city: "Berlin",
  status: "active",
  tags: ["tools", "helping"] // can be active/inactive,
},
{
  id: "ad7asdsa68dasd",
  type: "service", // service or product
  title: "I will teach programming",
  description: "I will make you super programmer",
  value: 20, // value per hour in case of service,
  user: "2398173193",
  image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
  country: "Germany",
  city: "Berlin",
  status: "active",
  tags: ["programming", "pc"] // can be active/inactive
}]

export default {
  name: 'app',
  components: {
    AppHeader,
    Hero,
    Pagination,
    ExchangeList
  },
  data() {
    return {
      brandName: 'Exchangario',
      exchanges,
      menuItems: [
        { text: 'Home', link: '/' },
        { text: 'About', link: '/about' },
        { text: 'FAQ', link: '/faq' },
        { text: 'Login', link: '/login' },
        { text: 'Register', link: '/register' }
      ]
    }
  }
}
</script>

<style lang="scss">
  @import 'assets/styles/variables.scss';
  @import '~bulma/bulma.sass';
  @import 'assets/styles/main.scss';
  .hero-section {
    position: relative;
  }
  .posts {
    padding-top: 70px;
  }
  .posts-type {
    font-size: 34px;
    margin-bottom: 10px;
    font-weight: bold;
  }
  .search-lookup {
      width: 960px;
      margin: 0 auto;
      background-color: #262d32;
      padding: 20px;
      color: white;
      border-radius: 10px;
  }
  .search-lookup-wrap {
    width: 100%;
    z-index: 2;
    position: absolute;
    top: auto;
    bottom: -42px;
  }
  .search-card-find {
    width: 100%;
    height: 180px;
    position: relative;
    display: block;
    border-radius: 3px;
    text-decoration: none;
    box-shadow: 0 0 1px rgba(0,0,0,.05);
    background-clip: content-box;
    background-size: cover;
    background-position: 50% 20%;
    border: 1px solid rgba(0,0,0,.12);
    -webkit-tap-highlight-color: transparent;
    &-interest {
      position: absolute;
      bottom: 12px;
      right: 12px;
      > p {
        font-weight: bold;
      }
    }
    .title {
      color: white;
    }
    .subtitle {
      color: white;
    }
    &-content {
      &-date {
        margin: 10px;
        width: 70px;
        text-align: center;
        border-radius: 50%;
        .day {
          display: block;
          font-size: 21px;
          color: white;
          font-weight: bold;
        }
        .month {
          display: block;
          color: #ff5050;
          font-weight: bold;
          font-size: 23px;
          margin-bottom: -5px;
        }
      }
      &-info {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 15px;
        width: 100%;
      }
    }
  }
</style>