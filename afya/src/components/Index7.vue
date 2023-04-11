<template>
	<div class="main-wrapper">
		<layout-header4></layout-header4>

		<!-- Home Banner -->
			<section class="doctor-search-section">
				<div class="container">
					<div class="row align-items-center">
						<div class="col-lg-6">
							<div class="doctor-search">
								<div class="banner-header">
									<h2>Search Doctor, <br> Make an Appointment</h2>
								</div>
								<div class="doctor-form">
									<form action="#" class="doctor-search-form">
										<div class="row">
											<div class="col-md-12">
												<div class="form-group">
													<label>Location</label>
													<div class="form-custom">
														<input type="text" class="form-control" value="">
														<i class="far fa-compass"></i>
													</div>
												</div>
											</div>
											<div class="col-md-6">
												<div class="form-group">
													<label>Gender</label>
													<div class="form-custom">
														<input type="text" class="form-control" value="">
														<i class="far fa-smile"></i>
													</div>
												</div>
											</div>
											<div class="col-md-6">
												<div class="form-group">
													<label>Department</label>
													<div class="form-custom">
														<input type="text" class="form-control" value="">
														<i class="fas fa-user-check"></i>
													</div>
												</div>
											</div>
											<div class="col-md-12">
												<router-link to="/doctor/search" class="btn banner-btn mt-3">MAKE APPOINTMENT</router-link>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div class="col-lg-6">
							<img src="../assets/img/doctor-banner.png" class="img-fluid dr-img" alt="" >
						</div>
					</div>
				</div>
			</section>
			<!-- /Home Banner -->

			<!-- Clinic Section -->
			<section class="clinics-section">
				<div class="shapes">
				    <img src="../assets/img/shapes/shape-1.png" alt="" class="img-fluid shape-1" />
                    <img src="../assets/img/shapes/shape-2.png" alt="" class="img-fluid shape-2" />
				</div>
				<div class="container">
					<div class="row">
						<div class="col-md-6">
							<div class="section-heading">
								<h2>Clinic & Specialities</h2>
								<p>Access to expert physicians and surgeons, advanced technologies and top-quality surgery facilities right here.</p>
							</div>
						</div>
						<div class="col-md-6 text-right">
							<div class="owl-nav slide-nav-1 text-right nav-control"></div>
						</div>
					</div>
					<Carousel :wrap-around="true" :breakpoints="breakpoints2">
					<Slide class="clinics" v-for="item in clinic" :key="item.id">
						<div class="item">
							<div class="clinic-item">
								<div class="clinics-card">
									<div class="clinics-img">
										<img :src="loadImg(item.clinic1,1)" alt="" class="img-fluid">
									</div>
									<div class="clinics-info">
										<img :src="loadImg(item.clinic2,2)" alt="" class="img-fluid">
										<a href="#"><span>{{item.name}}</span></a>
									</div>
								</div>
								<div class="clinics-icon">
									<a href="#"><i class="fas fa-long-arrow-alt-right"></i></a>
								</div>
							</div>
						</div>
					</Slide>
						<template #addons>
                                <Navigation />
                            </template>
							</Carousel>
				</div>
			</section>
			<!-- /Clinic Section -->

			<!-- Specialities Section -->
			<section class="specialities-section">
				<div class="shapes">
					<img src="../assets/img/shapes/shape-3.png" alt="" class="img-fluid shape-3">
					<img src="../assets/img/shapes/shape-4.png" alt="" class="img-fluid shape-4">
				</div>
				<div class="container">
					<div class="row">
						<div class="col-md-6">
							<div class="section-heading bg-area">
								<h2>Browse by Specialities</h2>
								<p>Find experienced doctors across all specialties</p>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-3 col-md-6">
							<div class="specialist-card d-flex">
								<div class="specialist-img">
									<img src="../assets/img/category/1.png" alt="" class="img-fluid">
								</div>
								<div class="specialist-info">
									<a href="#"><h4>Urology</h4></a>
									<p>21 Doctors</p>
								</div>
								<div class="specialist-nav ml-auto">
									<a href="#"><i class="fas fa-long-arrow-alt-right"></i></a>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-6">
							<div class="specialist-card d-flex">
								<div class="specialist-img">
									<img src="../assets/img/category/3.png" alt="" class="img-fluid">
								</div>
								<div class="specialist-info">
									<a href="#"><h4>Neurology</h4></a>
									<p>21 Doctors</p>
								</div>
								<div class="specialist-nav ml-auto">
									<a href="#"><i class="fas fa-long-arrow-alt-right"></i></a>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-6">
							<div class="specialist-card d-flex">
								<div class="specialist-img">
									<img src="../assets/img/category/2.png" alt="" class="img-fluid">
								</div>
								<div class="specialist-info">
									<a href="#"><h4>Orthopedic</h4></a>
									<p>21 Doctors</p>
								</div>
								<div class="specialist-nav ml-auto">
									<a href="#"><i class="fas fa-long-arrow-alt-right"></i></a>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-6">
							<div class="specialist-card d-flex">
								<div class="specialist-img">
									<img src="../assets/img/category/4.png" alt="" class="img-fluid">
								</div>
								<div class="specialist-info">
									<a href="#"><h4>Cardiologist</h4></a>
									<p>21 Doctors</p>
								</div>
								<div class="specialist-nav ml-auto">
									<a href="#"><i class="fas fa-long-arrow-alt-right"></i></a>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-6">
							<div class="specialist-card d-flex">
								<div class="specialist-img">
									<img src="../assets/img/category/1.png" alt="" class="img-fluid">
								</div>
								<div class="specialist-info">
									<a href="#"><h4>Urology</h4></a>
									<p>21 Doctors</p>
								</div>
								<div class="specialist-nav ml-auto">
									<a href="#"><i class="fas fa-long-arrow-alt-right"></i></a>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-6">
							<div class="specialist-card d-flex">
								<div class="specialist-img">
									<img src="../assets/img/category/3.png" alt="" class="img-fluid">
								</div>
								<div class="specialist-info">
									<a href="#"><h4>Neurology</h4></a>
									<p>21 Doctors</p>
								</div>
								<div class="specialist-nav ml-auto">
									<a href="#"><i class="fas fa-long-arrow-alt-right"></i></a>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-6">
							<div class="specialist-card d-flex">
								<div class="specialist-img">
									<img src="../assets/img/category/2.png" alt="" class="img-fluid">
								</div>
								<div class="specialist-info">
									<a href="#"><h4>Orthopedic</h4></a>
									<p>21 Doctors</p>
								</div>
								<div class="specialist-nav ml-auto">
									<a href="#"><i class="fas fa-long-arrow-alt-right"></i></a>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-6">
							<div class="specialist-card d-flex">
								<div class="specialist-img">
									<img src="../assets/img/category/4.png" alt="" class="img-fluid">
								</div>
								<div class="specialist-info">
									<a href="#"><h4>Cardiologist</h4></a>
									<p>21 Doctors</p>
								</div>
								<div class="specialist-nav ml-auto">
									<a href="#"><i class="fas fa-long-arrow-alt-right"></i></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- /Specialities Section -->

			<!-- Best Doctor Section -->
			<section class="clinics-section">
			<div class="shapes">
					<img src="assets/img/shapes/shape-1.png" alt="" class="img-fluid shape-1">
					<img src="assets/img/shapes/shape-2.png" alt="" class="img-fluid shape-2">
				</div>
				<div class="container">
					<div class="row">
						<div class="col-md-6">
							<div class="section-heading">
								<h2>Clinic & Specialities</h2>
								<p>Access to expert physicians and surgeons, advanced technologies and top-quality surgery facilities right here.</p>
							</div>
						</div>
						<div class="col-md-6 text-right">
							<div class="owl-nav slide-nav-2 text-right nav-control"></div>
						</div>
					</div>
					<Carousel :wrap-around="true" :breakpoints="breakpoints2" class="our-doctors">
					<Slide v-for="item in clinicspecial" :key="item.id">

						<div class="item">
							<div class="our-doctors-card">
								<div class="doctors-header">
									<a href="#"><img :src="loadImg(item.specialimage,4)" alt="" class="img-fluid"></a>
									<div class="img-overlay">
										<span>{{item.amt}}</span>
									</div>
								</div>
								<div class="doctors-body">
									<div class="rating">
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<span class="d-inline-block average-ratings">3.5</span>
									</div>
									<router-link to="/doctor/profile"><h4>{{item.doctorname}}</h4></router-link>
									<p>{{item.description}}</p>
									<div class="location d-flex">
										<p><i class="fas fa-map-marker-alt"></i> {{item.name}}</p>
										<p class="ml-auto"> <i class="fas fa-user-md"></i> {{item.number}} {{item.name1}}</p>
									</div>
									<div class="row row-sm">
										<div class="col-6">
											<router-link to="/doctor/profile" class="btn view-btn" tabindex="0">View Profile</router-link>
										</div>
										<div class="col-6">
											<router-link to="/patient/booking" class="btn book-btn" tabindex="0">Book Now</router-link>
										</div>
									</div>
								</div>
							</div>
						</div>

					</Slide>
					<template #addons>
                                <Navigation />

                            </template>
							</Carousel>
				</div>
			</section>
			<!-- /Best Doctor Section -->

			<!-- Clinic Features Section -->
			<section class="clinic-features-section">
				<div class="container">
					<div class="row">
						<div class="col-md-6">
							<div class="section-heading">
								<h2>Availabe Features in Our Clinic</h2>
								<p>Meet our Experts & Book Online</p>
							</div>
						</div>
						<div class="col-md-6 text-right">
							<div class="owl-nav slide-nav-3 text-right nav-control"></div>
						</div>
					</div>
					<Carousel :wrap-around="true" :breakpoints="breakpoints">
					<Slide v-for="item in meeting" :key="item.id">
					<div class="clinic-feature">
						<div class="item">
							<div class="clinic-features">
								<img :src="loadImg(item.meetimage,1)" alt="" class="img-fluid">
							</div>
							<div class="clinic-feature-overlay">
								<a href="#" class="img-overlay">{{item.name}}</a>
							</div>
						</div>
					</div>
					</Slide>
						<template #addons>
                                <Navigation />

                            </template>
							</Carousel>
				</div>
			</section>
			<!-- /Clinic Features Section -->

			<!-- Blog Section -->
			<section class="our-blog-section">
				<div class="container">
					<div class="row">
						<div class="col-md-6">
							<div class="section-heading">
								<h2>Blogs and News</h2>
								<p>Read Professional Articles and Latest Articles</p>
							</div>
						</div>
						<div class="col-md-6 text-right">
							<div class="owl-nav slide-nav-4 text-right nav-control"></div>
						</div>
					</div>
					<Carousel :wrap-around="true" :breakpoints="breakpoints1" class="blogs">
					<Slide v-for="item in blog" :key="item.id">
						<div class="item">
							<div class="our-blogs">
								<div class="blogs-img">
									<router-link to="/doctor/blog-details"><img :src="loadImg(item.blog_image,3)"  alt="" class="img-fluid"></router-link>
									<div class="blogs-overlay d-flex">
										<img src="../assets/img/doctors/doctor-thumb-01.jpg" alt="" class="img-fluid">
											<span class="blogs-writter">{{item.name}}</span>
									</div>
								</div>
								<div class="blogs-info">
									<span>{{item.name}}</span>
									<router-link to="/doctor/blog-details"><h4>{{item.description}}</h4></router-link>
									<p>{{item.description1}}</p>
									<span class="blogs-time"><i class="far fa-clock"></i> {{item.date}}</span>
								</div>
								<div class="blogs-nav">
									<router-link to="/doctor/blog-details" class="blogs-btn">Read More</router-link>
								</div>
							</div>
						</div>
					</Slide>
					<template #addons>
                                <Navigation />

                            </template>
							</Carousel>
				</div>
			</section>
			<!-- /Blog Section -->



		<layout-footer3></layout-footer3>
	</div>
