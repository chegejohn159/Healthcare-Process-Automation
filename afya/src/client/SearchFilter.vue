<template>
<div>
	<div class="vld-parent">
		<loading v-model:active="isLoading"
			:can-cancel="false"
			:is-full-page="fullPage"
			/>
	</div>
		<div class="main-wrapper">
			<!-- Search Filter -->
				<div class="card search-filter">
					<div class="card-header">
						<h4 class="card-title mb-0">Search Filter</h4>
					</div>
					<div class="card-body">
					<div class="filter-widget">
						<form @submit.prevent="filter_Search" class="search-input">
								<div class="row">
									<div class="col-12 col-md-12">
										<div class="form-group">
											<label>Select a specialty</label>
											<select v-model="speciality" class="form-control">
												<option value="">Choose your speciality</option>
												<option v-for="(speciality, index) in specialities" :key="index" :value="speciality.id">{{speciality.name}}</option>
											</select>
										</div>
									</div>
									<div class="col-12 col-md-12">
										<div class="form-group">
											<label>Select a county</label>
											<select v-model="county" class="form-control">
												<option value="">Choose your county</option>
												<option v-for="(county, index) in counties" :key="index" :value="county.id">{{county.name}}</option>
											</select>
										</div>
									</div>
									<div class="col-12 col-md-12">
										<div class="form-group">
											<label>Input area</label>
											<input class="form-control" v-model="area" type="text" placeholder="Input area" aria-label="default input example">
										</div>
									</div>
									<div class="col-12 col-md-12">
										<div class="form-group">
											<label>input street</label>
											<input class="form-control" v-model="street" type="text" placeholder="input street" aria-label="default input example">
										</div>
									</div>
								</div>
								<div class="btn-search">
									<button class="btn btn-block">Search</button>
								</div>
							</form>
					</div>
					</div>
				</div>
			<!-- /Search Filter -->
		</div>
	</div>
</template>

<script>
export default {
	mounted() {
		if($('.datetimepicker').length > 0) {
			$('.datetimepicker').datetimepicker({
				format: 'DD/MM/YYYY',
				icons: {
					up: "fas fa-chevron-up",
					down: "fas fa-chevron-down",
					next: 'fas fa-chevron-right',
					previous: 'fas fa-chevron-left'
				}
			});
		}
    },

	data () {
		return {
			fullPage: true,
			isLoading: false,
			county: '',
			speciality: '',
			area: '',
			street: '',
		}
	},

	computed: {
		specialities: function () {
			return this.$store.getters['admin/get_specialities']
		},
		counties: function () {
			return this.$store.getters['admin/get_counties']
		}
	},

	methods: {
		filter_Search() {
            this.isLoading = true;
            let profile = {
                    county: this.county,
                    speciality: this.speciality,
                    area: this.area,
                    street: this.street,

            }
            this.$store.dispatch('patient/doctor_search', profile).then(
                () => {
                this.isLoading = false;
                },
                error => {
                    this.isLoading = false;
                this.message =
                    (error.response && error.response.data && error.response.data.message) ||
                    error.message ||
                    error.toString();
                }
            );

            // }
    	}
	}
}
</script>