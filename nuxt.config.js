import pkg from './package'

export default {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    // your settings here
    sass: ['~/assets/style/variables/all.scss']
  },
  /*
  ** Axios module configuration
  */
  // See https://github.com/nuxt-community/axios-module#options
  axios: {
    baseURL: 'https://vawaa.herokuapp.com'
  },

  /*
  ** Build configuration
  */
  build: {
    loaders: {
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
