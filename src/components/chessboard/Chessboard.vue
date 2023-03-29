<script lang="ts">
import { defineComponent } from 'vue'
import ChessboardRow from '../chessboardRow/ChessboardRow.vue'
import { ALLOWED_ROW_TYPES } from '../../types/global'

export default defineComponent({
  name: 'Chessboard',
  components: { ChessboardRow },
  data() {
    return {
      rows: ALLOWED_ROW_TYPES.sort((a, b) => parseInt(b) - parseInt(a)),
    }
  },
})
</script>

<template>
  <div class="chessboard">
    <ChessboardRow
      v-for="(row, rowIndex) in rows"
      :key="rowIndex"
      :row="row"
      :rowIndex="rowIndex"
    />
  </div>
</template>

<style scoped>
@import 'chessboard.scss';
</style>
