<template>
  <ul class="artist-list">
    <li v-for="artist in artists">
      <img :src="imageForArtist(artist)">
      <h3>{{ artist.name }}</h3>
    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      artists: {
        type: Array,
        required: true
      }
    },
    methods: {
      imageForArtist(artist) {
        return [artist.image_imgix_url, '&w=600&h=600&fit=crop&crop=faces']
      }
    }
  }
</script>

<style lang="scss" scoped>
  .artist-list {

  }
</style>
