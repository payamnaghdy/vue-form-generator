<script lang="ts">
import {defineComponent, h, PropType} from "vue";
import {FormItem, VNGenerator} from "@/models";

export default defineComponent({
  name: "FormGenerator",
  props: {
    inputComponent: {
      type: Function as PropType<VNGenerator>,
      default: (
        tag: string,
        label: string,
        value: string | number | null,
        name: string | number
      ) => [
        h("label", { for: name }, label),
        h(tag, { name: name, id: name, value: value }),
      ],
    },
    selectComponent: {
      type: Function as PropType<VNGenerator>,
      default: (
        tag: string,
        value: string | number | null,
        label: string,
        name: string | number,
        options: string[]
      ) => [
        h("label", { for: name }, label),
        h(
          tag,
          { name: name, id: name, value: value },
          options.map((item) => h("option", {}, item))
        ),
      ],
    },
    checkboxComponent: {
      type: Function as PropType<VNGenerator>,
      default: (
        tag: string,
        label: string,
        value: string | number | null,
        name: string | number
      ) => [
        h("label", { for: name }, label),
        h(tag, { type: "checkbox", name: name, id: name, value: value }),
      ],
    },
    textareaComponent: {
      type: Function as PropType<VNGenerator>,
      default: (
        tag: string,
        label: string,
        value: string | null,
        name: string | number
      ) => [
        h("label", { for: name }, label),
        h(tag, { name: name, id: name, value: value }),
      ],
    },
    formItems: {
      type: Array as PropType<FormItem[]>,
      default: () => [],
    },
  },
  setup(props: {
    formItems: FormItem[];
    inputComponent: VNGenerator;
    selectComponent: VNGenerator;
    checkboxComponent: VNGenerator;
    textareaComponent: VNGenerator;
  }) {
    const createElements = () => {
      return props.formItems.map((item) => {
        switch (item.type) {
          case "input":
            return props.inputComponent(
              "input",
              item.value,
              item.label,
              item.name
            );
          case "select":
            return props.selectComponent(
              "select",
              item.value,
              item.label,
              item.name,
              item.options
            );
          case "checkbox":
            return props.checkboxComponent(
              "input",
              item.value,
              item.label,
              item.name
            );
          case "textarea":
            return props.textareaComponent(
              "textarea",
              item.value,
              item.label,
              item.name
            );
        }
      });
    };
    return () => h("from", {}, createElements());
  },
});
</script>

<style scoped></style>
