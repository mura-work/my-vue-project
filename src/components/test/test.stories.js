import Test from './test.vue'

export default {
  title: 'count-list',
  component: Test,
}

const Template = (args, {argTypes}) => ({
  components: {
    Test,
  },
  props: Object.keys(argTypes),
  Template:
    `<div class="storybook-components">
      <test
        :count="count"
      />
    </div>`,
  methods: {},
})


export const Primary = Template.bind({})
Primary.storyName = "Primary"
Primary.args = {
  count: '5',
}