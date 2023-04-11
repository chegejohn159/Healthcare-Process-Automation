<template>
	<div class="main-wrapper">
		<layout-header4></layout-header4>


<!-- Home Banner -->
			<section class="section-search-3">
				<div class="container">
					<div class="banner-info">
						<div class="row align-items-center">
							<div class="col-lg-4">
								<div class="header-banner">
									<h2>Search Doctor, <br> <span class="header-highlight">Make an Appointment</span></h2>
									<p>Discover the best doctors, clinic & hospital the city nearest to you.</p>
								</div>
							</div>
							<div class="col-lg-8">
								<div class="doctor-search">
									<div class="doctor-form">
										<form action="#" class="doctor-search-form trans">
											<div class="row">
												<div class="col-md-6">
													<div class="form-group">
														<div class="form-custom">
															<input type="text" class="form-control" value="" placeholder="Search Location">
															<i class="far fa-compass"></i>
														</div>
													</div>
												</div>
												<div class="col-md-6">
													<div class="form-group">
														<div class="form-custom">
															<input type="text" class="form-control" value="" placeholder="Gender">
															<i class="far fa-smile"></i>
														</div>
													</div>
												</div>
												<div class="col-md-7">
													<div class="form-group">
														<div class="form-custom">
															<input type="text" class="form-control" value="" placeholder="Department">
															<i class="fas fa-user-check"></i>
														</div>
													</div>
												</div>
												<div class="col-md-5">
													<router-link to="/doctor/search" class="btn banner-btn">MAKE APPOINTMENT</router-link>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- /Home Banner -->
			<!-- category select-->
			<section class="doctor-category">
				<div class="container">
					<div class="row">
						<div class="col-md-4">
							<div class="pop-box">
								<div class="top-section">
									<div class="cat-icon">
										<i class="fas fa-procedures"></i>
									</div>
								</div>
								<div class="body-section">
									<h3>Visit a Doctor</h3>
									<p>250 +  Doctors</p>
									<router-link to="/patient/booking" class="btn book-btn" tabindex="0">Book Now</router-link>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="pop-box">
								<div class="top-section two">
									<div class="cat-icon">
										<i class="fas fa-plus-square"></i>
									</div>
								</div>
								<div class="body-section">
									<h3>Find a Pharmacy</h3>
									<p>2560 +  Pharmacy</p>
									<router-link to="/patient/booking" class="btn book-btn" tabindex="0">Book Now</router-link>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="pop-box">
								<div class="top-section three">
									<div class="cat-icon">
										<i class="fas fa-city"></i>
									</div>
								</div>
								<div class="body-section">
									<h3>Find a Lab</h3>
									<p>250 +  Testing Labs</p>
									<router-link to="/patient/booking" class="btn book-btn" tabindex="0">Book Now</router-link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- /category select-->

			<!-- Clinic Section -->
			<section class="clinic-specialities">
				<div class="container">
					<div class="section-header-three text-center">
						<h2>Clinic & Specialities</h2>
						<p class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
					<div class="row">
						<div class="col-lg-3 col-md-4">
							<div class="special-box text-center">
								<div class="special-body">
									<img src="../assets/img/shapes/spec.png" alt=""/>
									<h4>Orthopedic</h4>
									<router-link to="/patient/booking" class="spc-book">Book now <i class="fas fa-caret-right"></i> </router-link>
								</div>
								<div class="row row-sm special-footer">
									<div class="col-6 text-left">
										<a href="#" class="doc-count">124 <span>Doctors</span></a>
									</div>
									<div class="col-6 text-right">
										<a href="#" class="clin-count">24 <span>Clinics</span></a>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-4">
							<div class="special-box text-center">
								<div class="special-body">
									<img src="../assets/img/shapes/spec-01.png" alt=""/>
									<h4>Laboratry</h4>
									<router-link to="/patient/booking" class="spc-book">Book now <i class="fas fa-caret-right"></i> </router-link>
								</div>
								<div class="row row-sm special-footer">
									<div class="col-6 text-left">
										<a href="#" class="doc-count">124 <span>Doctors</span></a>
									</div>
									<div class="col-6 text-right">
										<a href="#" class="clin-count">24 <span>Clinics</span></a>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-4">
							<div class="special-box text-center">
								<div class="special-body">
									<img src="../assets/img/shapes/spec-02.png" alt=""/>
									<h4>Neurology</h4>
									<router-link to="/patient/booking" class="spc-book">Book now <i class="fas fa-caret-right"></i> </router-link>
								</div>
								<div class="row row-sm special-footer">
									<div class="col-6 text-left">
										<a href="#" class="doc-count">124 <span>Doctors</span></a>
									</div>
									<div class="col-6 text-right">
										<a href="#" class="clin-count">24 <span>Clinics</span></a>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-4">
							<div class="special-box text-center">
								<div class="special-body">
									<img src="../assets/img/shapes/spec-03.png" alt=""/>
									<h4>Cardiology</h4>
									<router-link to="/patient/booking" class="spc-book">Book now <i class="fas fa-caret-right"></i> </router-link>
								</div>
								<div class="row row-sm special-footer">
									<div class="col-6 text-left">
										<a href="#" class="doc-count">124 <span>Doctors</span></a>
									</div>
									<div class="col-6 text-right">
										<a href="#" class="clin-count">24 <span>Clinics</span></a>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-4">
							<div class="special-box text-center">
								<div class="special-body">
									<img src="../assets/img/shapes/spec-04.png" alt=""/>
									<h4>MRI Scans</h4>
									<router-link to="/patient/booking" class="spc-book">Book now <i class="fas fa-caret-right"></i> </router-link>
								</div>
								<div class="row row-sm special-footer">
									<div class="col-6 text-left">
										<a href="#" class="doc-count">124 <span>Doctors</span></a>
									</div>
									<div class="col-6 text-right">
										<a href="#" class="clin-count">24 <span>Clinics</span></a>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-4">
							<div class="special-box text-center">
								<div class="special-body">
									<img src="../assets/img/shapes/spec-05.png" alt=""/>
									<h4>Primary Checkup</h4>
									<router-link to="/patient/booking" class="spc-book">Book now <i class="fas fa-caret-right"></i> </router-link>
								</div>
								<div class="row row-sm special-footer">
									<div class="col-6 text-left">
										<a href="#" class="doc-count">124 <span>Doctors</span></a>
									</div>
									<div class="col-6 text-right">
										<a href="#" class="clin-count">24 <span>Clinics</span></a>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-4">
							<div class="special-box text-center">
								<div class="special-body">
									<img src="../assets/img/shapes/spec-06.png" alt=""/>
									<h4>Testing</h4>
									<router-link to="/patient/booking" class="spc-book">Book now <i class="fas fa-caret-right"></i> </router-link>
								</div>
								<div class="row row-sm special-footer">
									<div class="col-6 text-left">
										<a href="#" class="doc-count">124 <span>Doctors</span></a>
									</div>
									<div class="col-6 text-right">
										<a href="#" class="clin-count">24 <span>Clinics</span></a>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-4">
							<div class="special-box text-center">
								<div class="special-body">
									<img src="../assets/img/shapes/spec-07.png" alt=""/>
									<h4>Dentist</h4>
									<router-link to="/patient/booking" class="spc-book">Book now <i class="fas fa-caret-right"></i> </router-link>
								</div>
								<div class="row row-sm special-footer">
									<div class="col-6 text-left">
										<a href="#" class="doc-count">124 <span>Doctors</span></a>
									</div>
									<div class="col-6 text-right">
										<a href="#" class="clin-count">24 <span>Clinics</span></a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="view-all-more text-center">
						<router-link to="/doctor/profile" class="btn btn-primary">View More</router-link>
					</div>
				</div>
			</section>
			<!-- /Clinic Section -->

			<!-- browse speciality-->
			<section class="browse-section">
				<div class="container">
					<div class="section-header-three text-center">
						<h2>Browse by Specialities</h2>
						<p class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
					<div class="row">
						<div class="col-lg-2 col-md-3">
							<div class="brower-box">
								<div>
									<div class="brower-img">
										<img src="../assets/img/shapes/bro-01.png" alt=""/>
									</div>
									<h4>Urology</h4>
									<p>124 <span>Doctors</span></p>
								</div>
							</div>
						</div>
						<div class="col-lg-2 col-md-3">
							<div class="brower-box">
								<div>
									<div class="brower-img">
										<img src="../assets/img/shapes/bro-02.png" alt=""/>
									</div>
									<h4>Neurology</h4>
									<p>124 <span>Doctors</span></p>
								</div>
							</div>
						</div>
						<div class="col-lg-2 col-md-3">
							<div class="brower-box">
								<div>
									<div class="brower-img">
										<img src="../assets/img/shapes/bro-03.png" alt=""/>
									</div>
									<h4>Orthopedic</h4>
									<p>124 <span>Doctors</span></p>
								</div>
							</div>
						</div>
						<div class="col-lg-2 col-md-3">
							<div class="brower-box">
								<div>
									<div class="brower-img">
										<img src="../assets/img/shapes/bro-04.png" alt=""/>
									</div>
									<h4>Cardiologist</h4>
									<p>124 <span>Doctors</span></p>
								</div>
							</div>
						</div>
						<div class="col-lg-2 col-md-3">
							<div class="brower-box">
								<div>
									<div class="brower-img">
										<img src="../assets/img/shapes/bro-01.png" alt=""/>
									</div>
									<h4>Dentist</h4>
									<p>124 <span>Doctors</span></p>
								</div>
							</div>
						</div>
						<div class="col-lg-2 col-md-3">
							<div class="brower-box">
								<div>
									<div class="brower-img">
										<img src="../assets/img/shapes/bro-05.png" alt=""/>
									</div>
									<h4>Heart surgery</h4>
									<p>124 <span>Doctors</span></p>
								</div>
							</div>
						</div>
						<div class="col-lg-2 col-md-3">
							<div class="brower-box">
								<div>
									<div class="brower-img">
										<img src="../assets/img/shapes/bro-01.png" alt=""/>
									</div>
									<h4>Urology</h4>
									<p>124 <span>Doctors</span></p>
								</div>
							</div>
						</div>
						<div class="col-lg-2 col-md-3">
							<div class="brower-box">
								<div>
									<div class="brower-img">
										<img src="../assets/img/shapes/bro-02.png" alt=""/>
									</div>
									<h4>Neurology</h4>
									<p>124 <span>Doctors</span></p>
								</div>
							</div>
						</div>
						<div class="col-lg-2 col-md-3">
							<div class="brower-box">
								<div>
									<div class="brower-img">
										<img src="../assets/img/shapes/bro-03.png" alt=""/>
									</div>
									<h4>Orthopedic</h4>
									<p>124 <span>Doctors</span></p>
								</div>
							</div>
						</div>
						<div class="col-lg-2 col-md-3">
							<div class="brower-box">
								<div>
									<div class="brower-img">
										<img src="../assets/img/shapes/bro-04.png" alt=""/>
									</div>
									<h4>Cardiologist</h4>
									<p>124 <span>Doctors</span></p>
								</div>
							</div>
						</div>
						<div class="col-lg-2 col-md-3">
							<div class="brower-box">
								<div>
									<div class="brower-img">
										<img src="../assets/img/shapes/bro-01.png" alt=""/>
									</div>
									<h4>Dentist</h4>
									<p>124 <span>Doctors</span></p>
								</div>
							</div>
						</div>
						<div class="col-lg-2 col-md-3">
							<div class="brower-box">
								<div>
									<div class="brower-img">
										<img src="../assets/img/shapes/bro-05.png" alt=""/>
									</div>
									<h4>Heart surgery</h4>
									<p>124 <span>Doctors</span></p>
								</div>
							</div>
						</div>
					</div>
					<div class="view-all-more text-center">
						<router-link to="/doctor/profile" class="btn btn-primary">View More</router-link>
					</div>
				</div>
			</section>
			<!-- /browse speciality-->

			<!-- Doctor Section-->
			<section class="doctor-divison">
				<div class="d-flex">
					<div class="doc-background">
						<h3>ARE YOU A DOCTOR?</h3>
						<p>The service allows you to get maximum visibility online and to manage appointments and contacts coming from the site, in a simple and fast way.</p>
						<router-link to="/patient/booking" class="doc-bok-btn">Book Now</router-link>
					</div>
					<div class="pat-background">
						<h3>ARE YOU A PATIENT?</h3>
						<p>The service allows you to get maximum visibility online and to manage appointments and contacts coming from the site, in a simple and fast way.</p>
						<router-link to="/patient/booking" class="doc-bok-btn">Book Now</router-link>
					</div>
				</div>
			</section>
			<!-- /Doctor Section-->

			<!-- Book Doctors-->
			<section class="book-section">
				<div class="container">
					<div class="section-header-three text-center">
						<h2>Book Our Best Doctor</h2>
						<p class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
					<div class="row">
						<div class="col-lg-3 col-md-6">
							<div class="book-best-doctors">
								<div class="book-header">
									<router-link to="/doctor/profile"><img src="../assets/img/doctors/doctor-01.jpg" alt="" class="img-fluid"></router-link>
									<div class="img-overlay">
										<i class="fas fa-star"></i>
									</div>
								</div>
								<div class="doctors-body">
									<div class="inner-section">
										<span class="float-left">PSICOLOGIST</span>
										<div class="rating text-right">
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star"></i>
											<span class="d-inline-block average-ratings">3.5</span>
										</div>
										<router-link to="/doctor/profile"><h4>Dr. Ruby Perrin</h4></router-link>
										<p>MBBS, MD - General Medicine, DNB - Cardiology</p>
									</div>
									<div class="row row-sm loc-details">
										<div class="col-6">
											<div class="d-flex align-items-center">
												<a href="javascript:void(0);">
													<img src="../assets/img/shapes/map-plus.png" alt="" />
												</a>
												<a href="javascript:void(0);">
													<span class="available-info">Location</span>
													<span class="data-info">Newyork, USA</span>
												</a>
											</div>
										</div>
										<div class="col-6">
											<div class="d-flex align-items-center">
												<a href="javascript:void(0);">
													<img src="../assets/img/shapes/alarm.png" alt="" />
												</a>
												<a href="javascript:void(0);">
													<span class="available-info">Available on</span>
													<span class="data-info">Fri, 22 March</span>
												</a>
											</div>
										</div>
										<div class="col-6">
											<div class="d-flex align-items-center">
												<a href="javascript:void(0);">
													<img src="../assets/img/shapes/consult.png" alt="" />
												</a>
												<a href="javascript:void(0);">
													<span class="available-info">Consulting</span>
													<span class="data-info">500+ Patients</span>
												</a>
											</div>
										</div>
										<div class="col-6">
											<div class="d-flex align-items-center">
												<a href="javascript:void(0);">
													<img src="../assets/img/shapes/exper.png" alt="" />
												</a>
												<a href="javascript:void(0);">
													<span class="available-info">EXPERIENCE</span>
													<span class="data-info">25+ Years</span>
												</a>
											</div>
										</div>
									</div>
									<div class="row row-sm align-items-center p-3">
										<div class="col-6">
											<router-link to="/doctor/profile" class="amt-txt" tabindex="0">$50 - $100</router-link>
										</div>
										<div class="col-6">
											<router-link to="/patient/booking" class="btn book-btn" tabindex="0">Book Now</router-link>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-6">
							<div class="book-best-doctors">
								<div class="book-header">
									<router-link to="/doctor/profile"><img src="../assets/img/doctors/doctor-02.jpg" alt="" class="img-fluid"></router-link>
									<div class="img-overlay">
										<i class="fas fa-star"></i>
									</div>
								</div>
								<div class="doctors-body">
									<div class="inner-section">
										<span class="float-left">PSICOLOGIST</span>
										<div class="rating text-right">
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star"></i>
											<span class="d-inline-block average-ratings">3.5</span>
										</div>
										<router-link to="/doctor/profile"><h4>Dr. Darren Elder</h4></router-link>
										<p>MBBS, MD - General Medicine, DNB - Cardiology</p>
									</div>
									<div class="row row-sm loc-details">
										<div class="col-6">
											<div class="d-flex align-items-center">
												<a href="javascript:void(0);">
													<img src="../assets/img/shapes/map-plus.png" alt="" />
												</a>
												<a href="javascript:void(0);">
													<span class="available-info">Location</span>
													<span class="data-info">Newyork, USA</span>
												</a>
											</div>
										</div>
										<div class="col-6">
											<div class="d-flex align-items-center">
												<a href="javascript:void(0);">
													<img src="../assets/img/shapes/alarm.png" alt="" />
												</a>
												<a href="javascript:void(0);">
													<span class="available-info">Available on</span>
													<span class="data-info">Fri, 22 March</span>
												</a>
											</div>
										</div>
										<div class="col-6">
											<div class="d-flex align-items-center">
												<a href="javascript:void(0);">
													<img src="../assets/img/shapes/consult.png" alt="" />
												</a>
												<a href="javascript:void(0);">
													<span class="available-info">Consulting</span>
													<span class="data-info">500+ Patients</span>
												</a>
											</div>
										</div>
										<div class="col-6">
											<div class="d-flex align-items-center">
												<a href="javascript:void(0);">
													<img src="../assets/img/shapes/exper.png" alt="" />
												</a>
												<a href="javascript:void(0);">
													<span class="available-info">EXPERIENCE</span>
													<span class="data-info">25+ Years</span>
												</a>
											</div>
										</div>
									</div>
									<div class="row row-sm align-items-center p-3">
										<div class="col-6">
											<router-link to="/doctor/profile" class="amt-txt" tabindex="0">$50 - $100</router-link>
										</div>
										<div class="col-6">
											<router-link to="/patient/booking" class="btn book-btn" tabindex="0">Book Now</router-link>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-6">
							<div class="book-best-doctors">
								<div class="book-header">
									<router-link to="/doctor/profile"><img src="../assets/img/doctors/doctor-03.jpg" alt="" class="img-fluid"></router-link>
									<div class="img-overlay">
										<i class="fas fa-star"></i>
									</div>
								</div>
								<div class="doctors-body">
									<div class="inner-section">
										<span class="float-left">PSICOLOGIST</span>
										<div class="rating text-right">
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star"></i>
											<span class="d-inline-block average-ratings">3.5</span>
										</div>
										<router-link to="/doctor/profile"><h4>Dr. Deborah Angel</h4></router-link>
										<p>MBBS, MD - General Medicine, DNB - Cardiology</p>
									</div>
									<div class="row row-sm loc-details">
										<div class="col-6">
											<div class="d-flex align-items-center">
												<a href="javascript:void(0);">
													<img src="../assets/img/shapes/map-plus.png" alt="" />
												</a>
												<a href="javascript:void(0);">
													<span class="available-info">Location</span>
													<span class="data-info">Newyork, USA</span>
												</a>
											</div>
										</div>
										<div class="col-6">
											<div class="d-flex align-items-center">
												<a href="javascript:void(0);">
													<img src="../assets/img/shapes/alarm.png" alt="" />
												</a>
												<a href="javascript:void(0);">
													<span class="available-info">Available on</span>
													<span class="data-info">Fri, 22 March</span>
												</a>
											</div>
										</div>
										<div class="col-6">
											<div class="d-flex align-items-center">
												<a href="javascript:void(0);">
													<img src="../assets/img/shapes/consult.png" alt="" />
												</a>
												<a href="javascript:void(0);">
													<span class="available-info">Consulting</span>
													<span class="data-info">500+ Patients</span>
												</a>
											</div>
										</div>
										<div class="col-6">
											<div class="d-flex align-items-center">
												<a href="javascript:void(0);">
													<img src="../assets/img/shapes/exper.png" alt="" />
												</a>
												<a href="javascript:void(0);">
													<span class="available-info">EXPERIENCE</span>
													<span class="data-info">25+ Years</span>
												</a>
											</div>
										</div>
									</div>
									<div class="row row-sm align-items-center p-3">
										<div class="col-6">
											<router-link to="/doctor/profile" class="amt-txt" tabindex="0">$50 - $100</router-link>
										</div>
										<div class="col-6">
											<router-link to="/patient/booking" class="btn book-btn" tabindex="0">Book Now</router-link>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-6">
							<div class="book-best-doctors">
								<div class="book-header">
									<router-link to="/doctor/profile"><img src="../assets/img/doctors/doctor-04.jpg" alt="" class="img-fluid"></router-link>
									<div class="img-overlay">
										<i class="fas fa-star"></i>
									</div>
								</div>
								<div class="doctors-body">
									<div class="inner-section">
										<span class="float-left">PSICOLOGIST</span>
										<div class="rating text-right">
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star"></i>
											<span class="d-inline-block average-ratings">3.5</span>
										</div>
										<router-link to="/doctor/profile"><h4>Dr. Sofia Brient</h4></router-link>
										<p>MBBS, MD - General Medicine, DNB - Cardiology</p>
									</div>
									<div class="row row-sm loc-details">
										<div class="col-6">
											<div class="d-flex align-items-center">
												<a href="javascript:void(0);">
													<img src="../assets/img/shapes/map-plus.png" alt="" />
												</a>
												<a href="javascript:void(0);">
													<span class="available-info">Location</span>
													<span class="data-info">Newyork, USA</span>
												</a>
											</div>
										</div>
										<div class="col-6">
											<div class="d-flex align-items-center">
												<a href="javascript:void(0);">
													<img src="../assets/img/shapes/alarm.png" alt="" />
												</a>
												<a href="javascript:void(0);">
													<span class="available-info">Available on</span>
													<span class="data-info">Fri, 22 March</span>
												</a>
											</div>
										</div>
										<div class="col-6">
											<div class="d-flex align-items-center">
												<a href="javascript:void(0);">
													<img src="../assets/img/shapes/consult.png" alt="" />
												</a>
												<a href="javascript:void(0);">
													<span class="available-info">Consulting</span>
													<span class="data-info">500+ Patients</span>
												</a>
											</div>
										</div>
										<div class="col-6">
											<div class="d-flex align-items-center">
												<a href="javascript:void(0);">
													<img src="../assets/img/shapes/exper.png" alt="" />
												</a>
												<a href="javascript:void(0);">
													<span class="available-info">EXPERIENCE</span>
													<span class="data-info">25+ Years</span>
												</a>
											</div>
										</div>
									</div>
									<div class="row row-sm align-items-center p-3">
										<div class="col-6">
											<router-link to="/doctor/profile" class="amt-txt" tabindex="0">$50 - $100</router-link>
										</div>
										<div class="col-6">
											<router-link to="/patient/booking" class="btn book-btn" tabindex="0">Book Now</router-link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="view-all-more text-center">
						<router-link to="/doctor/profile" class="btn btn-primary">View More</router-link>
					</div>
				</div>
			</section>
			<!-- /Book Doctors-->

			<!-- Blogs -->
			<section class="latest-blog">
				<div class="container">
					<div class="section-header-three text-center">
						<h2>Our Latest Blogs</h2>
						<p class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
					<div class="row">
						<div class="col-md-6 col-lg-4">
							<div class="blog-wrap">
								<div class="image-holder">
									<router-link to="/doctor/blog-details">
										<img class="img-fluid" src="../assets/img/shapes/blog-img01.jpg" alt="Post Image">
									</router-link>
								</div>
								<div class="blog-wrap-body">
									<h3><router-link to="/doctor/blog-details">In this hospital there are special surgeons</router-link></h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
									ut labore et..</p>
									<div class="blog-footer">
										<div class="row row-sm align-items-center">
											<div class="col-6 text-left">
												<router-link to="/doctor/blog-details" class="read-txt" tabindex="0">Read More <i class="fas fa-long-arrow-alt-right"></i></router-link>
											</div>
											<div class="col-6 text-right">
												<a href="javascript:void(0);" class="cal-txt" tabindex="0"><i class="far fa-calendar-alt"></i> Jan 03, 2020</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6 col-lg-4">
							<div class="blog-wrap">
								<div class="image-holder">
									<router-link to="/doctor/blog-details">
										<img class="img-fluid" src="../assets/img/shapes/blog-img02.jpg" alt="Post Image">
									</router-link>
								</div>
								<div class="blog-wrap-body">
									<h3><router-link to="/doctor/blog-details">World AIDS Day, designated on 1 December</router-link></h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
									ut labore et..</p>
									<div class="blog-footer">
										<div class="row row-sm align-items-center">
											<div class="col-6 text-left">
												<router-link to="/doctor/blog-details" class="read-txt" tabindex="0">Read More <i class="fas fa-long-arrow-alt-right"></i></router-link>
											</div>
											<div class="col-6 text-right">
												<a href="javascript:void(0);" class="cal-txt" tabindex="0"><i class="far fa-calendar-alt"></i> Jan 03, 2020</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6 col-lg-4">
							<div class="blog-wrap">
								<div class="image-holder">
									<router-link to="/doctor/blog-details">
										<img class="img-fluid" src="../assets/img/shapes/blog-img03.jpg" alt="Post Image">
									</router-link>
								</div>
								<div class="blog-wrap-body">
									<h3><router-link to="/doctor/blog-details">More then 80 clinical trials launch to test coronavirus</router-link></h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
									ut labore et..</p>
									<div class="blog-footer">
										<div class="row row-sm align-items-center">
											<div class="col-6 text-left">
												<router-link to="/doctor/blog-details" class="read-txt" tabindex="0">Read More <i class="fas fa-long-arrow-alt-right"></i></router-link>
											</div>
											<div class="col-6 text-right">
												<a href="javascript:void(0);" class="cal-txt" tabindex="0"><i class="far fa-calendar-alt"></i> Jan 03, 2020</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- /Blogs -->


		<layout-footer2></layout-footer2>
	</div>
