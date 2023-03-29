<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { AllowedColumnTypes, AllowedRowTypes } from '../../types/global'
import { isRowLight } from '../../helpers/fileds'

export default defineComponent({
  name: 'ChessboardField',
  props: {
    row: {
      required: true,
      type: String as PropType<AllowedRowTypes>,
    },
    rowIndex: {
      required: true,
      type: Number,
    },
    column: {
      required: true,
      type: String as PropType<AllowedColumnTypes>,
    },
    columnIndex: {
      required: true,
      type: Number,
    },
  },
  computed: {
    fieldId() {
      return `${this.column}${this.row}`
    },
    piece() {
      return this.$store.state.pieces[this.fieldId]
    },
    imgUrl() {
      return this.piece ? `/${this.piece.color}-${this.piece.type}.png` : ''
    },
    fieldColorClass() {
      return isRowLight(this.rowIndex, this.columnIndex)
        ? 'chessboardField--light'
        : 'chessboardField--dark'
    },
    fieldSelectedClass() {
      return this.$store.state.selectedFieldId === this.fieldId ? 'chessboardField--selected' : ''
    },
  },
  methods: {
    handleClick() {
      this.$store.dispatch('handleFieldClick', this.fieldId)
    },
  },
})
</script>

<template>
  {{}}
  <div class="chessboardField" :class="[fieldColorClass, fieldSelectedClass]" @click="handleClick">
    <span v-if="row === '1'" class="chessboardField_column">{{ column }}</span>
    <span v-if="column === 'a'" class="chessboardField_row">{{ row }}</span>
    <img v-if="imgUrl" class="chessboardField_image" v-bind:src="imgUrl" />
  </div>
</template>

<style lang="scss" scoped>
@import 'chessboardFiled.scss';
</style>
