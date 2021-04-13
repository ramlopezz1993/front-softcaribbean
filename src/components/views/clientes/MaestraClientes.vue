<template>
  <v-container>
    <v-row>
      <v-spacer></v-spacer>
      <v-btn
        outlined
        style="border-radius: 5px"
        @click="modal=true"
        color="primary"
        class="mx-2"
      >
      crear
      </v-btn>
      <v-divider vertical class="mx-2"></v-divider>
      <v-btn
        outlined
        style="border-radius: 5px"
        @click="editarCliente"
        color="primary"
        class="mx-2"
      >
      Editar
      </v-btn>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table
          :items="datos"
          :headers="traerColumnasTabla"
          show-select
          item-key="cusNmcliente"
          single-select
          @item-selected="seleccionarCliente"
        />
      </v-col>
    </v-row>
    <modal
      v-model="modal"
      :cliente="clienteSeleccionado"
    />
  </v-container>
</template>

<script>
import mixinTraduccionColumnas from '@/mixins/ObtenerColumnasTablaMixin'
import columnasMaestraClientes from '@/components/views/clientes/ColumnasTabla'
import clienteRest from '@/services/restClientService'
import { RUTA_BASE_CLIENTES } from './constantes'
import Modal from "@/components/views/clientes/modal/Modal";

export default {
  name: "MaestraClientes",
  mixins: [mixinTraduccionColumnas],
  components: { Modal },
  data () {
    return {
      columnOptions:columnasMaestraClientes,
      datos:[],
      modal: false,
      clienteSeleccionado: null
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => vm.obtenerClientes())
  },
  methods:{
    obtenerClientes() {
      clienteRest.get(RUTA_BASE_CLIENTES).then(response => {
        this.datos = response.data
      }).catch(error => {
        console.error(error)
      })
    },
    seleccionarCliente(seleccion) {
      this.clienteSeleccionado = seleccion.value ? seleccion.item : null
    },
    editarCliente() {
      if(this.clienteSeleccionado) {
        this.modal = true
      }
    },
    crearCliente() {
      if(this.clienteSeleccionado) {
        this.clienteSeleccionado = null
      }
      this.modal = true
    }
  }
}
</script>
