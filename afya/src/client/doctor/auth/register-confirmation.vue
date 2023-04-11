<template>
    <div class="main-wrapper">
        <layout-header4></layout-header4>
        <breadcrumb16></breadcrumb16>
        <!-- Page Content -->
			<div class="content success-page-cont">
				<div class="container-fluid">

					<div class="row justify-content-center">
						<div class="col-lg-6">

							<!-- Success Card -->
							<div class="card success-card">
								<div v-if="emailConfirmation === true" class="card-body">
									<div class="success-cont">
										<i class="fas fa-check"></i>
										<h3>Email confirmed successfully!</h3>
										<p>Welcome to <strong>AFYA YETU</strong></p>
										<router-link to="/login" class="btn btn-primary view-inv-btn">Proceed to login</router-link>
									</div>
								</div>
								<div v-if="emailConfirmation === false" class="card-body">
									<div class="success-cont fail-cont">
										<i class="fas fa-close"></i>
										<h3>Email confirmed failed!</h3>
										<!-- <p>Welcome to <strong>AFYA YETU</strong></p> -->
										<!-- <router-link to="/login" class="btn btn-primary view-inv-btn">Proceed to login</router-link> -->
									</div>
								</div>
							</div>
							<!-- /Success Card -->

						</div>
					</div>

				</div>
			</div>
			<!-- /Page Content -->
        <layout-footer></layout-footer>
			<div class="vld-parent">
				<loading v-model:active="isLoading"
					:can-cancel="false"
					:is-full-page="fullPage"
					/>
			</div>
    </div>
</template>

<script>
export default {
  name: 'confirmation',
    data() {
		return {
			isLoading: false,
			fullPage: true,
			emailConfirmation: ''
		}
	},

  mounted() {
	  this.handleConfirmation()
  },


  methods: {
    handleConfirmation() {
		this.isLoading = true
      this.$store.dispatch('auth/confirmReg', this.$route.query.i).then(
          (res) => {
			  this.isLoading = false
			  this.emailConfirmation = res.success

		  },
		  error => {
 				this.emailConfirmation = false
				this.isLoading = false;
				this.error()
            }
        );
      }
    }
};
</script>
<style scoped>
.fail-cont i{
    border: 2px solid #e50909 !important;
    background-color: #e50909 !important;
}
</style>
