<template>
  <v-dialog
    v-model="value"
  >
    <v-card>
      <v-card-title>
        {{tituloComponente}}
      </v-card-title>
      <validation-observer
        v-slot="{ handleSubmit }"
      >
        <v-card-text>
          <v-row>
            <v-col cols="4">
              <validation-provider
                v-slot="{ errors }"
                :name="$t('columnas_tabla.cedula_cliente')"
                rules="required|numeric"
              >
                <v-text-field
                  v-model="datosCliente.cusNmcliente"
                  :placeholder="$t('columnas_tabla.cedula_cliente')"
                  :error-messages="errors"
                  :disabled="modoEdicion"
                />
              </validation-provider>
            </v-col>
            <v-col cols="4">
              <validation-provider
                v-slot="{ errors }"
                :name="$t('columnas_tabla.nombre_cliente')"
                rules="required|alpha_spaces"
              >
                <v-text-field
                  v-model="datosCliente.cusDsnombres"
                  :placeholder="$t('columnas_tabla.nombre_cliente')"
                  :error-messages="errors"
                  :disabled="modoEdicion"
                />
              </validation-provider>
            </v-col>
            <v-col cols="4">
              <validation-provider
                v-slot="{ errors }"
                :name="$t('columnas_tabla.apellido_cliente')"
                rules="required|alpha_spaces"
              >
                <v-text-field
                  v-model="datosCliente.cusDsapellidos"
                  :placeholder="$t('columnas_tabla.apellido_cliente')"
                  :error-messages="errors"
                  :disabled="modoEdicion"
                />
              </validation-provider>
            </v-col>
            <v-col cols="4">
              <validation-provider
                v-slot="{ errors }"
                :name="$t('columnas_tabla.direccion_cliente')"
                rules="required"
              >
                <v-text-field
                  v-model="datosCliente.cusDsdireccion"
                  :placeholder="$t('columnas_tabla.direccion_cliente')"
                  :error-messages="errors"
                />
              </validation-provider>
            </v-col>
            <v-col cols="4">
              <validation-provider
                v-slot="{ errors }"
                :name="$t('columnas_tabla.correo_cliente')"
                rules="required|email"
              >
                <v-text-field
                  v-model="datosCliente.cusDscorreo"
                  :placeholder="$t('columnas_tabla.correo_cliente')"
                  :error-messages="errors"
                />
              </validation-provider>
            </v-col>
            <v-col cols="4">
              <validation-provider
                v-slot="{ errors }"
                :name="$t('columnas_tabla.telefono_cliente')"
                rules="required|numeric"
              >
                <v-text-field
                  v-model="datosCliente.cusCdtelefono"
                  :placeholder="$t('columnas_tabla.telefono_cliente')"
                  :error-messages="errors"
                />
              </validation-provider>
            </v-col>
            <v-col cols="4">
              <validation-provider
                v-slot="{ errors }"
                :name="$t('columnas_tabla.telefono2_cliente')"
                rules="numeric"
              >
              <v-text-field
                v-model="datosCliente.cusCdtelefonoalter"
                :placeholder="$t('columnas_tabla.telefono2_cliente')"
                :error-messages="errors"
              />
              </validation-provider>
            </v-col>
            <v-col cols="4">
              <validation-provider
                v-slot="{ errors }"
                :name="$t('columnas_tabla.celular_cliente')"
                rules="numeric"
              >
                <v-text-field
                  v-model="datosCliente.cusCdcelular"
                  :placeholder="$t('columnas_tabla.celular_cliente')"
                  :error-messages="errors"
                />
              </validation-provider>
            </v-col>
            <v-col cols="4">
              <validation-provider
                v-slot="{ errors }"
                :name="$t('columnas_tabla.numero_cargo_cliente')"
                rules="required|numeric"
              >
                <v-text-field
                  v-model="datosCliente.cusNmcargo"
                  :placeholder="$t('columnas_tabla.numero_cargo_cliente')"
                  :error-messages="errors"
                />
              </validation-provider>
            </v-col>
            <v-col cols="4">
              <validation-provider
                v-slot="{ errors }"
                :name="$t('columnas_tabla.descripcion_cargo_cliente')"
                rules="required|alpha_spaces"
              >
                <v-text-field
                  v-model="datosCliente.cusDscargo"
                  :placeholder="$t('columnas_tabla.descripcion_cargo_cliente')"
                  :error-messages="errors"
                />
              </validation-provider>
            </v-col>
            <v-col cols="4">
              <validation-provider
                v-slot="{ errors }"
                :name="$t('columnas_tabla.numero_ciudad_cliente')"
                rules="required|numeric"
              >
                <v-text-field
                  v-model="datosCliente.cusNmciudad"
                  :placeholder="$t('columnas_tabla.numero_ciudad_cliente')"
                  :error-messages="errors"
                  :disabled="modoEdicion"
                />
              </validation-provider>
            </v-col>
            <v-col cols="4">
              <validation-provider
                v-slot="{ errors }"
                :name="$t('columnas_tabla.descripcion_ciudad_cliente')"
                rules="required|alpha_spaces"
              >
                <v-text-field
                  v-model="datosCliente.cusDsciudad"
                  :placeholder="$t('columnas_tabla.descripcion_ciudad_cliente')"
                  :error-messages="errors"
                  :disabled="modoEdicion"
                />
              </validation-provider>
            </v-col>
            <v-col cols="4">
              <validation-provider
                v-slot="{ errors }"
                :name="$t('columnas_tabla.genero_cliente')"
                rules="required"
              >
                <v-select
                  v-model="datosCliente.cusGenero"
                  :placeholder="$t('columnas_tabla.genero_cliente')"
                  :items="generos"
                  item-text="descripcion"
                  item-value="codigo"
                  :error-messages="errors"
                  :disabled="modoEdicion"
                />
              </validation-provider>
            </v-col>
            <v-col cols="4">
              <validation-provider
                v-slot="{ errors }"
                :name="$t('columnas_tabla.numero_comunidad_cliente')"
                rules="required|numeric"
              >
                <v-text-field
                  v-model="datosCliente.cusNmcomunidad"
                  :placeholder="$t('columnas_tabla.numero_comunidad_cliente')"
                  :error-messages="errors"
                  :disabled="modoEdicion"
                />
              </validation-provider>
            </v-col>
            <v-col cols="4">
              <validation-provider
                v-slot="{ errors }"
                :name="$t('columnas_tabla.descripcion_comunidad_cliente')"
                rules="required|alpha_spaces"
              >
                <v-text-field
                  v-model="datosCliente.cusDscomunidad"
                  :placeholder="$t('columnas_tabla.descripcion_comunidad_cliente')"
                  :error-messages="errors"
                  :disabled="modoEdicion"
                />
              </validation-provider>
            </v-col>
            <v-col cols="4">
              <validation-provider
                v-slot="{ errors }"
                :name="$t('columnas_tabla.descripcion_empresa_cliente')"
                rules="required|alpha_spaces"
              >
                <v-text-field
                  v-model="datosCliente.cusDsempresalabora"
                  :placeholder="$t('columnas_tabla.descripcion_empresa_cliente')"
                  :error-messages="errors"
                  :disabled="modoEdicion"
                />
              </validation-provider>
            </v-col>
            <v-col cols="4">
              <validation-provider
                v-slot="{ errors }"
                :name="$t('columnas_tabla.numero_division_cliente')"
                rules="required|numeric"
              >
                <v-text-field
                  v-model="datosCliente.cusNmdivision"
                  :placeholder="$t('columnas_tabla.numero_division_cliente')"
                  :error-messages="errors"
                  :disabled="modoEdicion"
                />
              </validation-provider>
            </v-col>
            <v-col cols="4">
              <validation-provider
                v-slot="{ errors }"
                :name="$t('columnas_tabla.descripcion_division_cliente')"
                rules="required|alpha_spaces"
              >
                <v-text-field
                  v-model="datosCliente.cusDsdivision"
                  :placeholder="$t('columnas_tabla.descripcion_division_cliente')"
                  :error-messages="errors"
                  :disabled="modoEdicion"
                />
              </validation-provider>
            </v-col>
            <v-col cols="4">
              <validation-provider
                v-slot="{ errors }"
                :name="$t('columnas_tabla.numero_pais_cliente')"
                rules="required|numeric"
              >
                <v-text-field
                  v-model="datosCliente.cusNmpais"
                  :placeholder="$t('columnas_tabla.numero_pais_cliente')"
                  :error-messages="errors"
                  :disabled="modoEdicion"
                />
              </validation-provider>
            </v-col>
            <v-col cols="4">
              <validation-provider
                v-slot="{ errors }"
                :name="$t('columnas_tabla.descripcion_pais_cliente')"
                rules="required|alpha_spaces"
              >
                <v-text-field
                  v-model="datosCliente.cusDspais"
                  :placeholder="$t('columnas_tabla.descripcion_pais_cliente')"
                  :error-messages="errors"
                  :disabled="modoEdicion"
                />
              </validation-provider>
            </v-col>
            <v-col cols="4">
              <validation-provider
                v-slot="{ errors }"
                :name="$t('columnas_tabla.hobbies_clientes')"
                rules="required|alpha_spaces"
              >
                <v-text-field
                  v-model="datosCliente.cusHobbies"
                  :placeholder="$t('columnas_tabla.hobbies_clientes')"
                  :error-messages="errors"
                  :disabled="modoEdicion"
                />
              </validation-provider>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn
            @click="handleSubmit(guardar)"
          >
          Guardar
          </v-btn>
          <v-btn
              @click="emitirInput(false)"
          >
          Cancelar
          </v-btn>
        </v-card-actions>
      </validation-observer>
    </v-card>
  </v-dialog>