</template>
<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation} from 'vue3-carousel';
import clinic from '../assets/json/clinic.json';
import meeting from '../assets/json/meet.json';
import blog from '../assets/json/news.json';
import clinicspecial from '../assets/json/cliniclist.json';
const clinicimage = require.context('../assets/img/clinic', false, /\.png$|\.jpg$/)
const clinicimage1 = require.context('../assets/img/category', false, /\.png$|\.jpg$/)
const clinicimage2 = require.context('../assets/img', false, /\.png$|\.jpg$/)
const clinicimage3 = require.context('../assets/img/doctors', false, /\.png$|\.jpg$/)
export default {
  components: {
       Carousel,
     Navigation,
    Slide,
  },
   data() {
        return {
        	clinic: clinic,
        	meeting: meeting,
        	blog: blog,
        	clinicspecial: clinicspecial,
            breakpoints: {
                // 700px and up
                700: {
                    itemsToShow: 3.5,
                    itemsToScroll: 1,

                },
                // 1024 and up
                1024: {
                    itemsToShow: 5,
                    itemsToScroll: 1,
                },
            },
             breakpoints3: {
                // 700px and up
                700: {
                    itemsToShow: 3.5,
                    itemsToScroll: 1,

                },
                // 1024 and up
                1024: {
                    itemsToShow: 4,
                    itemsToScroll: 1,
                },
            },
             breakpoints1: {
             	 320: {
                    itemsToShow: 1,
                    itemsToScroll: 1,

                },
                // 700px and up
                700: {
                    itemsToShow: 3.5,
                    itemsToScroll: 1,

                },
                // 1024 and up
                1024: {
                    itemsToShow: 4,
                    itemsToScroll: 1,
                },
            },
            breakpoints2: {
             	 320: {
                    itemsToShow: 1,
                    itemsToScroll: 1,

                },
                // 700px and up
                700: {
                    itemsToShow: 3.5,
                    itemsToScroll: 1,

                },
                // 1024 and up
                1024: {
                    itemsToShow: 4,
                    itemsToScroll: 1,
                },
            },
        };
    },
    methods: {
        loadImg(imgPath, value) {
            if(value == 1) {
                return clinicimage('./' + imgPath).default
            } if(value == 2) {
                return clinicimage1('./' + imgPath).default
            } if(value == 3) {
                return clinicimage2('./' + imgPath).default
            } else {
                return clinicimage3('./' + imgPath).default
            }
        },
    },
        mounted() {

    	},

}
</script>