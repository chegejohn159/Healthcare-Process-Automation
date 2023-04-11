<template>
    <div class="main-wrapper">
        <layout-header2></layout-header2>
        <breadcrumb6></breadcrumb6>
        <!-- Page Content -->
			<div class="content">
				<div class="container-fluid">

					<div class="row">
						<div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
						<div class="stickyside">
                            <sidebar></sidebar>
                        </div>
						</div>
						<div class="col-md-7 col-lg-8 col-xl-9">

							<!-- Basic Information -->
							<div class="card">
								<div class="card-body">
									<h4 class="card-title">Basic Information</h4>
									<div class="row form-row">
										<div class="col-md-12">
											<div class="form-group">
												<div class="change-avatar">
													<div class="profile-img">
														<img v-if="profile_image" id="profile-image" :src="`data:image/png;base64,${profile_image}`" alt="User Image">
										                <img v-else src="../../assets/img/doctors/doctor-thumb-02.jpg" class="img-fluid" alt="User Image">
													</div>
													 <input ref="profileImage" id="upload" type="file" v-on:change="uploadProfile" class="form-control border-0">
												</div>
											</div>
										</div>
                                            <form  @submit.prevent="updateProfile">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="mb-3">
                                                            <label class="form-label">Title </label>
                                                            <input name="title" v-model="title" id="name" type="text" class="form-control" placeholder="Title :" required="">
                                                        </div>
                                                    </div>

                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label>Select a county</label>
                                                            <select v-model="county" class="form-control">
                                                                <option value="" selected>Choose your county</option>
                                                                <option v-for="(county, index) in counties" :key="index" :value="county.id">{{county.name}}</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div class="col-md-6">
                                                        <div class="mb-3">
                                                            <label class="form-label">Area</label>
                                                            <input name="area" v-model="area" id="name2" type="text" class="form-control" placeholder="Area :" required="">
                                                        </div>
                                                    </div>

                                                    <div class="col-md-6">
                                                        <div class="mb-3">
                                                            <label class="form-label">Insurance</label>
                                                            <input name="insurance" v-model="insurance" id="name2" type="text" class="form-control" placeholder="Insurance :" required="">
                                                        </div>
                                                    </div>

                                                    <div class="col-md-6">
                                                        <div class="mb-3">
                                                            <label class="form-label">Street</label>
                                                            <input name="street" id="name2" v-model="street" type="text" class="form-control" placeholder="Street:" required="">
                                                        </div>
                                                    </div>

													<div class="col-md-6">
                                                        <div class="mb-3">
                                                            <label class="form-label">Cost</label>
                                                            <input name="cost" id="name2" v-model="cost" type="text" class="form-control" placeholder="Cost:" required="">
                                                        </div>
                                                    </div>

                                                </div>

                                                <div class="row">
                                                    <div class="col-sm-12">
                                                        <button class="btn btn-primary"> Save changes</button>
                                                    </div>
                                                </div>
                                            </form><!--end form-->
									</div>
								</div>
							</div>
							<!-- /Basic Information -->

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
  name: 'Profile',
  computed: {
    currentUser() {
      this.$store.dispatch('roles/getAllRoles', 'par')
      return this.$store.state.auth.user;
    },
    getRoles() {
      this.$store.dispatch('roles/getAllRoles', 'par')
      // return this.$store.action.auth.user;
      return ''
    },
    specialities: function () {
        return this.$store.getters['admin/get_specialities']
    },
    counties: function () {
        console.log('dcwdw', this.$store.getters['admin/get_counties'])
        return this.$store.getters['admin/get_counties']
    }
  },
  created() {
    // this.isLoading = true;
    this.get_profile_details()
  },
    data () {
      return {
        // showRecorder: true,
        title: '',
        county: '',
        area: '',
        street: '',
        insurance: '',
        profile_image: '',
        userId: this.$store.state.auth?.user?.id,
        profile_data: {},
        progressBar: 50,
        cost: '',
        isLoading: false,
        fullPage: true,

        adminApproved: '',
        emailVerified: '',

        firstName: '',
        surname: '',
        phoneNumber: '',
        emailAddress: '',
        imagePath: '',

        joinedDate: '',
        registrationNumber: '',

      }
    },
    methods: {

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


        getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
        },


        uploadProfile(evt) {
             const file = this.$refs.profileImage.files;
             this.profile_image = file[0]
            this.getBase64(file[0]).then(
                data => {
                    // this.profile_image = data
            document.getElementById("profile-image").src = data
            }

            );
        },

        // toogleModal () {
        //     $('#verif').modal('toggle')
        // },

        resendverification () {
        this.$store.dispatch('auth/reConfirm', this.userId)
            .then(
                (res) => {
                this.isLoading = false;
                // this.profile_data = res
                },
                error => {

                this.isLoading = false;
                this.message =
                    (error.response && error.response.data && error.response.data.message) ||
                    error.message ||
                    error.toString();
                }
            );
        },
        calculateProfileState () {
            if ('emailVerified' in this.profile_data) {
                if (this.profile_data.emailVerified !== 'unverified') {
                     this.progressBar = this.progressBar + 10
                }
            }

            if ('title' in this.profile_data) {
                if (this.profile_data.title) {
                     this.progressBar = this.progressBar + 40
                }
            }
        },
      get_profile_details () {

        this.$store.dispatch('profile/getDocDetails', this.userId)
        .then((res) => {
                this.isLoading = false;
                this.profile_data = res
                this.adminApproved = res.adminApproved
                this.emailVerified = res.emailVerified
                this.joinedDate = res.joinedDate

                this.title = res.title
                this.surname = res.surname
                this.firstName = res.firstName
                this.registrationNumber = res.registrationNumber

                this.county = res.county
                this.area = res.area
                this.street = res.street
                this.phoneNumber = res.phoneNumber
                this.emailAddress  = res.emailAddress

                this.profile_image = res.image
                this.insurance = res.insurance
                this.cost = res.cost

                // this.calculateProfileState()
                },
                error => {
                // this.showAlert()

                this.isLoading = false;
                this.message =
                    (error.response && error.response.data && error.response.data.message) ||
                    error.message ||
                    error.toString();
                }
            );
      },

    updateProfile() {
        // if (this.profile_image) {
                this.isLoading = true;
            let profile = {
                    userId: this.userId,
                    title: this.title,
                    county: this.county,
                    area: this.area,
                    street: this.street,
                    insurance: this.insurance,
                    file: this.profile_image,
                    cost: this.cost
            }
            this.$store.dispatch('profile/addDoc', profile).then(
                (res) => {
                    console.log('res', res)
                // this.$router.push('/doctor-profile');
                this.isLoading = false;
                this.success()
                // this.get_profile_details()
                },
                error => {

                    this.isLoading = false;
                this.message =
                    (error.response && error.response.data && error.response.data.message) ||
                    error.message ||
                    error.toString();
                this.error()
                }
            );
            // }
    },
    }
};
</script>