import vue from 'vue';
import { ValidationProvider,ValidationObserver,extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});
vue.component('ValidationProvider',ValidationProvider)
vue.component('ValidationObserver',ValidationObserver )
