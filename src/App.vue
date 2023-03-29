<script lang="ts">
import { defineComponent } from 'vue'
import Layout from './components/layout/Layout.vue'

export default defineComponent({
  name: 'App',
  components: {
    Layout,
  },
})
</script>

<template>
  <Layout msg="Vite + Vue" />
</template>

<style scoped></style>
