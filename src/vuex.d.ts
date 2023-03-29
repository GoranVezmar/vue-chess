// vuex.d.ts
import { Store } from 'vuex'
import { Move, Piece } from './src/types/global'

declare module '@vue/runtime-core' {
  // declare your own store states
  interface StateType {
    moves: Move[]
    pieces: Record<string, Piece | null>
    selectedFieldId: string
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<StateType>
  }
}
