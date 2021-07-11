import CountList from './CountList.vue'

export default {
  title: 'count-list',
  component: CountList,
}

const Template = (args, {argTypes}) => ({
  components: {
    CountList,
  },
  props: Object.keys(argTypes),
  Template:
    `<div class="storybook-components">
      <count-list
        :count="count"
        :list="list"
      />
    </div>`,
  methods: {},
})


export const Primary = Template.bind({})
Primary.storyName = "Primary"
Primary.args = {
  count: '5',
  list: 'countListItem'
}