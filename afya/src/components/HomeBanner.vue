<template>
<!-- Home Banner -->
			<section class="section section-search" v-if="currentpath == 'index' || currentpath == 'index-page'">
				<div class="container-fluid">
					<div class="banner-wrapper">
						<div class="banner-header text-center">
							<h1>Search Doctor, Make an Appointment</h1>
							<p>Discover the best doctors, clinic & hospital the city nearest to you.</p>
						</div>
                         
						<!-- Search -->
						<div class="search-box">
							<form>
								<div class="form-group search-location">
									<input type="text" class="form-control" placeholder="Search Location">
									<span class="form-text">Based on your Location</span>
								</div>
								<div class="form-group search-info">
									<input type="text" class="form-control" placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc">
									<span class="form-text">Ex : Dental or Sugar Check up etc</span>
								</div>
								<button type="submit" class="btn btn-primary search-btn mt-0"><i class="fas fa-search"></i> <span>Search</span></button>
							</form>
						</div>
						<!-- /Search -->
						
					</div>
				</div>
			</section>
			<!-- /Home Banner -->


		<section class="section section-search-2" v-else-if="currentpath == 'index-2'">
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<img src="../assets/img/banner-1.png" class="img-fluid search-img" alt="" >
					</div>
					<div class="col-md-6 search-doctor">
						<div class="search-area bg-white">
							<h2 class="text-center">Search Doctor, Make an Appointment</h2>
							<form class="search-input">
								<div class="row">
									<div class="col-12 col-md-12">
										<div class="form-group">
											<label>Location</label>
											<input type="text" class="form-control" value="">
										</div>
									</div>
									<div class="col-12 col-md-12">
										<div class="form-group">
											<label>Gender</label>
											<select class="form-control">
												<option>Male</option>
												<option>Fe Male</option>
											</select>
										</div>
									</div>
									<div class="col-12 col-md-12">
										<div class="form-group">
											<label>Department</label>
											<select class="form-control">
												<option>Surgen</option>
												<option>Cardiologist</option>
												<option>Gynacologist</option>
											</select>
										</div>
									</div>
								</div>
								<div class="submit-section">
									<button type="submit" class="btn btn-primary search-btn submit-btn">Search</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section id="home" class="divider" v-else-if="currentpath == 'index-3'">
			<div class="container-fluid p-0">
			<!--- slider ---->
				<div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel" data-interval="2500"> 
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img class="d-block w-100" src="../assets/img/slider/slider-1.jpg" alt="First slide">
						<div class="carousel-caption d-none d-md-block">
							<span>We Provide Solution</span>
							<h2>To stressless Life</h2>
							<p>People who are more perfectionist are most likely to be depressed,<br>Because they stress themselves out so much.</p>
						</div>
					</div>
					<div class="carousel-item">
						<img class="d-block w-100" src="../assets/img/slider/slider-2.jpg" alt="Second slide">
						<div class="carousel-caption d-none d-md-block">
							<span>We Provide Solution</span>
							<h2>Health Care Solution</h2>
							<p>Every day we bring hope to millions of children in the world's<br>  hardest places as a sign of God's unconditional love.</p>
						</div>
					</div>
					<div class="carousel-item">
						<img class="d-block w-100" src="../assets/img/slider/slider-3.jpg" alt="Third slide">
						<div class="carousel-caption d-none d-md-block">
							<span>We Provide total</span>
							<h2>Personalised care</h2>
							<p>People who are more perfectionist are most likely to be depressed,<br>Because they stress themselves out so much.</p>
						</div>
					</div>
				</div>
				<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="sr-only">Previous</span>
				</a>
				<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="sr-only">Next</span>
				</a>
				</div>
				<!--- /slider ---->
				<!-- Search -->
				<div class="banner-wrapper">
					<div class="search-box search-box-3">
						<form>
							<div class="form-group search-location">
								<input type="text" class="form-control" placeholder="Search Location">
							</div>
							<div class="form-group search-info">
								<input type="text" class="form-control" placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc">
							</div>
							<button @click="searchPath" class="btn btn-primary search-btn btn-search mt-0"><i class="fas fa-search"></i>  <span>Search</span>
							</button>
						</form>
					</div>
				</div>
				<!-- /Search -->
			</div>
		</section>
		
</template>

<script>
export default {

	computed: {
		currentpath() {
			return this.$route.name;
		}
	},
	 methods: {
		searchPath() {
			this.$router.push('/doctor/search')
		}
    },
}
</script>