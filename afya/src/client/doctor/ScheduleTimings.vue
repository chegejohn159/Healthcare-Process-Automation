<template>
	<div>
		<div class="vld-parent">
		<loading v-model:active="isLoading"
		:can-cancel="false"
		:is-full-page="fullPage"
		/>
	</div>
    <div class="main-wrapper">
         <layout-header2></layout-header2>
         <breadcrumb3></breadcrumb3>
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
								<div class="col-sm-12">
									<div class="card">
										<div class="card-body">
											<h4 class="card-title">Schedule Timings</h4>
											<div class="profile-box">
												<!-- <div class="row">
													<div class="col-lg-4">
														<div class="form-group">
															<label>Timing Slot Duration</label>
															<select class="select form-control">
																<option>-</option>
																<option>15 mins</option>
																<option selected="selected">30 mins</option>
																<option>45 mins</option>
																<option>1 Hour</option>
															</select>
														</div>
													</div>
												</div> -->
												<div class="row">
													<div class="col-md-12">
														<div class="card schedule-widget mb-0">
															<!-- Schedule Header -->
															<div class="schedule-header">
																<!-- Schedule Nav -->
																<div class="schedule-nav">
																	<ul class="nav nav-tabs nav-justified">
																		<li class="nav-item">
																			<a class="nav-link" data-toggle="tab" href="#slot_sunday">Sunday</a>
																		</li>
																		<li class="nav-item">
																			<a class="nav-link active" data-toggle="tab" href="#slot_monday">Monday</a>
																		</li>
																		<li class="nav-item">
																			<a class="nav-link" data-toggle="tab" href="#slot_tuesday">Tuesday</a>
																		</li>
																		<li class="nav-item">
																			<a class="nav-link" data-toggle="tab" href="#slot_wednesday">Wednesday</a>
																		</li>
																		<li class="nav-item">
																			<a class="nav-link" data-toggle="tab" href="#slot_thursday">Thursday</a>
																		</li>
																		<li class="nav-item">
																			<a class="nav-link" data-toggle="tab" href="#slot_friday">Friday</a>
																		</li>
																		<li class="nav-item">
																			<a class="nav-link" data-toggle="tab" href="#slot_saturday">Saturday</a>
																		</li>
																	</ul>
																</div>
																<!-- /Schedule Nav -->
															</div>
															<!-- /Schedule Header -->

															<!-- Schedule Content -->
															<div class="tab-content schedule-cont">
																<!-- Sunday Slot -->
																<div id="slot_sunday" class="tab-pane fade empty-slot-sections ">
																	<h4 class="card-title d-flex justify-content-between">
																		<span>Time Slots</span>
																		<a @click="update_active_day(1)" class="edit-link" data-toggle="modal" href="#add_time_slot"><i class="fa fa-plus-circle"></i> Add Sunday</a>
																	</h4>
																	<!-- Slot List -->
																	<div v-for="(slt, index) in sun" :key="index" class="doc-times">

																		<a v-on:click="toggleActiveSchedule(slt.id)" :style="slt.active == 1 ? 'background-color: #458ac7' : 'background-color: #a3b1bd'" class="doc-slot-list">
																			<span>
																			{{slt.timeSlot}}
																			</span>
																		</a>
																		<a v-on:click="deleteSchedule(slt.id)" class="delete_schedule">
																			<i class="fa fa-times"></i>
																		</a>

																	</div>
																	<p v-if="!sun.length" class="text-muted mb-0">Not Available</p>
																	<!-- /Slot List -->
																</div>
																<!-- /Sunday Slot -->

																<!-- Monday Slot -->
																<div id="slot_monday" class="tab-pane fade empty-slot-sections  show active">
																	<h4 class="card-title d-flex justify-content-between">
																		<span>Time Slots</span>
																		<a @click="update_active_day(2)" class="edit-link" data-toggle="modal" href="#add_time_slot"><i class="fa fa-plus-circle"></i> Add Monday</a>

																	</h4>

																	<!-- Slot List -->
																	<div v-for="(slt, index) in mon" :key="index" class="doc-times">

																		<a v-on:click="toggleActiveSchedule(slt.id)" :style="slt.active == 1 ? 'background-color: #458ac7' : 'background-color: #a3b1bd'" class="doc-slot-list">
																			<span>
																			{{slt.timeSlot}}
																			</span>
																		</a>
																		<a v-on:click="deleteSchedule(slt.id)" class="delete_schedule">
																			<i class="fa fa-times"></i>
																		</a>

																	</div>
																	<p v-if="!mon.length" class="text-muted mb-0">Not Available</p>
																	<!-- /Slot List -->
																</div>
																<!-- /Monday Slot -->

																<!-- Tuesday Slot -->
																<div id="slot_tuesday" class="tab-pane fade empty-slot-sections ">
																	<h4 class="card-title d-flex justify-content-between">
																		<span>Time Slots</span>
																		<a @click="update_active_day(3)" class="edit-link" data-toggle="modal" href="#add_time_slot"><i class="fa fa-plus-circle"></i> Add Tuesday</a>
																	</h4>
																	<!-- Slot List -->
																	<div v-for="(slt, index) in tue" :key="index" class="doc-times">

																		<a v-on:click="toggleActiveSchedule(slt.id)" :style="slt.active == 1 ? 'background-color: #458ac7' : 'background-color: #a3b1bd'" class="doc-slot-list">
																			<span>
																			{{slt.timeSlot}}
																			</span>
																		</a>
																		<a v-on:click="deleteSchedule(slt.id)" class="delete_schedule">
																			<i class="fa fa-times"></i>
																		</a>

																	</div>
																	<p v-if="!tue.length" class="text-muted mb-0">Not Available</p>
																	<!-- /Slot List -->
																</div>
																<!-- /Tuesday Slot -->

																<!-- Wednesday Slot -->
																<div id="slot_wednesday" class="tab-pane fade empty-slot-sections ">
																	<h4 class="card-title d-flex justify-content-between">
																		<span>Time Slots</span>
																		<a @click="update_active_day(4)" class="edit-link" data-toggle="modal" href="#add_time_slot"><i class="fa fa-plus-circle"></i> Add Wednesday</a>
																	</h4>
																	<!-- Slot List -->
																	<div v-for="(slt, index) in wed" :key="index" class="doc-times">

																		<a v-on:click="toggleActiveSchedule(slt.id)" :style="slt.active == 1 ? 'background-color: #458ac7' : 'background-color: #a3b1bd'" class="doc-slot-list">
																			<span>
																			{{slt.timeSlot}}
																			</span>
																		</a>
																		<a v-on:click="deleteSchedule(slt.id)" class="delete_schedule">
																			<i class="fa fa-times"></i>
																		</a>

																	</div>
																	<p v-if="!wed.length" class="text-muted mb-0">Not Available</p>
																	<!-- /Slot List -->
																</div>
																<!-- /Wednesday Slot -->

																<!-- Thursday Slot -->
																<div id="slot_thursday" class="tab-pane fade empty-slot-sections ">
																	<h4 class="card-title d-flex justify-content-between">
																		<span>Time Slots</span>
																		<a @click="update_active_day(5)" class="edit-link" data-toggle="modal" href="#add_time_slot"><i class="fa fa-plus-circle"></i> Add Thursday</a>
																	</h4>
																	<!-- Slot List -->
																	<div v-for="(slt, index) in thu" :key="index" class="doc-times">

																		<a v-on:click="toggleActiveSchedule(slt.id)" :style="slt.active == 1 ? 'background-color: #458ac7' : 'background-color: #a3b1bd'" class="doc-slot-list">
																			<span>
																			{{slt.timeSlot}}
																			</span>
																		</a>
																		<a v-on:click="deleteSchedule(slt.id)" class="delete_schedule">
																			<i class="fa fa-times"></i>
																		</a>

																	</div>
																	<p v-if="!thu.length" class="text-muted mb-0">Not Available</p>
																	<!-- /Slot List -->
																</div>
																<!-- /Thursday Slot -->

																<!-- Friday Slot -->
																<div id="slot_friday" class="tab-pane fade empty-slot-sections ">
																	<h4 class="card-title d-flex justify-content-between">
																		<span>Time Slots</span>
																		<a @click="update_active_day(6)" class="edit-link" data-toggle="modal" href="#add_time_slot"><i class="fa fa-plus-circle"></i> Add Friday</a>
																	</h4>
																	<!-- Slot List -->
																	<div v-for="(slt, index) in fri" :key="index" class="doc-times">

																		<a v-on:click="toggleActiveSchedule(slt.id)" :style="slt.active == 1 ? 'background-color: #458ac7' : 'background-color: #a3b1bd'" class="doc-slot-list">
																			<span>
																			{{slt.timeSlot}}
																			</span>
																		</a>
																		<a v-on:click="deleteSchedule(slt.id)" class="delete_schedule">
																			<i class="fa fa-times"></i>
																		</a>

																	</div>
																	<p v-if="!fri.length" class="text-muted mb-0">Not Available</p>
																	<!-- /Slot List -->
																</div>
																<!-- /Friday Slot -->

																<!-- Saturday Slot -->
																<div id="slot_saturday" class="tab-pane fade empty-slot-sections ">
																	<h4 class="card-title d-flex justify-content-between">
																		<span>Time Slots</span>
																		<a @click="update_active_day(7)" class="edit-link" data-toggle="modal" href="#add_time_slot"><i class="fa fa-plus-circle"></i> Add Saturday</a>
																	</h4>
																	<!-- Slot List -->
																	<div v-for="(slt, index) in sat" :key="index" class="doc-times">

																		<a v-on:click="toggleActiveSchedule(slt.id)" :style="slt.active == 1 ? 'background-color: #458ac7' : 'background-color: #a3b1bd'" class="doc-slot-list">
																			<span>
																			{{slt.timeSlot}}
																			</span>
																		</a>
																		<a v-on:click="deleteSchedule(slt.id)" class="delete_schedule">
																			<i class="fa fa-times"></i>
																		</a>

																	</div>
																	<p v-if="!sat.length" class="text-muted mb-0">Not Available</p>
																	<!-- /Slot List -->
																</div>
																<!-- /Saturday Slot -->



															</div>
															<!-- /Schedule Content -->


														</div>
													</div>
												</div>
											</div>
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

		<!-- Add Time Slot Modal -->
		<div ref="add_time_slot" class="modal fade custom-modal" id="add_time_slot">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Add Time Slots</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<form @submit.prevent="updateDoctorSlot">
							<div class="hours-info">
								<div class="row form-row hours-cont">
									<div class="col-12 col-md-10">
										<div class="row form-row">
											<div class="col-12 col-md-6">
												<div class="form-group">
													<label>Start Time</label>
													<select @change="time_change('start', $event)"  class="form-control">
														<option>-</option>
														<option>8.00 AM</option>
														<option>8.30 AM</option>
														<option>9.00 AM</option>
														<option>9.30 AM</option>
														<option>10.00 AM</option>
														<option>10.30 AM</option>
														<option>11.00 AM</option>
														<option>11.30 AM</option>
														<option>12.00 AM</option>
														<option>12.30 AM</option>
														<option>1.00 PM</option>
														<option>1.30 PM</option>
														<option>2.00 PM</option>
														<option>2.30 PM</option>
														<option>3.00 PM</option>
														<option>3.30 PM</option>
														<option>4.00 PM</option>
														<option>4.30 PM</option>
														<option>5.00 PM</option>
														<option>5.30 PM</option>
														<option>6.00 PM</option>
														<option>6.30 PM</option>
														<option>7.00 PM</option>
														<option>7.30 PM</option>
														<option>8.00 PM</option>
														<option>8.30 PM</option>

													</select>
												</div>
											</div>
											<div class="col-12 col-md-6">
												<div class="form-group">
													<label>End Time</label>
													<select @change="time_change('end', $event)" class="form-control">
														<option>-</option>
														<option>8.00 AM</option>
														<option>8.30 AM</option>
														<option>9.00 AM</option>
														<option>9.30 AM</option>
														<option>10.00 AM</option>
														<option>10.30 AM</option>
														<option>11.00 AM</option>
														<option>11.30 AM</option>
														<option>12.00 AM</option>
														<option>12.30 AM</option>
														<option>1.00 PM</option>
														<option>1.30 PM</option>
														<option>2.00 PM</option>
														<option>2.30 PM</option>
														<option>3.00 PM</option>
														<option>3.30 PM</option>
														<option>4.00 PM</option>
														<option>4.30 PM</option>
														<option>5.00 PM</option>
														<option>5.30 PM</option>
														<option>6.00 PM</option>
														<option>6.30 PM</option>
														<option>7.00 PM</option>
														<option>7.30 PM</option>
														<option>8.00 PM</option>
														<option>8.30 PM</option>
													</select>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<!-- <div class="add-more mb-3">
								<a href="javascript:void(0);" class="add-hours"><i class="fa fa-plus-circle"></i> Add More</a>
							</div> -->
							<div class="submit-section text-center">
								<button  class="btn btn-primary submit-btn">Save Changes</button>
							</div>
						</form>

					</div>
				</div>
			</div>
		</div>
		<!-- /Add Time Slot Modal -->
