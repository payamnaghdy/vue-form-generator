import { shallowMount } from "@vue/test-utils";
import FormGenerator from "@/components/FormGenerator.vue";

describe("FormGenerator.vue", () => {
  it("Mount element", () => {
    const config = [
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
    ];
    const wrapper = shallowMount(FormGenerator, {
      propsData: {
        formItems: config,
      },
    });
    console.log(wrapper);
  });
});
