<template>
  <div class="home">
    <header>
      <div class="container">
        <div class="row search-row">
          <input class="search-box" type="text" v-model="search" placeholder="Search Furniture" />
        </div>
        <div class="row filter-row">

            <div class="dropdown-check-list" tabindex="100">
              <span class="anchor">Furniture Style</span>
              <ul class="list-unstyled items">
                <li v-for="furnitureStyle in furnitureStyles">
                  <label class="flex-checkbox">
                    <span class="title">{{furnitureStyle}}</span>
                    <input class="checkbox" type="checkbox" :value="furnitureStyle" v-model="checkedFurnitureStyles">
                    <span class="checkmark"></span>

                  </label>

                </li>
              </ul>
            </div>

            <div class="dropdown-check-list" tabindex="100">
              <span class="anchor">Time Delivery</span>
              <ul class="list-unstyled items">
                <li v-for="deliveryTime in deliveryTimes">
                  <label class="flex-checkbox">
                    <span class="title">{{deliveryTime.title}}</span>
                    <input class="checkbox" type="checkbox"
                      :value="{max: deliveryTime.maxValue, min: deliveryTime.minValue}" v-model="checkedDeliveryTimes">
                    <span class="checkmark"></span>
                  </label>
                </li>
              </ul>
            </div>


        </div>
      </div>
    </header>
    <div class="content">
      <div class="container">
            <Furnitures v-if="!filter && !search" :furnitures="furnitures" />
            <Furnitures v-if="filter && !search" :furnitures="filteredFurnitures" />
            <Furnitures v-if="search" :furnitures="searchFurniture" />
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import Furnitures from '@/components/Furnitures.vue';
  import SelectFilter from '@/components/SelectFilter.vue';
  const apiUrl = "https://www.mocky.io/v2/5c9105cb330000112b649af8";

  export default {
    name: 'Home',
    components: {
      Furnitures,
      SelectFilter
    },
    data() {
      return {
        search: '',
        filter: false,
        furnitures: [],
        filteredFurnitures: [],
        furnitureStyles: [],
        deliveryTimes: [{
            title: "1 Week",
            maxValue: 7,
            minValue: 0,
          },
          {
            title: "2 Weeks",
            maxValue: 14,
            minValue: 8
          },
          {
            title: "1 Month",
            maxValue: 28,
            minValue: 15
          },
          {
            title: "& more",
            minValue: 32
          },
        ],
        checkedFurnitureStyles: [],
        checkedDeliveryTimes: []
      }
    },

    //Fetch products and styles
    created() {
      axios.get(apiUrl)
        .then(response => {
          // JSON responses are automatically parsed.
          this.furnitures = response.data.products;
          this.furnitureStyles = response.data.furniture_styles
          let furnitures = this.furnitures;
          //limit character for description & add "." separator for price
          for (let i = 0; i < furnitures.length; i++) {
            //limit character
            furnitures[i].description = furnitures[i].description.substring(0, 114) + "...";
            //add "." separator
            furnitures[i].price = furnitures[i].price.toLocaleString("id-ID")
          }
        })
        
    },
    mounted() {
      var checkList = document.querySelectorAll('.dropdown-check-list');
      for (let i = 0; i < checkList.length; i++) {
        checkList[i].querySelector('.anchor').onclick = function () {
          var items = checkList[i].querySelector('.items');
          if (items.classList.contains('visible')) {
            items.classList.remove('visible');
            items.style.display = "none";
          } else {
            items.classList.add('visible');
            items.style.display = "block";
          }
        }
      }
    },
    computed: {
      searchFurniture() {
        let furnitures = "";
        if(this.filter) {
          furnitures = this.filteredFurnitures;
        } else {
          furnitures = this.furnitures;
        }
        return this.furnitures
          .filter(furniture =>
            furniture.name.toLowerCase().includes(this.search.toLowerCase())
          )
      }
    },
    watch: {
      checkedFurnitureStyles: {
        handler() {
          if(!this.checkedFurnitureStyles.length) {
            this.filter = false; 
          } else {
            this.filter = true;
          }
          let newArray = [];
          let furnitures = "";
          if(this.search) {
            furnitures = this.searchFurniture;
          } else {
            furnitures = this.furnitures;
          }
          for (let i = 0; i < furnitures.length; i++) {
            if (furnitures[i].furniture_style.some(style => this.checkedFurnitureStyles.indexOf(style) !== -1)) {
              newArray.push(furnitures[i]);
            }
          }
          this.filteredFurnitures = newArray;
        }
      },
      checkedDeliveryTimes: {
        handler() {
          if(!this.checkedDeliveryTimes.length) {
            this.filter = false; 
          } else {
            this.filter = true;
          }
          let newArray = [];
          let furnitures = "";
          if(this.search) {
            furnitures = this.searchFurniture;
          } else {
            furnitures = this.furnitures;
          }
         for (let i = 0; i < furnitures.length; i++) {
            for (let j = 0; j < this.checkedDeliveryTimes.length; j++) {
              if (parseInt(furnitures[i].delivery_time) <= this.checkedDeliveryTimes[j].max && this
                .checkedDeliveryTimes[j].min < furnitures[i].delivery_time) {
                newArray.push(furnitures[i]);
              }
            }

          }
          this.filteredFurnitures = newArray;
        }
      },
    }
  }
</script>