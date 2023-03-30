<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Layout',
  components: {},
})
</script>

<template>
  <div className="instructions">
    <div className="instructions_title">Instructions</div>
    <div className="instructions_right">
      <p>
        Click once to select any piece, and then click again to move it or capture another piece.
      </p>
      <p>
        Any piece can move(jump) on any field. Same color piece cannot be captured. If you try to do
        so, a previously selected piece will be deselected.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'instructions.scss';
</style>