</div>
</template>

<script>
import patients from '../../assets/json/doctor/mypatients.json'
const images = require.context('../../assets/img/patients', false, /\.png$|\.jpg$/)
export default {
	mounted() {
        if($('.select').length > 0) {
            $('.select').select2({
            minimumResultsForSearch: -1,
            width: '100%'
            });
		}
		 $(".add-hours").on('click', function () {

		var hourscontent = '<div class="row form-row hours-cont">' +
			'<div class="col-12 col-md-10">' +
				'<div class="row form-row">' +
					'<div class="col-12 col-md-6">' +
						'<div class="form-group">' +
							'<label>Start Time</label>' +
							'<select class="form-control">' +
								'<option>-</option>' +
								'<option>12.00 AM</option>' +
								'<option>12.30 AM</option>' +
								'<option>1.00 AM</option>' +
								'<option>1.30 AM</option>' +
							'</select>' +
						'</div>' +
					'</div>' +
					'<div class="col-12 col-md-6">' +
						'<div class="form-group">' +
							'<label>End Time</label>' +
							'<select class="form-control">' +
								'<option>-</option>' +
								'<option>12.00 AM</option>' +
								'<option>12.30 AM</option>' +
								'<option>1.00 AM</option>' +
								'<option>1.30 AM</option>' +
							'</select>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</div>' +
			'<div class="col-12 col-md-2"><label class="d-md-block d-sm-none d-none">&nbsp;</label><a href="#" class="btn btn-danger trash"><i class="far fa-trash-alt"></i></a></div>' +
		'</div>';

        $(".hours-info").append(hourscontent);
        return false;
    });
	 $(".hours-info").on('click','.trash', function () {
		$(this).closest('.hours-cont').remove();
		return false;
    });

	this.getoctorSlot()

    },
    data() {
        return {
			isLoading: false,
        	fullPage: true,
			userId: this.$store.state.auth.user.id,
			start_time: '',
			end_time: '',
			active_day: '',
            patients: patients,
			doctor_slots_data: [],
			sun:[],
			mon: [],
			tue: [],
			wed: [],
			thu: [],
			fri: [],
			sat: [],

        }
    },
	computed: {
		},
     methods:{
		doctor_slots() {

			 this.doctor_slots_data.reduce((slots, slot) => {

					switch (slot.dayOfWeek) {
						case 1:
							this.sun.push(slot)
							break;
						case 2:
							this.mon.push(slot)
							break;
						case 3:
							this.tue.push(slot)
							break;
						case 4:
							this.wed.push(slot)
							break;
						case 5:
							this.thu.push(slot)
							break;
						case 6:
							this.fri.push(slot)
							break;
						case 7:
							this.sat.push(slot)
							break;

						default:
							break;
					}

				return slots
			}, [])
			// console.log('slots_res', slots_res)

		},

        loadImg(imgPath) {
            return images('./' + imgPath).default
        },
		deleteSchedule(id) {
			this.isLoading = true;
			this.$store.dispatch('availability/delete_doc_slot', id)
			.then(
				(res) => {
					this.isLoading = false;
					this.success('Delete successfull')

				},
				error => {
					this.message =
						(error.response && error.response.data && error.response.data.message) ||
						error.message ||
						error.toString();
						this.isLoading = false;
					this.error()
				}
			);
		},
		time_change(time, evt) {
			console.log(time, evt.target.value)
			if (time === 'start') {
				this.start_time = evt.target.value
			} else {
				this.end_time = evt.target.value
			}
		},

		update_active_day(day) {
			this.active_day = day
		},


		updateDoctorSlot() {
			let doctor_slot = {
				userId: this.userId,
				timeSlot:`${this.start_time} - ${this.end_time}`,
				dayOfWeek: this.active_day,
				active: 1
			}

			console.log('xsxqsq', doctor_slot)

			if (this.start_time && this.end_time ) {
				this.isLoading = true
				this.$store.dispatch('availability/add_slot', doctor_slot)
				.then(
					(res) => {
						this.sun = []
						this.mon = []
						this.tue = []
						this.wed = []
						this.thu = []
						this.fri = []
						this.sat = []
						this.getoctorSlot()
						this.success('Update was successful')
						this.isLoading = false;
						// this.$refs['add_time_slot'].hide()
						$('#add_time_slot').modal('toggle')
						// $('#add_time_slot').modal('hide');
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
			}
		},

		getoctorSlot() {
			this.$store.dispatch('availability/doc_slots', this.userId)
			.then(
				(res) => {
					this.doctor_slots_data = res
					this.doctor_slots()
				},
				error => {
					this.message =
						(error.response && error.response.data && error.response.data.message) ||
						error.message ||
						error.toString();
					this.error()
				}
			);
		},

		success(message) {
            this.$swal({
                icon: 'success',
                title: 'Success',
                text: message,
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
}
</script>
<style scoped>
 .empty-slot-sections {
	 text-align: center;
 }

 .doc-slot-list a{
    color: #e48484;
    display: inline-block;
    margin-left: 5px;
    background-color: #1bc6ff;
    padding: 7px;
    border-radius: 3px;
	font-weight: 600;
	margin-right: -28px;
	cursor: pointer;
}

 a.doc-slot-list  {
	cursor: pointer;
	margin-left: 18px;
}

a.delete_schedule {
    color: #eee4e4;
    display: inline-block;
    background-color: #1bc6ff;
    padding: 11px 9px 9px 9px;
    border-radius: 4px;
    font-weight: 600;
    margin: 10px 0px 0px -16px;
    cursor: pointer;
    z-index: 1000;
}

.doc-slot-list {
    border: 1px solid #609fd7;
}

.schedule-nav .nav-tabs li a.active {
    background: #458ac7;
    border: 1px solid #458ac7 !important;
    color: #fff;
}

</style>

