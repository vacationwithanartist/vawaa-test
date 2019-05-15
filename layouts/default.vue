<template>
  <div>
    <top-nav />
    <slot />
  </div>
</template>

<script>
  import TopNav from '~/components/TopNav'

  export default {
    components: { TopNav }
  }
</script>

<style lang="scss">
  .header {

  }
</style>
