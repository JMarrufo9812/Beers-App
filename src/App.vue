<template>
  <v-app>
    <v-main style="background: #1c1c1c">
      <Header class="mb-12">
        <v-row>
          <v-col class="d-flex align-center" cols="2">
            <h1 class="secondary--text">Cervezas</h1>
          </v-col>
          <v-col class="d-flex align-center">
            <Input
              v-model="search"
              :type="'TEXT'"
              :dense="true"
              :hideDetails="true"
              :appendIcon="'mdi-magnify'"
              :label="'Buscar'"
              :color="'secondary'"
              :dark="true"
            />
          </v-col>
          <v-col class="d-flex align-center">
            <span class="text-body-1 mr-2 white--text">Buscar por</span>
            <Input
              v-model="search"
              :items="selectOptions"
              :type="'SELECT'"
              :dense="true"
              :hideDetails="true"
              :color="'secondary'"
              :dark="true"
            />
          </v-col>
        </v-row>
      </Header>
      <Beers>
        <v-row>
          <v-col
            class="d-flex justify-center"
            v-for="beer in beers"
            :key="beer.id"
            cols="4"
          >
            <BeerCard :beer="beer"></BeerCard>
          </v-col>
        </v-row>
        <!-- <v-card rounded>
          <DataTable :items="beers" :headers="headers">
            <template #[`item.image`]="{ item }">
              <v-img
                :src="item.image_url"
                alt=""
                max-height="20"
                max-width="20"
              />
            </template>
          </DataTable>
        </v-card> -->
      </Beers>
    </v-main>
  </v-app>
</template>

<script>
import Beers from "./components/beers/Beers";
import BeerCard from "./components/beers/BeerCard";
import Header from "./components/base/Header";
// import DataTable from "./components/base/DataTable";
import Input from "./components/base/inputs/Input";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Header,
    // DataTable,
    BeerCard,
    Beers,
    Input,
  },
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Nombre",
          sort: false,
          align: "start",
          value: "name",
        },
        {
          text: "",
          sort: false,
          align: "start",
          value: "image",
        },
      ],
      selectOptions: ["Nombre", "Malta"],
    };
  },
  computed: mapGetters(["beers"]),
  mounted() {
    this.$store.dispatch("getAllBeers");
  },
};
</script>
