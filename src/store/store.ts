import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid'
import { INITIAL_PIECES } from '../data/inititalFields'
import { Move, Piece } from '../types/global'

type StateType = {
  moves: Move[]
  pieces: Record<string, Piece | null>
  selectedFieldId: string
}

export const key: InjectionKey<Store<StateType>> = Symbol()

export const store = createStore<StateType>({
  state() {
    return {
      moves: [],
      pieces: INITIAL_PIECES,
      selectedFieldId: '',
    }
  },
  getters: {
    getMoves(state) {
      return state.moves
    },
    getPieces(state) {
      return state.pieces
    },
  },
  mutations: {
    addMove(state, newMove) {
      state.moves.push(newMove)
    },
    setSelectedFieldId(state, fieldId) {
      state.selectedFieldId = fieldId
    },
    setPieces(state, newPieces) {
      state.pieces = newPieces
    },
  },
  actions: {
    handleFieldClick(context, fieldId) {
      const prevSelectedPiece = this.state.pieces[this.state.selectedFieldId]
      const newSelectedPiece = this.state.pieces[fieldId]

      // return if first cick is an empty field
      if (!prevSelectedPiece && !newSelectedPiece) return

      // if no prev piece, set selected pieceID and return
      if (!prevSelectedPiece) {
        context.commit('setSelectedFieldId', fieldId)
        return
      }

      // remove selection if user tries to capture his own piece
      if (prevSelectedPiece?.color === newSelectedPiece?.color) {
        context.commit('setSelectedFieldId', '')
        return
      }

      context.commit('addMove', {
        id: uuidv4(),
        prevField: this.state.selectedFieldId,
        nextField: fieldId,
        piece: prevSelectedPiece,
        capturedPiece: newSelectedPiece,
      })

      context.commit('setPieces', {
        ...this.state.pieces,
        [this.state.selectedFieldId]: null,
        [fieldId]: { ...prevSelectedPiece },
      })

      context.commit('setSelectedFieldId', '')
    },
  },
})

export const useStore = () => {
  return baseUseStore(key)
}
