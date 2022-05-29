<template>
  <v-card
    img="https://i.pinimg.com/564x/71/68/00/7168000e1b349b0a9685023e4a86fd70.jpg"
    height="500"
    width="80%"
    elevation="2"
    class="px-6"
  >
    <v-card-title class="secondary--text justify-center">
      {{ beer.name }}
    </v-card-title>
    <v-card-text class="d-flex justify-center" style="height: 100%">
      <v-img :src="beer.image_url" alt="" max-height="70%" max-width="80" />
      <div class="ml-4">
        <h4 class="white--text">
          {{ beer.brewers_tips }}
        </h4>
        <h3 class="secondary--text mt-2">Characteristics:</h3>
        <v-list style="background-color: transparent" dense>
          <v-list-item dark> - ABV: {{ beer.abv }} </v-list-item>
          <v-list-item dark>
            - Attenuation level:
            {{ beer.attenuation_level }}
          </v-list-item>
          <v-list-item dense dark>
            - EBC:
            {{ beer.ebc }}
          </v-list-item>
          <v-list-item dense dark>
            - IBU:
            {{ beer.ibu }}
          </v-list-item>
        </v-list>
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
