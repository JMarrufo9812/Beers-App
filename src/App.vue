<template>
  <v-app>
    <v-main style="background: #1c1c1c">
      <Header class="mb-12">
        <v-row>
          <v-col :cols="isDeskop ? '2' : '12'" class="d-flex align-center">
            <h1 class="secondary--text">Beers</h1>
          </v-col>
          <v-col :cols="isDeskop ? '4' : '12'" class="d-flex align-center">
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
          <v-col
            v-if="!search && search.length === 0"
            cols="12"
            class="my-12 d-flex justify-center"
          >
            <v-btn
              @click="handlePage('PREV')"
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
              @click="handlePage('NEXT')"
              >next</v-btn
            >
          </v-col>
        </v-row>
        <!-- NOTA: esto es un ejemplo de solid sobre como podemos reutilizar el componente de beers -->
        <!-- y mostrarlo de diferente forma en este caso en forma de tabla -->
        <!-- y a su vez la tabla tambien puede ser reutlizada y custiomizada para cualquier otra seccion -->

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
    // NOTA: he tenido que usar esta computada ya que vuetify tiene un problema la hora de utilizar
    // sm md o lg en las columnas ellos recomiendan usar solo cols y aunque funciono para las cards
    // no funciono para el acomodo de los inputs
    isDeskop() {
      return (
        this.$vuetify.breakpoint.md ||
        this.$vuetify.breakpoint.lg ||
        this.$vuetify.breakpoint.xl
      );
    },
  },
  watch: {
    filter(value) {
      if (this.search && this.search.length > 0) {
        this.page = 1;
        this.getBeers(this.page, true, this.search, value);
      }
    },
    search(value) {
      this.page = 1;
      if (value && value.length > 0) {
        this.getBeers(this.page, true, value, this.filter);
      }
      if (!value || value.length === 0) {
        this.getBeers(this.page);
      }
    },
  },
  methods: {
    handlePage(action) {
      if (action === "PREV" && this.page !== 1) {
        this.page -= 1;
      }
      if (action === "NEXT") this.page += 1;

      this.getBeers(this.page);
    },
    getBeers(page, search, value, filter) {
      if (search) {
        this.$store.dispatch("getSearchBeers", { value, filter });
      }
      if (!search) {
        this.$store.dispatch("getBeers", { page, search, value, filter });
      }
    },
  },
  mounted() {
    this.getBeers(1);
  },
};
</script>
