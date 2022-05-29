<template>
  <v-card
    img="https://i.pinimg.com/564x/71/68/00/7168000e1b349b0a9685023e4a86fd70.jpg"
    height="500"
    width="90%"
    elevation="2"
    class="px-2"
  >
    <v-card-title class="secondary--text d-flex justify-center text-truncate">
      {{ beer.name }}
    </v-card-title>
    <v-card-text
      class="d-flex justify-center"
      style="overflow-y: hidden; height: 23rem"
    >
      <v-img :src="beer.image_url" alt="" max-height="340" max-width="85" />
      <div class="ml-4">
        <div>
          <h4 class="white--text">
            {{ beer.brewers_tips }}
          </h4>
          <h4 class="secondary--text">Food pairing</h4>
          <span
            class="white--text mr-1"
            v-for="(food, index) in beer.food_pairing"
            :key="index"
            >{{ food }}</span
          >
        </div>
        <div>
          <h3 class="secondary--text mt-2">Characteristics:</h3>
          <v-list style="background-color: transparent" dense>
            <v-list-item dark> - ABV: {{ beer.abv }} %</v-list-item>
            <v-list-item dark>
              - Attenuation level:
              {{ beer.attenuation_level }} %
            </v-list-item>
            <v-list-item dense dark>
              - EBC:
              {{ beer.ebc }} %
            </v-list-item>
            <v-list-item dense dark>
              - IBU:
              {{ beer.ibu }} %
            </v-list-item>
          </v-list>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "BeerCard",
  props: {
    beer: {
      type: Object,
    },
  },
};
</script>
