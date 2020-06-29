module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    '@nuxtjs',
    'prettier/vue',
    '@noliaki/eslint-config-typescript-prettier',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
  }
}
