<template>
    <div class="main-wrapper">
        <layout-header2></layout-header2>
        <breadcrumb></breadcrumb>
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

							<div class="row">
								<div class="col-md-12">
									<div class="card dash-card">
										<div class="card-body">
											<div class="row">
												<div class="col-md-12 col-lg-4">
													<div class="dash-widget dct-border-rht">
														<div class="circle-bar circle-bar1">
															<div class="circle-graph1" data-percent="0">
																<img src="../../assets/img/icon-01.png" class="img-fluid" alt="patient">
															</div>
														</div>
														<div class="dash-widget-info">
															<h6>Total Patient</h6>
															<h3>0</h3>
															<p class="text-muted">All Today</p>
														</div>
													</div>
												</div>

												<div class="col-md-12 col-lg-4">
													<div class="dash-widget dct-border-rht">
														<div class="circle-bar circle-bar2">
															<div class="circle-graph2" data-percent="0">
																<img src="../../assets/img/icon-02.png" class="img-fluid" alt="Patient">
															</div>
														</div>
														<div class="dash-widget-info">
															<h6>Today Accepted</h6>
															<h3>0</h3>
															<p class="text-muted">Till Today</p>

														</div>
													</div>
												</div>

												<div class="col-md-12 col-lg-4">
													<div class="dash-widget">
														<div class="circle-bar circle-bar3">
															<div class="circle-graph3" data-percent="0">
																<img src="../../assets/img/icon-03.png" class="img-fluid" alt="Patient">
															</div>
														</div>
														<div class="dash-widget-info">
															<h6>Appoinments</h6>
															<h3>0</h3>
																<p class="text-muted">Till Today</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class="row">
								<div class="col-md-12">
									<h4 class="mb-4">Patient Appoinment</h4>
									<div class="appointment-tab">

										<!-- Appointment Tab -->
										<ul  class="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
											<li class="nav-item">
												<a class="nav-link active" href="#upcoming-appointments" data-toggle="tab">Appoinment Appoinments</a>
											</li>
										</ul>
										<!-- /Appointment Tab -->

										<div class="tab-content" v-if="patientsAppoinment.length">

											<!-- Upcoming Appointment Tab -->
											<div class="tab-pane show active" id="upcoming-appointments">
												<div  class="card card-table mb-0">
													<div class="card-body">
														<div class="table-responsive">
															<table class="table table-hover table-center mb-0">
																<thead>
																	<tr>
																		<th>Patient Name</th>
																		<th>Appt Date</th>
																		<th>Purpose</th>
																		<th>Type</th>
																		<th class="text-center">Paid Amount</th>
																		<th></th>
																	</tr>
																</thead>
																<tbody>

																	<tr v-for="(patient, index) in patientsAppoinment" :key="index">
																		<td>
																			<h2 class="table-avatar">
																				<router-link to="/doctor/patient-profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="../../assets/img/patients/patient.jpg" alt="User Image"></router-link>
																				<router-link to="/doctor/patient-profile">{{patient.name}} <span>{{patient.patient_id}}</span></router-link>
																			</h2>
																		</td>
																		<td>{{patient.appt_date}} <span class="d-block text-info">{{patient.appt_time}}</span></td>
																		<td>{{patient.purpose}}</td>
																		<td>{{patient.type}}</td>
																		<td class="text-center">{{patient.paid_amount}}</td>
																		<td class="text-right">
																			<div class="table-action">
																				<a v-on:click="viewAppt(patient.patient_id)"  class="btn btn-sm bg-info-light">
																					<i class="far fa-eye"></i> View
																				</a>

																				<a v-on:click="acceptAppt(patient.patient_id)" href="javascript:void(0);" class="btn btn-sm bg-success-light">
																					<i class="fas fa-check"></i> Accept
																				</a>
																				<a v-on:click="rejectAppt(patient.patient_id)" href="javascript:void(0);" class="btn btn-sm bg-danger-light">
																					<i class="fas fa-times"></i> Cancel
																				</a>
																			</div>
																		</td>
																	</tr>

																</tbody>
															</table>
														</div>
													</div>
												</div>
											</div>
											<!-- /Upcoming Appointment Tab -->


										</div>

										<div class="patients-section mt-4" v-else>
											<h4 class="empty-patient-list">Patient list empty</h4>
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
			<!-- /Page Content -->
		<layout-footer></layout-footer>
    </div>
</template>

<script>
import patientsAppoinment from '../../assets/json/doctor/upcomingpatients.json'
const images = require.context('../../assets/img/patients', false, /\.png$|\.jpg$/)

export default {
	data() {
		return {
			patientsAppoinment: [],
		}
	},
	methods:{
        loadImg(imgPath) {
            return images('./' + imgPath).default
        },
		viewAppt(patient_id){
			console.log('view', patient_id)
		},
		acceptAppt(patient_id){
			console.log('accepted', patient_id)
		},
		rejectAppt(patient_id){
			console.log('rejected', patient_id)
		}
    },
		mounted() {
		// Circle Progress Bar

	function animateElements() {
		$('.circle-bar1').each(function () {
			var elementPos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			var percent = $(this).find('.circle-graph1').attr('data-percent');
			var animate = $(this).data('animate');
			if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
				$(this).data('animate', true);
				$(this).find('.circle-graph1').circleProgress({
					value: percent / 100,
					size : 400,
					thickness: 30,
					fill: {
						color: '#da3f81'
					}
				});
			}
		});
		$('.circle-bar2').each(function () {
			var elementPos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			var percent = $(this).find('.circle-graph2').attr('data-percent');
			var animate = $(this).data('animate');
			if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
				$(this).data('animate', true);
				$(this).find('.circle-graph2').circleProgress({
					value: percent / 100,
					size : 400,
					thickness: 30,
					fill: {
						color: '#68dda9'
					}
				});
			}
		});
		$('.circle-bar3').each(function () {
			var elementPos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			var percent = $(this).find('.circle-graph3').attr('data-percent');
			var animate = $(this).data('animate');
			if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
				$(this).data('animate', true);
				$(this).find('.circle-graph3').circleProgress({
					value: percent / 100,
					size : 400,
					thickness: 30,
					fill: {
						color: '#1b5a90'
					}
				});
			}
		});
	}

	if($('.circle-bar').length > 0) {
		animateElements();
	}
	$(window).scroll(animateElements);
		 $(".progressresult").each(function() {
			const percentageToDegrees = (percentage) =>  {
				return percentage / 100 * 360
			}
			let value = $(this).attr('data-value');
			let left = $(this).find('.progress-left .progress-bar');
			let right = $(this).find('.progress-right .progress-bar');

			if (value > 0) {
				if (value <= 50) {
					right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
				} else {
					right.css('transform', 'rotate(180deg)')
					left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
				}
			}

  		})
	},
}
</script>

<style scoped>
.empty-patient-list {
	color: #86898b;
    font-size: 26px;
    font-weight: 500;
}
.patients-section {
	margin: auto;
    text-align-last: center;
}
</style>
