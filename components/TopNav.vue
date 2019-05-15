<template>
  <nav class="top-nav">
    <a href="https://vawaa.com" target="_blank" class="top-nav__logo">
      <img src="~/assets/images/vawaa-black.png" alt="VAWAA">
    </a>
    <ul class="top-nav__links">
      <li class="top-nav__link">
        <a href="https://vawaa.com/artists" target="_blank">Artists</a>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  .top-nav {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__logo {
      max-width: 100px;
      display: block;

      & > img {
        width: 100%;
      }
    }

    &__links {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      max-height: 600px;
    }

    &__link {
      list-style: none;

      & > a, & > a:visited {
        color: inherit;
      }

      &:not(:last-of-type) {
        margin-right: 20px;
      }
    }
  }
</style>
