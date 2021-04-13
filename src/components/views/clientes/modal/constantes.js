'use strict'

export const GENEROS = {
    MASCULINO: {
        codigo: "M",
        descripcion: "MASCULINO"
    },
    FEMENINO: {
        codigo: "F",
        descripcion: "FEMENINO"
    }
}

const RUTA_BASE = 'http://localhost:8080'
export const RUTA_BASE_CLIENTES_CREAR = `${RUTA_BASE}/clientes`
export const RUTA_BASE_CLIENTES_EDITAR = `${RUTA_BASE}/clientes/{cedula}`