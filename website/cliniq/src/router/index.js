import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import doctor from '@/components/doctor'
import qrscan from '@/components/qrscan'
import patient from '@/components/patient'
import chemist from '@/components/chemist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/doctor',
      name: 'doctor',
      component: doctor
    },
    {
      path: '/qrscan',
      name: 'qrscan',
      component: qrscan
    },
    {
      path: '/patient',
      name: 'patient',
      component: patient
    },
    {
      path: '/chemist',
      name: 'chemist',
      component: chemist
    }
  ]
})
