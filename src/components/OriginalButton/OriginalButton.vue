<template>
  <div class="original-button" @click="onClick">
    <button :class="type">
    </button>
  </div>
</template>

<script>
export default {
  name: 'OriginalButton',
  props: {
    type: {
      type: String,
      default: 'info'
    }
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  }
}
</script>

<style scoped></style>