</template>

<script>
import { GENEROS, RUTA_BASE_CLIENTES_CREAR, RUTA_BASE_CLIENTES_EDITAR } from './constantes'
import clienteRest from '@/services/restClientService'

export default {
  name: "Modal",
  props:{
    value: {
      type: Boolean,
      required: true,
      description: "bandera para mostrar modal"
    },
    cliente: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      datosCliente: {
        cusNmcliente: null,
        cusDsnombres: null,
        cusDsapellidos: null,
        cusDsdireccion: null,
        cusDscorreo: null,
        cusCdtelefono: null,
        cusCdtelefonoalter: null,
        cusCdcelular: null,
        cusNmcargo: null,
        cusDscargo: null,
        cusNmciudad: null,
        cusDsciudad: null,
        cusGenero: null,
        cusNmcomunidad: null,
        cusDscomunidad: null,
        cusDsempresalabora: null,
        cusNmdivision: null,
        cusDsdivision: null,
        cusNmpais: null,
        cusDspais: null,
        cusHobbies: null
      },
      generos: Object.values(GENEROS)
    }
  },
  computed: {
    tituloComponente () {
      return this.cliente ? this.$t("titulo.editar") : this.$t("titulo.crear")
    },
    modoEdicion () {
      return this.cliente && this.value
    }
  },
  watch: {
    'value'() {
      if(!this.value || (this.value && !this.cliente)) {
        this.limpiarModelo()
        return
      }
      Object.assign(this.datosCliente, {
        ...this.cliente,
        cusGenero: GENEROS[this.cliente.cusGenero].codigo
      })
    }
  },
  methods: {
    emitirInput(valor) {
      //armamos v-model
      this.$emit('input',valor)
    },
    guardar(){
      console.log("aaaaa")
      if(this.cliente){
        this.editarCliente()
        return
      }
      this.crearCliente()
    },
    editarCliente() {
      console.log("bbbbbbb")
      clienteRest.put(RUTA_BASE_CLIENTES_EDITAR.replace('{cedula}',this.datosCliente.cusNmcliente), this.datosCliente).then(() =>{
        this.emitirInput(false)
        alert("Cliente actualizado")
      }).catch(error => {
        alert("Ocurrio un error")
        console.log(error)
      })
    },
    crearCliente() {
      clienteRest.post(RUTA_BASE_CLIENTES_CREAR, this.datosCliente).then(() =>{
        this.emitirInput(false)
        alert("Cliente creado")
      }).catch(error => {
        alert("Ocurrio un error")
        console.log(error)
      })
    },
    limpiarModelo() {
      Object.assign(this.datosCliente, {
        cusNmcliente: null,
        cusDsnombres: null,
        cusDsapellidos: null,
        cusDsdireccion: null,
        cusDscorreo: null,
        cusCdtelefono: null,
        cusCdtelefonoalter: null,
        cusCdcelular: null,
        cusNmcargo: null,
        cusDscargo: null,
        cusNmciudad: null,
        cusDsciudad: null,
        cusGenero: null,
        cusNmcomunidad: null,
        cusDscomunidad: null,
        cusDsempresalabora: null,
        cusNmdivision: null,
        cusDsdivision: null,
        cusNmpais: null,
        cusDspais: null,
        cusHobbies: null
      })
    }
  }
}
</script>

<style scoped>

</style>