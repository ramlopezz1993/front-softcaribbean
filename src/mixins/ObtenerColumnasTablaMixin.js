'use strict'
export default {
  computed: {
    traerColumnasTabla () {
      return this.columnOptions.map((columna) => {
        if (columna.text) {
          columna.text = this.$t(columna.text)
        }
        return columna
      })
    }
  }
}
