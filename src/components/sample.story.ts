import sample from "./sample.vue"

const ARG_TYPES = {}

export default {
  title: "sample",
  component: sample,
  argTypes: ARG_TYPES,
}

export const basic = () => ({
  components: {
    sample,
  },
  props: Object.keys(ARG_TYPES),
  template: `
    <sample v-bind="$props" />
  `,
})
