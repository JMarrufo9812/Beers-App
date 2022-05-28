<template>
  <component
    v-model="content"
    @input="handleInput"
    :is="dynamicComponent"
    :outlined="outlined"
    :filled="filled"
    :solo="solo"
    :dense="dense"
    :hideDetails="hideDetails"
    :append-icon="appendIcon"
    :label="label"
    :items="items"
    :color="color"
    :dark="dark"
  ></component>
</template>

<script>
export default {
  name: "BaseInputs",
  props: {
    type: {
      type: String,
    },
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
    dark: {
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
    color: {
      type: String,
    },
    items: {
      type: Array,
    },
  },
  data() {
    return {
      content: "",
    };
  },
  watch: {
    value: {
      handler(data) {
        this.content = data;
      },
      immediate: true,
    },
  },
  components: {
    InputText: () => import("./InputText"),
    InputSelect: () => import("./InputSelect"),
  },
  computed: {
    dynamicComponent() {
      switch (this.type) {
        case "TEXT":
          return "InputText";
        case "SELECT":
          return "InputSelect";
        default:
          return "InputText";
      }
    },
  },
  methods: {
    handleInput() {
      this.$emit("input", this.content);
    },
  },
};
</script>
