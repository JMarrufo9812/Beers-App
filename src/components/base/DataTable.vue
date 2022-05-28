<template>
  <v-data-table :headers="headers" :items="items">
    <template v-for="(slot, name) in $scopedSlots" v-slot:[name]="item">
      <slot :name="name" v-bind="item"></slot>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: "BaseDataTable",
  props: {
    headers: {
      type: Array,
    },
    items: {
      type: Array,
    },
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>
