<template>
    <div class="main-wrapper">
        <layout-header2></layout-header2>
        <breadcrumb10></breadcrumb10>
				<div class="vld-parent">
		<loading v-model:active="isLoadingProf"
		:can-cancel="false"
		:is-full-page="fullPage"
		/>
	</div>
        <!-- Page Content -->
			<div class="content">
				<div class="container-fluid">


					<div class="row">
						<div class="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
						<div class="stickyside">
							<search-filter></search-filter>
						</div>
						</div>

						<div class="col-md-12 col-lg-8 col-xl-9 doc-section">

							<!-- Doctor Widget -->
							<div v-if="searchresults_req.length">
								<div class="card" v-for="(item, index) in searchresults_req" :key="index">
									<div class="card-body">
										<div class="doctor-widget">
											<div class="doc-info-left">
												<div v-if="item.image" class="doctor-img">
													<router-link  to="/doctor/profile">
														<img :src="`data:image/png;base64,${item.image}`" class="img-fluid" alt="User Image">
													</router-link>
												</div>
												<div v-else class="doctor-img">
													<router-link  to="/doctor/profile">
														<img src="../assets/img/doctors/doctor-01.jpg" class="img-fluid" alt="User Image">
													</router-link>
												</div>
												<div class="doc-info-cont" style="text-align-last: left;">
													<h4 class="doc-name"><router-link :to="{ name: 'doctor-profile', params: { id: item.id } }"><span style="font-weight: bold">{{item.title}}</span> - {{item.firstName}}</router-link></h4>
													<p class="doc-speciality"><span class="item-doc">Speciality: </span>{{item.speciality}}</p>
													<p class="doc-speciality"><span class="item-doc">Insurance: </span>{{item.insurance}}</p>
													<!-- <h5 class="doc-department"><img :src="loadImg(item.icon, 2)" class="img-fluid" alt="Speciality">{{item.category}}</h5>
													<div class="rating mapgridrating1">
														<i class="fas fa-star filled"></i>
														<i class="fas fa-star filled"></i>
														<i class="fas fa-star filled"></i>
														<i class="fas fa-star filled"></i>
														<i class="fas fa-star"></i>
														<span class="d-inline-block average-rating">{{item.rating}}</span>
													</div> -->
													<div class="clinic-details">
														<p class="doc-location"><span class="item-doc">Rate: </span> Ksh {{item.cost}}</p>
														<p class="doc-location"><span class="item-doc">Location </span> {{item.county}} -{{item.area}} - {{item.street}}</p>
														<!-- <ul class="clinic-gallery">
															<li class="mr-1" v-for="data in item.images" :key="data.id">
																<a class="fancystyle" data-fancybox="gallery">
																	<img :src="loadImg(data.name, 3)" alt="Feature">
																</a>
															</li>
														</ul> -->
														<ul>
														<!-- <li><i class="far fa-thumbs-up"></i> {{item.likes}}</li>
														<li><i class="far fa-comment"></i> {{item.feedback}} Feedback</li> -->

													</ul>
													</div>
													<!-- <div class="clinic-services">
														<span>Dental Fillings</span>
														<span> Whitneing</span>
													</div> -->
												</div>
											</div>
											<div class="doc-info-right">

												<div class="clinic-booking">
													<router-link class="view-pro-btn" :to="{ name: 'doctor-profile', params: { id: item.id } }">View Profile</router-link>
													<router-link class="apt-btn" to="/patient/booking">Book Appointment</router-link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div v-else>
								<h4 class="empty-doc-list">Doctor results empty</h4>
							</div>
							<!-- /Doctor Widget -->

						</div>
					</div>

				</div>

			</div>
			<!-- /Page Content -->
            <layout-footer></layout-footer>
    </div>
</template>

<script>
import searchresults from '../assets/json/patient/searchresults.json';
const doctorImages = require.context('../assets/img/doctors', false, /\.png$|\.jpg$/)
const specialityImages = require.context('../assets/img/specialities', false, /\.png$|\.jpg$/)
const featureImages = require.context('../assets/img/features', false, /\.png$|\.jpg$/)

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
		this.initial_Search_all()
	},
	data() {
		return {
			isLoadingProf: false,
			fullPage: true
		}
	},
	 methods: {
        loadImg(imgPath, value) {
			if(value == 1) {
				return doctorImages('./' + imgPath).default
			} else if(value == 2) {
				return specialityImages('./' + imgPath).default
			} else {
				return featureImages('./' + imgPath).default
			}
        },

		initial_Search_all() {
            this.isLoadingProf = true;
            let profile = {
                    county: '',
                    speciality: '',
                    area: '',
                    street: '',

            }
            this.$store.dispatch('patient/doctor_search', profile).then(
                (res) => {
                this.isLoadingProf = false;
				console.log('res', res)
				console.log('res', this.isLoadingProf)
                },
                error => {
                    this.isLoadingProf = false;
                this.message =
                    (error.response && error.response.data && error.response.data.message) ||
                    error.message ||
                    error.toString();
                }
            );

            // }
    	}
    },

	computed: {
		searchresults_req: function () {
			return this.$store.getters['patient/search_results']
		}
	}
}
</script>

<style scoped>
.empty-doc-list {
	color: #86898b;
    font-size: 26px;
    font-weight: 500;
}
.doc-section {
	margin: auto;
    text-align-last: center;
}

span.item-doc {
    font-weight: bold;
    margin-right: 8px;
	    margin-left: 8px;
}

.doc-location {
    color: #757575;
    font-size: 14px;
    margin-bottom: 4px;
}
.doc-speciality {
    font-size: 14px;
    color: #757575;
    margin-bottom: 0px;
}
</style>