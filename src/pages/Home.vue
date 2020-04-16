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
            <ul class="row product-row list-unstyled">
                <li v-for="furniture in furnitures" :key="furniture.name">
                    <div class="product-card">
                        <div class="row name-row">
                            <h2>{{furniture.name}}</h2>
                            <p class="price">Rp {{furniture.price}},00</p>
                        </div>
                        <div class="row description-row">
                            <p class="description">{{furniture.description}}</p>
                        </div>
                        <div class="row style-row">
                            <ul class="list-unstyled">
                                <li v-for="style in furniture.furniture_style">{{style}}</li>
                            </ul>
                        </div>
                        <div class="row days-row">
                            <p class="days">{{furniture.delivery_time}} Days</p>
                        </div>
                    </div>
                </li>
            </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  const apiUrl = "https://www.mocky.io/v2/5c9105cb330000112b649af8";

  export default {
    name: 'Home',
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
  }
</script>