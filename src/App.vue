<template>
  <v-app>
    <v-main style="background: #1c1c1c">
      <Header class="mb-12">
        <v-row>
          <v-col :cols="isDeskop ? '2' : '12'" class="d-flex align-center">
            <h1 class="secondary--text">Beers</h1>
          </v-col>
          <v-col :cols="isDeskop ? '4' : '12'" class="d-flex align-center">
            <!-- <span class="text-body-1 mr-2 white--text">Search by</span> -->
            <Input
              v-model="filter"
              :items="filterOptions"
              :type="'SELECT'"
              :dense="true"
              :hideDetails="true"
              :color="'secondary'"
              :dark="true"
              :label="'Search by'"
            />
          </v-col>
          <v-col :cols="isDeskop ? '4' : '12'" class="d-flex align-center">
            <Input
              v-model="search"
              :type="'TEXT'"
              :dense="true"
              :hideDetails="true"
              :appendIcon="'mdi-magnify'"
              :label="'Search'"
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
            lg="4"
            md="6"
            sm="12"
          >
            <BeerCard :beer="beer"></BeerCard>
          </v-col>
          <v-col cols="12" class="my-12 d-flex justify-center">
            <v-btn
              @click="prevPage"
              class="mr-6"
              x-large
              depressed
              color="secondary"
              :disabled="page === 1"
              dark
              >previus</v-btn
            >
            <v-btn class="mr-6" x-large depressed color="secondary"
              >page {{ page }}</v-btn
            >
            <v-btn
              class="mr-6"
              x-large
              depressed
              color="secondary"
              @click="nextPage"
              >next</v-btn
            >
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
    <v-footer>
      <v-spacer></v-spacer>
      <div>Beers &copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
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
      filter: "beer_name",
      page: 1,
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
      filterOptions: ["beer_name", "yeast", "hops", "malt", "food"],
    };
  },
  computed: {
    ...mapGetters(["beers"]),
    isDeskop() {
      return this.$vuetify.breakpoint.md || this.$vuetify.breakpoint.lg;
    },
  },
  watch: {
    page(number) {
      this.$store.dispatch("getBeers", { page: number });
    },
    search(value) {
      this.$store.dispatch("getSearchBeers", {
        value: value,
        filter: this.filter,
      });
    },
  },
  methods: {
    nextPage() {
      this.page += 1;
    },
    prevPage() {
      if (this.page !== 1) {
        this.page -= 1;
      }
    },
  },
  mounted() {
    this.$store.dispatch("getBeers", { page: 1 });
  },
};
</script>
