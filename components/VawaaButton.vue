<template>
  <a :href="href" class="btn" :class="typeClasses">
    <slot />
  </a>
</template>

<script>
  export default {
    computed: {
      typeClasses() {
        return this.types.map(t => `btn--${t}`)
      }
    },
    props: {
      href: {
        type: String,
        required: true
      },
      types: Array,
      required: true
    }
  }
</script>

<style lang="scss">
  .btn {
    padding: 5px 150px;
    margin-left: auto;
    margin-right: auto;

    display: inline-block;
    font-size: $vawaa-font-small;
    text-align: center;
    line-height: 3;
    border: none;
    box-shadow: none;
    cursor: pointer;
    outline: none;

    &--primary,
    &--primary:visited {
      background-color: $vawaa-black;
      color: $pure-white;

      &:hover {
        color: $pure-white;
        background-color: $accent-one;
      }

      &:disabled {
        background-color: $darker-grey;
        cursor: default;
      }
    }

    &--secondary,
    &--secondary:visited {
      background-color: $pure-white;
      color: inherit;
      border: 1px solid $pure-black;
      padding-left: 2rem;
      padding-right: 2rem;
      min-width: 18rem;

      &:hover {
        color: $accent-one;
        border: 1px solid $accent-one;
      }

      &:disabled {
        color: $dark-grey;
        border-color: $dark-grey;
        cursor: default;
      }
    }

    &--tertiary,
    &--tertiary:visited {
      background-color: $pure-white;
      color: $dark-black;
      border: 1px solid $light-grey;
      padding-left: 2rem;
      padding-right: 2rem;
      min-width: 10rem;
      border-radius: 0;

      &:hover {
        color: $accent-one;
        border: 1px solid $accent-one;
      }

      &:disabled {
        color: $dark-grey;
        border-color: $dark-grey;
        cursor: default;
      }
    }

    &--transparent,
    &--transparent:visited {
      border: 1px solid currentColor;
    }

    &--small {
      display: inline-block;
      padding: 0 2.5rem;
      width: auto;
      height: auto;
      min-width: auto;
    }

    &--delete,
    &--delete:visited {
      background-color: $error-color;
      color: $pure-white;

      &:hover {
        color: $pure-white;
        background-color: transparentize($error-color, 0.2);
      }

      &:disabled {
        background-color: $darker-grey;
        cursor: default;
      }
    }
  }
</style>

