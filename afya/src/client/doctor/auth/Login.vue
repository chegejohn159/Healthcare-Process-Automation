<template>
	<div class="account-page">
		<div class="main-wrapper">
			<layout-header2></layout-header2>

				<!-- Page Content -->
				<div class="content">
					<div class="container-fluid">

						<div class="row">
							<div class="col-md-8 offset-md-2">

								<!-- Login Tab Content -->
								<div class="account-content">
									<div class="row align-items-center justify-content-center">
										<div class="col-md-7 col-lg-6 login-left">
											<img src="../../../assets/img/login-banner.png" class="img-fluid" alt="AfyaYetu Login">
										</div>
										<div class="col-md-12 col-lg-6 login-right">
											<div class="login-header">
												<h3>Login <span>AfyaYetu</span></h3>
											</div>
											<form @submit.prevent="handleLogin">
												<div class="form-group form-focus">
													<input type="email" v-model="emailAddress" class="form-control floating">
													<label class="focus-label">Email</label>
												</div>
												<div class="form-group form-focus">
													<input type="password"  v-model="password" class="form-control floating">
													<label class="focus-label">Password</label>
												</div>
												<div class="text-right">
													<router-link class="forgot-link" to="/forgot-password">Forgot Password ?</router-link>
												</div>
												<button class="btn btn-primary btn-block btn-lg login-btn">Login</button>
												<div class="login-or">
													<span class="or-line"></span>
													<span class="span-or">or</span>
												</div>
												<div class="row form-row social-login">
													<div class="col-6">
														<a href="#" class="btn btn-facebook btn-block"><i class="fab fa-facebook-f mr-1"></i> Login</a>
													</div>
													<div class="col-6">
														<a href="#" class="btn btn-google btn-block"><i class="fab fa-google mr-1"></i> Login</a>
													</div>
												</div>
												<div class="text-center dont-have">Don’t have an account? <router-link to="/doctor/register">Register</router-link></div>
											</form>
										</div>
									</div>
								</div>
								<!-- /Login Tab Content -->

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
  name: 'Login',
  data() {
    return {
		isLoading: false,
		fullPage: true,
      emailAddress: this.emailAddress,
      password: this.password,
      loading: false,
      message: '',
      dismissSecs: 5,
      dismissCountDown: 0,
      showDismissibleAlert: false
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },

  methods: {
    handleLogin() {

        if (this.emailAddress && this.password) {
			this.isLoading = true;
          let user = {
            emailAddress: this.emailAddress,
            password: this.password,
          }
          this.$store.dispatch('auth/login',user).then(
            () => {
				this.isLoading = false;
              this.$router.push('/doctor/index');
            },
            error => {

				this.message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
				this.isLoading = false;
				this.error()
            }
          );
        }
    },

    showAlert() {
        this.dismissCountDown = this.dismissSecs
    },
	success() {
		this.$swal({
			icon: 'success',
			title: 'Success',
			text: 'Update was successful',
		});
	},
	error() {
		this.$swal({
			icon: 'error',
			title: 'Oops...',
			text: this.message,
		});
	},
  }
};
</script>
