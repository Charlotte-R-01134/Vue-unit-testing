module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  transform: {
    "^.+\\.vue$": "vue-jest",
  },
  moduleNameMapper: {
    "axios": "axios/dist/node/axios.cjs",
  }
};
