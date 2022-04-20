<template>
  <form-generator :form-items="formItems"></form-generator>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import FormGenerator from "@/components/FormGenerator.vue";

export default defineComponent({
  name: "App",
  components: {
    FormGenerator,
  },
  setup() {
    return {
      formItems: [
        { type: "input", name: "test", label: "ltest", value: "default" },
        { type: "textarea", name: "test", label: "ltest", value: "default" },
        { type: "checkbox", name: "test", label: "ltest", value: "default" },
        {
          type: "select",
          name: "select test",
          label: "select test",
          value: "default",
          options: ["a", "b", "c", "d"],
        },
      ],
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
