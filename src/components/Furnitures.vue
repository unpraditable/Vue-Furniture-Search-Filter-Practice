<template>
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
</template>

<script>
export default {
    name: 'Furnitures',
    props: ['furnitures'],
}
</script>