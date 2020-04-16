<template>
  <div class="home">
    <header>
      <div class="container">
        <div class="row search-row">
          <div class="col-md-6">
            <input class="search-box" type="text" v-model="search" placeholder="Search Furniture" />

          </div>
        </div>
      </div>
    </header>
    <div class="content">
      <div class="container">
            <Furnitures v-if="!search" :furnitures="furnitures" />
            <Furnitures v-if="search" :furnitures="searchFurniture" />

      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import Furnitures from '@/components/Furnitures.vue';
  const apiUrl = "https://www.mocky.io/v2/5c9105cb330000112b649af8";

  export default {
    name: 'Home',
    components: {
      Furnitures
    },
    data() {
      return {
        search: '',
        filter: false,
        furnitures: [],
      }
    },

    //Fetch products and styles
    created() {

      axios.get(apiUrl)
        .then(response => {
          // JSON responses are automatically parsed.
          this.furnitures = response.data.products
        })
        
    },
    mounted() {
      
    },
    computed: {
      searchFurniture() {
        return this.furnitures
          .filter(furniture =>
            furniture.name.toLowerCase().includes(this.search.toLowerCase())
          )
      },
    }
  }
</script>