<template>
  <div>
    <header class="header">
      <h1 class="header__title">Vacation With an Artist</h1>
      <p class="header__subheading">Book mini apprenticeships with master artists around the world.</p>

      <a class="header__cta" href="/artists">Get started</a>
    </header>

    <section class="artists">
      <artist-list :artists="artists" />
    </section>
  </div>
</template>

<script>
  import ArtistList from '~/components/ArtistList'

  export default {
    asyncData({ $axios }) {
      return $axios.get('/api/v1/public/home').then(({ data }) => data)
    },
    components: { ArtistList },
    computed: {

    }
  }
</script>

<style lang="scss">

</style>
