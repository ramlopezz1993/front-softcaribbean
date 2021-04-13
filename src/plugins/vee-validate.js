import Vue from 'vue'
import * as rules from 'vee-validate/dist/rules'
import es from 'vee-validate/dist/locale/es.json'
import { ValidationObserver, ValidationProvider, extend, localize, configure } from 'vee-validate'
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule])
})

localize('es', es)
const config = {
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
}
configure(config)

// Install components globally
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
