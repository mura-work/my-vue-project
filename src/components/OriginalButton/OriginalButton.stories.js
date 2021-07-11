import OrignalButton from './OriginalButton.vue'

export default {
  title: 'original-button',
  component: {
    OrignalButton
  }
}

const Template = (args, {argTypes}) => ({
  components: {
    OrignalButton,
  },
  props: Object.keys(argTypes),
  Template:
    `<div class="storybook-components">
      <original-button
        :type="type">
      </original-button>
    </div>`,
  methods: {
    click() {
      alert("aaa")
    }
  },
})


export const Primary = Template.bind({})
Primary.storyName = "Primary"
Primary.args = {
  type: "aaa",
}