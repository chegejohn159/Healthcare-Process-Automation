<template>
    <div class="main-wrapper">
        <layout-header4></layout-header4>
        <breadcrumb9></breadcrumb9>
		    <div class="vld-parent">
                <loading v-model:active="isLoading"
                 :can-cancel="false"
                 :is-full-page="fullPage"
				 />
            </div>
        	<!-- Page Content -->
			<div class="content">
				<div class="container">

					<!-- Doctor Widget -->
					<div class="card">
						<div class="card-body">
							<div class="doctor-widget">
								<div class="doc-info-left">
									<div class="doctor-img">
										<img v-if="profile_image" id="profile-image" :src="`data:image/png;base64,${profile_image}`" alt="User Image">
										<img v-else src="../../assets/img/doctors/doctor-thumb-02.jpg" class="img-fluid" alt="User Image">
									</div>
									<div class="doc-info-cont">
										<h4 class="doc-name"><span style="text-transform: capitalize;">{{title}}. </span>{{firstName}} {{surname}}</h4>


										<div class="clinic-details">
											<p class="doc-location"><span class="doc-items">Cost: </span>{{cost}} </p>
											<p class="doc-location"><span class="doc-items">Insurance: </span>{{insurance}} </p>
											<!-- <p class="doc-location"><span class="doc-items">Phone number: </span>{{phoneNumber}} </p>
											<p class="doc-location"><span class="doc-items">Email address: </span>{{emailAddress}} </p> -->
											<p class="doc-location"><span class="doc-items">Location: </span>{{county}}- {{area}} - {{street}}</p>
										</div>
									</div>
								</div>
								<div class="doc-info-right">
									<div class="clinic-booking">
										<!-- <router-link class="apt-btn" to="/patient/booking">Book Appointment</router-link> -->
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- /Doctor Widget -->

					<!-- Doctor Details Tab -->
					<div class="card">
						<div class="card-body pt-0">

							<!-- Tab Menu -->
							<nav class="user-tabs mb-4">
								<ul class="nav nav-tabs nav-tabs-bottom nav-justified">
									<li class="nav-item">
										<a class="nav-link active" href="#doc_overview" data-toggle="tab">Doctor Hours</a>
									</li>
								</ul>
							</nav>
							<!-- /Tab Menu -->

							<!-- Tab Content -->
							<div class="tab-content pt-0">

								<!-- Business Hours Content -->
								<!-- <div role="tabpanel" id="doc_overview" class="tab-pane fade show active">
									<div class="row">
										<div class="col-md-6 offset-md-3">

											<div class="widget business-widget">
												<div class="widget-content">
													<div class="listing-hours">
														<div class="listing-day current">
															<div class="day">Today <span>5 Nov 2019</span></div>
															<div class="time-items">
																<span class="open-status"><span class="badge bg-success-light">Open Now</span></span>
																<span class="time">07:00 AM - 09:00 PM</span>
															</div>
														</div>
														<div class="listing-day">
															<div class="day">Monday</div>
															<div class="time-items">
																<span class="time">07:00 AM - 09:00 PM</span>
															</div>
														</div>
														<div class="listing-day">
															<div class="day">Tuesday</div>
															<div class="time-items">
																<span class="time">07:00 AM - 09:00 PM</span>
															</div>
														</div>
														<div class="listing-day">
															<div class="day">Wednesday</div>
															<div class="time-items">
																<span class="time">07:00 AM - 09:00 PM</span>
															</div>
														</div>
														<div class="listing-day">
															<div class="day">Thursday</div>
															<div class="time-items">
																<span class="time">07:00 AM - 09:00 PM</span>
															</div>
														</div>
														<div class="listing-day">
															<div class="day">Friday</div>
															<div class="time-items">
																<span class="time">07:00 AM - 09:00 PM</span>
															</div>
														</div>
														<div class="listing-day">
															<div class="day">Saturday</div>
															<div class="time-items">
																<span class="time">07:00 AM - 09:00 PM</span>
															</div>
														</div>
														<div class="listing-day closed">
															<div class="day">Sunday</div>
															<div class="time-items">
																<span class="time"><span class="badge bg-danger-light">Closed</span></span>
															</div>
														</div>
													</div>
												</div>
											</div>

										</div>
									</div>
								</div> -->
								<!-- /Business Hours Content -->

							</div>
						</div>
					</div>
					<!-- /Doctor Details Tab -->

				</div>
			</div>
			<!-- /Page Content -->
			 <layout-footer></layout-footer>
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
  },
  created() {
	this.isLoading = true;
    this.get_profile_details()
  },
    data () {
      return {
        // showRecorder: true,
        title: '',
        county: '',
        area: '',
        cost: '',
        street: '',
        insurance: '',
        profile_image: '',
        // userId: this.$store.state.auth.user.id,
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

      get_profile_details () {

        this.$store.dispatch('profile/getDocDetails', this.$route.params.id)
        .then((res) => {
				this.isLoading = false;
                this.profile_data = res
                this.adminApproved = res.adminApproved
                this.emailVerified = res.emailVerified
                this.joinedDate = res.joinedDate

                this.cost = res.cost
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
                this.id = res.id

                // this.calculateProfileState()
                },
                error => {
                // this.showAlert()
                this.message =
                    (error.response && error.response.data && error.response.data.message) ||
                    error.message ||
                    error.toString();
                }

            );
      }
    }
};
</script>
<style scoped>
	.doc-items {
		font-weight: bold;
    	margin-right: 10px;
	}

	.doctor-img img {
		border-radius: 5px;
		width: 230px;
		height: 230px;
	}

	.doctor-img {
    	margin-right: 53px;
	}
	.doc-location {
		color: #757575;
		font-size: 14px;
		margin-bottom: 11px;
	}
</style>
