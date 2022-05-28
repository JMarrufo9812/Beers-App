<template>
  <v-text-field
    v-model="content"
    @input="handleInput"
    :outlined="outlined"
    :filled="filled"
    :solo="solo"
    :dense="dense"
    :hide-details="hideDetails"
    :append-icon="appendIcon"
    :label="label"
    :color="color"
    :dark="dark"
  ></v-text-field>
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
