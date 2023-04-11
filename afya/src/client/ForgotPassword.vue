<template>
	<div class="account-page">
		<div class="main-wrapper">
			<layout-header4></layout-header4>
			<!-- Page Content -->
				<div class="content">
					<div class="container-fluid">

						<div class="row">
							<div class="col-md-8 offset-md-2">

								<!-- Account Content -->
								<div class="account-content">
									<div class="row align-items-center justify-content-center">
										<div class="col-md-7 col-lg-6 login-left">
											<img src="../assets/img/login-banner.png" class="img-fluid" alt="Login Banner">
										</div>
										<div class="col-md-12 col-lg-6 login-right">
											<div class="login-header">
												<h3>Forgot Password?</h3>
												<p class="small text-muted">Enter your email to get a password reset link</p>
											</div>

											<!-- Forgot Password Form -->
											<form @submit.prevent="forgotPassword">
												<div class="form-group form-focus">
													<input type="email" v-model="emailAddress" class="form-control floating">
													<label class="focus-label">Email</label>
												</div>
												<div class="text-right">
													<router-link class="forgot-link" to="/login">Remember your password?</router-link>
												</div>
												<button class="btn btn-primary btn-block btn-lg login-btn" type="submit">Reset Password</button>
											</form>
											<!-- /Forgot Password Form -->

										</div>
									</div>
								</div>
								<!-- /Account Content -->

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
	</div>
</template>
<script>

export default {
  data() {
    return {
		isLoading: false,
		fullPage: true,
      emailAddress: this.emailAddress
    };
  },

  methods: {
    forgotPassword() {

        if (this.emailAddress) {
			this.isLoading = true;

          this.$store.dispatch('auth/forgotPassword', this.emailAddress).then(
            () => {
				this.isLoading = false;
				this.success()
              this.$router.push('/login');
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
        }
    },
	success() {
		this.$swal({
			icon: 'success',
			title: 'Password reset successful!',
			text: 'Check your email',
		});
	},
	error() {
		this.$swal({
			icon: 'error',
			title: 'Oops...',
			text: 'Something went wrong!',
		});
	},
  }
};
</script>
