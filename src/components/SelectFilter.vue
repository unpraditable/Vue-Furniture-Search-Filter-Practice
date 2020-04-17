<template>
    <div class="dropdown-check-list">
        <span class="anchor">{{title}}</span>
        <ul class="list-unstyled items">
            <li v-for="model in models">
            <label class="flex-checkbox">
                <span v-if="!isDeliveryTime" class="title">{{model}}</span>

                <span v-if="isDeliveryTime" class="title">{{model.title}}</span>

                <input v-if="!isDeliveryTime" class="checkbox" type="checkbox" :value="model" v-model="checked">

                <input v-if="isDeliveryTime" class="checkbox" type="checkbox" :value="{max: model.maxValue, min: model.minValue}" v-model="checked">

                <span class="checkmark"></span>
            </label>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
  name: 'SelectFilter',
  props: ["title", "models", "isDeliveryTime", "checked"]
}
</script>