</template>
<script>

export default {

        mounted() {
        	if($('.owl-carousel.clinics').length > 0) {
		$('.owl-carousel.clinics').owlCarousel({
			loop:true,
			margin:15,
			dots: false,
			nav:true,
			navContainer: '.slide-nav-1',
			navText: [ '<i class="fas fa-chevron-left custom-arrow"></i>', '<i class="fas fa-chevron-right custom-arrow"></i>' ],
			responsive:{
				0:{
					items:1
				},
				500:{
					items:1
				},
				768:{
					items:3
				},
				1000:{
					items:4
				},
				1300:{
					items:6
				}
			}
		})
	}
	if($('.owl-carousel.our-doctors').length > 0) {
		$('.owl-carousel.our-doctors').owlCarousel({
			loop:true,
			margin:15,
			dots: false,
			nav:true,
			navContainer: '.slide-nav-2',
			navText: [ '<i class="fas fa-chevron-left custom-arrow"></i>', '<i class="fas fa-chevron-right custom-arrow"></i>' ],
			responsive:{
				0:{
					items:1
				},
				500:{
					items:1
				},
				768:{
					items:2
				},
				1000:{
					items:3
				},
				1300:{
					items:4
				}
			}
		})
	}
	if($('.owl-carousel.clinic-feature').length > 0) {
		$('.owl-carousel.clinic-feature').owlCarousel({
			loop:true,
			margin:15,
			dots: false,
			nav:true,
			navContainer: '.slide-nav-3',
			navText: [ '<i class="fas fa-chevron-left custom-arrow"></i>', '<i class="fas fa-chevron-right custom-arrow"></i>' ],
			responsive:{
				0:{
					items:1
				},
				500:{
					items:1
				},
				768:{
					items:3
				},
				1000:{
					items:4
				},
				1300:{
					items:5
				}
			}
		})
	}
	if($('.owl-carousel.blogs').length > 0) {
		$('.owl-carousel.blogs').owlCarousel({
			loop:true,
			margin:15,
			dots: false,
			nav:true,
			navContainer: '.slide-nav-4',
			navText: [ '<i class="fas fa-chevron-left custom-arrow"></i>', '<i class="fas fa-chevron-right custom-arrow"></i>' ],
			responsive:{
				0:{
					items:1
				},
				500:{
					items:1
				},
				768:{
					items:2
				},
				1000:{
					items:3
				},
				1300:{
					items:4
				}
			}
		})
	}

  //Home pharmacy slider
	if($('.dot-slider').length > 0) {
		$('.dot-slider').slick({
			dots: true,
			autoplay:false,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			responsive: [{
				breakpoint: 992,
					settings: {
						slidesToShow: 1
				  	}
			},
			{
				breakpoint: 800,
					settings: {
						slidesToShow: 1
				  	}
			},
			{
				breakpoint: 776,
					settings: {
						slidesToShow: 1
				  	}
			},
			{
				breakpoint: 567,
					settings: {
						slidesToShow: 1
					}
			}]
		});
	}
	//clinic slider
	if($('.clinic-slider').length > 0) {
		$('.clinic-slider').slick({
			dots: false,
			autoplay:false,
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			rows: 2,
			responsive: [{
				breakpoint: 992,
					settings: {
						slidesToShow: 3
				  	}
			},
			{
				breakpoint: 800,
					settings: {
						slidesToShow: 3
				  	}
			},
			{
				breakpoint: 776,
					settings: {
						slidesToShow: 3
				  	}
			},
			{
				breakpoint: 567,
					settings: {
						slidesToShow: 1
					}
			}]
		});
	}
	//browse slider
	if($('.browse-slider').length > 0) {
		$('.browse-slider').slick({
			dots: false,
			autoplay:false,
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			rows: 2,
			responsive: [{
				breakpoint: 992,
					settings: {
						slidesToShow: 3
				  	}
			},
			{
				breakpoint: 800,
					settings: {
						slidesToShow: 3
				  	}
			},
			{
				breakpoint: 776,
					settings: {
						slidesToShow: 3
				  	}
			},
			{
				breakpoint: 567,
					settings: {
						slidesToShow: 1
					}
			}]
		});
	}

//book doctor slider
	if($('.book-slider').length > 0) {
		$('.book-slider').slick({
			dots: false,
			autoplay:false,
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [{
				breakpoint: 992,
					settings: {
						slidesToShow: 3
				  	}
			},
			{
				breakpoint: 800,
					settings: {
						slidesToShow: 3
				  	}
			},
			{
				breakpoint: 776,
					settings: {
						slidesToShow: 2
				  	}
			},
			{
				breakpoint: 567,
					settings: {
						slidesToShow: 1
					}
			}]
		});
	}

	//avalable features slider
	if($('.aval-slider').length > 0) {
		$('.aval-slider').slick({
			dots: false,
			autoplay:false,
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [{
				breakpoint: 992,
					settings: {
						slidesToShow: 2
				  	}
			},
			{
				breakpoint: 800,
					settings: {
						slidesToShow: 2
				  	}
			},
			{
				breakpoint: 776,
					settings: {
						slidesToShow: 2
				  	}
			},
			{
				breakpoint: 567,
					settings: {
						slidesToShow: 1
					}
			}]
		});
	}

    	},

}
</script>