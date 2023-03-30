<script lang="ts">
import { defineComponent } from 'vue'
import Chessboard from '../chessboard/Chessboard.vue'
import Sidebar from '../sidebar/Sidebar.vue'

export default defineComponent({
  name: 'Layout',
  components: {
    Chessboard,
    Sidebar,
  },
})
</script>

<template>
  <div class="layout">
    <div class="layout_game">
      <Chessboard />
    </div>
    <Sidebar />
  </div>
</template>

<style lang="scss" scoped>
@import 'layout.scss';
</style>
