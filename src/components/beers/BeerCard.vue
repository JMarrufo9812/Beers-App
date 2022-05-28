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
    <div class="d-flex justify-center" style="height: 100%">
    <v-icon class="mdi-arrow"></v-icon>
      <v-card
        width="70%"
        height="100%"
        flat
        style="background-color: transparent"
      >
        <v-card
          flat
          style="background-color: transparent"
          class="d-flex align-content-center justify-center"
          height="60%"
          width="100%"
        >
          <v-img
            :src="beer.image_url"
            alt=""
            max-height="100%"
            max-width="80"
          />
        </v-card>
        <h4 class="white--text">
          {{ beer.brewers_tips }}
        </h4>
      </v-card>
    </div>
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
