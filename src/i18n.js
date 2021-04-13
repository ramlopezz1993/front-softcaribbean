import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

function cargarMensajeLocal () {
    const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
    const mensajes = {}

    locales.keys().forEach(llave => {
        const igualador = llave.match(/\/([a-z0-9]+)\//i)
        if (igualador && igualador.length > 1) {
            const local = igualador[1]
            const mensajeFucionado = Object.assign(locales(llave), mensajes[local])
            mensajes[local] = mensajeFucionado
        }
    })
    return mensajes
}

export default new VueI18n({
    locale: 'es',
    fallbackLocale: 'es',
    messages:cargarMensajeLocal()
})