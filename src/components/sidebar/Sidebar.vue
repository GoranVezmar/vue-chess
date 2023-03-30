<script lang="ts">
import { defineComponent } from 'vue'
import { generateMoveMessage } from '../../helpers/moves'
import Instructions from '../instructions/Instructions.vue'

export default defineComponent({
  name: 'Sidebar',
  components: {
    Instructions,
  },
  computed: {
    moves() {
      return this.$store.state.moves
    },
  },
  methods: {
    generateMoveMessage,
  },
})
</script>

<template>
  <div className="sidebar">
    <Instructions />
    <div className="sidebar_label">Moves:</div>
    <ul className="sidebar_moves">
      <li v-for="move in moves" class="sidebar_move">
        {{ generateMoveMessage(move) }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import 'sidebar.scss';
</style>
