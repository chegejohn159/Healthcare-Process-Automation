<template>
		<div class="main-wrapper">
			<layout-header2></layout-header2>
			<breadcrumb8></breadcrumb8>
			<!-- Page Content -->
				<div class="content">
					<div class="container-fluid">
						<div class="row">
							<div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
							<div class="stickyside">
								<sidebar v-if="currentPath == 'change-password'"></sidebar>
								<sidebar1 v-else-if="currentPath == 'patient-change-password'"></sidebar1>
							</div>
							</div>

							<div class="col-md-7 col-lg-8 col-xl-9">
								<div class="card">
									<div class="card-body">
										<div class="row">
											<div class="col-md-12 col-lg-6">

												<!-- Change Password Form -->
												<form @submit.prevent="changeMPass">
													<div class="form-group">
														<label>New Password</label>
														<input type="password" v-model="password1" class="form-control">
													</div>
													<div class="form-group">
														<label>Confirm Password</label>
														<input type="password" v-model="password2" class="form-control">
													</div>
													<div class="submit-section">
														<button type="submit" class="btn btn-primary submit-btn">Save Changes</button>
													</div>

												</form>
												<!-- /Change Password Form -->

											</div>
										</div>
									</div>
								</div>
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


	data() {
        return {
			password1: '',
			password2: '',
			isLoading: false,
            fullPage: true

        }
    },
    computed: {
         currentPath() {
            return this.$route.name;
        }
    },
	methods: {
		success() {
		this.$swal({
			icon: 'success',
			title: 'Password change',
			text: 'Password change was successful',
		});
		},
		error() {
		this.$swal({
			icon: 'error',
			title: 'Oops...',
			text: 'Something went wrong!',
		});
		},
		passMatch() {
		this.$swal({
			icon: 'error',
			title: 'Password error',
			text: 'Password does not match',
		});
		},
		changeMPass() {
			if (this.password1 === this.password2) {
				this.isLoading = true;
				let user = {
					userId: this.$store.state.auth.user.id,
					newPassword: this.password1,
				}
				this.$store.dispatch('auth/resetPassword', user).then(
					() => {
						this.isLoading = false;
						this.success()
					this.$router.push('/doctor/index');
					},
					error => {
					this.isLoading = false;
					this.error()
					this.message =
						(error.response && error.response.data && error.response.data.message) ||
						error.message ||
						error.toString();
					}
				);
        	} else {
				this.passMatch()
			}
		},

	}
}
</script>