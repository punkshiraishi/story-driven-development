<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import DemoPage from "./pages/DemoPage.vue"

@Component({
  components: {
    DemoPage,
  },
})
export default class App extends Vue {}
</script>
