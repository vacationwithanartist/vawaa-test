<template>
  <div>
    <header class="header">
      <h1 class="header__title">Vacation With an Artist</h1>
      <p class="header__subheading">Book mini apprenticeships with master artists around the world.</p>

      <a class="header__cta" href="/artists">Get started</a>
    </header>

    <section class="video">
      <a @click="showVideo = true" class="video__link">
        <img src="~assets/images/iria-studio.jpg" alt="">
      </a>
    </section>

    <section class="artists">
      <artist-list :artists="artists" />
    </section>

    <section class="other-copy">
      <h2>A new way to travel</h2>
      <p>VAWAA is a mini-apprenticeship with a curated master artist or craftsman, tailored to your skill level.</p>
      <a href="https://vawaa.com/artists" target="_blank">Get started &rarr;</a>
      <img src="~assets/images/snow-photography.jpg" alt="">
    </section>

    <section>
      <h2>A lifelong souvenir</h2>
      <p>Whether it’s honing a passion or getting fresh inspiration, we see travel as an opportunity to grow.</p>
      <a href="https://vawaa.com/stories" target="_blank">Read guest stories &rarr;</a>
      <img src="~assets/images/rattan-legacy.jpg" alt="">
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

    },
    data: () => ({
      showVideo: false
    })
  }
</script>

<style lang="scss">
  .video {
    &__link {
      img {
        width: 100%;
      }
    }
  }
</style>
