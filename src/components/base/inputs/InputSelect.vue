<template>
  <v-select
    v-model="content"
    @input="handleInput"
    :items="items"
    :outlined="outlined"
    :filled="filled"
    :solo="solo"
    :dense="dense"
    :hide-details="hideDetails"
    :append-icon="appendIcon"
    :label="label"
    :color="color"
    :dark="dark"
  ></v-select>
</template>

<script>
export default {
  name: "InputText",
  data() {
    return {
      content: null,
    };
  },
  props: {
    value: {
      type: String,
    },
    outlined: {
      type: Boolean,
    },
    filled: {
      type: Boolean,
    },
    solo: {
      type: Boolean,
    },
    dense: {
      type: Boolean,
    },
    hideDetails: {
      type: Boolean || String,
    },
    appendIcon: {
      type: String,
    },
    label: {
      type: String,
    },
    dark: {
      type: Boolean,
    },
    items: {
      type: Array,
    },
    color: {
      type: String,
    },
  },
  watch: {
    value: {
      handler(data) {
        this.content = data;
      },
      immediate: true,
    },
  },
  methods: {
    handleInput() {
      this.$emit("input", this.content);
    },
  },
};
</script>
