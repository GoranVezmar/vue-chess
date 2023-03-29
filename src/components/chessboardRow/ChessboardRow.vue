<script lang="ts">
import { defineComponent, PropType } from 'vue'
import ChessboardFiled from '../chessboardField/ChessboardFiled.vue'
import { ALLOWED_COLUMN_TYPES, AllowedRowTypes } from '../../types/global'

export default defineComponent({
  name: 'ChessboardRow',
  components: { ChessboardFiled },
  props: {
    row: {
      required: true,
      type: String as PropType<AllowedRowTypes>,
    },
    rowIndex: {
      required: true,
      type: Number,
    },
  },
  data() {
    return {
      columns: ALLOWED_COLUMN_TYPES,
    }
  },
})
</script>

<template>
  <ChessboardFiled
    v-for="(column, columnIndex) in columns"
    :key="column + row"
    :row="row"
    :column="column"
    :columnIndex="columnIndex"
    :rowIndex="rowIndex"
  />
</template>

<style scoped></style>
