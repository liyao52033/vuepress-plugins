import blockToggle from './BlockToggle.vue';
import Vue from 'vue'
export default {
  updated() {
    setTimeout(() => {
      document.querySelectorAll('div[class*="language-"] pre').forEach(el => {
        let ComponentClass = Vue.extend(blockToggle)
        let instance = new ComponentClass()
        instance.$mount()
        el.appendChild(instance.$el)
      })
    }, 100)
  }
}
