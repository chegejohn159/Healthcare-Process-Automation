<template>
  <div id="app">
    <loader></loader>
   <router-view :key="$route.fullPath"> </router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
	mounted() {
    this.getSpecialties()
    this.getCounties()
    },

	methods: {

		getSpecialties() {
        this.$store.dispatch('admin/getSpeciality')
    },

		getCounties() {
        this.$store.dispatch('admin/getCounties')
    }
	}
}
</script>


