<template>
<div>
	<div class="vld-parent">
		<loading v-model:active="isLoading"
			:can-cancel="false"
			:is-full-page="fullPage"
			/>
	</div>
	<section class="section section-search-1">
		<div class="container">
			<div class="row">
				<div class="col-md-6">
					<img src="../../assets/img/dr-slider.png" class="img-fluid dr-img" alt="" >
				</div>
				<div class="col-md-6 search-doctor">
					<div class="search-area">
						<h2 class="text-center">Search Doctor, Make an Appointment</h2>
						<form   @submit.prevent="initSearch" class="search-input">
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
							<div class="submit-section">
								<button class="btn btn-primary">Search</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
	</div>
</template>
<script>

export default {

	data () {
		return {
			fullPage: true,
			isLoading: false,
			specialities: [],
			counties: [],
			county: '',
			speciality: '',
			area: '',
			street: '',
		}
	},

		mounted() {
			var $wrapper = $('.main-wrapper');
			$('.main-nav a').on('click', function(e) {
					if($(this).parent().hasClass('has-submenu')) {
						e.preventDefault();
					}
					if(!$(this).hasClass('submenu')) {
						$('ul', $(this).parents('ul:first')).slideUp(350);
						$('a', $(this).parents('ul:first')).removeClass('submenu');
						$(this).next('ul').slideDown(350);
						$(this).addClass('submenu');
					} else if($(this).hasClass('submenu')) {
						$(this).removeClass('submenu');
						$(this).next('ul').slideUp(350);
					}
				});

			$('body').append('<div class="sidebar-overlay"></div>');
			$(document).on('click', '#mobile_btn', function() {
				$wrapper.toggleClass('slide-nav');
				$('.sidebar-overlay').toggleClass('opened');
				$('html').addClass('menu-opened');
				$('#task_window').removeClass('opened');
				return false;
			});

			$(document).on('click', '#menu_close', function() {
				$('html').removeClass('menu-opened');
				$('.sidebar-overlay').removeClass('opened');
				$('main-wrapper').removeClass('slide-nav');
			});
		$('.main-nav ul li:not(.submenu) a').click(function(){
            $("html").removeClass('menu-opened');
            $(".sidebar-overlay").removeClass('opened');
        });

    	},

		computed: {
		specialities: function () {
			return this.$store.getters['admin/get_specialities']
		},
		counties: function () {
			return this.$store.getters['admin/get_counties']
		},
		currentPath() {
			return this.$route.name
		},
		homeMenu() {
			return this.$route.name == 'index' || this.$route.name == 'index-5'  || this.$route.name == 'index-6'     || this.$route.name == 'index-8'   || this.$route.name == 'index-7' || this.$route.name == 'index-1' || this.$route.name == 'index-page' ||  this.$route.name == 'index-2' ||  this.$route.name == 'index-3' ||  this.$route.name == 'index-4';
		},
	    doctorMenu() {
           return this.$route.name == 'doctor-index' || this.$route.name == 'doctor-appointments' || this.$route.name == 'schedule-timings' ||  this.$route.name == 'my-patients' ||  this.$route.name == 'messages' ||  this.$route.name == 'invoices' ||  this.$route.name == 'profile-settings' ||  this.$route.name == 'doctor-reviews' ||  this.$route.name == 'doctor-register' ||  this.$route.name == 'doctor-blogs' ||  this.$route.name == 'blog-details' ||  this.$route.name == 'edit-blog' ||  this.$route.name == 'add-blog' ||  this.$route.name == 'add-prescription' ||  this.$route.name == 'edit-prescription' ||  this.$route.name == 'add-billing' ||  this.$route.name == 'edit-billing';
        },
		patientsMenu() {
			return this.$route.name == 'doctor-mapgrid' || this.$route.name == 'doctor-maplist' || this.$route.name == 'doctor-profile' || this.$route.name == 'search-doctor' ||  this.$route.name == 'booking' ||  this.$route.name == 'booking-success' ||  this.$route.name == 'checkout' ||  this.$route.name == 'patient-dashboard' ||  this.$route.name == 'favourites' ||  this.$route.name == 'chat' ||  this.$route.name == 'patient-profile-settings' ||  this.$route.name == 'patient-change-password';
		},
		pagesMenu() {
			return this.$route.name == 'voice-call' || this.$route.name == 'video-call' || this.$route.name == 'calendar' || this.$route.name == 'componentss' || this.$route.name == 'invoice-view' || this.$route.name == 'logins' || this.$route.name == 'blank' || this.$route.name == 'patient-register' || this.$route.name == 'doctor-register' || this.$route.name == 'invoices' || this.$route.name == 'forgot-password';
		},
		blogMenu() {
			return this.$route.name == 'blog-list' || this.$route.name == 'blog-grid' || this.$route.name == 'blog-details';
		}
    },
    methods: {
       dashboard(value) {
           if(value == 1) {
               let router = this.$router.resolve({path: '/admin/index'});
               window.open(router.href, '_blank');
           } else {
               let router = this.$router.resolve({path: '/pharmacyadmin/index'});
               window.open(router.href, '_blank');
           }
       },
	    initSearch() {
            this.isLoading = true;
            let profile = {
                    county: this.county,
                    speciality: this.speciality,
                    area: this.area,
                    street: this.street,

            }
            this.$store.dispatch('patient/doctor_search', profile).then(
                () => {
                this.$router.push('/doctor/search');
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
    	},
   }
}
</script>

<style scoped>
/* .section-search-1 {
	background: #f9f9f9 url(../../assets/img/01.jpg) no-repeat bottom center;
    min-height: 450px;
    position: relative;
    background-blend-mode: Darken;
} */
</style>