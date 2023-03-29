<script lang="ts">
import { defineComponent } from 'vue'
import Instructions from '../instructions/Instructions.vue'
import Chessboard from '../chessboard/Chessboard.vue'
import Sidebar from '../sidebar/Sidebar.vue'

export default defineComponent({
  name: 'Layout',
  components: {
    Instructions,
    Chessboard,
    Sidebar,
  },
})
</script>

<template>
  <div class="layout">
    <div class="layout_game">
      <Instructions />
      <Chessboard />
    </div>
    <Sidebar />
  </div>
</template>

<style lang="scss" scoped>
@import 'layout.scss';
</style>
