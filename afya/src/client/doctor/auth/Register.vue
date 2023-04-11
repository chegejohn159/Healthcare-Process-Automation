<template>
<div class="account-page">
    <div class="main-wrapper">
        <layout-header2></layout-header2>
        	<!-- Page Content -->
			<div class="content bg-white">
				<div class="container-fluid">
					<div class="row">
						<div class="col-md-8 offset-md-2">

							<!-- Account Content -->
							<div class="account-content">
								<div class="row align-items-center justify-content-center">
									<div class="col-md-7 col-lg-6 login-left">
										<img src="../../../assets/img/login-banner.png" class="img-fluid" alt="Login Banner">
									</div>
									<div class="col-md-12 col-lg-6 login-right">
										<div class="login-header">
											<h3>Doctor Register <router-link to="/patient/register">Not a Doctor?</router-link></h3>
										</div>

										<!-- Register Form -->
										<form @submit.prevent="handleRegister">
											<div class="form-group form-focus">
												<input type="text" v-model="firstName" class="form-control floating" required="">
												<label class="focus-label">First name</label>
											</div>

											<div class="form-group form-focus">
												<input type="text" v-model="surname" class="form-control floating" required="">
												<label class="focus-label">Surname</label>
											</div>

											<div class="form-group form-focus">
												<input type="text" v-model="registrationNumber" class="form-control floating" required="">
												<label class="focus-label">Registration number</label>
											</div>

											<!-- <div class="form-group form-focus">
												<input type="text" v-model="speciality" class="form-control floating" required="">
												<label class="focus-label">Speciality</label>
											</div> -->

											<div class="form-group">
												<label>Speciality</label>
												<select v-model="speciality" class="select form-control">
													<option value="" selected>Choose your speciality</option>
													<option v-for="(speciality, index) in specialities" :key="index" :value="speciality.id">{{speciality.name}}</option>
												</select>
											</div>

											<div class="form-group form-focus">
												<input type="number" v-model="phoneNumber" class="form-control floating" required="">
												<label class="focus-label">Phone number</label>
											</div>

											<div class="form-group form-focus">
												<input type="text" v-model="emailAddress" class="form-control floating" required="">
												<label class="focus-label">Your Email</label>
											</div>

											<div class="form-group form-focus">
												<input type="password" v-model="password" class="form-control floating" required="">
												<label class="focus-label">Create Password</label>
											</div>
											<div class="text-right">
												<router-link class="forgot-link" to="/login">Already have an account?</router-link>
											</div>
											<button class="btn btn-primary btn-block btn-lg login-btn">Signup</button>
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
										</form>
										<!-- /Register Form -->

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
  name: 'Register',
  data() {
    return {
		isLoading: false,
		fullPage: true,
      firstName: '',
      surname: '',
      registrationNumber: '',
      speciality: '',
      emailAddress: '',
      phoneNumber: '',
      password: '',
      submitted: false,
      successful: false,
      message: '',
      dismissSecs: 5,
      dismissCountDown: 0,
      showDismissibleAlert: false,
	  specialities: [
		'General Practice',
		'Dermatology',
		'Dentistry',
		'Psychiatry',
		'Neurology',
		'Orthopedics',
		'Gynaecology and Infertility',
		'Ear, Nose and Throat',
		'Cardiology and Vascular Disease',
		'Allergy and Immunology',
		'Andrology and Male Infertility',
		'Cardiology and Thoracic Surgery',
		'Chest and Respiratory',
		'Diabetes and Endocrinology',
		'Oncology',
		'Physiotherapy and Sport Injuries',
	  ]
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
	specialities: function () {
		return this.$store.getters['admin/get_specialities']
	},
	counties: function () {
		return this.$store.getters['admin/get_counties']
	}
  },
  // mounted() {
  //   if (this.loggedIn) {
  //     this.$router.push('/profile');
  //   }
  // },
  methods: {
    handleRegister() {
      this.message = '';
      this.submitted = true;
        // if (isValid) {
		let user = {
			firstName: this.firstName,
			surname: this.surname,
			registrationNumber: this.registrationNumber,
			speciality: this.speciality,
			emailAddress: this.emailAddress,
			phoneNumber: this.phoneNumber,
			password: this.password,
		}
		this.$store.dispatch('auth/register', user).then(

		data => {
			this.showAlert()
			this.$router.push('/Register-Success');
			this.message = data.message;
			this.successful = true;
		},
		error => {
			this.error()
			this.message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
			this.successful = false;
		}
		);

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
			text: 'Something went wrong!',
		});
	},
  }
};
</script>
