<script lang="ts">
import { PropType, defineComponent, h, isVue2 } from "vue-demi";

interface MetaData {
  [key: string]: any;
}

export default defineComponent({
  props: {
    close: {
      type: Function as PropType<() => void>,
      required: true,
    },
    metadata: {
      type: Object as PropType<MetaData>,
      default: () => {},
    },
  },
  data() {
    return {
      scriptLoaded: false,
    };
  },
  methods: {
    onClick() {
      console.log("hello there");
    },
  },
  render() {
    if (isVue2) {
      return h(
        "button",
        {
          staticClass: ["custom-button"],
          style: [""],
          attrs: { type: "button" },
          on: { click: this.onClick },
        },
        this.$slots.default ? this.$slots.default : "Custom Button"
      );
    }

    return h(
      "button",
      {
        class: ["custom-button"],
        style: [""],
        type: "button",
        onClick: this.onClick,
      },
      this.$slots.default ? this.$slots.default() : "Custom Button"
    );
  },
});
</script>
